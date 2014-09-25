Ext.define('Illi.model.Bairro', {
    extend: 'Ext.data.Model',
    fields: [
    {
        name:'id'
    },

    {
        name:'bairro'
    },

    {
        name:'id_cidade'
    }

    
    ],
    
    hasOne: {
        model: 'Endereco', 
        foreignKey: 'id_bairro'
    }
});