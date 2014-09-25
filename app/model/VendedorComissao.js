Ext.define('Illi.model.VendedorComissao', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'valor'
        },
        {
            name: 'comissao'
        },
        {
            name: 'valor_comissao'
        },
        {
            name: 'data',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        },
        {
            name: 'situacao'
        },
        {
            name: 'fluxo'
        },
        {
            name: 'f.id',
            mapping: 'fluxo.id'
        },
        {
            name: 'v.id',
            mapping: 'fluxo.movimentacao.vendedor.id'
        },
        {
            name: 'fp.id',
            mapping: 'fluxo_pagamento.id'
        },
        {
            name: 'v.nome',
            mapping: 'fluxo.movimentacao.vendedor.nome'
        },
        {
            name: 'g.grupo',
            mapping: 'fluxo.movimentacao.vendedor.grupoPessoa.grupo'
        },
        {
            name: 'pa.nome',
            mapping: 'fluxo.pessoa.nome'
        },
        {
            name: 'pa.id',
            mapping: 'fluxo.pessoa.id'
        },
        {
            name: 'f.data_baixa',
            mapping: 'fluxo.data_baixa.date',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }
    ]
});