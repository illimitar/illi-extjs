Ext.define('Illi.view.relatorio.ComboVendedor', {
    extend: 'Ext.form.field.ComboBox',
    queryMode: 'local',
    alias: 'widget.ComboVendedor',
    name: 'id_vendedor',
    store: Ext.create('Illi.store.Vendedores'),
    displayField: 'nome',
    selectOnTab: true,
    valueField: 'id',
    typeAhead: true,
    listClass: 'x-combo-list-small',
    triggerAction: 'all',
    forceSelection: true,
    initComponent: function() {
        this.callParent(arguments);
        this.store.load();
    }
});