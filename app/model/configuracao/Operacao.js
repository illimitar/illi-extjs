Ext.define('Illi.model.configuracao.Operacao', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'nome'},
        {name: 'situacao'},
        {name: 'data', type: 'date',   mapping: 'data.date'}
    ]
});