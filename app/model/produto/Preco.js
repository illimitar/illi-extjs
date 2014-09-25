Ext.define('Illi.model.produto.Preco', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'nome'
        },
        {
            name: 'data_inicio', mapping: 'data_inicio.date', type: 'date', dateFormat: 'Y-m-d H:i:s' // dateFormat: 'Y-m-d', 
        },
        {
            name: 'data_fim', mapping: 'data_fim.date', type: 'date', dateFormat: 'Y-m-d H:i:s' // dateFormat: 'Y-m-d', 
        },
        {
            name: 'tipo'
        },
        {
            name: 'porcentagem'
        },
        {
            name: 'situacao'
        },
        {
            name: 'ppc.id', mapping: 'preco.id'
        },
        {
            name: 'ppc.nome', mapping: 'preco.nome'
        }
    ]
});