Ext.define('Illi.controller.Banco', {
    extend: 'Illi.controller.AbstractController',
    stores: ['Bancos'],
    models: ['Banco'],
    views: [
        'banco.Lista'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaBanco'
        },
        {
            ref: 'listaBanco',
            selector: 'listaBanco'
        }
    ],
    init: function() {
        var me = this;
        me.control(
                {
                    'listaBanco': {
                        itemdblclick: me.editar
                    },
                    'listaBanco button[action=incluir]': {
                        click: me.incluir
                    },
                    'listaBanco button[action=excluir]': {
                        click: me.excluir
                    },
                    'listaBanco button[action=atualizar]': {
                        click: me.atualizar
                    },
                    'listaBanco button[action=imprimir]': {
                        click: me.imprimir
                    }

                }
        );
    }




});