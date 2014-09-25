Ext.define('Illi.model.TipoPessoa', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'tipo'
        },
        {
            name: 'tipopessoa'
        },
        {
            name: 'p.id',
            type: 'int'
        }


    ]

});