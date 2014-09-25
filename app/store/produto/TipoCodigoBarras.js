Ext.define('Illi.store.produto.TipoCodigoBarras', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.TipoCodigoBarra',
    baseUrl: '../produto/tipo_codigobarra/iJson/',
    storeId: 'TipoCodigoBarras'
});