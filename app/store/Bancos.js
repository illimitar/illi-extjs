Ext.define('Illi.store.Bancos', {
    extend      : 'Illi.store.AbstractStore',
    require     : 'Illi.store.AbstractStore',
    model       : 'Illi.model.Banco',
    baseUrl     : '../banco/banco/iJson/',
    storeId     : 'Bancos'
});