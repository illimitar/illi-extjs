Ext.define('Illi.model.Meta', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'nome'},
        {name: 'dataInicio', type: 'date',   mapping: 'dataInicio.date'},
        {name: 'dataFim', type: 'date',   mapping: 'dataFim.date'},
        {name: 'data', type: 'date',   mapping: 'data.date'},
        {name: 'valor', type: 'float'},
        {name: 'valor_atingido', type: 'float'},
        {name: 'tipoValor'},
        {name: 'situacao'},
        {name: 'p.id', type: 'int', mapping: 'pessoa.id'}
    ]

});