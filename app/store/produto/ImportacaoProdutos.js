Ext.define('Illi.store.produto.ImportacaoProdutos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.ImportacaoProduto',
    baseUrl: '../produto/importacao/iJson/',
    storeId: 'ImportacaoProdutos',
    illiRead: 'lista_produto'
});