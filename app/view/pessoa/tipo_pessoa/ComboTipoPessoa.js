Ext.define('Illi.view.pessoa.tipo_pessoa.ComboTipoPessoa',{

    extend          : 'Ext.form.field.ComboBox',
    alias           : 'widget.ComboTipoPessoa',
    name            : 'id_tipo_pessoa',
    ref             : 'id_tipo_pessoa',
    store: Ext.create('Illi.store.TipoPessoasCombo'),
    fieldLabel      : 'Tipo Pessoa',
    displayField    : 'tipo',
    valueField      : 'id',
    queryMode       : 'local',
    typeAhead       : true,
    forceSelection  : true,
    triggerAction   : 'all',


    initComponent   : function(){
        this.callParent(arguments);
        this.store.load();

    }

});


