Ext.define('Illi.model.Pessoa', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'nome',
            type: 'string'
        },
        {
            name: 'complemento'
        },
        {
            name: 'documento'
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
            name: 'id_grupo_pessoa',
            mapping: 'grupoPessoa.id',
            type: 'int'
        },
        {
            name: 'id_vendedor',
            mapping: 'vendedorPadrao.id',
            type: 'int'
        },
        {
            name: 'id_usuario'
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
            name: 'gp.grupo',
            mapping: 'grupoPessoa.grupo'
        },
        {
            name: 'c.cidade',
            mapping: 'endereco.bairro.cidade.cidade'
        },
        {
            name: 'b.bairro',
            mapping: 'endereco.bairro.bairro'
        },
        {
            name: 'c.uf',
            mapping: 'endereco.bairro.cidade.uf'
        },
        {
            name: 'f.cpf',
            mapping: 'fisica.cpf'

        },
        {
            name: 'j.cnpj',
            mapping: 'juridica.cnpj'
        },
        {
            name: 'tipo_pessoa'
        },
        {
            name: 'endereco'
        },
        {
            name: 'fisica'
        },
        {
            name: 'juridica'
        },
        {
            name: 'vendedor'
        }
    ]

});