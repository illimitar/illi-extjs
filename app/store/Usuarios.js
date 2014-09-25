Ext.define('Illi.store.Usuarios', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Usuario',
    baseUrl: '../usuario/usuario/iJson/',
    storeId: 'Usuarios'
});