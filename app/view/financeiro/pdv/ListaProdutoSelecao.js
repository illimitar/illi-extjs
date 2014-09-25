Ext.define('Illi.view.financeiro.pdv.ListaProdutoSelecao', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaProdutoSelecao',
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
//                    {
//                        header: 'Código',
//                        dataIndex: 'codigo',
//                        renderer: function(valor, b, record) {
//                            var codigo = record.get('id');
//                            switch (me.pesquisaProduto) {
//                                case 1:
//                                    codigo = record.raw.codigobarra[0].id;
//                                    break;
//                                case 2:
//                                    codigo = record.raw.codigobarra[0].codigo;
//                                    break;
//                                case 3:
//                                    codigo = record.raw.produto.codigo;
//                                    break;
//                            }
////                            if (me.digitosProduto > 0) {
////                                codigo = Illi.app.Util.strPad(codigo, me.digitosProduto, '0', 'STR_PAD_LEFT');
////                            }
//                            return codigo;
//                        },
//                        align: 'right',
//                        flex: 0.4
//                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        renderer: function(valor, b, record) {
                            var gradex = record.get('gradex');
                            var gradey = record.get('gradey');
                            return valor + (gradex ? ' ' + gradex : '') + (gradey ? ' ' + gradey : '');
                        },
                        flex: 1
                    },
                    {
                        header: 'Marca',
                        dataIndex: 'm.nome',
                        editor: {
                            xtype: 'comboMarca',
                            allowBlank: false
                        },
                        flex: 0.5
                    },
                    {
                        header: 'Venda',
                        dataIndex: 'pv.valor',
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
//        me.store.proxy.extraParams = {
//            'pdv': true,
//            'codigo': me.codigo
//        };
//        me.store.load();
        me.callParent(arguments);
    }
});