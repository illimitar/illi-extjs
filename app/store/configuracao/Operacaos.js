Ext.define('Illi.store.configuracao.Operacaos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.configuracao.Operacao',
    baseUrl: '../configuracao/operacao/iJson/',
    storeId: 'Operacaos'
});