Ext.define('Illi.store.TipoMovimentacoes', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.TipoMovimentacao',
    baseUrl: '../movimentacao/tipo_movimentacao/iJson/',
    storeId: 'TipoMovimentacoes'
});
