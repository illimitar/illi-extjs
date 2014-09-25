Ext.define('Illi.model.produto.Grupo', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'nome'
        },
        {
            name: 'situacao'
        },
        {
            name: 'selecao'
        },
        {
            name: 'gp.id', mapping: 'grupo.id'
        },
        {
            name: 'gp.nome', mapping: 'grupo.nome'
        }
    ]
});