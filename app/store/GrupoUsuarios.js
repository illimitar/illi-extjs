Ext.define('Illi.store.GrupoUsuarios', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.GrupoUsuario',
    baseUrl: '../usuario/grupo_usuario/iJson/',
    storeId: 'GrupoUsuarios'
});