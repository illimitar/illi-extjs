Ext.define('Illi.model.produto.ProdutoGrade', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'ordem'},
        {name: 'codigo'},
        {name: 'complemento'},
        {name: 'situacao'},
        {name: 'gx.nome', mapping: 'gradex.nome'},
        {name: 'gx.ordem', mapping: 'gradex.ordem'},
        {name: 'gy.nome', mapping: 'gradey.nome'},
        {name: 'gy.ordem', mapping: 'gradey.ordem'}
    ]
});