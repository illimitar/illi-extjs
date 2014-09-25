Ext.define('Illi.store.UsuarioGrupoUsuarios', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.UsuarioGrupoUsuario',
    baseUrl: '../usuario/usuario_grupo_usuario/iJson/',
    illiRead: 'lista',
    storeId: 'UsuarioGrupoUsuarios'
});