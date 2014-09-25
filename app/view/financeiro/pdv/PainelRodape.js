Ext.define('Illi.view.financeiro.pdv.PainelRodape', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelRodape',
    initComponent: function() {
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
            ]
        });
        me.callParent(arguments);
    }
});
