Ext.define('Illi.store.FinanceiroReceber', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Financeiro',
    baseUrl: '../fluxo/fluxo/iJson/',
    illiRead: 'lista_receber',
    storeId: 'financeiroReceber'
});
