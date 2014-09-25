Ext.define('Illi.view.produto.etiqueta.Lista', {
    extend: 'Illi.view.AbstractList',
    requires: [
        'Illi.view.financeiro.prazo.Combo'
    ],
    alias: 'widget.listaProdutoEtiqueta',
    itemId: 'listaProdutoEtiqueta',
    autoShow: true,
    emptyText: "Nenhum registro Encontrado",
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            edicao: false,
            store: Ext.create("Illi.store.produto.Etiquetas", {autoSync: true}),
            tbar: null,
            columns: {
                defaults: {
                    sort: false,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    },
                    filter: false,
                    flex: 1
                },
                items: [
                    {
                        header: 'ID:',
                        dataIndex: 'id',
                        editor: false
                    },
                    {
                        header: 'Codigo',
                        dataIndex: 'codigo'
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        renderer: function (valor, b, record) {
                            var gradex = record.get('gradex');
                            var gradey = record.get('gradey');
                            return valor + (gradex ? ' ' + gradex : '') + (gradey ? ' ' + gradey : '');
                        },
                        flex: 2
                    },
                    {
                        header: 'Valor',
                        dataIndex: 'valor',
                        renderer: Illi.app.Util.valorRenderer
                    },
                    {
                        header: 'Marca',
                        dataIndex: 'marca'
                    },
                    {
                        header: 'Qtde',
                        dataIndex: 'qtde',
                        width: 40
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
                                handler: function (grid, rowIndex, colIndex) {
                                    var rec = grid.getStore().getAt(rowIndex);
                                    grid.getStore().removeAt(rowIndex);
                                }
                            }
                        ]
                    }
                ]
            },
            viewConfig: {
                loadingText: "Carregando.."
            }
        });
        me.callParent(arguments);
    }
    ,
    onRender: function () {
        this.store.load();
        this.callParent(arguments);
    }

});
