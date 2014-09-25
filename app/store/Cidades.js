Ext.define('Illi.store.Cidades',{
    extend      : 'Illi.store.AbstractStore',
    require     : 'Illi.store.AbstractStore',
    model       : 'Illi.model.Cidade',
    baseUrl     : '../pessoa/cidade/iJson/',
    storeId     : 'Cidades'
//pageSize    : 999
});

