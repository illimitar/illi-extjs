Ext.define('Illi.store.Vendas', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Venda',
    baseUrl: '../pdv/vendarapida/iJson/',
    illiRead: 'lista_venda',
    storeId: 'Vendas'
});
