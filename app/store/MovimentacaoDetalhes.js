Ext.define('Illi.store.MovimentacaoDetalhes', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.MovimentacaoDetalhe',
    baseUrl: '../movimentacao/movimentacao_detalhe/iJson/',
    storeId: 'MovimentacaoDetalhes'
});