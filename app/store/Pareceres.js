Ext.define('Illi.store.Pareceres', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Parecer',
    baseUrl: '../fluxo/parecer/iJson/',
    storeId: 'Pareceres',
    autoLoad: false
});

