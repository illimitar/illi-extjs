Ext.define('Illi.store.produto.Cfops', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.IBPT',
    baseUrl: '../produto/cfop/iJson/',
    storeId: 'cfops'
});