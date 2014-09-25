Ext.define('Illi.store.produto.GrupoGrades', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.GrupoGrade',
    baseUrl: '../produto/grupo_grade/iJson/',
    storeId: 'GrupoGrades'
});