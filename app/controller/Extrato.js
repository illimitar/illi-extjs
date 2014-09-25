Ext.define('Illi.controller.Extrato', {
    extend: 'Illi.controller.AbstractController',
    stores: ['Extratos'],
    models: ['Extrato'],
    views: [
        'banco.conta.ListaExtrato'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaExtrato'
        },
        {
            ref: 'listaExtrato',
            selector: 'listaExtrato'
        }
    ],
    init: function() {
        var me = this;
        me.control(
                {
                    'listaExtrato button[action=atualizar]': {
                        click: me.atualizar
                    },
                    'listaExtrato button[action=imprimir]': {
                        click: me.imprimir
                    },
                    'listaExtrato button[action=excel]': {
                        click: me.excel
                    }


                }
        );
    }
});