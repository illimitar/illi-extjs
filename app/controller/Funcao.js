Ext.define('Illi.controller.Funcao', {
    extend: 'Illi.controller.AbstractController',
    stores: ['Funcoes'],
    models: ['Funcao'],
    views: ['usuario.funcao.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaFuncao'
        },
        {
            ref: 'listaFuncao',
            selector: 'listaFuncao'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaFuncao': {
                itemdblclick: me.editar
            },
            'listaFuncao button[action=incluir]': {
                click: me.incluir
            },
            'listaFuncao button[action=excluir]': {
                click: me.excluir
            },
            'listaFuncao button[action=atualizar]': {
                click: me.atualizar
            }
        });
    }
});