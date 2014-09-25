Ext.define('Illi.view.bi.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaBi',
    title: null,
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.financeiro.prazo.Combo',
        'Illi.view.pessoa.Combo'
    ],
    pluginsPadrao: [
        {
            ptype: 'filterbar',
            forceCreateExtraColumn: true,
            showClearAllButton: false
        }
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            stateful: true,
            stateId: 'listaBi',
            store: Ext.create('Illi.store.Bis', {
                autoLoad: false,
                sorters: [{
                        property: 'atrazo',
                        direction: 'ASC'
                    }],
                listeners: {
                    load: function(ret, dados, funcao) {
                        var total_atrazado = '<b style="margin:5px;padding-right=10px;color:red">Total Atrazado : ' + Illi.app.Util.valorRenderer(ret.getProxy().reader.jsonData.total_atrazado) + "</b>";
                        Ext.ComponentQuery.query('#bis_total_atrazado')[0].setText(total_atrazado);

                        var total_aberto = '<b style="margin:5px;padding-right=10px;color:green">Total a Vencer : ' + Illi.app.Util.valorRenderer(ret.getProxy().reader.jsonData.total_aberto) + "</b>";
                        Ext.ComponentQuery.query('#bis_total_aberto')[0].setText(total_aberto);

                        var total_vencendo = '<b style="margin:5px;padding-right=10px; color:blue; " >Total Vencendo : ' + Illi.app.Util.valorRenderer(ret.getProxy().reader.jsonData.total_vencendo) + "</b>";
                        Ext.ComponentQuery.query('#bis_total_vencendo')[0].setText(total_vencendo);

                        var total_baixado = '<b style="margin:5px;padding-left=5px;color:cinza;"> Total Baixado : ' + Illi.app.Util.valorRenderer(ret.getProxy().reader.jsonData.total_baixado) + "</b>";
                        Ext.ComponentQuery.query('#bis_total_baixado')[0].setText(total_baixado);

                        var total_geral = '<b style="margin:5px;padding-left=5px; font-style: italic; text-decoration: underline;"> Total Geral : ' + Illi.app.Util.valorRenderer(ret.getProxy().reader.jsonData.total_geral) + "</b>";
                        Ext.ComponentQuery.query('#bis_total_geral')[0].setText(total_geral);
                    }
                }
            }),
            tbar: {
                items: [
                    {
                        text: 'Atualizar',
                        action: 'atualizar',
                        iconCls: 'icon-atualizar',
                        itemId: 'atualizar'
                    },
                    {
                        text: 'Visualizar',
                        action: 'visualizar',
                        iconCls: 'icon-visualizar',
                        itemId: 'visualizar'
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
                    flex: 1
                },
                items: [
                    {
                        header: 'Movimentação',
                        dataIndex: 'm.id',
                        filter: {
                            'type': 'int'
                        },
                        width: 25
                    },
                    {
                        header: 'Numero Movimentação',
                        dataIndex: 'm.numero',
                        filter: {
                            'type': 'int'
                        },
                        hidden: true,
                        width: 80
                    },
                    {
                        header: 'Numero',
                        dataIndex: 'numero',
                        filter: {
                            'type': 'int'
                        },
                        width: 80
                    },
                    {
                        header: 'Parceiro',
                        dataIndex: 'p.nome',
                        flex: 2.5
                    },
                    {
                        header: 'Grupo',
                        dataIndex: 'gp.grupo',
                        flex: 1.5
                    },
                    {
                        header: 'Valor',
                        dataIndex: 'valor_titulo',
                        filter: {
                            'type': 'float'
                        },
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        },
                        width: 50
                    },
                    {
                        header: 'Data Emissão',
                        dataIndex: 'data_emissao',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        width: 100

                    },
                    {
                        header: 'Data Vencimento',
                        dataIndex: 'data_vencimento',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        width: 100

                    },
                    {
                        header: 'Forma Pagamento',
                        dataIndex: 'pz.descricao'
                    },
                    {
                        header: 'Vendedor',
                        dataIndex: 'v.nome',
                        width: 80
                    },
                    {
                        header: 'Atrazo',
                        dataIndex: 'atrazo',
                        filter: {
                            'type': 'int'
                        },
                        width: 25
                    },
                    {
                        header: 'Sit.',
                        dataIndex: 'situacao',
                        filter: {
                            type: 'list',
                            store: ['Aberto', 'Pré Baixa', 'Baixado', 'Cancelado', 'Vencido', 'Vencendo', 'Arquivado']
                        }
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore('Bis'),
                    dock: 'bottom',
                    displayInfo: false,
                    items: [
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            itemId: 'bis_total_atrazado',
                            xtype: 'button',
                            text: ''
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            itemId: 'bis_total_vencendo',
                            xtype: 'button',
                            text: ''
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            itemId: 'bis_total_aberto',
                            xtype: 'button',
                            text: ''
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            itemId: 'bis_total_baixado',
                            xtype: 'button',
                            text: ''
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            itemId: 'bis_total_geral',
                            xtype: 'button',
                            text: ''
                        }
                    ]
                }
            ],
            viewConfig: {
                forceFit: true,
                showPreview: true,
                getRowClass: function(record, index) {
                    var dia = record.get('atrazo');
                    if (dia > 0) {
                        return 'tituloReceitaVencido';
                    } else if (dia < 0) {
                        return 'tituloDespesaVencido';
                    }
                }
            }
        });
        me.callParent(arguments);
        me.filtroInicial = (Illi.app.Local.get('filtro-' + me.stateId) ? Illi.app.Local.get('filtro-' + me.stateId) : [
            {"property": "situacao", "value": ['Aberto', 'Pré Baixa', 'Cancelado', 'Vencido', 'Vencendo', 'Arquivado'], "type": "list", "operator": "eq"}
        ]);
    },
    listeners: {
        afterrender: function(grid) {
            grid.store.filter(grid.filtroInicial);
            var runner = new Ext.util.TaskRunner();
            var task = runner.newTask({
                run: function() {
                    grid.store.load();
                },
                interval: 50000
            });
            task.start();
        }
    }
});