Ext.define('Illi.view.ComboSituacao', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboSituacao',
    name: 'situacao',
    value: 'ATIVO',
    store: ['ATIVO', 'DESATIVO'],
    queryMode: 'local',
    initComponent: function() {
        this.callParent(arguments);
    }
});