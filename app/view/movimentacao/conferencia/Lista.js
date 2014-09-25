Ext.define('Illi.view.movimentacao.conferencia.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaConferenciaMovimentacao',
    itemId: 'listaConferenciaMovimentacao',
    title: 'Itens do Pedido',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.ComboSituacao',
        'Illi.view.produto.produto.Combo'
    ],
    idMovimentacao: false,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            enableColumnHide: false,
            enableColumnMove: false,
            enableColumnResize: false,
            sortableColumns: false,
            autoScroll: true,
            store: Ext.create('Ext.data.JsonStore', {
                storeId: 'storeMovimentacaoConferencia',
                autoSync: true,
                fields: [
                    {name: 'id', type: 'int'},
                    {name: 'id_antigo', type: 'int'},
                    {name: 'pg.id', type: 'int'},
                    {name: 'codigo'},
                    {name: 'descricao'},
                    {name: 'qtde', type: 'float'},
                    {name: 'valor', type: 'float'},
                    {name: 'totalitem', type: 'float'}
                ],
                proxy: {
                    type: 'memory',
                    reader: {
                        type: 'json'
                    }
                },
                listeners: {
                    datachanged: {
                        element: this,
                        fn: function(store) {
                            var win = me.up('#janelaConferenciaMovimentacao');
                            var valor = '<span style="font-size: 1.3em; padding-left:50px; color:blue"><b>Total de Itens: </b>' + Illi.app.Util.floatRenderer(store.sum('qtde')) + '</span>';
                            win.down('#qtdeTotal').update(valor);
                            var valor = '<span style="font-size: 1.3em; padding-left:50px; color:green"><b>Valor Total: </b>' + Illi.app.Util.valorRenderer(store.sum('totalitem')) + '</span>';
                            win.down('#valorTotal').update(valor);
                        }
                    }
                }
            }),
            columns: {
                defaults: {
                    menuDisabled: true,
                    flex: 1
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        hidden: true
                    },
                    {
                        header: 'ID Antigo',
                        dataIndex: 'id_antigo',
                        hidden: true
                    },
                    {
                        header: 'ID Produto Grade',
                        dataIndex: 'pg.id',
                        hidden: true

                    },
                    {
                        header: 'Codigo',
                        dataIndex: 'codigo',
                        width: 15
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        flex: 2.5,
                        editor: {
                            xtype: 'comboProduto',
                            permitirAdicao: true,
                            store: Ext.create('Illi.store.produto.Produtos', {storeId: "comboProdutosDetalhe", autoDestroy: true}),
                            listeners: {
                                'select': function(combo, records) {
//                                    var plugin = me.getPlugin('editorGrid-listaConferenciaMovimentacao');
//                                    var form = plugin.getEditor().getForm();
                                    var grid = combo.up("grid");
//                                    var grid = combo.up("#listaConferenciaMovimentacao");
                                    var form = grid.editingPlugin.getEditor().getForm();
                                    if (form) {
                                        form.findField('id_antigo').setValue('');
                                        form.findField('pg.id').setValue(records[0].get('id'));
                                        form.findField('codigo').setValue(records[0].get('codigo'));
                                        form.findField('valor').setValue(records[0].get('pc.valor'));
                                        form.findField('descricao').setValue(records[0].get('descricao'));
                                    }
                                }
                            }
                        }
                    },
                    {
                        header: 'Qtde.',
                        dataIndex: 'qtde',
                        summaryType: 'sum',
                        allowBlank: false,
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + value + '</span>';
                        },
                        editor: {
                            xtype: 'numberfield',
                            minValue: 0.00
                        }
                    },
                    {
                        header: 'Valor Unit.',
                        dataIndex: 'valor',
                        align: 'right',
                        width: 80,
                        minWidth: 80,
                        renderer: Illi.app.Util.valorRenderer,
                        editor: Illi.app.Util.campoMoeda('valor')
                    },
                    {
                        header: 'Valor Total',
                        dataIndex: 'totalitem',
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    }
                ]
            },
            editando: false,
            plugins: Illi.app.Util.setPlugins({
                'filterbar': false,
                'rowediting': {
                    ptype: 'rowediting',
                    clicksToEdit: 0,
                    autoCancel: true,
                    errorSummary: false,
                    listeners: {
                        edit: function(editor, e, opt) {
                            var store = Ext.getStore("storeMovimentacaoConferencia");
                            var form = editor.getEditor().getForm();
                            if (form) {
                                var qtd = e.record.get('qtde');
                                var valor = e.record.get('valor');
                                var id = e.record.get('id');
                                e.record.set('id', (id ? id : store.getCount() + 1));
                                e.record.set('id_antigo', form.findField('id_antigo').getValue());
                                e.record.set('pg.id', form.findField('pg.id').getValue());
                                e.record.set('codigo', form.findField('codigo').getValue());
                                e.record.set('descricao', form.findField('descricao').getValue());
                                e.record.set('totalitem', qtd * valor);
                                e.record.commit();
                                me.editando = false;
                            }
                        },
                        beforeedit: function(editor, e, opt) {
                            if (me.editando !== false) {
                                return false;
                            }
                            me.editando = true;
                        },
                        canceledit: function(editor, e, opt) {
                            var id = e.record.get('pg.id');
                            if (id) {
                                me.editando = false;
                                return false;
                            }
                            var store = Ext.getStore("storeMovimentacaoConferencia");
                            store.removeAt(0);
                            me.editando = false;
                            return false;
                        }
                    }
                }
            }),
            tbar: {
                items: [
                    {
                        text: 'Adicionar novo item',
                        action: 'incluir-item',
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir-item'
                    }
                ]
            },
            bbar: {
                items: [
                    '->',
                    {
                        xtype: 'panel',
                        border: false,
                        itemId: 'qtdeTotal',
                        bodyStyle: 'background: transparent;',
                        cls: 'destaque right',
                        html: ''
                    },
                    {
                        xtype: 'panel',
                        border: false,
                        itemId: 'valorTotal',
                        bodyStyle: 'background: transparent;',
                        cls: 'destaque right',
                        html: ''
                    }
                ]
            }
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            var idMovimentacao = grid.idMovimentacao;
            var store = Ext.create('Illi.store.MovimentacaoDetalhes', {
                autoLoad: false,
                storeId: 'storeMovimentacaoConferenciaDetalhe'
            });
            store.proxy.extraParams = {
                'id_movimentacao': idMovimentacao
            };
            store.load({
                callback: function(records, options, success) {
                    var storeGrid = grid.getStore();
                    var xCountGrid = 1;
                    Ext.Array.each(records, function(item) {
                        storeGrid.add({
                            'id': xCountGrid,
                            'id_antigo': item.get('id'),
                            'pg.id': item.get('pg.id'),
                            'codigo': item.get('codigo'),
                            'descricao': item.get('descricao'),
                            'qtde': 0, // item.get('qtde')
                            'valor': item.get('valor'),
                            'totalitem': 0 // item.get('totalitem')
                        });
                        xCountGrid++;
                    });
                }
            });
        }
    }
});
