Ext.define('Illi.store.Pessoas', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Pessoa',
    illiRead: 'listaGrid',
    baseUrl: '../pessoa/pessoa/iJson/',
    storeId: 'Pessoas'
});
