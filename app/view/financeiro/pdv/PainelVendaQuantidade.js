Ext.define('Illi.view.financeiro.pdv.PainelVendaQuantidade', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelVendaQuantidade',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            itemId: 'pdvVendaQuantidade',
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
                            text: "<b>Total Qtd.</b>"
                        }
                    ]
                }],
            bodyStyle: 'background: transparent;',
            bodyCls: 'total_topo',
            html: '0' // 0
        });
        me.callParent(arguments);
    }
});
