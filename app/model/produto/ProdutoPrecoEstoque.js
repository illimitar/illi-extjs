Ext.define('Illi.model.produto.ProdutoPrecoEstoque', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'nome'},
        {name: 'data_preco'},
        {name: 'valor_custo'},
        {name: 'valor_venda'},
        {name: 'qtde'},
        {name: 'rank'},
        {name: 'curva'},
        {name: 'data_curva'}
    ]
});