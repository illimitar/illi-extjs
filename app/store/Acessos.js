Ext.define('Illi.store.Acessos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Acesso',
    baseUrl: '../usuario/acesso/iJson/',
    storeId: 'Acessos'
});