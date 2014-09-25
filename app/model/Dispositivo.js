Ext.define('Illi.model.Dispositivo', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'nome'
        },
        {
            name: 'plataforma'
        },
        {
            name: 'uuid'
        },
        {
            name: 'permanente'
        },
        {
            name: 'token'
        },
        {
            name: 'situacao'
        },
        {
            name: 'u.id', type: 'int', mapping: 'usuario.id'
        },
        {
            name: 'u.nome', mapping: 'usuario.nome'
        }
    ]
});