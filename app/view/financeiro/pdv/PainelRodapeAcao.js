Ext.define('Illi.view.financeiro.pdv.PainelRodapeAcao', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelRodapeAcao',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            scope: me,
            border: false,
            bodyStyle: ' background: rgba(255, 255, 255, 0.65);',
            layout: {
                type: 'hbox'
            },
            defaults: {
                scale: 'large',
                border: false,
                bodyBorder: false,
                margin: '0 5 5 5'
            },
            items: [
//                {
//                    xtype: 'button',
//                    text: "Produto (F1)",
//                    handler: function (btn) {
//                        Illi.app.Util.fireKey(Ext.EventObject.F1);
//                    }
//                },
                {
                    xtype: 'button',
                    text: "Dinheiro (F2)",
                    handler: function (btn) {
                        Illi.app.Util.fireKey(Ext.EventObject.F2);
                    }

                },
                {
                    xtype: 'button',
                    text: "Cartão (F4)",
                    handler: function (btn) {
                        Illi.app.Util.fireKey(Ext.EventObject.F2);
                    }

                },
                {
                    xtype: 'button',
                    text: "Troca (F8)",
                    handler: function (btn) {
                        Illi.app.Util.fireKey(Ext.EventObject.F4);
                    }

                },
                {
                    xtype: 'button',
                    text: "FINALIZAR (F10)",
                    handler: function (btn) {
                        Illi.app.Util.fireKey(Ext.EventObject.F4);
                    }

                }
            ]
        });
        me.callParent(arguments);
    }
});
