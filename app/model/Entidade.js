Ext.define('Illi.model.Entidade', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'nome'},
        {name: 'situacao'},
        {name: 'p.id', mapping: 'pessoa.id'},
        {name: 'p.nome', mapping: 'pessoa.nome'},
        {name: 'gp.id', mapping: 'grupo_entidade.id'},
        {name: 'gp.nome', mapping: 'grupo_entidade.nome'},
        {name: 'id_entidade', mapping: 'id'},
        {name: 'nome_entidade', mapping: 'nome'}
    ]
});