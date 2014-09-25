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
        {name: 'data_emissao', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data_emissao.date'},
        {name: 'data_referencia', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data_referencia.date'},
        {name: 'data_vencimento', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data_vencimento.date'},
        {name: 'data_baixa', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data_baixa.date'},
        {name: 'data_prebaixa', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data_prebaixa.date'},
        {name: 'data_exclusao', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data_exclusao.date'},
        {name: 'data_arquivado', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data_arquivado.date'}
    ]

});