Ext.define('Illi.model.Funcao', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'funcao'
        },
        {
            name: 'valor'
        },
        {
            name: 'situacao'
        },
        {
            name: 'a.id', mapping: 'acesso.id'
        },
        {
            name: 'a.titulo', mapping: 'acesso.titulo'
        }
    ]
});