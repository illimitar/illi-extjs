Ext.define('Illi.store.produto.Unidades', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.Unidade',
    baseUrl: '../produto/unidade/iJson/',
    storeId: 'Unidades'
});