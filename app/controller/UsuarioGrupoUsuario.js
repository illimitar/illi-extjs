Ext.define('Illi.controller.UsuarioGrupoUsuario', {
    extend: 'Illi.controller.AbstractController',
    stores: ['UsuarioGrupoUsuarios'],
    models: ['UsuarioGrupoUsuario'],
    views: [
        'usuario.usuario_grupo_usuario.Lista'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'usuarioGrupoUsuarioLista'
        },
        {
            ref: 'usuarioGrupoUsuarioLista',
            selector: 'usuarioGrupoUsuarioLista'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'usuarioGrupoUsuarioLista': {
                itemdblclick: me.editar
            },
            'usuarioGrupoUsuarioLista button[action=incluir]': {
                click: me.incluir
            },
            'usuarioGrupoUsuarioLista button[action=excluir]': {
                click: me.excluir
            },
            'usuarioGrupoUsuarioLista button[action=atualizar]': {
                click: me.atualizar
            }
        });
    }
});