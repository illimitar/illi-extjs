Ext.define('Illi.view.financeiro.pdv.PainelProdutoNome', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelProdutoNome',
    itemId: 'pdvProdutoNome', // manter
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque',
            html: 'Caixa Livre' 
        });
        me.callParent(arguments);
    }
});
