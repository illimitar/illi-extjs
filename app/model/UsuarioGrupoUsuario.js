Ext.define('Illi.model.UsuarioGrupoUsuario', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'u.id', mapping: 'usuario.id'
        },
        {
            name: 'u.nome', mapping: 'usuario.nome'
        },
        {
            name: 'gu.id', mapping: 'grupo_usuario.id'
        },
        {
            name: 'gu.nome', mapping: 'grupo_usuario.nome'
        },
        {
            name: 'e.id', mapping: 'entidade.id'
        },
        {
            name: 'e.nome', mapping: 'entidade.nome'
        },
        {
            name: 'id_entidade', mapping: 'entidade.id'
        },
        {
            name: 'nome_entidade', mapping: 'entidade.nome'
        }
    ]
});