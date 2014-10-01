Ext.define('Illi.view.financeiro.pdv.ListaProdutoPesquisa', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaProdutoPesquisa',
    stateful: true,
    stateId: 'listaProdutoPesquisa',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            border: false,
            bodyBorder: false,
            //enableColumnHide: true,
            enableColumnMove: false,
            //enableColumnResize: false,
            sortableColumns: false,
            autoScroll: true,
            //
            store: Ext.create('Illi.store.produto.Produtos', {
                storeId: "storePdvProduto",
                listeners: {
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
                    filter: true,
                    menuDisabled: true
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id', // nome do campo no model
                        id: me.setIdColuna('id'),
                        hidden: true
                    },
                    {
                        header: 'Produto',
                        dataIndex: 'p.id', // nome do campo no model
                        id: me.setIdColuna('p_id'),
                        hidden: true
                    },
                    {
                        header: 'Referência',
                        id: me.setIdColuna('referencia'),
                        dataIndex: 'p.codigo',
                        flex: 0.2
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'p.descricao',
                        id: me.setIdColuna('p_descricao'),
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
                        id: me.setIdColuna('m_nome'),
                        editor: {
                            xtype: 'comboMarca',
                            allowBlank: false
                        },
                        flex: 0.5
                    },
                    {
                        header: 'Venda',
                        dataIndex: 'pv.valor',
                        id: me.setIdColuna('pv_valor'),
                        align: 'right',
                        renderer: Illi.app.Util.valorRenderer,
                        flex: 0.3
                    },
                    {
                        header: 'Estoque',
                        dataIndex: 'pge.qtde',
                        id: me.setIdColuna('pge_qtde'),
                        align: 'right',
                        flex: 0.2
                    }

                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'rowediting': false
            })
        });
        me.store.proxy.extraParams = {
            'pdv': true,
            'tabela_venda': me.tabela_venda
        };
        me.store.load();
        me.callParent(arguments);
    }
});