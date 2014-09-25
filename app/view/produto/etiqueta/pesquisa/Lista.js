Ext.define('Illi.view.produto.etiqueta.pesquisa.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaProdutoEtiquetaPesquisa',
    itemId: 'listaProdutoEtiquetaPesquisa',
    autoShow: true,
    emptyText: "Nenhum registro Encontrado",
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            edicao: true,
            selModel: {
                selType: 'cellmodel',
                mode: 'SIMPLE'
            },
            tbar: {
                items: [
                    {
                        text: 'Adicionar Etiquetas',
                        action: 'adicionarEtiquetas',
                        iconCls: 'icon-adicionar',
                        itemId: 'adicionarEtiquetas'
                    }
                ]
            },
            columns: {
                defaults: {
                    sort: false,
                    editor: false,
                    filter: false,
                    flex: 1
                },
                items: [
                    {
                        header: 'Codigo',
                        dataIndex: 'id_produto'
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
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
                        width: 40,
                        editor: {
                            xtype: 'numberfield',
                            allowBlank: false,
                            selectOnFocus: true
                        }
                    }
                ]
            },
//            plugins: [
//                Ext.create('Ext.grid.plugin.CellEditing', {
//                    clicksToEdit: 1
//                })
//            ]
            plugins: Illi.app.Util.setPlugins({
                'rowediting': Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 1
                })
            })
        });
        me.callParent(arguments);
    }
    ,
    onRender: function() {
        this.callParent(arguments);
    }

});
