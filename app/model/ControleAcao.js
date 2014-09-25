Ext.define('Illi.model.ControleAcao', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'identificacao', type: 'int'},
        {
            name: 'data',
            mapping: 'data.date',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        },
        {name: 'acao'},
        {name: 'tipo'},
        {
            name: 'u.login',
            mapping: 'usuario.login'
        }
    ]
});