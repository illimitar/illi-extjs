Ext.define('Illi.view.financeiro.pdv.PainelProdutoTotal', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelProdutoTotal',
    itemId: 'pdvProdutoTotal', // manter
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque right',
            html: ' R$ 0,00'
        });
        me.callParent(arguments);
    }
});
