Ext.define('Illi.view.estoque.estoque.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaEstoque',
    title: null,
    itemId: 'listaEstoque',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.estoque.local.Combo',
        'Illi.view.produto.produto.Combo',
        'Illi.view.ComboSituacao'
    ],
    filtroInicial: [
        {"property": "situacao", "value": "ATIVO", "type": "string", "operator": "eq"}
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'estoque.Estoques',
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
                        disabled: true,
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'

                    },
                    {
                        text: 'Duplicar ',
                        action: 'duplicar',
                        disabled: true,
                        iconCls: 'icon-duplicar',
                        itemId: 'duplicar'

                    },
                    {
                        text: 'Atualizar',
                        action: 'atualizar',
                        disabled: true,
                        iconCls: 'icon-atualizar',
                        itemId: 'atualizar'
                    }
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
                        header: 'Produto',
                        dataIndex: 'p.nome',
                        editor: {
                            xtype: 'comboProduto',
                            allowBlank: false
                        },
                        flex: 1
                    },
                    {
                        header: 'Qtde. Mínima',
                        dataIndex: 'minimo',
                        align: 'right',
                        editor: {
                            xtype: 'numberfield',
                            minValue: 1,
                            allowDecimals: false,
                            allowBlank: false

                        },
                        filter: {
                            'type': 'int'
                        },
                        flex: 1
                    },
                    {
                        header: 'Qtde. Máximo',
                        dataIndex: 'maximo',
                        align: 'right',
                        editor: {
                            xtype: 'numberfield',
                            minValue: 1,
                            allowDecimals: false,
                            allowBlank: false

                        },
                        filter: {
                            'type': 'int'
                        },
                        flex: 1
                    },
                    {
                        header: 'Qtde. Compra',
                        dataIndex: 'compra',
                        align: 'right',
                        editor: {
                            xtype: 'numberfield',
                            minValue: 1,
                            allowDecimals: false,
                            allowBlank: false

                        },
                        filter: {
                            'type': 'int'
                        },
                        flex: 1
                    },
                    {
                        header: 'Qtde. Reservado',
                        dataIndex: 'reservado',
                        align: 'right',
                        editor: {
                            xtype: 'numberfield',
                            minValue: 1,
                            allowDecimals: false,
                            allowBlank: false

                        },
                        filter: {
                            'type': 'int'
                        },
                        flex: 1
                    },
                    {
                        header: 'Data Saldo',
                        dataIndex: 'data_saldo',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        width: 100,
                        editor: {
                            format: 'd/m/Y',
                            xtype: 'datefield',
                            allowBlank: true
                        },
                        flex: 1
                    },
                    {
                        header: 'Data Compra',
                        dataIndex: 'data_compra',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        width: 100,
                        editor: {
                            format: 'd/m/Y',
                            xtype: 'datefield',
                            allowBlank: true
                        },
                        flex: 1
                    },
                    {
                        header: 'Data Reservado',
                        dataIndex: 'data_reservado',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        width: 100,
                        editor: {
                            format: 'd/m/Y',
                            xtype: 'datefield',
                            allowBlank: true
                        },
                        flex: 1
                    },
                    {
                        header: 'Local',
                        dataIndex: 'l.nome',
                        editor: {
                            xtype: 'comboLocalEstoque',
                            allowBlank: false
                        },
                        flex: 1
                    },
                    {
                        header: 'Ativo',
                        dataIndex: 'situacao',
                        editor: {
                            xtype: 'comboSituacao',
                            allowBlank: false
                        },
                        flex: 0.75
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("estoque.Estoques"),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            grid.store.filter(grid.filtroInicial);
        }
    },
    onRender: function() {
        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange', this.selecionar, this);
        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
        this.down('#atualizar').setDisabled(!this.ativarBotao('atualizar'));
    },
    selecionar: function(selModel, selections) {
        if (selections[0]) {
            this.down('#duplicar').setDisabled(!this.ativarBotao('duplicar'));
        }
    }
});