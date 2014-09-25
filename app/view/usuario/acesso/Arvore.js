Ext.define('Illi.view.usuario.acesso.Arvore', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.arvoreAcesso',
    itemId: 'arvoreAcesso',
    //
    rootVisible: false,
    useArrows: true,
    nodeSelected: 0,
    //
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            store: Ext.create('Ext.data.TreeStore', {
                storeId: 'treeStoreAcessoPai',
                remoteFilter: true,
                autoLoad: false,
                proxy: {
                    type: 'ajax',
                    url: '../usuario/acesso/iJson/lista_arvore',
                    noCache: false,
                    actionMethods: {
                        read: 'POST'
                    }
                },
                listeners: {
                    load: function(proxy, operation) {
                        me.getSelectionModel().select(me.nodeSelected);
                    }
                }
            }),
            listeners: {
                itemclick: function(node, record, item, index, e, eOpts) {
                    var grid = me.up('container').down('grid');
                    var store = Ext.getStore("Acessos");
                    var id = (record.raw.nodeSelectable ? record.raw.id_acesso : record.parentNode.raw.id_acesso);
                    var text = (record.raw.nodeSelectable ? record.raw.text : record.parentNode.raw.text);
                    me.nodeSelected = index;
                    store.proxy.extraParams = {"id_acesso": id};
                    store.load();
                    grid.setTitle(text);
                }
            }
        });
        me.callParent(arguments);
    }
});