Ext.define('Illi.store.BoletoFinanceiros', {
    extend      : 'Illi.store.AbstractStore',
    require     : 'Illi.store.AbstractStore',
    model       : 'Illi.model.BoletoFinanceiro',
    illiRead    : 'listaBoletoFluxo',
    baseUrl     : '../fluxo/boleto/iJson/',
    storeId     : 'boletoFinanceiro'
});


