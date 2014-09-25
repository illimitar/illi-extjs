Ext.define('Illi.view.pessoa.ComboJuridica', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.financeiroPessoaComboJuridica',
    name : 'cnpj',
    ref: 'id_pessoa',
    store: Ext.create('Illi.store.Juridicas'),
    //store: 'Pessoas',
    displayField: 'cnpj',
    valueField: 'id_pessoa',
    queryMode: 'local',
    typeAhead: true,
    forceSelection: true,
    initComponent: function() {
        this.callParent(arguments);
        this.store.load();
    }
});
