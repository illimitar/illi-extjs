Ext.define('Illi.model.Usuario', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id', mapping: 'id'
        },
        {
            name: 'nome', mapping: 'nome'
        },
        {
            name: 'login', mapping: 'login'
        },
        {
            name: 'senha', mapping: 'senha'
        },
        {
            name: 'mobile', mapping: 'mobile'
        },
        {
            name: 'data', mapping: 'data'
        },
        {
            name: 'situacao', mapping: 'situacao'
        },
        {
            name: 'segredo', mapping: 'segredo'
        },
        {
            name: 'email', mapping: 'email'
        },
        {
            name: 'usuario_id', mapping: 'usuario_id'
        },
        {
            name: 'p.id', type: 'int', mapping: 'pessoa.id'
        },
        {
            name: 'p.nome', mapping: 'pessoa.nome'
        },
        {
            name: 'id_grupo_usuario', type: 'int', mapping: 'configuracao_usuario.valor'
        }
    ]
});