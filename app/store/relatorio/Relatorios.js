Ext.define('Illi.store.relatorio.Relatorios', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.relatorio.Relatorio',
    baseUrl: '../relatorios/relatorio/iJson/',
    storeId: 'relatorios'
});