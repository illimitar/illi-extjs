Ext.define('Illi.view.produto.codigo_barra.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboCodigoBarra',
    name: 'id_codigobarra',
    store: Ext.create('Illi.store.produto.CodigoBarras', {storeId: "comboCodigoBarras"}),
    displayField: 'codigo',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'codigo',
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">',
            ' {codigo} - {id}',
            '</div>',
            '</tpl>'
            ),
    trigger2Cls: 'trigger-add',
    onTrigger2Click: function() {
//        var controller = Illi.app.getController('produto.CodigoBarra');
//        if (!controller.carregado) {
//            controller.carregado = true;
//            controller.init();
//        }
        Ext.create('Illi.view.produto.codigo_barra.Janela').show();
    },
    initComponent: function() {
        this.callParent(arguments);
        this.store.getProxy().extraParams = {"situacao": "ATIVO"};
        this.store.load();
    }
});
