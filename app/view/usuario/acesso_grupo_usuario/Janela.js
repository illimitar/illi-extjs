Ext.define('Illi.view.usuario.acesso_grupo_usuario.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.acessoGrupoUsuarioJanela',
    layout: 'fit',
    id_grupo_usuario: null,
    requires: [
        'Illi.view.usuario.acesso_grupo_usuario.Arvore'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "25%",
            height: "75%",
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
                    xtype: 'acessoGrupoUsuarioArvore',
                    id_grupo_usuario: me.id_grupo_usuario,
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});