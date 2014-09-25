Ext.define('Illi.store.TipoTitulos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.TipoTitulo',
    baseUrl: '../fluxo/tipo_titulo/iJson/',
    storeId: 'TipoTitulos'
});
