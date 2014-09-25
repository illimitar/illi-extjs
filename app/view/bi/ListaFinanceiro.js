Ext.define('Illi.view.bi.ListaFinanceiro', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaFinanceiro',
    title: 'Financeiro',
    emptyText: "Nenhum registro encontrado",
    idMovimentacao: 0,
    valorTitulo: 0,
    valorPago: 0,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.FinanceiroReceber', {storeId: 'biFinanceiros',
                autoLoad: true,
                listeners: {
                    load: function(ret, dados, funcao) {
                        Ext.ComponentQuery.query('biJanela #valorTitulo')[0].setValue(Illi.app.Util.valorRenderer(this.sum('valor_titulo')));
                        Ext.ComponentQuery.query('biJanela #valorPago')[0].setValue(Illi.app.Util.valorRenderer(this.sum('valor_pago')));
                        Ext.ComponentQuery.query('biJanela #valorApagar')[0].setValue(Illi.app.Util.valorRenderer(this.sum('valor_titulo') - this.sum('valor_pago')));
                    }
                }

            }),
            columns: {
                defaults: {
                    filter: false,
                    editor: false,
                    sortable: false,
                    flex: 1
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id'
                    },
                    {
                        header: 'Forma Pagamento',
                        dataIndex: 'pz.descricao'
                    },
                    {
                        header: 'Numero',
                        dataIndex: 'numero'
                    },
                    {
                        header: 'Vl. Titulo',
                        renderer: Illi.app.Util.valorRenderer,
                        dataIndex: 'valor_titulo',
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Vl. Pago',
                        renderer: Illi.app.Util.valorRenderer,
                        dataIndex: 'valor_pago',
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Dt. Vencimento',
                        dataIndex: 'data_vencimento',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y')
                    },
                    {
                        header: 'Sit.',
                        dataIndex: 'situacao'
                    },
                    {
                        menuDisabled: true,
                        sortable: false,
                        xtype: 'actioncolumn',
                        flex: null,
                        width: 25,
                        items: [{
                                icon: '../resources/images/icones/parecer.png',
                                tooltip: 'Visualizar parecer',
                                handler: function(grid, rowIndex, colIndex, item, e, record) {
                                    Ext.create('Illi.view.financeiro.parecer.Janela', {
                                        id_fluxo: record.get('id'),
                                        id_pessoa: record.get('p.id'),
                                        nome: record.get('p.nome')
                                    }).show();
                                }
                            }]
                    }
                ]
            },
            viewConfig: {
                forceFit: true,
                showPreview: true,
                enableRowBody: true,
                getRowClass: function(record, index) {
                    var situacao = record.get('situacao');
                    var tipo = record.get('tipo');
                    if (situacao === 'Cancelado') {
                        return 'cancelado';
                    }
                }
            },
            features: [{
                    ftype: 'groupingsummary',
                    groupByText: 'Agrupar por esta coluna',
                    showGroupsText: 'Desagrupar',
                    groupHeaderTpl: '{name}  (registros : {rows.length}) ',
                    onGroupChange: function(stores, group) {
                        if (group) {
                            if (group.items[0]) {
                                var coluna = group.items[0].property;
                                stores.sort(coluna, 'ASC');
                            }
                        }
                    }
                }]
        });
        me.store.proxy.extraParams = {
            'filter': Ext.JSON.encode([
                {"property": "m.id", "value": me.idMovimentacao, "type": "int", "operator": "eq"},
                {"property": "situacao", "value": ['Aberto', 'Pré Baixa', 'Vencido', 'Vencendo', 'Arquivado', 'Baixado'], "type": "list", "operator": "eq"}])
        };
        me.callParent(arguments);
    }
});