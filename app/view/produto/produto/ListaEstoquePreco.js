Ext.define('Illi.view.produto.produto.ListaEstoquePreco', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaEstoquePreco',
    title: null,
    itemId: 'listaEstoquePreco',
    tipo: null,
    border: false,
    sortableColumns: false,
    emptyText: "Nenhum registro encontrado",
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.produto.ProdutoPrecoEstoques'),
            columns: {
                defaults: {
                    filter: false,
                    editor: false
                },
                items: [
                    {
                        header: 'Entidade',
                        dataIndex: 'nome'
                    },
                    {
                        header: 'Valor Custo',
                        dataIndex: 'valor_custo',
                        renderer: Illi.app.Util.valorRenderer,
                        align: 'right'
                    },
                    {
                        header: 'Valor Venda',
                        dataIndex: 'valor_venda',
                        renderer: Illi.app.Util.valorRenderer,
                        align: 'right'
                    },
                    {
                        header: 'Estoque',
                        dataIndex: 'qtde',
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        },
                        align: 'right'
                    },
                    {
                        header: 'Dt. Alteração',
                        dataIndex: 'data_preco',
                        width: 150,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        hidden: true
                    },
                    {
                        header: 'Dt. Curva',
                        dataIndex: 'data_curva',
                        width: 150,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        hidden: true
                    },
                    {
                        header: 'Rank',
                        dataIndex: 'rank',
                        align: 'right'
                    },
                    {
                        header: 'Curva',
                        dataIndex: 'curva',
                        align: 'center'
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});
