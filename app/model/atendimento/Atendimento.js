Ext.define('Illi.model.atendimento.Atendimento', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'titulo'},
        {name: 'descricao'},
        {name: 'anexo'},
        {name: 'tipo'},
        {name: 'situacao'},
        {name: 'data', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data.date'},
        {name: 'abertura', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'abertura.date'},
        {name: 'atendimento', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'atendimento.date'},
        {name: 'finalizado', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'finalizado.date'},
        {name: 'cancelado', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'cancelado.date'},
        {name: 'p.id', mapping: 'pessoa.id'},
        {name: 'p.nome', mapping: 'pessoa.nome'},
        {name: 'r.id', mapping: 'responsavel.id'},
        {name: 'r.nome', mapping: 'responsavel.nome'}
    ]
});