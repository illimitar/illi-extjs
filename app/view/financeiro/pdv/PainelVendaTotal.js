Ext.define('Illi.view.financeiro.pdv.PainelVendaTotal', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelVendaTotal',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            itemId: 'pdvVendaTotal',
            border: false,
            bodyBorder: false,
            dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'top',
                    border: false,
                    bodyBorder: false,
                    cls: 'total_topo_titulo',
                    style: {
                        background: 'rgba(255, 255, 255, 0.50)'
                    },
                    items: [
                        "->",
                        {
                            xtype: 'tbtext',
                            text: "<b>Subtotal</b>"
                        }
                    ]
                }]
            ,
            bodyStyle: 'background: transparent;',
            bodyCls: 'total_topo',
            html: 'R$ 0,00' // 
        });
        me.callParent(arguments);
    }
});
