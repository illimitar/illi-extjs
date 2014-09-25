Ext.define('Illi.controller.configuracao.Situacao', {
    extend: 'Illi.controller.AbstractController',
    stores: ['configuracao.Situacaos'],
    models: ['configuracao.Situacao'],
    views: [
        'configuracao.situacao.Lista'
    ],
    refs: [
        {ref: 'gridIlli', selector: 'listaConfiguracaoSituacao'},
        {ref: 'listaConfiguracaoSituacao', selector: 'listaConfiguracaoSituacao'},
        {ref: 'janelaConfiguracaoSituacao', selector: 'janelaConfiguracaoSituacao'}
    ],
    init: function() {
        var me = this;
        me.control({
            'listaConfiguracaoSituacao': {
                itemdblclick: me.editar
            },
            'listaConfiguracaoSituacao button[action=incluir]': {
                click: me.incluir
            },
            'listaConfiguracaoSituacao button[action=excluir]': {
                click: me.excluir
            },
            'listaConfiguracaoSituacao button[action=atualizar]': {
                click: me.atualizar
            }
        });
    }

});