Ext.define('Illi.view.produto.ibpt.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listIBPT',
    itemId: 'listIBPT',
    emptyText: "Nenhum registro encontrado",
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'produto.IBPTs',
            tbar: {
                items: [
//                    {
//                        text: 'Incluir',
//                        action: 'incluir',
//                        disabled: true,
//                        iconCls: 'icon-adicionar',
//                        itemId: 'incluir'
//
//                    },
//                    {
//                        text: 'Duplicar ',
//                        action: 'duplicar',
//                        disabled: true,
//                        iconCls: 'icon-duplicar',
//                        itemId: 'duplicar'
//
//                    },
//                    {
//                        text: 'Atualizar',
//                        action: 'atualizar',
//                        iconCls: 'icon-atualizar',
//                        itemId: 'atualizar'
//                    }
                ]
            },
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
                        header: 'EX',
                        dataIndex: 'ex'
                    },
                    {
                        header: 'Tabela',
                        dataIndex: 'tabela'
                    },
                    {
                        header: 'Aliq. Nacional',
                        dataIndex: 'aliqnac'
                    },
                    {
                        header: 'Aliq. IMP',
                        dataIndex: 'aliqimp'
                    },
                    {
                        header: 'Versão',
                        dataIndex: 'versao'
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("produto.IBPTs"),
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