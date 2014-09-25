Ext.define('Illi.view.boleto.ComboContaBoleto', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.comboContaBoleto',
    name: 'id_conta',
    store: Ext.create('Illi.store.BancoBoletos', {storeId: "comboContaBoletos"}),
    displayField: 'nome',
    fieldLabel: 'Conta',
    valueField: 'id',
    queryMode: 'local',
    typeAhead: true,
    forceSelection: true,
    triggerAction: 'all'
});
