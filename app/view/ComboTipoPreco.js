Ext.define('Illi.view.ComboTipoPreco', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboTipoPreco',
    name: 'tipo',
    value: 'VENDA',
    store: ['VENDA', 'CUSTO', 'PROMOCAO'],
    queryMode: 'local',
    initComponent: function() {
        this.callParent(arguments);
    }
});