Ext.define('Illi.view.financeiro.pdv.PainelPagamentoSubTotal', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelPagamentoSubTotal',
    initComponent: function () {
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
                            cls: 'destaque-medio',
                            html: 'Total Pago: '
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
                            cls: 'destaque-medio vermelho',
                            html: 'Total à Pagar: '
                        },
                        {
                            xtype: 'painelPagamentoTotalSaldo',
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
                            cls: 'destaque-medio verde',
                            html: 'Troco: '
                        },
                        {
                            xtype: 'painelPagamentoTroco',
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
                    defaults: {
                        flex: 1
                    },
                    items: [
                        Illi.app.Util.BotaoTeclado("Cancelar (ESC)", "ESC"),
                        Illi.app.Util.BotaoTeclado("Finalizar (F10)", "F10")
                    ],
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});
