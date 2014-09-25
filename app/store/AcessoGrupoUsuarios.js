Ext.define('Illi.store.AcessoGrupoUsuarios', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.AcessoGrupoUsuario',
    baseUrl: '../usuario/acesso_grupo_usuario/iJson/',
    illiRead: 'lista',
    storeId: 'AcessoGrupoUsuarios'
});