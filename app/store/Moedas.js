Ext.define('Illi.store.Moedas', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Moeda',
    baseUrl: '../fluxo/moeda/iJson/',
    storeId: 'Moedas'
});