Ext.define('Illi.view.financeiro.pdv.PainelRodape', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelRodape',
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
                cls: 'rodape',
                border: false,
                bodyBorder: false
            },
            items: [
//                {
//                    xtype: 'panel',
//                    itemId: 'pdvRodapeRelogio', // manter
//                    html: '00:00:00'
//                },
                {
                    xtype: 'panel',
                    itemId: 'pdvRodapeCaixa', // manter
                    html: 'Caixa: Indefinido'
                },
                {
                    xtype: 'panel',
                    itemId: 'pdvRodapeOperador', // manter
                    html: 'Operador: Indefinido'
                },
                {
                    xtype: 'panel',
                    itemId: 'pdvRodapeVendedor', // manter
                    html: 'Vendedor: Indefinido'
                },
                {
                    xtype: 'panel',
                    itemId: 'pdvRodapeTabelaPreco', // manter
                    html: ''
                },
                {
                    xtype: 'panel',
                    itemId: 'pdvRodapeDocumento', // manter
                    html: ''
                },
                {
                    xtype: 'panel',
                    cls: false,
                    html: '',
                    flex: 1
                }
            ],
            bbar: {
                border: false,
                bodyBorder: false,
                bodyStyle: ' background: rgba(255, 255, 255, 0.65);',
                defaults: {
                    scale: 'large',
                    border: false,
                    bodyBorder: false,
                    margin: '0 5 5 5'
                },
                items: [
                    Illi.app.Util.BotaoTeclado("Dinheiro (F2)", "F2"),
                    Illi.app.Util.BotaoTeclado("Cartão (F4)", "F4"),
                    Illi.app.Util.BotaoTeclado("Vale (F7)", "F7"),
                    Illi.app.Util.BotaoTeclado("Troca (F8)", "F8"),
                    "->",
                    Illi.app.Util.BotaoTeclado("MENU", "ESC")
                ]
            }
        });
        me.callParent(arguments);
    }
});
