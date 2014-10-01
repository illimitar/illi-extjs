Ext.define('Illi.view.financeiro.pdv.ListaImpressao', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaImpressao',
    ecf: false,
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            scope: me,
            emptyText: "Nenhum registro encontrado!",
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
            store: Ext.create('Illi.store.Vendas', {
                storeId: "storeImpressao",
                listeners: {
                    load: function (store, records, successful, eOpts) {
                        me.focus();
                        setTimeout(function () {
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
                        xtype: 'actioncolumn',
                        menuDisabled: true,
                        sortable: false,
                        filter: false,
                        width: 25,
                        items: [{
                                icon: Illi.app.Util.getPath("/resources/images/icones/acao/visualizar.png"),
                                tooltip: 'Imprimir ou Visualizar'
                            }]
                    },
                    {
                        header: 'C.I.',
                        dataIndex: 'id',
                        flex: 0.4
                    },
                    {
                        header: 'C.O.',
                        dataIndex: 'm.id',
                        flex: 0.4,
                        renderer: function (value, metaData, record) {
                            return (record.get("ecf") ? value + " *" : value);
                        }
                    },
                    {
                        header: 'Data',
                        dataIndex: 'data_impressao',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        flex: 0.7
                    },
                    {
                        header: 'Cliente',
                        dataIndex: 'cliente',
                        flex: 1
                    },
                    {
                        header: 'V. Venda (R$)',
                        dataIndex: 'valor_venda',
                        align: 'right',
                        renderer: Illi.app.Util.valorRenderer,
                        flex: 0.5
                    },
                    {
                        header: 'V. Pago (R$)',
                        dataIndex: 'valor_pago',
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
        me.store.proxy.extraParams = {
            'id_conta': me.idConta,
            'ecf': Ext.JSON.encode((me.ecf ? me.ecf : ''))
        };
        me.store.load();
        me.callParent(arguments);
    }
});