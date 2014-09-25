Ext.define('Illi.view.financeiro.Combo', {
    extend: 'Ext.form.field.ComboBox',
    queryMode: 'local',
    alias: 'widget.financeiroCombo',
    name: 'id_natureza_lancamento',
    store: Ext.create('Illi.store.Naturezas'),
    //store: 'Naturezas',
    displayField: 'descricao',
    selectOnTab: true,
    valueField: 'id',
    lazyRender: true,
    listClass: 'x-combo-list-small',
    triggerAction: 'all',
    forceSelection: true,
    initComponent: function() {
        this.callParent(arguments);
        this.store.load();
    }
});
