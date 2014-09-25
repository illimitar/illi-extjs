Ext.define('Illi.store.Contas', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Conta',
    baseUrl: '../banco/conta/iJson/',
    storeId: 'Contas'
});