Ext.define('Illi.store.usuario.Acessos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Acesso',
    baseUrl: '../usuario/acesso/iJson/',
    illiRead: 'combo',
    storeId: 'usuarioAcessos'
});