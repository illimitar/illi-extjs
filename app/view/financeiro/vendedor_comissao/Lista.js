
Ext.define('Illi.view.financeiro.vendedor_comissao.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.vendedorComissaoLista',
    title: null,
    boder: false,
    emptyText: "Nenhum registro Encontrado",
    selModel: {
        mode: 'MULTI'
    },
    pluginsPadrao: {
        'filterbar': {
            ptype: 'filterbar',
            pluginId: 'filtroBarra',
            forceCreateExtraColumn: true,
            showClearAllButton: false
        },
        'rowediting': false
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.VendedorComissoes'),
            tbar: {
                items: [
                    , {
                        text: 'Atualizar',
                        action: 'atualizar',
                        iconCls: 'icon-atualizar',
                        itemId: 'atualizar'
                    },
                    {
                        text: 'Fechar Comissão',
                        iconCls: 'icon-comissao',
                        action: 'fecharComissao',
                        itemId: 'fecharComissao'
                    },
                    {
                        text: 'Imprimir Grade',
                        iconCls: 'icon-imprimir',
                        action: 'imprimir',
                        itemId: 'imprimir'
                    }

                ]


            },
            columns: {
                defaults: {
                    filter: true,
                    flex: 0.5
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        hidden: true
                    },
                    {
                        header: 'ID Titulo',
                        dataIndex: 'f.id',
                        hidden: true

                    },
                    {
                        header: 'Valor Titulo',
                        dataIndex: 'valor',
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Perc. Comissão',
                        dataIndex: 'comissao',
                        renderer: function(value, metaData, record) {
                            if (!value) {
                                value = 0;
                            }
                            return [value, ' %'].join(' ');
                        }
                    },
                    {
                        header: 'Comissao',
                        dataIndex: 'valor_comissao',
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        summaryRenderer: function(value, summaryData, dataIndex) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Parceiro',
                        dataIndex: 'pa.nome',
                        flex: 0.8
                    },
                    {
                        header: 'Data Baixa',
                        dataIndex: 'f.data_baixa',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        width: 150
                    },
                    {
                        header: 'Vendedor',
                        dataIndex: 'v.nome',
                        flex: 0.5
                    },
                    {
                        header: 'Grupo Vendedor',
                        dataIndex: 'g.grupo'
                    },
                    {
                        header: 'ID Titulo Pagamento',
                        dataIndex: 'fp.id'
                    }
                ]
            }
        });
        me.callParent(arguments);
        me.filtroInicial = [
            {"property": "fp.id", "value": " ", "type": "int", "operator": "inl"}
        ];
    },
    listeners: {
        afterrender: function(grid) {
            grid.store.filter(grid.filtroInicial);
        }
    }
});