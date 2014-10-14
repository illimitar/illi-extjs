Ext.define('Illi.view.usuario.configuracao.ImagemQRCode', {
    extend: 'Ext.Img',
    alias: 'widget.imagemQrCode',
    itemId: 'configImagemQrCode',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            //
            src: (me.url ? me.url : Illi.app.Util.getPath("/resources/images/pdv/indisponivel.jpg")),
            tooltip: 'ILLI Software'
        });
        me.callParent(arguments);
    }
});
