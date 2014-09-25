Ext.define('Illi.model.AcessoGrupoUsuario', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'gu.id', mapping: 'grupo_usuario.id'
        },
        {
            name: 'gu.nome', mapping: 'grupo_usuario.nome'
        },
        {
            name: 'a.id', mapping: 'acesso.id'
        },
        {
            name: 'a.titulo', mapping: 'acesso.titulo'
        },
        {
            name: 'f.id', mapping: 'funcao.id'
        },
        {
            name: 'f.valor', mapping: 'funcao.valor'
        }
    ]
});