Ext.define('Illi.view.bi.ListaItens', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaItens',
    title: 'Itens do Pedido',
    emptyText: "Nenhum registro encontrado",
    idMovimentacao: 0,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.MovimentacaoDetalhes', {
                autoLoad: false,
                sorters: [{
                        property: 'data',
                        direction: 'ASC'
                    }],
                listeners: {
                    load: function(ret, dados, funcao) {
//                        var totalitem = ret.getProxy().reader.jsonData.totalitem;
                        Ext.ComponentQuery.query('biJanela #valorItem')[0].setValue(Illi.app.Util.valorRenderer(this.sum('totalitem')));
                    }
                }
            }),
            columns: {
                defaults: {
                    filter: true,
                    flex: 1
                },
                items: [
                    {
                        header: 'ID Movimentacao',
                        dataIndex: 'm.id',
                        hidden: true,
                        hideable: false
                    },
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        hidden: true
                    },
                    {
                        header: 'Codigo',
                        dataIndex: 'codigo',
                        width: 15
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        flex: 2.5
                    },
                    {
                        header: 'Qtde.',
                        dataIndex: 'qtde',
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + value + '</span>';
                        }
                    },
                    {
                        header: 'Valor',
                        dataIndex: 'valor',
                        renderer: Illi.app.Util.valorRenderer
                    },
                    {
                        header: 'T. Item',
                        dataIndex: 'totalitem',
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Data',
                        dataIndex: 'data',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        hidden: true
                    }
                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'rowediting': false
            }),
            bbar: {
                items: [
                    {
                        text: 'Exportar para Excel',
                        action: 'excel',
                        iconCls: 'icon-excel',
                        itemId: 'excel'
                    }
                ]
            }
        });
        me.filtroInicial = [
            {"property": "m.id", "value": me.idMovimentacao, "type": "int", "operator": "eq"}
        ];
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            grid.store.filter(grid.filtroInicial);
        }
    }
});