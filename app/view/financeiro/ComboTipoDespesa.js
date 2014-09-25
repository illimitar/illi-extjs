Ext.define('Illi.view.financeiro.ComboTipoDespesa', {
    extend: 'Ext.form.field.ComboBox',
    queryMode: 'local',
    alias: 'widget.tipoDespesa',
    name: 'tipo',
    store: [
        ['DESPESA', 'DESPESA'],
        ['RECEITA', 'RECEITA']
    ],
    selectOnTab: true,
    lazyRender: true,
    listClass: 'x-combo-list-small',
    triggerAction: 'all',
    forceSelection: true,
    initComponent: function() {
        this.callParent(arguments);
    }
});
