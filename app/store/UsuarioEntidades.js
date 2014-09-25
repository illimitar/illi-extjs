Ext.define('Illi.store.UsuarioEntidades', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.UsuarioGrupoUsuario',
    baseUrl: '../usuario/entidade/iJson/',
    illiRead: 'combo',
    storeId: 'UsuarioEntidades'
});
