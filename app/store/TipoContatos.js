Ext.define('Illi.store.TipoContatos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.TipoContato',
    baseUrl: '../pessoa/tipo_contato/iJson/',
    storeId: 'TipoContatos',
    pageSize: 25
});
