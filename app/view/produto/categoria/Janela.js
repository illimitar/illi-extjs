Ext.define('Illi.view.produto.categoria.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaCategoria',
    layout: 'fit',
    requires: [
        'Illi.view.produto.categoria.Lista'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "75%",
            height: "48%",
            title: 'Cadastro de Categoria',
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
                    xtype: 'listaCategoria',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});