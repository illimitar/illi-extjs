Ext.define('Illi.store.UsuarioChaves', {
    extend      : 'Illi.store.AbstractStore',
    require     : 'Illi.store.AbstractStore',
    model       : 'Illi.model.UsuarioChave',
    baseUrl     : '../usuario/usuario_chave/iJson/',
    storeId     : 'UsuarioChaves'
});