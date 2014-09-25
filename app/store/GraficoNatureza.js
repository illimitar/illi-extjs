Ext.define('Illi.store.GraficoNatureza', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    fields: ['valor', 'grupo', 'id', 'id_pai', 'filho'],
    illiRead: 'grafico_natureza_lancamento',
    baseUrl: '../fluxo/grafico/iJson/',
    storeId: 'GraficoNatureza',
    autoLoad: true
});