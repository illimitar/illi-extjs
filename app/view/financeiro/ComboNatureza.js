Ext.define('Illi.view.financeiro.ComboNatureza', {
    extend: 'Ext.ux.TreeCombo',
    selectChildren: true,
    canSelectFolders: false,
    alias: 'widget.comboTreeNatureza',
    rootVisible: false,
    tipo: null,
    queryMode: 'remote',
    queryParam: 'descricao',
    store: Ext.create('Ext.data.TreeStore', {
        storeId: 'storeMenus',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: '../fluxo/natureza_lancamento/iJson/combotree',
            //url: '../usuario/usuario/iJson/menuUsuario',
            noCache: true,
            actionMethods: {
                read: 'POST'
            }
        }
    }),
    initComponent: function() {
        var me = this;
        me.store.proxy.extraParams = {'tipo': me.tipo};
        me.callParent(arguments);
    }



});
