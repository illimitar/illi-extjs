Ext.define('Illi.view.usuario.usuario_grupo_usuario.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.usuarioGrupoUsuarioJanela',
    layout: 'fit',
    id_usuario: null,
    requires: [
        'Illi.view.usuario.usuario_grupo_usuario.Lista'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "45%",
            height: "48%",
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
                    xtype: 'usuarioGrupoUsuarioLista',
                    id_usuario: me.id_usuario,
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});