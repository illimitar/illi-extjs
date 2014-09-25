Ext.define('Illi.view.movimentacao.conferencia.comparacao.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaComparacaoConferenciaMovimentacao',
    itemId: 'listaComparacaoConferenciaMovimentacao',
    title: false,
    header: false,
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.ComboSituacao',
        'Illi.view.produto.produto.Combo'
    ],
    ocultarFiltro: true,
    retornoItens: false,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            enableColumnHide: false,
            enableColumnMove: false,
            enableColumnResize: false,
            sortableColumns: false,
            autoScroll: true,
            store: Ext.create('Ext.data.JsonStore', {
                storeId: 'storeComparacaoMovimentacaoConferencia',
                autoSync: true,
                fields: [
                    {name: 'codigo'},
                    {name: 'descricao'},
                    {name: 'qtde_origem', type: 'float'},
                    {name: 'qtde_recebido', type: 'float'},
                    {name: 'valor_origem', type: 'float'},
                    {name: 'valor_recebido', type: 'float'},
                    {name: 'total_origem', type: 'float'},
                    {name: 'total_recebido', type: 'float'}
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
                            var win = me.up('#janelaComparacaoConferenciaMovimentacao');
                            var valor = '<span style="font-size: 1.3em; padding-left:50px; color:blue"><b>Total de Itens (Pedido / Conferido): </b>' + Illi.app.Util.floatRenderer(store.sum('qtde_origem')) + ' / ' + Illi.app.Util.floatRenderer(store.sum('qtde_recebido')) + '</span>';
                            win.down('#qtdeTotalOrigem').update(valor);
                            var valor = '<span style="font-size: 1.3em; padding-left:50px; color:green"><b>Valor Total (Pedido / Conferido): </b>' + Illi.app.Util.valorRenderer(store.sum('total_origem')) + ' / ' + Illi.app.Util.valorRenderer(store.sum('total_recebido')) + '</span>';
                            win.down('#valorTotalOrigem').update(valor);
//                            var valor = '<span style="font-size: 1.3em; padding-left:50px; color:blue"><b>Total de Itens</b> - Pedido: ' + Illi.app.Util.floatRenderer(store.sum('qtde_origem')) + '</span>';
//                            win.down('#qtdeTotalOrigem').update(valor);
//                            var valor = '<span style="font-size: 1.3em; padding-left:50px; color:blue">Conferido: <b></b>' + Illi.app.Util.floatRenderer(store.sum('qtde_recebido')) + '</span>';
//                            win.down('#qtdeTotalRecebido').update(valor);
//                            var valor = '<span style="font-size: 1.3em; padding-left:50px; color:green"><b>Valor Total</b> - Pedido: ' + Illi.app.Util.valorRenderer(store.sum('total_origem')) + '</span>';
//                            win.down('#valorTotalOrigem').update(valor);
//                            var valor = '<span style="font-size: 1.3em; padding-left:50px; color:green">Conferido: <b></b>' + Illi.app.Util.valorRenderer(store.sum('total_recebido')) + '</span>';
//                            win.down('#valorTotalRecebido').update(valor);
                        }
                    }
                }
            }),
            columns: {
                defaults: {
                    menuDisabled: true,
                    editor: false,
                    flex: 1
                },
                items: [
                    {
                        header: 'Codigo',
                        dataIndex: 'codigo',
                        width: 15
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        flex: 2.5
                    },
                    {
                        header: 'Qtde. Pedido',
                        dataIndex: 'qtde_origem',
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + value + '</span>';
                        }
                    },
                    {
                        header: 'Qtde. Confer.',
                        dataIndex: 'qtde_recebido',
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + value + '</span>';
                        }
                    },
                    {
                        header: 'Valor U. Pedido',
                        dataIndex: 'valor_origem',
                        align: 'right',
                        width: 80,
                        minWidth: 80,
                        renderer: Illi.app.Util.valorRenderer
                    },
                    {
                        header: 'Valor U. Confer.',
                        dataIndex: 'valor_recebido',
                        align: 'right',
                        width: 80,
                        minWidth: 80,
                        renderer: Illi.app.Util.valorRenderer
                    },
                    {
                        header: 'Total Pedido',
                        dataIndex: 'total_origem',
                        align: 'right',
                        width: 80,
                        minWidth: 80,
                        renderer: Illi.app.Util.valorRenderer
                    },
                    {
                        header: 'Total Confer.',
                        dataIndex: 'total_recebido',
                        align: 'right',
                        width: 80,
                        minWidth: 80,
                        renderer: Illi.app.Util.valorRenderer
//                    },
//                    {
//                        header: 'Valor Total',
//                        dataIndex: 'totalitem',
//                        renderer: Illi.app.Util.valorRenderer,
//                        summaryType: 'sum',
//                        summaryRenderer: function(value) {
//                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
//                        }
                    }
                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'filterbar': false,
                'rowediting': false
            }),
            bbar: {
                items: [
                    '->',
                    {
                        xtype: 'panel',
                        border: false,
                        itemId: 'qtdeTotalOrigem',
                        bodyStyle: 'background: transparent;',
                        cls: 'destaque right',
                        html: ''
                    },
                    {
                        xtype: 'panel',
                        border: false,
                        itemId: 'qtdeTotalRecebido',
                        bodyStyle: 'background: transparent;',
                        cls: 'destaque right',
                        html: ''
                    },
                    {
                        xtype: 'panel',
                        border: false,
                        itemId: 'valorTotalOrigem',
                        bodyStyle: 'background: transparent;',
                        cls: 'destaque right',
                        html: ''
                    },
                    {
                        xtype: 'panel',
                        border: false,
                        itemId: 'valorTotalRecebido',
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
            var records = grid.retornoItens;
            var storeGrid = grid.getStore();
            var xCountGrid = 1;
            Ext.Array.each(records, function(item) {
                storeGrid.add({
                    'codigo': item.codigo,
                    'descricao': item.descricao,
                    'qtde_origem': item.qtde_origem,
                    'qtde_recebido': item.qtde_recebido,
                    'valor_origem': item.valor_origem,
                    'valor_recebido': item.valor_recebido,
                    'total_origem': item.qtde_origem * item.valor_origem,
                    'total_recebido': item.qtde_recebido * item.valor_recebido
                });
                xCountGrid++;
            });
        }
    }
});
