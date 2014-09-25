Ext.define('Illi.view.financeiro.pdv.PainelVenda', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelVenda',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            border: false,
            bodyBorder: false,
            bodyStyle: 'background: transparent;',
            layout: {
                type: 'hbox'
            },
            defaults: {
                bodyCls: 'quadro destaque'
            },
            items: [
                {
                    xtype: 'painelVendaQuantidade',
                    flex: 0.3
                },
                {
                    xtype: 'painelVendaTotal',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});
