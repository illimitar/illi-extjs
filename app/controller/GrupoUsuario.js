Ext.define('Illi.controller.GrupoUsuario', {
    extend: 'Illi.controller.AbstractController',
    stores: ['GrupoUsuarios'],
    models: ['GrupoUsuario'],
    views: ['usuario.grupo_usuario.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaGrupoUsuario'
        },
        {
            ref: 'listaGrupoUsuario',
            selector: 'listaGrupoUsuario'
        },
        {
            ref: 'acessoGrupoUsuarioJanela',
            selector: 'acessoGrupoUsuarioJanela'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaGrupoUsuario': {
                itemdblclick: me.editar
            },
            'listaGrupoUsuario button[action=incluir]': {
                click: me.incluir
            },
            'listaGrupoUsuario button[action=excluir]': {
                click: me.excluir
            },
            'listaGrupoUsuario button[action=atualizar]': {
                click: me.atualizar
            },
            'listaGrupoUsuario button[action=associar]': {
                click: me.associar
            }
        });
    },
    associar: function(btn, evt, opt) {
        var grid = btn.up('grid');
        var records = grid.getSelectionModel().getSelection();
//        Illi.app.getController('AcessoGrupoUsuario');
        Ext.create('Illi.view.usuario.acesso_grupo_usuario.Janela', {
            id_grupo_usuario: records[0].data.id,
            title: 'Associação Acesso / Função com Grupo Usuário: ' + records[0].data.nome
        }).show();
    }
});