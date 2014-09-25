Ext.define('Illi.view.banco.conta.ComboTipoConta', {
    extend: 'Ext.form.field.ComboBox',
    queryMode: 'local',
    alias: 'widget.comboTipoConta',
    name: 'situacao',
    store: [
        ['CC', 'CC'],
        ['CP', 'CP'],
        ['CARTEIRA', 'CARTEIRA']
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