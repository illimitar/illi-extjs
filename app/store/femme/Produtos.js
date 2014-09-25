Ext.define('Illi.store.femme.Produtos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.femme.Produto',
    baseUrl: '../femme/produto/iJson/',
    storeId: 'Produtos',
    pageSize: 9999
});
