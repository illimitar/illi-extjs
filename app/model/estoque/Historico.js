Ext.define('Illi.model.estoque.Historico', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'tipo'},
        {name: 'qtde', type: 'float'},
        {name: 'data_cadastro', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'u.id', mapping: 'usuario.id', type: 'int'},
        {name: 'u.nome', mapping: 'usuario.nome'},
        {name: 'le.id', mapping: 'local.id', type: 'int'},
        {name: 'le.nome', mapping: 'local.nome'},
        {name: 'situacao'}
    ]
});