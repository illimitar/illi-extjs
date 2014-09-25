Ext.define('Illi.store.GrupoPessoas', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.GrupoPessoa',
    baseUrl: '../pessoa/grupo_pessoa/iJson/',
    storeId: 'GrupoPessoas'
});

