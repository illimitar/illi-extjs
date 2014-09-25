Ext.define('Illi.view.financeiro.ListBaixa', {
    extend: 'Illi.view.AbstractList',
    requires: [
        'Illi.view.financeiro.Combo',
        'Illi.view.financeiro.ComboTipoDespesa',
        'Illi.view.financeiro.EditValor',
        'Illi.view.banco.conta.Combo'
    ],
    alias: 'widget.financeiroListBaixa',
    itemId: 'financeiroListBaixa',
    selecionados: null,
    title: null,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            selModel: {
                selectAll: true,
                allowDeselect: true
            },
            scope: me,
            store: me.setStore,
            tbar: null,
            columns: [
                {
                    menuDisabled: true,
                    sortable: false,
                    xtype: 'actioncolumn',
                    width: 50,
                    header: 'Negociar Titulo',
                    scope: me,
                    text: 'Detail',
                    items: [
                        {
                            icon: '../resources/images/icones/acao/editar.png',
                            tooltip: 'Negociar Titulo',
                            handler: function(grid, rowIndex, colIndex) {
                                var store = me.getStore();
                                var records = me.getStore().getAt(rowIndex);
                                var janelaValor = Ext.create('Illi.view.financeiro.EditValor',
                                        {
                                            valorTitulo: records.get('valor_titulo'),
                                            listeners: {
                                                beforehide: function() {
                                                    grid.store.load();
                                                }
                                            }
                                        });
                                var form = janelaValor.down('form');
                                form.getForm().loadRecord(records);
                            },
                            getClass: function(value, metadata, record) {
                                var data_prebaixa = record.get('data_prebaixa');
                                if (data_prebaixa) {
                                    return 'x-hide-display';
                                }
                            }


                        }]
                }
                ,
                {
                    header: 'Numero',
                    dataIndex: 'numero'
                },
                {
                    header: 'Dt. Emissão',
                    dataIndex: 'data_emissao',
                    xtype: 'datecolumn',
                    renderer: Ext.util.Format.dateRenderer('d/m/Y')
                },
                {
                    header: 'Dt. Vencimento',
                    dataIndex: 'data_vencimento',
                    renderer: Ext.util.Format.dateRenderer('d/m/Y')
                },
                {
                    header: 'Vl. Titulo',
                    renderer: Illi.app.Util.valorRenderer,
                    summaryType: 'sum',
                    dataIndex: 'valor_titulo',
                    align: 'right',
                    summaryRenderer: function(value) {
                        return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                    }

                },
                {
                    header: 'Vl. Pago',
                    renderer: Illi.app.Util.valorRenderer,
                    summaryType: 'sum',
                    dataIndex: 'valor_pago',
                    align: 'right',
                    summaryRenderer: function(value) {
                        return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                    }

                },
                {
                    header: 'Parceiro',
                    dataIndex: 'p.nome',
                    flex: 1

                },
                {
                    header: 'Conta/Carteira',
                    dataIndex: 'c.nome',
                    editor: {
                        xtype: 'comboConta',
                        allowBlank: false
                    },
                    flex: 3
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        {
                            text: 'Baixar',
                            action: 'baixarSelecionados',
                            iconCls: 'icon-dinheiro',
                            itemId: 'baixarSelecionados',
                            disabled: true

                        },
                        {
                            text: 'Pré Baixar',
                            action: 'preBaixa',
                            iconCls: 'icon-dinheiro',
                            itemId: 'preBaixa',
                            disabled: true

                        },
                        '->',
                        me.baixarTexto


                    ]
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items:
                            [
                                {
                                    xtype: 'comboConta',
                                    fieldLabel: 'Conta',
                                    flex: 0.7
                                },
                                {
                                    xtype: 'datefield',
                                    itemId: 'dataReferencia',
                                    fieldLabel: 'Data Referência'
                                }
                            ]
                }

            ],
            plugins: Illi.app.Util.setPlugins({
                'rowediting': {
                    listeners: {
                        beforeEdit: function(editor, grid, opt) {
                            grid.record.set('c.nome', grid.record.get('c.id'));
                        },
                        afterEdit: function(editor, grid, opt) {
                            grid.record.set('c.id', grid.record.get('c.nome'));
                            if (grid.store.getModifiedRecords()[0]) {
                                editor.grid.el.mask('Salvando...');
                                editor.grid.store.sync({
                                    callback: function() {
                                        grid.grid.el.unmask();
                                        grid.store.sort('id', 'DESC');
                                    }
                                });
                            }

                        }
                    }
                }
            })
        });
        me.callParent(arguments);
    },
    onRender: function() {
        this.callParent(arguments);
        this.down('#baixarSelecionados').setDisabled(!this.ativarBotao('baixarSelecionados'));
        this.down('#preBaixa').setDisabled(!this.ativarBotao('preBaixa'));
    },
    listeners: {
        afterrender: function(grid) {
            grid.store.getProxy().extraParams = {
                filter: Ext.JSON.encode([{"property": "id", "value": this.selecionados, "type": "list", "operator": "eq"}])
            };
            grid.store.load();
        }
    }



});