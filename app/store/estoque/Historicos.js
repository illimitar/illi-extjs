Ext.define('Illi.store.estoque.Historicos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.estoque.Historico',
    baseUrl: '../estoque/historico/iJson/',
    storeId: 'Historicos'
});