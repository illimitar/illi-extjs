Ext.define('Illi.view.estoque.local.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaLocalEstoque',
    layout: 'fit',
    requires: [
        'Illi.view.estoque.local.Lista'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "75%",
            height: "48%",
            title: 'Cadastro de Local',
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
                    xtype: 'listaLocalEstoque',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});