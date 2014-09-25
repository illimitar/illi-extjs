Ext.define('Illi.view.relatorio.ComboTipo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboTipoRelatorio',
    name: 'tipo',
    value: 'FLUXO',
    store: ['FLUXO', 'CAIXA', 'MOVIMENTACAO', 'PRODUTO', 'VENDA', 'ETIQUETA'],
    queryMode: 'local',
    initComponent: function() {
        this.callParent(arguments);
    }
});