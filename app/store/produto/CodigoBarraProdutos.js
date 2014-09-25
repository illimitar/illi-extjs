Ext.define('Illi.store.produto.CodigoBarraProdutos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.produto.CodigoBarra',
    baseUrl: '../produto/produto/iJson/',
    storeId: 'codigoBarraProdutos',
    illiRead: 'listaCodigoBarra',
    illiCreate: 'alterar_codigo_barra',
    illiUpdate: 'alterar_codigo_barra',
    illiDestroy: 'excluirCodigoBarra',
    autoLoad: false
});