Ext.define('Illi.view.financeiro.pdv.PainelCentral', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelCentral',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            padding: '5 5 5 5',
            layout: {
                type: 'vbox', // Arrange child items vertically
                align: 'stretch'
            },
            //
            items: [
                {
                    xtype: 'painelVenda'
                },
                {
                    xtype: 'listaItensVenda',
                    flex: 2
                },
                {
                    xtype: 'listaItensCancelados',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});
