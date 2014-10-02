Ext.define('Illi.view.financeiro.pdv.ListaItensVenda', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaItensVenda',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            scope: me,
            bodyStyle: 'background: rgba(255,255,255,0.5);   -moz-border-radius:  0 0 5 5;border-radius: 0 0 5 5; border:none',
            headerOverCls: 'quadro',
            bodyBorder: false,
            boder: false,
            enableColumnHide: false,
            enableColumnMove: false,
            enableColumnResize: false,
            sortableColumns: false,
            autoScroll: true,
            store: Ext.create('Ext.data.JsonStore', {
                storeId: 'tabelaItensVenda',
                autoSync: true,
                fields: [
                    {name: 'id'},
                    {name: 'id_produto_grade'},
                    {name: 'codigo'},
                    {name: 'descricao'},
                    {name: 'unidade'},
                    {name: 'quantidade', type: 'float'},
                    {name: 'valor_venda', type: 'float'},
                    {name: 'valor_custo', type: 'float'},
                    {name: 'valor_total', type: 'float'},
                    {name: 'valor_pago', type: 'float'},
                    {name: 'situacao'}
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
                        fn: function (store) {
                            var win = me.up('window');
                            var storeCancelados = win.down('#pdvListaItensCancelados').getStore();
                            win.quantidadeVenda = store.sum("quantidade") - storeCancelados.sum("quantidade");
                            win.totalVenda = (store.sum('valor_total') - storeCancelados.sum('valor_total'));
                            win.down('#pdvVendaQuantidade').update(win.quantidadeVenda > 0 ? win.quantidadeVenda : '0');
                            win.down('#pdvVendaTotal').update(Illi.app.Util.valorRenderer(win.totalVenda));
                            me.getView().focusRow(store.getCount() - 1);
                            var row = store.getAt(store.getCount() - 1);
                            if (row) {
                                win.down('#pdvProdutoQtd').update(Illi.app.Util.floatRenderer(row.get('quantidade')) + ' x ');
                                win.down('#pdvProdutoNome').update(row.get('descricao'));
                                win.down('#pdvProdutoTotal').update(Illi.app.Util.valorRenderer(row.get('valor_total')));
                            }
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
                        renderer: function (value, metaData, record) {
                            var ver = /^[0-9]+$/;
                            return (ver.test(value) ? value : "");
                        },
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
                        header: 'Vl. Pago',
                        dataIndex: 'valor_pago',
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
            }),
            viewConfig: {
                forceFit: true,
                showPreview: true,
                enableRowBody: true,
                getRowClass: function (record, index) {
                    var tipo = record.get('situacao');
                    switch (true) {
                        case (tipo < 0):
                        case (tipo === 'DESCONTO'):
                            return 'desconto';
                            break;
                        case (tipo === 'ACRESCIMO'):
                            return 'acrescimo';
                            break;
                        case (tipo === 'DESATIVO'):
                            return 'cancelado';
                            break;
                    }

                }
            }
        });
        me.callParent(arguments);
    }
});