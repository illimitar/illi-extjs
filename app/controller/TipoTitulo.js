Ext.define('Illi.controller.TipoTitulo', {
    extend: 'Illi.controller.AbstractController',
    stores: ['TipoTitulos'],
    models: ['TipoTitulo'],
    views: ['financeiro.tipo_titulo.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaTipoTitulo'
        },
        {
            ref: 'listaTipoTitulo',
            selector: 'listaTipoTitulo'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaTipoTitulo': {
                itemdblclick: me.editar
            },
            'listaTipoTitulo button[action=incluir]': {
                click: me.incluir
            },
            'listaTipoTitulo button[action=excluir]': {
                click: me.excluir
            },
            'listaTipoTitulo button[action=atualizar]': {
                click: me.atualizar
            }
        });
    }
});