Ext.define('Illi.controller.GrupoEntidade', {
    extend: 'Illi.controller.AbstractController',
    stores: ['GrupoEntidades'],
    models: ['GrupoEntidade'],
    views: ['usuario.grupo_entidade.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaGrupoEntidade'
        },
        {
            ref: 'listaGrupoEntidade',
            selector: 'listaGrupoEntidade'
        },
        {
            ref: 'acessoGrupoEntidadeJanela',
            selector: 'acessoGrupoEntidadeJanela'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaGrupoEntidade': {
                itemdblclick: me.editar
            },
            'listaGrupoEntidade button[action=incluir]': {
                click: me.incluir
            },
            'listaGrupoEntidade button[action=excluir]': {
                click: me.excluir
            },
            'listaGrupoEntidade button[action=atualizar]': {
                click: me.atualizar
            },
            'listaGrupoEntidade button[action=associar]': {
                click: me.associar
            }
        });
    },
    associar: function(btn, evt, opt) {
        var grid = btn.up('grid');
        var records = grid.getSelectionModel().getSelection();
//        Illi.app.getController('AcessoGrupoEntidade');
        Ext.create('Illi.view.usuario.acesso_grupo_entidade.Janela', {
            id_grupo_entidade: records[0].data.id,
            title: 'Associação Acesso / Função com Grupo Usuário: ' + records[0].data.nome
        }).show();
    }
});