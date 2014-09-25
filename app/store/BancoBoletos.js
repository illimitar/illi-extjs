Ext.define('Illi.store.BancoBoletos', {
    extend      : 'Illi.store.AbstractStore',
    require     : 'Illi.store.AbstractStore',
    model       : 'Illi.model.Banco',
    illiRead    : 'listaGerarBoletos',   
    baseUrl     : '../banco/banco/iJson/',
    storeId     : 'Banco'
    
});
