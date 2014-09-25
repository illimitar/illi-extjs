Ext.define('Illi.store.GrupoEntidades', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.GrupoEntidade',
    baseUrl: '../usuario/grupo_entidade/iJson/',
    storeId: 'GrupoEntidades'
});