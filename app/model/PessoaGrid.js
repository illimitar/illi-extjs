Ext.define('Illi.model.PessoaGrid', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'nome'
        },
        {
            name: 'complemento'
        },
        {
            name: 'documento'
        },
        {
            name: 'cnpj'
        },
        {
            name: 'cpf'
        },
        {
            name: 'rua'
        },
        {
            name: 'saip'
        },
        {
            name: 'situacao'
        },
        {
            name: 'tipo'
        },
        {
            name: 'data_exclusao',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        },
        {
            name: 'data_nascimento',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s',
            mapping: 'data_nascimento.date'
        },
        {
            name: 'mes_nascimento',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s',
            mapping: 'data_nascimento.date'
        },
        {
            name: 'saip_data'
        },
        {
            name: 'uf'
        },
        {
            name: 'cidade'
        },
        {
            name: 'bairro'
        }
    ],
    hasOne: {
        model: 'Endereco',
        foreignKey: 'id_pessoa'
    }
});