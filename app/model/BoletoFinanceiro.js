Ext.define('Illi.model.BoletoFinanceiro', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'b.id',
            mapping: 'boleto[0].id'
        },
        {
            name: 'rm.id',
            mapping: 'boleto[0].remessaBoleto.id'
        },
        {
            name: 'numero'
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
            name: 'c.id',
            mapping: 'boleto[0].conta.id'
        },
        {
            name: 'c.nome',
            mapping: 'boleto[0].conta.nome'
        },
        {
            name: 'banco'
        },
        {
            name: 'id_usuario'
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
            name: 'valor_titulo',
            type: 'float'
        },
        {name: 'data_emissao', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data_emissao.date'},
        {name: 'b.dataDocumento', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'boleto[0].dataDocumento.date'},
        {name: 'data_vencimento', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data_vencimento.date'}
    ]
});

