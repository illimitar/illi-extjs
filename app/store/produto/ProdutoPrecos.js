Ext.define('Illi.store.produto.ProdutoPrecos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.ProdutoGrade',
    baseUrl: '../produto/preco/iJson/',
    storeId: 'ProdutoPrecos', 
    illiRead: 'lista_preco_produto_grade',
    autoLoad: false
});