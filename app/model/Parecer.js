Ext.define('Illi.model.Parecer', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'descricao'
        },
        {
            name: 'data',
            type: 'date',
            mapping: 'data.date'
        },
        {
            name: 'dataReferencia',
            type: 'date',
            mapping: 'dataReferencia.date'
        },
        {
            name: 'f.id',
            mapping: 'fluxo.id'
        },
        {
            name: 'pg.id',
            mapping: 'produto.id'
        },
        {
            name: 'u.id',
            mapping: 'usuario.id'
        },
        {
            name: 'a.id',
            mapping: 'atendimento.id'
        },
        {
            name: 'u.nome',
            mapping: 'usuario.nome'
        },
        {
            name: 'url'
        },
        {
            name: 'anexo'
        },
        {
            name: 'complemento'
        },
        {
            name: 'arquivo'
        }
    ]
});