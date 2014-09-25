Ext.define('Illi.model.Endereco', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'logradouro'
        },
        {
            name: 'numero'
        },
        {
            name: 'complemento'
        },
        {
            name: 'referencia'
        },
        {
            name: 'cep'
        },
        {
            name: 'situacao'
        },
        {
            name: 'id_pessoa'
        },
        {
            name: 'id_bairro'
        }

    ],
    belongsTo: {
        model: 'Illi.model.Pessoa',
        getterName: 'getPessoa',
        setterName: 'getPessoa',
        foreignKey: 'id_pessoa',
        associationKey: 'endereco'
    }

});