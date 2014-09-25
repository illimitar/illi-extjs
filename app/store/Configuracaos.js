Ext.define('Illi.store.Configuracaos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Configuracao',
    baseUrl: '../pessoa/cidade/iJson/',
    storeId: 'Configuracao',
    pageSize: 999
});

