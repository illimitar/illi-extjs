Ext.define('Illi.model.Agencia', {
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
            name: 'situacao'
        },
        {
            name: 'data'
        },
        {
            name: 'b.id',
            mapping: 'banco.id',
            type: 'int'
        },
        {
            name: 'b.nome',
            mapping: 'banco.nome'
        }
    ],
    hasMany: {
        model: 'Conta',
        foreignKey: 'id_conta'
    }


});