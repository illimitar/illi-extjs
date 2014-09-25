Ext.define('Illi.store.produto.Etiquetas', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.Etiqueta',
    baseUrl: '../produto/etiqueta/iJson/',
    storeId: 'Etiquetas'
});