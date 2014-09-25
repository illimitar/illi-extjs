Ext.define('Illi.view.financeiro.pdv.ListaItensPagamento', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaItensPagamento',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            emptyText: "Nenhum meio de pagamento selecionado!",
            //
            border: false,
            bodyBorder: false,
//            bodyStyle: 'background: transparent;',
//            layout: {
//                type: 'anchor',
//                reserveScrollbar: true // There will be a gap even when there's no scrollbar
//            },
            //
            enableColumnHide: false,
            enableColumnMove: false,
            enableColumnResize: false,
            sortableColumns: false,
            autoScroll: true,
            //
            store: Ext.create('Ext.data.JsonStore', {
                storeId: 'tabelaItensPagamento',
                autoSync: true,
                fields: [
                    {name: 'id', type: 'int'},
                    {name: 'prazo'},
                    {name: 'condicao'},
                    {name: 'codigo'},
                    {name: 'descricao'},
                    {name: 'valor', type: 'float'}
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
                            var win = me.up('panel');
                            win.totalPago = store.sum('valor');
                            win.valorSubtotal = me.valorSaldo;
                            win.valorTroco = win.totalPago - me.valorSaldo;
                            if (win.totalPago) {
                                win.valorSubtotal = win.valorSubtotal - win.totalPago;
                                if (win.valorSubtotal < 0) {
                                    win.valorSubtotal = 0;
                                }
                            }
                            if (win.valorTroco < 0) {
                                win.valorTroco = 0;
                            }
                            win.down('#pdvPagamentoTotalPago').update(Illi.app.Util.valorRenderer(win.totalPago));
                            win.down('#pdvPagamentoTotalSaldo').update(Illi.app.Util.valorRenderer(win.valorSubtotal));
                            win.down('#pdvPagamentoTroco').update(Illi.app.Util.valorRenderer(win.valorTroco));
                        }
                    },
                    load: function(store, records, successful, eOpts) {
                        me.focus();
                        setTimeout(function() {
                            me.getView().focusRow(0);
                            var row = store.getAt(0);
                            if (row) {
                                me.getSelectionModel().select(row);
                            }
                        }, 300);
                    }
                }
            }),
            columns: {
                defaults: {
                    menuDisabled: true
                },
                items: [
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        flex: 1
                    },
                    {
                        header: 'Valor',
                        dataIndex: 'valor',
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