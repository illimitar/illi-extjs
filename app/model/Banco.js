Ext.define('Illi.model.Banco', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'nome'},
        {name: 'agencia'},
        {name: 'numero'},
        {name: 'digito'},
        {name: 'cnpj'},
        {name: 'seguimento'}
    ]
});