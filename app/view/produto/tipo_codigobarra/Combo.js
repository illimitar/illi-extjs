Ext.define('Illi.view.produto.tipo_codigobarra.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboTipoCodigoBarra',
    name: 'id_tipo_codigobarra',
    store: Ext.create('Illi.store.produto.TipoCodigoBarras', {storeId: "comboTipoCodigoBarras"}),
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
//        var controller = Illi.app.getController('produto.TipoCodigoBarra');
//        if (!controller.carregado) {
//            controller.carregado = true;
//            controller.init();
//        }
        Ext.create('Illi.view.produto.tipo_codigobarra.Janela').show();
    },
    initComponent: function() {
        this.callParent(arguments);
        this.store.getProxy().extraParams = {"situacao": "ATIVO"};
        this.store.load();
    }
});
