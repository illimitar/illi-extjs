Ext.define('Illi.view.produto.tipo_codigobarra.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaTipoCodigoBarra',
    layout: 'fit',
    requires: [
        'Illi.view.produto.tipo_codigobarra.Lista'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "75%",
            height: "48%",
            title: 'Cadastro de TipoCodigoBarra',
            scope: me,
            xtype: 'form',
            bodyPadding: 0,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start',
                frame: true,
                plain: true,
                border: false
            },
            items: [
                {
                    xtype: 'listaTipoCodigoBarra',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});