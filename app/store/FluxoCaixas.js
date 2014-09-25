Ext.define('Illi.store.FluxoCaixas', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Financeiro',
    baseUrl: '../fluxo/fluxo/iJson/',
    illiRead: 'lista_fluxo',
    illiCreate: 'alterarFluxo',
    illiUpdate: 'alterarFluxo',
    illiDestroy: 'excluir_fluxo',
    storeId: 'FluxoCaixas',
    remoteSort: true,
    remoteGroup: true,
    autoLoad: false,
    pageSize: 150


});
