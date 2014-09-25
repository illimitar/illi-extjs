Ext.define('Illi.store.produto.Marcas', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.Marca',
    baseUrl: '../produto/marca/iJson/',
    storeId: 'Marcas'
});