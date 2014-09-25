Ext.define('Illi.view.financeiro.pdv.PainelDevolucaoEdicao', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.painelDevolucaoEdicao',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            bodyBorder: false,
            padding: 0,
//            padding: '5 5 5 5',
//            bodyPadding: 10,
            layout: {
                type: 'hbox'
            },
            //
            items: [
                {
                    title: 'Cabecalho',
                    xtype: 'formularioDevolucaoEdicao',
                    id_movimentacao: me.id_movimentacao
                }
            ]
        });
        me.callParent(arguments);
    }
});
