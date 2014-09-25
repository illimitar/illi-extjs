Ext.define('Illi.store.Caixas', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Caixa',
    baseUrl: '../pdv/caixa/iJson/',
    storeId: 'Caixas'
});