Ext.define('Illi.model.ProcessarBoletos', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'numero'
        },
        {
            name: 'b.id'
        },
        {
            name: 'p.id',
            mapping: 'pessoa.id'
        },
        {
            name: 'p.nome',
            mapping: 'pessoa.nome'
        },
        {
            name: 'observacao1'
        },
        {
            name: 'observacao2'
        },
        {
            name: 'observacao3'
        },
        {
            name: 'c.id'
        }

    ]

});

