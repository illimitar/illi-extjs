Ext.define('Illi.store.Agencias', {
    extend      : 'Illi.store.AbstractStore',
    require     : 'Illi.store.AbstractStore',
    model       : 'Illi.model.Agencia',
    baseUrl     : '../banco/agencia/iJson/',
    storeId     : 'Agencias'
});