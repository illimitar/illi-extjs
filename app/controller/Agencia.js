Ext.define('Illi.controller.Agencia', {
    extend: 'Illi.controller.AbstractController',
    stores: ['Agencias'],
    models: ['Agencia'],
    views: [
        'banco.agencia.Lista'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaAgencia'
        },
        {
            ref: 'listaAgencia',
            selector: 'listaAgencia'
        }
    ],
    init: function() {
        var me = this;
        me.control(
                {
                    'listaAgencia': {
                        itemdblclick: me.editar
                    },
                    'listaAgencia button[action=incluir]': {
                        click: me.incluir
                    },
                    'listaAgencia button[action=excluir]': {
                        click: me.excluir
                    },
                    'listaAgencia button[action=atualizar]': {
                        click: me.atualizar
                    },
                    'listaAgencia button[action=imprimir]': {
                        click: me.imprimir
                    }

                }
        );
    }




});