Ext.define('Illi.view.produto.unidade.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboUnidade',
    name: 'id_unidade',
    store: Ext.create('Illi.store.produto.Unidades', {storeId: "comboUnidades"}),
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
//        var controller = Illi.app.getController('produto.Unidade');
//        if (!controller.carregado) {
//            controller.carregado = true;
//            controller.init();
//        }
        Ext.create('Illi.view.produto.unidade.Janela').show();
    },
    initComponent: function() {
        this.callParent(arguments);
        this.store.getProxy().extraParams = {"situacao": "ATIVO"};
        this.store.load();
    }
});
