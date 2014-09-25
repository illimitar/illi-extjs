Ext.define('Illi.store.Boletos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.ProcessarBoletos',
    baseUrl: '../fluxo/boleto/iJson/',
    storeId: 'boleto',
    remoteFilter: false
});