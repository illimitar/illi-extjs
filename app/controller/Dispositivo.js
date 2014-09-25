Ext.define('Illi.controller.Dispositivo', {
    extend: 'Illi.controller.AbstractController',
    stores: ['Dispositivos'],
    models: ['Dispositivo'],
    views: [
        'dispositivo.Janela',
        'dispositivo.Lista'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaDispositivo'
        },
        {
            ref: 'listaDispositivo',
            selector: 'listaDispositivo'
        },
        {
            ref: 'janelaUsuario',
            selector: 'janelaUsuario'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaDispositivo': {
                itemdblclick: me.editar
            },
            'listaDispositivo button[action=atualizar]': {
                click: me.atualizar
            }
        });
    }
});