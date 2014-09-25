Ext.define('Illi.store.produto.Grupos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.Grupo',
    baseUrl: '../produto/grupo/iJson/',
    storeId: 'Grupos'
});