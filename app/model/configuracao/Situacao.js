Ext.define('Illi.model.configuracao.Situacao', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'nome'},
        {name: 'tipo'},
        {name: 'obs'},
        {name: 'situacao'},
        {name: 'data', type: 'date',   mapping: 'data.date'}
    ]
});