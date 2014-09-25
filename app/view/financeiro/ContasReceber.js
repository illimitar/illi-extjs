Ext.define('Illi.view.financeiro.ContasReceber', {
    extend: 'Illi.view.financeiro.Lista',
    alias: 'widget.financeiroContasReceber',
    itemId: 'listaContaReceber',
    stateful: true,
    stateId: 'financeiroContasReceber',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.FinanceiroReceber', {
                autoLoad: false,
                listeners: {
                    load: function(ret) {
                        var totais = ret.getProxy().getReader().jsonData.totais;
                        var texto = me.down('#textoRodapeReceber');
                        var total = ['Total da Página. '];
                        Ext.Object.each(totais, function(key, value, myself) {
                            total.push('<span style=" margin-hight:15px"><b>' + key + '</b> : <i>' + Illi.app.Util.valorRenderer(value) + '</i></span> | ');
                        });
                        texto.setText(total.join(' '));
                    },
                    write: function(proxy, operation) {
                        var obj = Ext.decode(operation.response.responseText);
                        if (obj.success) {
                            Ext.ux.Msg.flash({
                                msg: obj.message,
                                type: 'success'
                            });
                        } else {
                            Ext.ux.Msg.flash({
                                msg: obj.message,
                                type: 'error'
                            });
                        }
                    }
                }
            }),
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore('financeiroReceber'),
                    dock: 'bottom',
                    displayInfo: true,
                    items: [
                        {
                            xtype: 'tbtext',
                            itemId: 'textoRodapeReceber'
                        }
                    ]
                }
            ]
        });
        me.filtroInicial = Illi.app.Local.get('filtro-' + me.stateId);
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            try {
                grid.store.filter(grid.filtroInicial);
            } catch (e) {
                error(e);
            }
        }
    }
});