Ext.define('Illi.view.produto.grupo.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaGrupo',
    layout: 'fit',
    requires: [
        'Illi.view.produto.grupo.Lista'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "75%",
            height: "48%",
            title: 'Cadastro de Grupo',
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
                    xtype: 'listaGrupo',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});