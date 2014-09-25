Ext.define('Illi.view.financeiro.pdv.PainelPagamento', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelPagamento',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            style: {
                padding: '10px'
            },
            //
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    bodyStyle: 'background: transparent;',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            border: false,
                            bodyStyle: 'background: transparent;',
                            cls: 'destaque verde',
                            html: 'Total: ',
                            flex: 0.4
                        },
                        {
                            xtype: 'painelPagamentoTotal',
                            cls: 'destaque verde',
                            flex: 1
                        }
                    ],
                    flex: 1
                },
                {
                    xtype: 'panel',
                    border: false,
                    bodyStyle: 'background: transparent;',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            border: false,
                            bodyStyle: 'background: transparent;',
                            cls: 'destaque',
                            html: 'Pago: ',
                            flex: 0.4
                        },
                        {
                            xtype: 'painelPagamentoTotalPago',
                            flex: 1
                        }
                    ],
                    flex: 1
                },
                {
                    xtype: 'panel',
                    border: false,
                    bodyStyle: 'background: transparent;',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            border: false,
                            bodyStyle: 'background: transparent;',
                            cls: 'destaque azul',
                            html: 'Troco: ',
                            flex: 0.4
                        },
                        {
                            xtype: 'painelPagamentoTroco',
                            cls: 'destaque azul',
                            flex: 1
                        }
                    ],
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});
