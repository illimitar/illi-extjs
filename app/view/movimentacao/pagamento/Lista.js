Ext.define('Illi.view.movimentacao.pagamento.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaPagamentoMovimentacao',
    itemId: 'listaPagamentoMovimentacao',
    autoShow: true,
    emptyText: "Nenhum registro Encontrado",
    requires: [
        'Illi.view.financeiro.prazo.Combo'
    ],
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            selType: 'cellmodel',
            ocultaFiltro: true,
            store: Ext.create('Ext.data.JsonStore', {
                fields: [
                    {name: 'id'},
                    {
                        name: 'data_vencimento',
                        type: 'date',
                        dateFormat: 'Y-m-d'

                    },
                    {name: 'valor', type: 'float'},
                    {name: 'pagamento'},
                    {name: 'pagamento_id', type: 'int'}
                ],
                autoSync: true,
                storeId: 'tabelaPagamento',
                proxy: {
                    type: 'memory',
                    reader: {
                        type: 'json'
                    }
                }
            }),
            tbar: null,
            columns: {
                defaults: {
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    },
                    filter: true,
                    flex: 1
                },
                items: [
//                    {
//                        header: '#',
//                        dataIndex: 'id',
//                        editor: false
//                    },
                    {
                        header: 'Forma Pagamento',
                        dataIndex: 'pagamento_id',
                        renderer: function (valor, metaData, record) {
                            return  record.get('pagamento');
                        },
                        editor: false
                    },
                    {
                        header: 'Valor',
                        dataIndex: 'valor',
                        align: 'right',
                        renderer: Illi.app.Util.valorRenderer,
                        editor: Illi.app.Util.campoMoeda('valor'),
                        summaryType: 'sum',
                        summaryRenderer: function (value) {
                            return '<span style="font-size:14px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Data Vencimento',
                        dataIndex: 'data_vencimento',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        editor: {
                            xtype: 'datefield',
                            name: 'data_inicio',
                            value: new Date(),
                            submitFormat: 'Y-m-d'

                        }
                    },
                    {
                        xtype: 'actioncolumn',
                        flex: false,
                        width: 30,
                        sortable: false,
                        filter: false,
                        editor: false,
                        items: [
                            {
                                icon: Illi.app.Util.getPath("resources/images/icones/acao/remover.png"),
                                tooltip: 'Apagar',
                                handler: function (grid, rowIndex, colIndex) {
                                    var rec = grid.getStore().getAt(rowIndex);
                                    grid.getStore().removeAt(rowIndex);
                                    me.up("window").down('#finalizar').setDisabled(true);
                                    me.down('#totalPago').setText('Total Pagamento ' + Illi.app.Util.valorRenderer(grid.getStore().sum('valor')));
                                }
                            }
                        ]
                    }
                ]
            },
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 2,
                    listeners: {
                        edit: function (editor, e, opt) {
                            e.record.commit();
                            var store = Ext.getStore('tabelaPagamento');
                            me.down('#totalPago').setText('Total Pagamento ' + Illi.app.Util.valorRenderer((store.sum('valor'))));
                        }

                    }
                })
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'btn-total',
                    border: false,
                    items: [
                        '->',
                        {
                            text: 'Total Pedido : R$ 0,00',
                            itemId: 'totalPedido',
                            scale: 'large'
                        },
                        {
                            text: 'Total Pago : R$ 0,00',
                            itemId: 'totalPago',
                            scale: 'large'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    },
    onRender: function () {
        this.store.load();
        this.callParent(arguments);
    }

});
