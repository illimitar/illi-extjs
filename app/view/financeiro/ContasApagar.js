Ext.define('Illi.view.financeiro.ContasApagar', {
    extend: 'Illi.view.financeiro.Lista',
    alias: 'widget.financeiroContasApagar',
    itemId: 'listaContaApagar',
    treeNatureza: false,
    stateful: true,
    stateId: 'financeiroContasApagar',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.FinanceiroPagar', {
                autoLoad: false,
                listeners: {
                    load: function(ret) {
                        var totais = ret.getProxy().getReader().jsonData.totais;
                        var texto = me.down('#textoRodapePagar');
                        var total = ['Total da Página. '];
                        Ext.Object.each(totais, function(key, value, myself) {
                            total.push('<span style=" margin-hight:15px"><b> ' + key + '</b> : <i>' + Illi.app.Util.valorRenderer(value) + '</i></span> | ');
                        });
                        texto.setText(total.join(' '));
                        me.el.unmask();
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
                    store: Ext.getStore('financeiroApagar'),
                    dock: 'bottom',
                    displayInfo: true,
                    items: [
                        {
                            xtype: 'tbtext',
                            itemId: 'textoRodapePagar'
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