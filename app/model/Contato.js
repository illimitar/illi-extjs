Ext.define('Illi.model.Contato', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'valor'
        },
        {
            name: 'contato'
        },
        {
            name: 'situacao'
        },
        {
            name: 'p.nome',
            mapping: 'pessoa.nome'
        },
        {
            name: 'p.id',
            mapping: 'pessoa.id'
        },
        {
            name: 'tp.tipo',
            mapping: 'tipoContato.tipo'
        },
        {
            name: 'tp.id',
            mapping: 'tipoContato.id'
        }
    ]

});