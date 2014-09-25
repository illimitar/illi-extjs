Ext.define('Illi.view.financeiro.pdv.PainelProduto', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelProduto',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            layout: {
                type: 'hbox'
            },
            //
            items: [
                {
                    xtype: 'painelProdutoQtd',
                    cls: 'destaque quadro'
                },
                {
                    xtype: 'painelProdutoTotal',
                    cls: 'destaque quadro',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});
