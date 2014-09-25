Ext.define('Illi.store.Juridicas', {
    extend      : 'Illi.store.AbstractStore',
    require     : 'Illi.store.AbstractStore',
    model       : 'Illi.model.Juridica',
    baseUrl     : '../pessoa/juridica/iJson/',
    storeId     : 'Juridicas'
});
