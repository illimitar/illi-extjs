Ext.define('Illi.model.Extrato', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'valor'
        },
        {
            name: 'observacao'
        },
        {
            name: 'data',
            mapping: 'data.date',
            type: 'date',
            dateFormat: 'Y-m-d'
        },
        {
            name: 'data_lancamento',
            mapping: 'data_lancamento.date',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        },
        {
            name: 'c.nome',
            mapping: 'conta.nome'
        },
        {
            name: 'c.id',
            mapping: 'conta.id'
        },
        {
            name: 'u.nome',
            mapping: 'usuario.nome'
        },
        {
            name: 'u.id',
            mapping: 'usuario.id'
        },
        {
            name: 'co.nome',
            mapping: 'conta_operacao.nome'
        },
        {
            name: 'co.id',
            mapping: 'conta_operacao.id'
        },
        {name: 'saldo'}

    ]

});