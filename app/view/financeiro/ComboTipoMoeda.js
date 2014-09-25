Ext.define('Illi.view.financeiro.ComboTipoMoeda', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboTipoMoeda',
    name: 'tipo',
    store: ['RECEITA', 'DESPESA','NENHUM'],
    queryMode: 'local',
    initComponent: function() {
        this.callParent(arguments);
    }
});
