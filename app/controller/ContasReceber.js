Ext.define('Illi.controller.ContasReceber', {
    extend: 'Illi.controller.AbsFinanceiro',
    stores: ['Financeiros'],
    models: ['Financeiro'],
    views: ['financeiro.ContasReceber'],
    modulo: 'financeiroContasReceber'
});