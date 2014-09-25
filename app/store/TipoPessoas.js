Ext.define('Illi.store.TipoPessoas', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.TipoPessoa',
    baseUrl: '../pessoa/tipo_pessoa/iJson/',
    storeId: 'TipoPessoas',
    illiRead: 'listaTipoPessoa'
});

