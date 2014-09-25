Ext.define('Illi.model.Conta', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'numero'
        },
        {
            name: 'digito'
        },
        {
            name: 'nome'
        },
        {
            name: 'tipo'
        },
        {
            name: 'situacao'
        },
        {
            name: 'saldo'
        },
        {
            name: 'data'
        },
        {
            name: 'saldo'
        },
        {
            name: 'e.id',
            mapping: 'entidade.id'
        },
        {
            name: 'e.nome',
            mapping: 'entidade.nome'
        },
        {
            name: 'a.nome',
            mapping: 'agencia.nome'
        },
        {
            name: 'a.id',
            mapping: 'agencia.id'
        },
        {
            name: 'a.digito',
            mapping: 'agencia.digito'

        },
        {
            name: 'a.numero',
            mapping: 'agencia.numero'

        },
        {
            name: 'b.nome',
            mapping: 'agencia.banco.nome'
        },
        {
            name: 'b.id',
            mapping: 'agencia.banco.id'
        },
        {
            name: 'p.nome',
            mapping: 'pessoa.nome'
        },
        {
            name: 'p.id',
            mapping: 'pessoa.id'
        }
    ]


});