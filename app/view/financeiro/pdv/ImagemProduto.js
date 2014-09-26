Ext.define('Illi.view.financeiro.pdv.ImagemProduto', {
    extend: 'Ext.Img',
    alias: 'widget.imagemProduto',
    itemId: 'pdvImagemProduto',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            //
            src: Illi.app.Util.getPath("/resources/images/pdv/indisponivel.jpg"),
            tooltip: 'ILLI Software'
        });
        me.callParent(arguments);
    }
});
