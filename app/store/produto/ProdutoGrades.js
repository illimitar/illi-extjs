Ext.define('Illi.store.produto.ProdutoGrades', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.ProdutoGrade',
    baseUrl: '../produto/produto_grade/iJson/',
    storeId: 'ProdutoGrades'
});