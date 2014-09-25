Ext.define('Illi.model.femme.Produto', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'codigo'
        },
        {
            name: 'descricao'
        },
        {
            name: 'valor',
            type: 'float'
        },
        {
            name: 'valor_prazo',
            type: 'float'
        },
        {
            name: 'grupo'
        },
        {
            name: 'tamanho'
        },
        {
            name: 'qtde'
        },
        {
            name: 'obs'
        },
        {
            name: 'ativo'
        },
        {
            name: 'data',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }

    ]
});