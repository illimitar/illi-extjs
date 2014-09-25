Ext.define('Illi.view.financeiro.tipo_titulo.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboTipoTitulo',
    name: 'id_tipo_titulo',
    store: Ext.create('Illi.store.TipoTitulos', {storeId: "comboTipoTitulos"}),
    displayField: 'nome',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'descricao',
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">',
            ' {nome} - {id}',
            '</div>',
            '</tpl>'
            ),
    initComponent: function() {
        this.callParent(arguments);
        this.store.getProxy().extraParams = {"situacao": "ATIVO"};
        this.store.load();
    }
});