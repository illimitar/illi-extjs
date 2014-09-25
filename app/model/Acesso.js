Ext.define('Illi.model.Acesso', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'icone'
        },
        {
            name: 'classe'
        },
        {
            name: 'url'
        },
        {
            name: 'titulo'
        },
        {
            name: 'componente'
        },
        {
            name: 'ordem'
        },
        {
            name: 'situacao'
        },
        {
            name: 'pai'
        },
        {
            name: 'ac.id', mapping: 'acesso.id'
        },
        {
            name: 'ac.titulo', mapping: 'acesso.titulo'
        }
    ]
});