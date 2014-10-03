Ext.define('Illi.model.Bi', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'm.id', mapping: 'm_id'},
        {name: 'm.numero', mapping: 'm_numero'},
        {name: 'numero'},
        {name: 'p.nome', mapping: 'p_nome'},
        {name: 'gp.grupo', mapping: 'grupoPessoa'},
        {name: 'valor_titulo', type: 'float'},
        {name: 'pz.descricao', mapping: 'pz_descricao'},
        {name: 'v.nome', mapping: 'v_nome'},
        {name: 'situacao'},
        {name: 'atrazo', type: 'int'},
        {name: 'data_emissao', type: 'date',   mapping: 'data_emissao.date'},
        {name: 'data_referencia', type: 'date',   mapping: 'data_referencia.date'},
        {name: 'data_vencimento', type: 'date',   mapping: 'data_vencimento.date'},
        {name: 'data_baixa', type: 'date',   mapping: 'data_baixa.date'},
        {name: 'data_prebaixa', type: 'date',   mapping: 'data_prebaixa.date'},
        {name: 'data_exclusao', type: 'date',   mapping: 'data_exclusao.date'},
        {name: 'data_arquivado', type: 'date',   mapping: 'data_arquivado.date'}
    ]

});