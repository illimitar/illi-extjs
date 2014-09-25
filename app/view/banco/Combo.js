Ext.define('Illi.view.banco.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.comboBanco',
    name: 'id_banco',
    store: Ext.create('Illi.store.Bancos'),
    displayField: 'nome',
    selectOnTab: true,
    valueField: 'id',
    queryMode: 'remote',
    lazyRender: true,
    queryParam: 'nome',
    typeAhead: true,
    forceSelection: false,
    triggerAction: 'all',
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">{id} - {nome}</div>',
            '</tpl>'
            ),
    initComponent: function() {
        this.callParent(arguments);
        this.store.load();

    }

});


