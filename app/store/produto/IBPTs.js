Ext.define('Illi.store.produto.IBPTs', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.IBPT',
    baseUrl: '../produto/ibpt/iJson/',
    storeId: 'IBPTs'
});