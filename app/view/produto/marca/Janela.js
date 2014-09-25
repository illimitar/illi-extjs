Ext.define('Illi.view.produto.marca.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaMarca',
    layout: 'fit',
    requires: [
        'Illi.view.produto.marca.Lista'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "75%",
            height: "48%",
            title: 'Cadastro de Marca',
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
                    xtype: 'listaMarca',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});
