Ext.define('Illi.view.produto.preco_produto.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaPrecoProduto',
    title: null,
    itemId: 'listaPrecoProduto',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.produto.preco_produto.Combo',
        'Illi.view.ComboTipoPreco',
        'Illi.view.ComboSituacao'
    ],
    filtroInicial: [
        {"property": "situacao", "value": "ATIVO", "type": "string", "operator": "eq"}
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'produto.Precos',
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
                        header: 'Nome',
                        dataIndex: 'nome',
                        flex: 1
                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'tipo',
                        editor: {
                            xtype: 'comboTipoPreco',
                            allowBlank: false
                        }
                    },
                    {
                        header: 'Data Início',
                        dataIndex: 'data_inicio',
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
                        header: 'Data Fim',
                        dataIndex: 'data_fim',
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
                        header: 'Preco Pai',
                        dataIndex: 'ppc.nome',
                        editor: {
                            xtype: 'comboPrecoProduto',
                            allowBlank: true,
                            trigger2Cls: false,
                            listeners: {
                                'blur': function(obj, e) {
                                    var grid = obj.up('grid');
                                    var porcentagem = grid.down('#porcentagem');
                                    if (obj.value) {
                                        porcentagem.getEditor().setDisabled(false);
                                    } else {
                                        porcentagem.getEditor().setDisabled(true);
                                    }
                                }
                            }
                        },
                        flex: 1
                    },
                    {
                        header: 'Fator (%)',
                        dataIndex: 'porcentagem',
                        itemId: 'porcentagem',
                        editor: {
                            disabled: true,
                            xtype: 'numberfield',
                            minValue: 0,
                            allowDecimals: true,
                            decimalPrecion: 2,
                            decimalSeparator: ',',
                            allowBlank: false
                        },
                        filter: {
                            'type': 'float'
                        },
                        flex: 0.75
                    },
                    {
                        header: 'Ativo',
                        dataIndex: 'situacao',
                        editor: {
                            xtype: 'comboSituacao',
                            allowBlank: false
                        }
                    }
                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'rowediting': {
                    listeners: {
                        beforeEdit: function(editor, obj, opt) {
                            var porcentagem = obj.grid.down('#porcentagem');
                            if (obj.record.get('ppc.nome')) {
                                porcentagem.getEditor().setDisabled(false);
                            } else {
                                porcentagem.getEditor().setDisabled(true);
                            }
                        }
                    }
                }
            }),
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("produto.Precos"),
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