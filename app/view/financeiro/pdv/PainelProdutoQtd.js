Ext.define('Illi.view.financeiro.pdv.PainelProdutoQtd', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelProdutoQtd',
    itemId: 'pdvProdutoQtd', // manter
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque',
            html: '0,00 x'
        });
        me.callParent(arguments);
    }
});
