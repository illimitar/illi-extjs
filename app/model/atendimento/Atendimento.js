Ext.define('Illi.model.atendimento.Atendimento', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'titulo'},
        {name: 'descricao'},
        {name: 'anexo'},
        {name: 'tipo'},
        {name: 'situacao'},
        {name: 'data', type: 'date',   mapping: 'data.date'},
        {name: 'abertura', type: 'date',   mapping: 'abertura.date'},
        {name: 'atendimento', type: 'date',   mapping: 'atendimento.date'},
        {name: 'finalizado', type: 'date',   mapping: 'finalizado.date'},
        {name: 'cancelado', type: 'date',   mapping: 'cancelado.date'},
        {name: 'p.id', mapping: 'pessoa.id'},
        {name: 'p.nome', mapping: 'pessoa.nome'},
        {name: 'r.id', mapping: 'responsavel.id'},
        {name: 'r.nome', mapping: 'responsavel.nome'}
    ]
});