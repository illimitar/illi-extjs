Ext.define('Illi.controller.ContasApagar', {
    extend: 'Illi.controller.AbsFinanceiro',
    stores: ['Financeiros'],
    models: ['Financeiro'],
    views: ['financeiro.ContasApagar', 'financeiro.Container','financeiro.Arvore'],
    modulo: 'financeiroContasApagar'
});