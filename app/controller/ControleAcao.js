Ext.define('Illi.controller.ControleAcao', {
    extend: 'Illi.controller.AbstractController',
    stores: ['ControleAcoes'],
    models: ['ControleAcao'],
    views: [
        'controleacao.Lista'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaControleAcao'
        },
        {
            ref: 'listaControleAcao',
            selector: 'listaControleAcao'
        }
    ],
    init: function() {
        var me = this;
        me.control(
                {
                    'listaControleAcao button[action=atualizar]': {
                        click: me.atualizar
                    },
                    'listaControleAcao button[action=imprimir]': {
                        click: me.imprimir
                    }

                }
        );
    }
});