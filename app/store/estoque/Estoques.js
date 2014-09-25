Ext.define('Illi.store.estoque.Estoques', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.estoque.Estoque',
    baseUrl: '../estoque/estoque/iJson/',
    storeId: 'Estoques'
});