Ext.define('Illi.store.produto.Precos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.Preco',
    baseUrl: '../produto/preco/iJson/',
    storeId: 'Precos'
});