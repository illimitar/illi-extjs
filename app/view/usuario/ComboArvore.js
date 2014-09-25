Ext.define('Illi.view.usuario.ComboArvore', {
    extend: 'Ext.ux.TreeCombo',
    selectChildren: true,
    canSelectFolders: false,
    alias: 'widget.comboArvoreAcesso',
    rootVisible: false,
    queryMode: 'Local',
    queryParam: 'titulo',
    handlerActionButton: false,
    minChars: 0,
    store: Ext.create('Ext.data.TreeStore', {
        storeId: 'treStoreAcesso',
        remoteFilter: true,
        autoLoad: false,
        proxy: {
            type: 'ajax',
            url: '../usuario/usuario/iJson/fastmenu',
            noCache: false,
            actionMethods: {
                read: 'POST'
            }
        }
    }),
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            listeners: {
                itemclick: function(view, record, item, index, evt, options) {
                    var tab = Ext.ComponentQuery.query('#tabCenter');
                    me.handlerActionButton(record, evt, tab);
                    me.setValue('');
                }
            }
        });
        me.callParent(arguments);
    }
});