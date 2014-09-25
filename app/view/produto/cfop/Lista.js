Ext.define('Illi.view.produto.cfop.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listCfop',
    itemId: 'listCfop',
    emptyText: "Nenhum registro encontrado",
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'produto.Cfops',
            columns: {
                defaults: {
                    filter: true,
                    editor: {
                        allowBlank: false
                    }
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id', // nome do campo no model
                        editor: false, // permite edição
                        hidden: true,
                        filter: {
                            'type': 'int'
                        }
                    },
                    {
                        header: 'Codigo',
                        dataIndex: 'codigo'
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        flex: 1
                    },
                    {
                        header: 'Aplicação',
                        dataIndex: 'aplicacao',
                        flex: 1
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("produto.Cfops"),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.callParent(arguments);
    },
    onRender: function() {
        var me = this;
        me.callParent(arguments);
        me.store.load();

    }
});