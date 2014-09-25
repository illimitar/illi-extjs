Ext.define('Illi.store.produto.Categorias', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.Categoria',
    baseUrl: '../produto/categoria/iJson/',
    storeId: 'Categorias'
});