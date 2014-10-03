Ext.define('Illi.model.produto.ImportacaoProduto', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'codigo'},
        {name: 'nome'},
        {name: 'descricao'},
        {name: 'unidade'},
        {name: 'custo', type: 'float'},
        {name: 'venda', type: 'float'},
        {name: 'venda2', type: 'float'},
        {name: 'grupo'},
        {name: 'categoria'},
        {name: 'marca'},
        {name: 'observacao'},
        {name: 'ncm'},
        {name: 'aliquota'},
        {name: 'cst_origem'},
        {name: 'cst_destino'},
        {name: 'ipi'},
        {name: 'codigo_ean'},
        {name: 'gradex'},
        {name: 'gradey'},
        {name: 'produto_grade'},
        {name: 'data', type: 'date',   mapping: 'data.date'},
        {name: 'data_importacao', type: 'date',   mapping: 'data_importacao.date'}
    ]
});