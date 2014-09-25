Ext.define('Illi.model.estoque.Local', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'nome'},
        {name: 'e.id', mapping: 'entidade.id', type: 'int'},
        {name: 'e.nome', mapping: 'entidade.nome'},
        {name: 'situacao'}
    ]
});