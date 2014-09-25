Ext.define('Illi.view.financeiro.grafico.receitaXdespesa', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.graficoReceitaXdespesa',
    animate: true,
    shadow: true,
    store: Ext.create('Illi.store.GraficoReceitaDespesa'),
    height: 100,
    theme: 'Category1',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            axes: [
                {
                    type: 'Numeric',
                    position: 'left',
                    //fields: ['mes', 'DESPESA', 'RECEITA'],
                    label: {
                        renderer: Illi.app.Util.valorRenderer
                    },
                    title: 'Valor',
                    grid: true,
                    minimum: 0
                },
                {
                    type: 'Category',
                    position: 'bottom',
                    fields: ['mes'],
                    title: 'Mês'
                }
            ],
            series: [
                {
                    xField: 'mes',
                    yField: 'RECEITA',
                    type: 'line',
                    axis: 'left',
                    fill: true,
                    smooth: true,
                    highlight: {
                        size: 7,
                        radius: 7
                    },
                    style: {
                        'stroke-width': 0,
                        stroke: '#2044BA',
                        fill: '#2044BA'
                    },
                    markerConfig: {
                        type: 'circle',
                        'fill': '#2044BA',
                        size: 4,
                        radius: 4,
                        'stroke-width': 0
                    },
                    tips: {
                        width: 200,
                        height: 48,
                        trackMouse: true,
                        cls: 'illi_tooltip_receita',
                        renderer: function(storeItem, item) {
                            var texto = storeItem.get('mes') + ': ' + Illi.app.Util.valorRenderer(storeItem.get('RECEITA'));
                            texto += "<br />Saldo: " + Illi.app.Util.valorRenderer(storeItem.get('RECEITA') - storeItem.get('DESPESA'));
                            this.setTitle(texto);
                        }
                    }
                },
                {
                    xField: 'mes',
                    yField: 'DESPESA',
                    type: 'line',
                    axis: 'left',
                    fill: true,
                    smooth: true,
                    highlight: {
                        size: 7,
                        radius: 7
                    },
                    style: {
                        'stroke-width': 0,
                        stroke: '#f00',
                        fill: '#f00'
                    },
                    markerConfig: {
                        type: 'cross',
                        'fill': '#f00',
                        size: 4,
                        radius: 4,
                        'stroke-width': 0
                    },
                    tips: {
                        width: 200,
                        height: 48,
                        trackMouse: true,
                        cls: 'illi_tooltip_despesa',
                        renderer: function(storeItem, item) {
                            var texto = storeItem.get('mes') + ': ' + Illi.app.Util.valorRenderer(storeItem.get('DESPESA'));
                            texto += "<br />Saldo: " + Illi.app.Util.valorRenderer(storeItem.get('RECEITA') - storeItem.get('DESPESA'));
                            this.setTitle(texto);
                        }
                    }
                }
            ]

        });
        me.callParent();
    }


});