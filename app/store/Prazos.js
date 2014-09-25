Ext.define('Illi.store.Prazos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Prazo',
    baseUrl: '../fluxo/prazo/iJson/',
    storeId: 'Prazos'
});
