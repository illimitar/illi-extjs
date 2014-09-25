Ext.define('Illi.store.Extratos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Extrato',
    baseUrl: '../banco/extrato/iJson/',
    storeId: 'Extratos',
    pageSize: 9999
});
