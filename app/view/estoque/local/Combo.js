Ext.define('Illi.view.estoque.local.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboLocalEstoque',
    name: 'id_local',
    store: Ext.create('Illi.store.estoque.Locais', {storeId: "comboLocais"}),
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
//        var controller = Illi.app.getController('estoque.Local');
//        if (!controller.carregado) {
//            controller.carregado = true;
//            controller.init();
//        }
        Ext.create('Illi.view.estoque.local.Janela').show();
    },
    initComponent: function() {
        this.callParent(arguments);
        this.store.getProxy().extraParams = {"situacao": "ATIVO"};
        this.store.load();
    }
});
