Ext.define('Illi.view.financeiro.tipo_movimentacao.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboTipoMovimentacao',
    name: 'id_tipo_movimentacao',
    store: Ext.create('Illi.store.TipoMovimentacoes', {storeId: "comboTipoMovimentacoes"}),
    displayField: 'nome',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'nome',
    minChars: 0,
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