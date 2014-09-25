Ext.define('Illi.model.produto.IBPT', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', mapping: 'id', type: 'int'},
        {name: 'codigo'},
        {name: 'ex'},
        {name: 'tabela'},
        {name: 'descricao'},
        {name: 'aliqnac'},
        {name: 'aliqimp'},
        {name: 'versao'}
    ]
});