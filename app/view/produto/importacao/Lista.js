Ext.define('Illi.view.produto.importacao.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaProdutoImportacao',
    title: null,
    itemId: 'listaProdutoImportacao',
    emptyText: "Nenhum registro para ser processado, clique em 'Importar' para iniciar o processamento...",
    requires: [
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'produto.ImportacaoProdutos',
            tbar: {
                items: [
                    {
                        text: 'Importar',
                        action: 'enviar',
                        iconCls: 'icon-importar',
                        itemId: 'enviar'
                    },
                    {
                        text: 'Processar',
                        action: 'processar',
                        iconCls: 'icon-confirmar',
                        itemId: 'processar'
                    },
                    '->',
                    {
                        text: 'Atualizar',
                        action: 'atualizar',
                        iconCls: 'icon-atualizar'
                    }
                ]
            },
            columns: {
                defaults: {
                    filter: true,
                    editor: true,
                    allowblank: true
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id', // nome do campo no model
                        editor: false, // permite edição
                        filter: {
                            'type': 'int'
                        }
                    },
                    {
                        header: 'Código',
                        dataIndex: 'codigo',
                        width: 50
                    },
                    {
                        header: 'Desc. Resumida',
                        dataIndex: 'nome',
                        flex: 0.8
                    },
                    {
                        header: 'Descricao',
                        dataIndex: 'descricao',
                        flex: 1
                    },
                    {
                        header: 'Unidade',
                        dataIndex: 'unidade',
                        width: 70
                    },
                    {
                        header: 'Vl. Custo',
                        renderer: Illi.app.Util.valorRenderer,
                        editor: {
                            xtype: 'numberfield',
                            allowBlank: true
                        },
                        dataIndex: 'custo',
                        align: 'right',
                        width: 80,
                        minWidth: 80
                    },
                    {
                        header: 'Vl. Venda',
                        renderer: Illi.app.Util.valorRenderer,
                        dataIndex: 'venda',
                        editor: {
                            xtype: 'numberfield',
                            allowBlank: true
                        },
                        align: 'right',
                        width: 80,
                        minWidth: 80
                    },
                    {
                        header: 'Vl. Venda 2',
                        renderer: Illi.app.Util.valorRenderer,
                        editor: {
                            xtype: 'numberfield',
                            allowBlank: true
                        },
                        dataIndex: 'venda2',
                        align: 'right',
                        hidden: true,
                        width: 80,
                        minWidth: 80
                    },
                    {
                        header: 'Grupo',
                        dataIndex: 'grupo',
                        width: 150
                    },
                    {
                        header: 'Categoria',
                        dataIndex: 'categoria',
                        width: 70
                    },
                    {
                        header: 'Marca',
                        dataIndex: 'marca',
                        width: 150
                    },
                    {
                        header: 'Observação',
                        dataIndex: 'observacao',
                        width: 70
                    },
                    {
                        header: 'NCM',
                        dataIndex: 'ncm',
                        hidden: true,
                        width: 70
                    },
                    {
                        header: 'Aliquota',
                        dataIndex: 'aliquota',
                        hidden: true,
                        width: 70
                    },
                    {
                        header: 'CST Origem',
                        dataIndex: 'cst_origem',
                        hidden: true,
                        width: 70
                    },
                    {
                        header: 'CST Destino',
                        dataIndex: 'cst_destino',
                        hidden: true,
                        width: 70
                    },
                    {
                        header: 'IPI',
                        dataIndex: 'ipi',
                        hidden: true,
                        width: 70
                    },
                    {
                        header: 'Codigo EAN',
                        dataIndex: 'codigo_ean',
                        hidden: true,
                        width: 70
                    },
                    {
                        header: 'Grade X',
                        dataIndex: 'gradex',
                        hidden: true,
                        width: 70
                    },
                    {
                        header: 'Grade Y',
                        dataIndex: 'gradex',
                        hidden: true,
                        width: 70
                    },
                    {
                        header: 'Produto Grade',
                        dataIndex: 'produto_grade',
                        hidden: true,
                        width: 70
                    },
                    {
                        header: 'Data',
                        dataIndex: 'data',
                        xtype: 'datecolumn',
                        editor: false,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s')
                    },
                    {
                        header: 'Data Importação',
                        dataIndex: 'data_importacao',
                        xtype: 'datecolumn',
                        editor: false,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s')
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("produto.ImportacaoProdutos"),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            try {
                grid.store.load();
            } catch (e) {
                error(e);
            }
        }
    }
});