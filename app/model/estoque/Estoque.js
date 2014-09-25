Ext.define('Illi.model.estoque.Estoque', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', mapping: 'estoque.id', type: 'int'},
        {name: 'minimo', mapping: 'estoque.minimo', type: 'int'},
        {name: 'maximo', mapping: 'estoque.maximo', type: 'int'},
        {name: 'compra', mapping: 'estoque.compra', type: 'int'},
        {name: 'reservado', mapping: 'estoque.reservado', type: 'int'},
        {name: 'data_saldo', mapping: 'estoque.data_saldo', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'data_compra', mapping: 'estoque.data_compra', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'data_reservado', mapping: 'estoque.data_reservado', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'situacao', mapping: 'estoque.situacao'},
        {name: 'u.id', mapping: 'usuario.id', type: 'int'},
        {name: 'u.nome', mapping: 'usuario.nome'},
        {name: 'pg.id', mapping: 'produto_grade.id', type: 'int'},
        {name: 'p.descricao', mapping: 'produto.descricao'},
        {name: 'l.id', mapping: 'local.id', type: 'int'},
        {name: 'l.nome', mapping: 'local.nome'},
        {name: 'l.situacao', mapping: 'local.situacao'},
        {name: 'e.id', mapping: 'entidade.id', type: 'int'},
        {name: 'e.nome', mapping: 'entidade.nome'}
    ]
});