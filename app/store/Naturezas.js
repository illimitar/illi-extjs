Ext.define('Illi.store.Naturezas', {
    extend      : 'Illi.store.AbstractStore',
    require     : 'Illi.store.AbstractStore',
    model       : 'Illi.model.Natureza',
    baseUrl     : '../fluxo/natureza_lancamento/iJson/',
    storeId     : 'Naturezas',
    pageSize    : 999
});
