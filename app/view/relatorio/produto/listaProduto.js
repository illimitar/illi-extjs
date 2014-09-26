Ext.define('Illi.view.relatorio.produto.listaProduto', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.relatorioListaProduto',
    title: null,
    itemId: 'relatorioListaProduto',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.produto.produto.Combo',
        'Illi.store.produto.Produtos'
    ],
    sortableColumns: false,
    filter: false,
    editor: false,
    produto: false,
    initComponent: function () {
        var me = this;
        me.store = Ext.create('Illi.store.produto.Produtos', {
            autoDestroy: true,
            storeId: "relatorioListaProduto",
            proxy: {
                type: 'memory'
            },
            listeners: {}
        }),
                Ext.apply(me, {
                    tbar: {
                        items: [
                            {
                                xtype: 'comboProduto',
                                fieldLabel: null,
                                flex: 1,
                                listeners: {
                                    'select': function (obj, e) {
                                        try {
                                            me.produto = obj.valueModels[0].getData();
                                        } catch (e) {
                                            error(e);
                                        }
                                    },
                                    specialkey: function (btn, e) {
                                        if (e.getKey() === e.ENTER) {
                                            btn.up("grid").down("#btnIncluirProduto").fireHandler();
                                        }
                                    }
                                }
                            },
                            {
                                text: 'Incluir',
                                action: 'incluir',
                                itemId: "btnIncluirProduto",
                                scope: this,
                                iconCls: 'icon-adicionar',
                                handler: function (btn) {
                                    if (me.produto) {
                                        btn.up("grid").down("comboProduto").setValue(undefined).focus();
                                        me.store.add(me.produto);
                                        me.produto = false;
                                        me.store.sync();
                                    }
                                }
                            },
                            {
                                text: 'Limpar',
                                scope: this,
                                iconCls: 'icon-cancelar',
                                handler: function (btn) {
                                    btn.up('grid').store.removeAll();
                                }
                            }

                        ]
                    },
                    columns: {
                        defaults: {
                            filter: false,
                            editor: false
                        },
                        items: [
                            {
                                header: 'Produto',
                                dataIndex: 'nome',
                                flex: 1
                            },
                            {
                                header: 'Marca',
                                dataIndex: 'm.nome',
                                flex: 0.5
                            },
                            {
                                header: 'Grupo',
                                dataIndex: 'g.nome',
                                flex: 0.5
                            },
                            {
                                xtype: 'actioncolumn',
                                flex: 0.1,
                                align: 'right',
                                items: [
                                    {
                                        icon: Illi.app.Util.getPath("resources/images/icones/acao/remover.png"),
                                        width: 16,
                                        tooltip: 'Delete',
                                        handler: function (grid, rowIndex, colIndex) {
                                            var rec = grid.getStore().getAt(rowIndex);
                                            grid.getStore().removeAt(rowIndex);
                                        }
                                    }
                                ]
                            }

                        ]
                    }
                });
        me.callParent(arguments);
    }
});