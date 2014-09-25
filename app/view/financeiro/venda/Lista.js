Ext.define('Illi.view.financeiro.venda.Lista', {
    extend: 'Illi.view.AbstractList',
    requires: [
        'Illi.view.financeiro.prazo.Combo'
    ],
    alias: 'widget.listaPagamento',
    itemId: 'listaPagamento',
    autoShow: true,
    emptyText: "Nenhum registro Encontrado",
    initComponent: function() {
        var me = this;
        me.editorGrid = me.cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1,
            listeners: {
                edit: function(editor, e, opt) {
                    e.record.commit();
                    var store = Ext.getStore('tabelaPagamento');
                    Ext.ComponentQuery.query('#totalPago')[0].setText('Total ' + Illi.app.Util.valorRenderer((store.sum('valor_pago'))));
                }
            }
        });
        Ext.apply(me, {
            store: Ext.create('Ext.data.JsonStore', {
                fields: [
                    {name: 'id'},
                    {
                        name: 'data_vencimento',
                        type: 'date',
                        dateFormat: 'Y-m-d'

                    },
                    {name: 'valor_pago', type: 'float'},
                    {name: 'id_prazo', type: 'int'},
                    {name: 'moeda', type: 'text'},
                    {name: 'id_conta', type: 'int'}
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
                    {
                        header: 'Conta',
                        dataIndex: 'id_conta',
                        hidden: true,
                        editor: false
                    },
                    {
                        header: 'Forma Pagamento',
                        dataIndex: 'id_prazo',
                        hidden: true,
                        editor: false
                    },
                    {
                        header: 'Forma Pagamento',
                        dataIndex: 'moeda',
                        editor: false
                    },
                    {
                        header: 'Valor',
                        dataIndex: 'valor_pago',
                        renderer: Illi.app.Util.valorRenderer,
                        editor: {
                            xtype: 'numberfield',
                            minValue: 0.01,
                            allowDecimals: true,
                            decimalPrecion: 2,
                            decimalSeparator: ',',
                            allowBlank: false

                        },
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:14px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Data Vencimento',
                        dataIndex: 'data_vencimento',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        editor: false,
                        hidden: true
                    },
                    {
                        xtype: 'actioncolumn',
                        flex: 0.1,
                        align: 'right',
                        sortable: false,
                        filter: false,
                        editor: false,
                        items: [
                            {
                                icon: '../resources/images/icones/acao/remover.png',
                                width: 16,
                                tooltip: 'Delete',
                                handler: function(grid, rowIndex, colIndex) {
                                    var rec = grid.getStore().getAt(rowIndex);
                                    grid.getStore().removeAt(rowIndex);
                                    Ext.ComponentQuery.query('#totalPago')[0].setText('Total ' + Illi.app.Util.valorRenderer((grid.getStore().sum('valor_pago'))));
                                }
                            }
                        ]
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'btn-total',
                    border: false,
                    items: [
                        ,
                        '->'
                                ,
                        {
                            text: 'Total : R$ 0,00',
                            itemId: 'totalPago',
                            scale: 'large'
                        }
                    ]}]

        });
        me.callParent(arguments);
    }
    ,
    onRender: function() {
        this.store.load();
        this.callParent(arguments);
    }

});