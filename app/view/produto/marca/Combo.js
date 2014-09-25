Ext.define('Illi.view.produto.marca.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboMarca',
    name: 'id_marca',
    store: Ext.create('Illi.store.produto.Marcas', {storeId: "comboMarcas"}),
    displayField: 'nome',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'nome',
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">',
            ' {nome} - {id}',
            '</div>',
            '</tpl>'
            ),
    trigger2Cls: 'trigger-add',
    onTrigger2Click: function() {
        Ext.create('Illi.view.produto.marca.Janela').show();
    },
    initComponent: function() {
        this.callParent(arguments);
        this.store.getProxy().extraParams = {"situacao": "ATIVO"};
        this.store.load();
    }
});
