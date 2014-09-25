Ext.define('Illi.view.financeiro.pdv.ListaItensCancelados', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaItensCancelados',
    itemId: 'pdvListaItensCancelados', // manter
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            emptyText: "Nenhum item cancelado!",
            //
//            border: false,
//            bodyBorder: '1px',
            bodyStyle: 'background: rgba(255,255,255,0.5);',
            //
            hidden: true,
            enableColumnHide: false,
            enableColumnMove: false,
            enableColumnResize: false,
            sortableColumns: false,
            autoScroll: true,
            //
            viewConfig: {
                getRowClass: function(record, index) {
//                    var situacao = record.get('situacao');
//                    var tipo = record.get('tipo');
//                    if (situacao === 'DESATIVO') {
//                        return 'cancelado';
//                    }
                }
            },
            title: 'Itens Cancelados',
            store: Ext.create('Ext.data.JsonStore', {
                storeId: 'tabelaItensCancelados',
                autoSync: true,
                fields: [
                    {name: 'id', type: 'int'},
                    {name: 'codigo'},
                    {name: 'descricao'},
                    {name: 'unidade'},
                    {name: 'quantidade', type: 'float'},
                    {name: 'valor_venda', type: 'float'},
                    {name: 'valor_custo', type: 'float'},
                    {name: 'valor_total', type: 'float'}
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
                            me.getView().focusRow(store.getCount() - 1);
                        }
                    }
                }
            }),
            columns: {
                defaults: {
                    menuDisabled: true
                },
                items: [
                    {
                        header: 'Item',
                        dataIndex: 'id',
                        align: 'right',
                        flex: 0.2
                    },
                    {
                        header: 'Código',
                        dataIndex: 'codigo',
                        align: 'right',
                        flex: 0.4
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        flex: 1
                    },
                    {
                        header: 'Qtd.',
                        dataIndex: 'quantidade',
                        align: 'right',
                        renderer: Illi.app.Util.floatRenderer,
                        flex: 0.3
                    },
                    {
                        header: 'Vl. Unitário',
                        dataIndex: 'valor_venda',
                        align: 'right',
                        renderer: Illi.app.Util.valorRenderer,
                        flex: 0.5
                    },
                    {
                        header: 'Vl. Total',
                        dataIndex: 'valor_total',
                        align: 'right',
                        renderer: Illi.app.Util.valorRenderer,
                        flex: 0.5
                    }
                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'rowediting': false
            })
        });
        me.callParent(arguments);
    }
});