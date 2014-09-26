Ext.define('Illi.view.financeiro.pdv.ImagemLogotipo', {
    extend: 'Ext.Img',
    alias: 'widget.imagemLogotipo',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            //
            src: Illi.app.Util.getPath("/resources/images/pdv/logotipo.png"),
            tooltip: 'ILLI Software'
        });
        me.callParent(arguments);
    }
});
