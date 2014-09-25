Ext.define('Illi.model.Natureza', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'classificacao'
        },
        {
            name: 'descricao'
        },
        {
            name: 'nl.id',
            mapping: 'natureza_lancamento.id'
        },
        {
            name: 'nl.descricao',
            mapping: 'natureza_lancamento.descricao'
        },
        {
            name: 'tipo'
        },
        {
            name: 'situacao'
        },
        {
            name: 'selecao'
        }

    ]
});