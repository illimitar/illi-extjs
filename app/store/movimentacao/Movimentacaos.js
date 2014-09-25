Ext.define('Illi.store.movimentacao.Movimentacaos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.movimentacao.Movimentacao',
    baseUrl: '../movimentacao/movimentacao/iJson/',
    storeId: 'Movimentacaos',
    autoLoad: false
});