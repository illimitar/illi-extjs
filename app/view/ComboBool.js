Ext.define('Illi.view.ComboBool', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboBool',
    store: [[false, 'NÃO'], [true, 'SIM']],
    queryMode: 'local',
    initComponent: function() {
        this.callParent(arguments);
    }
});