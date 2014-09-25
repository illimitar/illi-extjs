Ext.define('Illi.store.atendimento.Atendimentos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.atendimento.Atendimento',
    baseUrl: '../atendimento/atendimento/iJson/',
    storeId: 'Atendimentos',
    autoLoad: true
});