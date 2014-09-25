Ext.define('Illi.store.Vendedores', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Pessoa',
    illiRead: 'lista_vendedor',
    baseUrl: '../pessoa/pessoa/iJson/',
    storeId: 'Vendedores',
    pageSize: 25
});
