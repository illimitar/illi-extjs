Ext.define('Illi.store.produto.ProdutoPrecoEstoques', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.ProdutoPrecoEstoque',
    baseUrl: '../produto/produto_grade/iJson/',
    storeId: 'ProdutoPrecoEstoques', 
    illiRead: 'preco_estoque',
    autoLoad: false
});