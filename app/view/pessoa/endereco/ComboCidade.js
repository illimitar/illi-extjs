var cadastroCidade = function(){
    var formCidade = Ext.create('Illi.view.pessoa.endereco.FormCidade');
    formCidade.show();
};
Ext.define('Illi.view.pessoa.endereco.ComboCidade',{

    extend          : 'Ext.form.field.ComboBox',
    alias           : 'widget.ComboCidade',
    name            : 'id_cidade',
    itemId          : 'comboCidade', 
    ref             : 'id_cidade',
    store: Ext.create('Illi.store.Cidades'),
    fieldLabel      : 'Cidade',
    displayField    : 'cidade',
    valueField      : 'id',
    //typeAhead       : true,
    //forceSelection  : true,
    queryMode       : 'remote',
    queryParam      : 'cidade',
    remoteFilter    :true,
    triggerAction   : 'all',
    trigger2Cls: 'trigger-add',
    onTrigger2Click: cadastroCidade,

    initComponent   : function(){
        this.callParent(arguments);
        this.store.load();

    }

});


