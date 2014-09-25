Ext.define('Illi.store.produto.Grades', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.Grade',
    baseUrl: '../produto/grade/iJson/',
    storeId: 'Grades'
});