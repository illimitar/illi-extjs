Ext.define('Illi.model.relatorio.Relatorio', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'nome'},
        {name: 'descricao'},
        {name: 'url'},
        {name: 'tipo'},
        {name: 'situacao'},
        {name: 'saida'},
        {name: 'data', type: 'date',   mapping: 'data.date'}
    ]
});