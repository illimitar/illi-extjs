Ext.define('Illi.store.TipoPessoasCombo',{
    extend      : 'Illi.store.AbstractStore',
    require     : 'Illi.store.AbstractStore',
    model       : 'Illi.model.TipoPessoa',
    baseUrl     : '../pessoa/tipo_pessoa/iJson/',
    storeId     : 'TipoPessoasCombo',
    illiRead    :'lista_combo'
});

