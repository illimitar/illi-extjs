Ext.define('Illi.store.FinanceiroGrafico', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Financeiro',
    baseUrl: '../fluxo/fluxo/iJson/',
    illiRead: 'lista_grafico',
    storeId: 'financeiroGrafico'
});
