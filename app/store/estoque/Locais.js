Ext.define('Illi.store.estoque.Locais', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.estoque.Local',
    baseUrl: '../estoque/local/iJson/',
    storeId: 'Locais'
});