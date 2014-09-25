Ext.define('Illi.controller.Acesso', {
    extend: 'Illi.controller.AbstractController',
    stores: ['Acessos'],
    models: ['Acesso'],
    views: [
        'usuario.acesso.Container',
        'Illi.view.usuario.acesso.JanelaGerenciadorArquivos'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaAcesso'
        },
        {
            ref: 'listaAcesso',
            selector: 'listaAcesso'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaAcesso': {
                itemdblclick: me.editar
            },
            'listaAcesso button[action=incluir]': {
                click: me.incluir
            },
            'listaAcesso button[action=excluir]': {
                click: me.excluir
            },
            'listaAcesso button[action=atualizar]': {
                click: me.atualizar
            }
        });
    }
});