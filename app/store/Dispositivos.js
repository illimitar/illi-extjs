Ext.define('Illi.store.Dispositivos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Dispositivo',
    baseUrl: '../usuario/dispositivo/iJson/',
    storeId: 'Dispositivos'
});