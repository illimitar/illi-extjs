Ext.define('Illi.view.relatorio.AReceber', {
    extend: 'Illi.view.relatorio.APagar',
    alias: 'widget.aReceber',
    titulo: 'Relatório de Contas a Receber.',
    tipo: 'RECEITA',
    idStorePessoa: 'filtroPessoaAReceber',
    initComponent: function() {
        var me = this;
        me.callParent(arguments);
    }
});