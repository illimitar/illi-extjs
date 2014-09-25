Ext.define('Illi.model.Venda', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id', mapping: 'impressao.id'
        },
        {
            name: 'm.id', mapping: 'movimentacao.id'
        },
        {
            name: 'data_impressao', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'impressao.data.date'
        },
        {
            name: 'cliente', mapping: 'movimentacao.pessoa.nome'
        },
        {
            name: 'valor_pago', mapping: 'movimentacao.valor_pago'
        },
        {
            name: 'valor_venda', mapping: 'movimentacao.valor_venda'
        },
        {
            name: 'ecf', mapping: 'movimentacao.ecf.id'
        },
        {
            name: 'ecf_serial', mapping: 'movimentacao.ecf.numero_serie'
        }
    ]
});