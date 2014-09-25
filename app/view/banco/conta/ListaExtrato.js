Ext.define('Illi.view.banco.conta.ListaExtrato', {
    extend: 'Illi.view.AbstractList',
    requires: [
        'Illi.view.banco.conta.FormExtratoFilter'
    ],
    alias: 'widget.listaExtrato',
    title: null,
    id_conta: false,
    filtroInicial: false,
    emptyText: "Nenhum registro Encontrado",
    featuresPadrao: {
        'groupingsummary': {
            ftype: 'groupingsummary',
            groupByText: 'Agrupar por esta coluna',
            showGroupsText: 'Desagrupar',
            groupHeaderTpl: '{columnName} (registros : {rows.length}) ',
            onGroupChange: function(stores, group) {
                if (group) {
                    if (group.items[0]) {
                        var coluna = group.items[0].property;
                        stores.sort(coluna, 'ASC');
                    }
                }
            }
        }
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            edicao: false,
            store: Ext.create('Illi.store.Extratos', {
                sorters: [{
                        property: 'data_lancamento',
                        direction: 'DESC'
                    }]
            }),
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore('Extratos'),
                    dock: 'bottom',
                    displayInfo: true,
                    items: [
                        {
                            xtype: 'tbseparator'
                        }
                    ]
                }
            ],
            tbar: {
                items: [
                    {
                        text: 'Atualizar',
                        action: 'atualizar',
                        iconCls: 'icon-atualizar',
                        itemId: 'atualizar'
                    },
                    {
                        text: 'Imprimir Grade',
                        iconCls: 'icon-imprimir',
                        action: 'imprimir',
                        itemId: 'imprimir'
                    },
                    {
                        text: 'Exportar para Excel',
                        action: 'excel',
                        iconCls: 'icon-excel',
                        itemId: 'excel'
                    }

                ]


            },
            columns: {
                defaults: {
                    filter: true,
                    flex: 1,
                    editor: false
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        hidden: true,
                        filter: {
                            'type': 'int'
                        }
                    },
                    {
                        header: 'Data Lançamento',
                        dataIndex: 'data_lancamento',
                        dateFormat: 'Y-m-d',
                        xtype: 'datecolumn',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y')

                    },
                    {
                        header: 'Data Cadastro',
                        dataIndex: 'data',
                        hidden: true,
                        dateFormat: 'Y-m-d H:i:s',
                        xtype: 'datecolumn',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s')
                    },
                    {
                        header: 'Valor',
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        dataIndex: 'valor',
                        align: 'right',
                        flex: 0.6,
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Saldo Dia',
                        renderer: Illi.app.Util.valorRenderer,
                        dataIndex: 'saldo',
                        align: 'right',
                        filter: false,
                        sorted: false
                    },
                    {
                        header: 'Observação',
                        dataIndex: 'observacao'
                    },
                    {
                        header: 'Conta/Carteira',
                        dataIndex: 'c.id',
                        renderer: function(value, metaData, record) {
                            return record.get('c.nome');
                        },
                        flex: 3,
                        filter: false
                    },
                    {
                        header: 'Conta Operação',
                        dataIndex: 'co.id',
                        renderer: function(value, metaData, record) {
                            return record.get('co.nome');
                        }
                    },
                    {
                        header: 'Usuario',
                        dataIndex: 'u.nome',
                        flex: 3
                    }
                ]
            },
            features: me.absFeatures,
            viewConfig: {
                forceFit: true,
                showPreview: true,
                enableRowBody: true,
                getRowClass: function(record, index) {

                    if (record.get('valor') < 0) {
                        return 'tituloDespesa';
                    }



                }
            }

        });
        me.callParent(arguments);
    }
    ,
    onRender: function() {
        this.store.load();
        this.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            grid.store.proxy.extraParams = {"id_conta": grid.id_conta};
            grid.store.load();
        }
    }

});