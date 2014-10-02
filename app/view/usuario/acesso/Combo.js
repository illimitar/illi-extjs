Ext.define('Illi.view.usuario.acesso.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboAcesso',
    name: 'id_acesso',
    store: Ext.create('Illi.store.Acessos', {storeId: "comboAcessos"}),
    displayField: 'titulo',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'titulo',
    initComponent: function() {
        this.callParent(arguments);
        this.store.load();
    }
});
////Ext.define('Illi.view.usuario.acesso.Combo', {
//    extend: 'Illi.view.AbstractCombo',
//    alias: 'widget.comboAcesso',
//    name: 'id_acesso',
//    store: Ext.create('Illi.store.Acessos', {storeId: "comboAcessos"}),
//    displayField: 'titulo',
//    valueField: 'id',
//    queryMode: 'remote',
//    queryParam: 'titulo',
//    tpl: Ext.create('Ext.XTemplate',
//            '<tpl for=".">',
//            '<div class="x-boundlist-item">',
//            '<tpl if="url">',
//            ' {titulo} - {id} <span style="float: right;">{url}</span>',
//            '<tpl else>',
//            ' {titulo} - {id}',
//            '</tpl>',
//            '</div>',
//            '</tpl>'
//            ),
//    initComponent: function() {
//        this.callParent(arguments);
//        this.store.getProxy().extraParams = {"situacao": "ATIVO"};
//        this.store.load();
//    }
//});