Ext.define('Illi.model.MovimentacaoDetalhe', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'codigo'},
        {name: 'descricao'},
        {name: 'ordem'},
        {name: 'qtde', type: 'int'},
        {name: 'valor', type: 'float'},
        {name: 'data', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'situacao'},
        {name: 'm.id', mapping: 'id_movimentacao'},
        {name: 'pg.id', mapping: 'id_produto_grade'},
        {name: 'totalitem', type: 'float'}
    ]
});