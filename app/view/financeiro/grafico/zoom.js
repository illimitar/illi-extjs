Ext.define('Illi.view.financeiro.grafico.zoom', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.graficoZoom',
    id: "graficoReceitaDespesa",
    height: 350,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
        });
        me.callParent();
    },
    listeners: {
        afterlayout: function(me) {
            var filtro = {};
            Highcharts.setOptions({
                lang: {
                    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                    shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                    weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
                    loading: ['Atualizando o gráfico...aguarde'],
                    week: "semana de %A, %b %e, %Y",
                    contextButtonTitle: 'Exportar gráfico',
                    decimalPoint: ',',
                    thousandsSep: '.',
                    downloadJPEG: 'Baixar imagem JPEG',
                    downloadPDF: 'Baixar arquivo PDF',
                    downloadPNG: 'Baixar imagem PNG',
                    downloadSVG: 'Baixar vetor SVG',
                    printChart: 'Imprimir gráfico',
                    rangeSelectorFrom: 'De',
                    rangeSelectorTo: 'Para',
                    rangeSelectorZoom: 'Zoom',
                    resetZoom: 'Limpar Zoom',
                    resetZoomTitle: 'Voltar Zoom para nível 1:1'
                }

            });
            var seriesOptions = [],
                    yAxisOptions = [],
                    seriesCounter = 0,
                    names = ['DESPESA', 'RECEITA'],
                    colors = Highcharts.getOptions().colors;
            Illi.app.Hgrafico = {};
            var config = {
                credits: {
                    enabled: false
                },
                chart: {
                    renderTo: 'graficoReceitaDespesa',
                    zoomType: 'x',
                    type: 'spline',
                    spacingRight: 150,
                    events: {
                        selection: function(event) {
                            try {
                                if (event.xAxis) {
                                    var xAxis = event.xAxis[0];
                                    filtro.data_inicio = Highcharts.dateFormat('%Y-%m-%d', event.xAxis[0].min);
                                    filtro.data_fim = Highcharts.dateFormat('%Y-%m-%d', event.xAxis[0].max);
                                    filtro.titulo = Highcharts.dateFormat('%d/%m/%Y', event.xAxis[0].min) + " até " + Highcharts.dateFormat('%d/%m/%Y', event.xAxis[0].max);
                                    Illi.app.Hgrafico.options.recarregar(false);
                                    return false;
                                }
                            } catch (e) {
                                error(e);
                            }
                        }
                    }
                },
                xAxis: {
                    type: 'datetime',
                    maxZoom: 14 * 24 * 3600000// fourteen days
                },
                title: {
                    text: "Selecione no gráfico um intervalo para ampliar"
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: false

                    },
                    labels: {
                        formatter: function() {
                            return Illi.app.Util.valorRenderer(this.value);
                        }
                    }
                },
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
                    valueDecimals: 2
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function(event) {
                                    var store = Ext.create('Illi.store.FinanceiroGrafico');
                                    var id_fluxo = this.options.id_fluxo;
                                    store.getProxy().extraParams = {'id_fluxo': id_fluxo};
                                    store.load();
                                    var janelaBaixa = Ext.create('Ext.window.Window', {
                                        title: 'Titulos',
                                        width: '97%',
                                        height: '95%',
                                        border: false,
                                        scope: this,
                                        modal: true,
                                        layout: 'fit',
                                        closeAction: 'destroy',
                                        items: {
                                            xtype: 'listaGrafico',
                                            id_fluxo: id_fluxo,
                                            title: null,
                                            store: store
                                        }
                                    });
                                    janelaBaixa.show();
                                    return false;
                                }
                            }
                        },
                        marker: {
                            lineWidth: 1
                        }
                    }
                },
                recarregar: function(limpar) {
                    Illi.app.Hgrafico.showLoading();
                    filtro = Ext.Object.merge((!limpar ? filtro : {}), Illi.app.Local.get('filtroGrafico'));
                    Ext.Ajax.request({
                        url: '../fluxo/grafico/grafico_zoom',
                        params: filtro,
                        async: false,
                        success: function(response) {
                            var retorno = Ext.JSON.decode(response.responseText);
                            if (retorno) {
                                //alert('set data', retorno[0].data, retorno[1].data);
                                Illi.app.Hgrafico.setTitle({text: filtro.titulo});
                                Illi.app.Hgrafico.series[0].setData(retorno[0].data);
                                Illi.app.Hgrafico.series[1].setData(retorno[1].data);
                                var zoomButton = Illi.app.Hgrafico.renderer.button('Limpar Zoom', null, null, function() {
                                    carregar();
                                }, {
                                    zIndex: 20
                                }).attr({
                                    id: 'resetZoom',
                                    align: 'right',
                                    title: 'Reset zoom level 1:1'
                                }).add().align({
                                    align: 'right',
                                    x: -15,
                                    y: 15
                                }, false, null);

                            } else {
                                return  false;
                            }
                            Illi.app.Hgrafico.hideLoading();
                        },
                        failure: function(response) {
                            Illi.app.Util.mensagemFalha();
                        }
                    });
                }
            };

            var carregar = function() {
                try {
                    Ext.Ajax.request({
                        url: '../fluxo/grafico/grafico_zoom',
                        params: Illi.app.Local.get('filtroGrafico'),
                        async: false,
                        success: function(response) {
                            var retorno = Ext.JSON.decode(response.responseText);
                            if (retorno) {
                                retorno[0].pointInterval = 24 * 3600 * 1000 * 31;
                                retorno[1].pointInterval = 24 * 3600 * 1000 * 31;
                                config.series = retorno;
                                Illi.app.Hgrafico = new Highcharts.Chart(config);
                            } else {
                                return  false;
                            }
                        },
                        failure: function(response) {
                            Illi.app.Util.mensagemFalha();
                        }
                    });
                } catch (e) {
                    error(e);
                    Ext.MessageBox.alert('Atenção', 'Comunicação com o servidor falhou, tente novamente!');
                }
            };

            carregar();
            return false;
        }
    }



});