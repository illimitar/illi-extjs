Ext.define('Illi.view.natureza.treeGrid', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.treeGridNatureza',
    itemId: 'treeGridNatureza',
    rootVisible: false,
    useArrows: false,
    autoScroll: true,
    animate: true,
    enableDD: true,
    containerScroll: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            columnLines: true,
            store: Ext.create('Ext.data.TreeStore', {
                storeId: 'treeStoreNaturezaPai',
                remoteFilter: true,
                autoLoad: false,
                fields: [
                    {name: 'id'}, 
                    {name: 'leaf'}, 
                    {name: 'text', type: 'string'}, 
                    {name: 'classificacao', type: 'string'}
                ],
                proxy: {
                    type: 'ajax',
                    url: '../fluxo/natureza_lancamento/ijson/combotree',
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
            columns: [
                {
                    xtype: 'treecolumn',
                    text: 'Descrição',
                    flex: 1,
                    dataIndex: 'text'
                },
                {
                    text: 'Id',
                    dataIndex: 'id'
                },
                {
                    text: 'Pai',
                    dataIndex: 'leaf'
                },
                {
                    text: 'Classificação',
                    dataIndex: 'classificacao'
                }
            ],
            tbar: {
                items: [
                    {
                        text: 'Imprimir Grade',
                        iconCls: 'icon-imprimir',
                        action: 'imprimir',
                        itemId: 'imprimir'
                    }
                ]
            },
            viewConfig: {
                plugins: [
                    {
                        ptype: 'treeviewdragdrop'
                    }
//                    {
//                        ptype: 'rowediting',
//                        pluginId: 'editorGrid',
//                        clicksToEdit: 0,
//                        errorSummary: false
//                    }
                ],
                stripeRows: true
            }
        });

        me.callParent(arguments);
    }
});