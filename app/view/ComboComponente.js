Ext.define('Illi.view.ComboComponente', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboComponente',
    name: 'componente',
    value: 'TAB',
    store: ['TAB', 'WINDOW', 'FULLSCREEN'],
    queryMode: 'local',
    initComponent: function() {
        this.callParent(arguments);
    }
});