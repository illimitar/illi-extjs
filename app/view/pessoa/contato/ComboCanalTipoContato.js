Ext.define('Illi.view.pessoa.contato.ComboCanalTipoContato', {
    extend: 'Ext.form.field.ComboBox',
    queryMode: 'local',
    alias: 'widget.canalTipoContato',
    name: 'canal',
    fieldLabel: 'Canal de Contato',
    store: [
        ['TELEFONE', 'TELEFONE'],
        ['FAX', 'FAX'],
        ['RADIO', 'RADIO'],
        ['EMAIL', 'EMAIL'],
        ['SITE', 'SITE']
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
