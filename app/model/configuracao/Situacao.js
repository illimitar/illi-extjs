Ext.define('Illi.model.configuracao.Situacao', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'nome'},
        {name: 'tipo'},
        {name: 'obs'},
        {name: 'situacao'},
        {name: 'data', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data.date'}
    ]
});