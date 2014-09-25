Ext.define('Illi.store.Financeiros', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Financeiro',
    baseUrl: '../fluxo/fluxo/iJson/',
    storeId: null
});
