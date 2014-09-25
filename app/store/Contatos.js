Ext.define('Illi.store.Contatos', {
    extend      : 'Illi.store.AbstractStore',
    require     : 'Illi.store.AbstractStore',
    model       : 'Illi.model.Contato',
    baseUrl     : '../pessoa/contato/iJson/',
    storeId     : 'Contatos',
    pageSize    : 10
});