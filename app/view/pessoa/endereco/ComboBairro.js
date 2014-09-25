Ext.define('Illi.view.pessoa.endereco.ComboBairro', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.ComboBairro',
    name: 'id_bairro',
    ref: 'id_bairro',
    itemId: 'comboBairro',
    store: Ext.create('Illi.store.Bairros'),
    fieldLabel: 'Bairro',
    displayField: 'bairro',
    valueField: 'id',
    //forceSelection  : true,
    queryMode: 'remote',
    queryParam: 'bairro',
    typeAhead: true,
    triggerAction: 'all',
    trigger2Cls: 'trigger-add',
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">{id} - {bairro}</div>',
            '</tpl>'
            ),
    onTrigger2Click: function() {
        var formBairro = Ext.create('Illi.view.pessoa.endereco.FormBairro');
        formBairro.show();
    },
    initComponent: function() {
        this.callParent(arguments);
        this.store.load();

    }

});


