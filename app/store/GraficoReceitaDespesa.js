Ext.define('Illi.store.GraficoReceitaDespesa', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    fields: [
        'mes',
        {
            name: 'DESPESA',
            type: 'float'
        },
        {
            name: 'RECEITA',
            type: 'float'
        }],
    illiRead: 'grafico_receita_despesa',
    baseUrl: '../fluxo/grafico/iJson/',
    storeId: 'GraficoReceitaDespesa',
    autoLoad: true
});