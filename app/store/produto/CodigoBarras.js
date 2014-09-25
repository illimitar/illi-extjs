Ext.define('Illi.store.produto.CodigoBarras', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.CodigoBarra',
    baseUrl: '../produto/codigobarra/iJson/',
    storeId: 'CodigoBarras'
});