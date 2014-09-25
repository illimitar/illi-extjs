Ext.define('Illi.model.Prazo', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'descricao'},
        {name: 'tipo'},
        {name: 'situacao'},
        {name: 'intervalo'},
        {name: 'parcelas'},
        {name: 'primeira_parcela'},
        {name: 'baixa_automatica'},
        {name: 'permite_troco'},
        {name: 'forca_financeiro'},
        {name: 'permite_condicao_pagamento'},
        {name: 'tipo'},
        {name: 'm.id', mapping: 'moeda.id'},
        {name: 'm.descricao', mapping: 'moeda.descricao'}
    ]
});