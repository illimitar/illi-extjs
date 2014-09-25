Ext.define('Illi.model.produto.Cfop', {
    extend: 'Ext.data.Model',
    fields: [
       // {name: 'id', mapping: 'codigo', type: 'int'},
        {name: 'codigo', mapping: 'codigo', type: 'int'},
        {name: 'descricao'},
        {name: 'aplicacao'}
    ]
});