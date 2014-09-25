Ext.define('Illi.store.Bairros',{
    extend      : 'Illi.store.AbstractStore',
    require     : 'Illi.store.AbstractStore',
    model       : 'Illi.model.Bairro',
    baseUrl     : '../pessoa/bairro/iJson/',
    storeId     : 'Bairros',
    pageSize    : 999
});
