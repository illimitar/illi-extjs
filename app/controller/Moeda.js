Ext.define('Illi.controller.Moeda', {
    extend: 'Illi.controller.AbstractController',
    stores: ['Moedas'],
    models: ['Moeda'],
    views: ['financeiro.moeda.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaMoeda'
        },
        {
            ref: 'listaMoeda',
            selector: 'listaMoeda'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaMoeda': {
                itemdblclick: me.editar
            },
            'listaMoeda button[action=incluir]': {
                click: me.incluir
            },
            'listaMoeda button[action=excluir]': {
                click: me.excluir
            },
            'listaMoeda button[action=atualizar]': {
                click: me.atualizar
            }
        });
    }
});