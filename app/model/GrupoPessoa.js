Ext.define('Illi.model.GrupoPessoa', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'grupo'
        },
        {
            name: 'situacao'
        },
        {
            name: 'gp.grupo',
            mapping: 'grupoPessoa.grupo'
        }

    ]

});