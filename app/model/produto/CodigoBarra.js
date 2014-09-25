Ext.define('Illi.model.produto.CodigoBarra', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'codigo'
        },
        {
            name: 'situacao'
        },
        {
            name: 'tcb.id', mapping: 'tipo_codigobarra.id'
        },
        {
            name: 'tcb.nome', mapping: 'tipo_codigobarra.nome'
        }
    ]
});