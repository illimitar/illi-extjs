Ext.define('Illi.controller.MovimentacaoDetalhe', {
    extend: 'Illi.controller.AbstractController',
    stores: [
        'MovimentacaoDetalhes'
    ],
    models: [
        'MovimentacaoDetalhe'
    ],
    views: [
        'Illi.view.bi.ListaItens'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaItens'
        },
        {
            ref: 'listaItens',
            selector: 'listaItens'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaItens button[action=excel]': {
                click: me.excel
            }
//            'usuarioGrupoUsuarioLista': {
//                itemdblclick: me.editar
//            },
//            'usuarioGrupoUsuarioLista button[action=incluir]': {
//                click: me.incluir
//            },
//            'usuarioGrupoUsuarioLista button[action=excluir]': {
//                click: me.excluir
//            },
//            'usuarioGrupoUsuarioLista button[action=atualizar]': {
//                click: me.atualizar
//            }
        });
    }
});