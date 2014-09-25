Ext.define('Illi.view.financeiro.grafico.fluxoCaixa', {
    extend: 'Ext.chart.Chart',
    requires: [
        'Ext.chart.*',
        'Illi.store.GraficoNatureza',
        'Illi.view.financeiro.grafico.Lista'
    ],
    alias: 'widget.graficoFluxoCaixa',
    animate: true,
    title: 'Valor ',
    closeAction: 'destroy',
    store: Ext.create('Illi.store.GraficoNatureza'),
    shadow: true,
    legend: {
        position: 'right'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            theme: 'Base:gradients',
            series: [{
                    type: 'pie',
                    janela: me.janela,
                    //angleField: 'grupo_id',
                    //lengthField: 'valor',
                    field: 'valor',
                    //donut: 40,
                    showInLegend: true,
                    tips: {
                        trackMouse: true,
                        width: 200,
                        height: 28,
                        renderer: function(storeItem, item) {
                            var total = 0;
                            var store = Ext.getStore('GraficoNatureza');
                            store.each(function(rec) {
                                total += parseFloat(rec.get('valor'));
                            });
                            this.setTitle('Total: ' + Illi.app.Util.valorRenderer(storeItem.get('valor')) + ' - ' + Math.round(storeItem.get('valor') / total * 100) + '%');
                        }
                    },
                    highlight: {
                        segment: {
                            margin: 20
                        }
                    },
                    label: {
                        field: 'grupo',
                        display: 'rotate',
                        contrast: true,
                        font: '8.5px Arial'
                    },
                    listeners: {//This Doesnt Work :(
                        itemclick: function(obj) {
                            var store = this.chart.store;
                            var filho = obj.storeItem.get('filho');
                            if (filho.length > 0) {
                                store.loadData(filho);
                            } else {
                                var janela = this.janela;
                                var filtro = {};
                                filtro.mes = janela.down('#mesGrafico').getValue();
                                filtro.ano = janela.down('#anoGrafico').getValue();
                                filtro.id_entidade = janela.down('#entidadeGrafico').getValue();
                                filtro.situacao = janela.down('#situacaoGrafico').getValue();
                                filtro.id_natureza = obj.storeItem.get('id');

                                var store = Ext.create('Illi.store.FinanceiroGrafico');
                                store.getProxy().extraParams = {'filtro': Ext.JSON.encode(filtro)};
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
                                        title: null,
                                        store: store
                                    }
                                });

                                janelaBaixa.show();
                            }
                        }
                    }
                }]

        });
        me.callParent();
    }



});