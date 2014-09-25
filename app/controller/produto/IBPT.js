Ext.define('Illi.controller.produto.IBPT', {
    extend: 'Illi.controller.AbstractController',
    stores: ['produto.IBPTs'],
    models: ['produto.IBPT'],
    views: ['produto.ibpt.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaIBPT'
        },
        {
            ref: 'listaIBPT',
            selector: 'listaIBPT'
        }
    ],
    init: function() {
        var me = this;
        me.control({
//            'listaIBPT': {
//                itemdblclick: me.editar
//            },
//            'listaIBPT button[action=incluir]': {
//                click: me.incluir
//            },
//            'listaIBPT button[action=duplicar]': {
//                click: me.duplicar
//            },
//            'listaIBPT button[action=excluir]': {
//                click: me.excluir
//            },
//            'listaIBPT button[action=atualizar]': {
//                click: me.atualizar
//            }
        });
    }
});