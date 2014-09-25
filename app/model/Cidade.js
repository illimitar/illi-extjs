Ext.define('Illi.model.Cidade', {
    extend: 'Ext.data.Model',
    fields: [
    {
        name:'id'
    },

    {
        name:'cidade'
    },

    {
        name:'uf'
    }

    
    ],
    
    hasOne: {
        model: 'Bairro', 
        foreignKey: 'id_cidade'
    }
});