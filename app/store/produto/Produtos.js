Ext.define('Illi.store.produto.Produtos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.Produto',
    baseUrl: '../produto/produto/iJson/',
    storeId: 'Produtos',
    pageSize: 50
});