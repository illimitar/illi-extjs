Ext.define('Illi.store.FinanceiroPagar', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Financeiro',
    baseUrl: '../fluxo/fluxo/iJson/',
    illiRead: 'lista_pagar',
    storeId: 'financeiroApagar'
});
