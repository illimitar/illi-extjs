Ext.define('Illi.store.VendedorComissoes', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.VendedorComissao',
    illiRead: 'lista_comissao',
    baseUrl: '../fluxo/fluxo/iJson/',
    storeId: 'VendedorComissoes'
});
