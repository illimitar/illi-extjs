Ext.define('Illi.store.ControleAcoes', {
    extend      : 'Illi.store.AbstractStore',
    require     : 'Illi.store.AbstractStore',
    model       : 'Illi.model.ControleAcao',
    baseUrl     : '../configuracao/controleacao/iJson/',
    storeId     : 'ControleAcoes'
});