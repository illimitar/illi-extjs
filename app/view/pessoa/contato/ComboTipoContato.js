var cadastroTipoContato = function() {
    var formTipoContato = Ext.create('Illi.view.pessoa.contato.FormTipoContato');
    formTipoContato.show();
};
Ext.define('Illi.view.pessoa.contato.ComboTipoContato', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.ComboTipoContato',
    name: 'id_tipo_contato',
    fieldLabel: 'Tipo Contato',
    displayField: 'tipo',
    valueField: 'id',
    queryMode: 'remote',
    minChars: 0,
    remoteFilter: true,
    typeAhead: true,
    triggerAction: 'all',
    trigger2Cls: 'trigger-add',
    onTrigger2Click: cadastroTipoContato,
    store: Ext.create('Illi.store.TipoContatos'),
    initComponent: function() {
        this.callParent(arguments);
        this.store.load();
    }

});


