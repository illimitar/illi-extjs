Ext.define('Illi.view.financeiro.pdv.ListaClienteSelecao', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaClienteSelecao',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
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
//            store: Ext.create('Illi.store.produto.Produtos', {
//                storeId: "storePdvProdutoPesquisa",
//                listeners: {
//                    load: function(store, records, successful, eOpts) {
//                        me.focus();
//                        setTimeout(function() {
//                            me.getView().focusRow(0);
//                            var row = store.getAt(0);
//                            if (row) {
//                                me.getSelectionModel().select(row);
//                            }
//                        }, 300);
//                    }
//                }
//            }),
            columns: {
                defaults: {
                    menuDisabled: true
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id', // nome do campo no model
                        hidden: true
                    },
                    {
                        header: 'Código',
                        dataIndex: 'j.cnpj',
                        renderer: function(valor, b, record) {
                            if (valor) {
                                valor =  Ext.util.Format.TextMask.setMask('99.999.999/9999-99').mask(valor);
                            } else {
                                valor = record.get('f.cpf');
                                if (valor) {
                                    valor =  Ext.util.Format.TextMask.setMask('999.999.999-99').mask(valor);
                                } else {
                                    valor = record.get('id');
                                }
                            }
                            return valor;
                        },
                        align: 'right',
                        flex: 0.5
                    },
                    {
                        header: 'Nome',
                        dataIndex: 'nome',
                        flex: 1
                    }
                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'rowediting': false
            })
        });
//        me.store.proxy.extraParams = {
//            'pdv': true,
//            'codigo': me.codigo
//        };
//        me.store.load();
        me.callParent(arguments);
    }
});