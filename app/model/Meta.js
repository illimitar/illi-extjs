Ext.define('Illi.model.Meta', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'nome'},
        {name: 'dataInicio', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'dataInicio.date'},
        {name: 'dataFim', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'dataFim.date'},
        {name: 'data', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data.date'},
        {name: 'valor', type: 'float'},
        {name: 'valor_atingido', type: 'float'},
        {name: 'tipoValor'},
        {name: 'situacao'},
        {name: 'p.id', type: 'int', mapping: 'pessoa.id'}
    ]

});