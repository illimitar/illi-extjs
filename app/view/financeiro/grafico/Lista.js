Ext.define('Illi.view.financeiro.grafico.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaGrafico',
    title: null,
    itemId: 'listaGrafico',
    emptyText: "Nenhum registro encontrado",
    border: false,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            edicao: false,
            ocultaFiltro: true,
            store: me.store,
            columns: {
                defaults: {
                    filter: true,
                    editor: false
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id'
                    },
                    {
                        header: 'Numero',
                        dataIndex: 'numero'
                    },
                    {
                        header: 'Parceiro',
                        dataIndex: 'p.nome',
                        flex: 2
                    },
                    {
                        header: 'Vl. Titulo',
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        hideable: false,
                        dataIndex: 'valor_titulo',
                        align: 'right',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Vl. Pago',
                        dataIndex: 'valor_pago',
                        renderer: Illi.app.Util.valorRenderer,
                        align: 'right',
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Dt. Vencimento',
                        dataIndex: 'data_vencimento',
                        xtype: 'datecolumn',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        minWidth: 80
                    },
                    {
                        header: 'Dt. Baixa',
                        dataIndex: 'data_baixa',
                        xtype: 'datecolumn',
                        hidden: true,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        minWidth: 80
                    },
                    {
                        header: 'Conta/Carteira',
                        dataIndex: 'c.nome',
                        editor: false,
                        hidden: true,
                        width: 150
                    },
                    {
                        header: 'Observação',
                        dataIndex: 'observacao'
                    },
                    {
                        header: 'Situação',
                        dataIndex: 'situacao'
                    },
                    {
                        header: 'Previsão',
                        dataIndex: 'provisao',
                        hidden: true
                    },
                    {
                        header: 'Empresa',
                        dataIndex: 'e.id',
                        hideable: false,
                        renderer: function(value, b, record) {
                            return value + ' - ' + record.get('e.nome');
                        },
                        filter: {
                            type: 'list',
                            displayField: 'nome_entidade',
                            valueField: 'e.id',
                            editable: false,
                            store: Ext.create('Illi.store.UsuarioEntidades')
                        },
                        flex: 1
                    },
                    {
                        menuDisabled: true,
                        sortable: false,
                        xtype: 'actioncolumn',
                        flex: null,
                        width: 25,
                        items: [{
                                icon: Illi.app.Util.getPath("/resources/images/icones/parecer.png"),
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
            tbar: {
                border: false,
                itemId: 'barraJanela',
                items: [
                    '->',
                    {
                        text: 'Enviar por Email',
                        iconCls: 'icon-email',
                        handler: function() {
                            if (!me.id_fluxo) {
                                var titulos = me.getStore();
                                var id_fluxo = [];
                                titulos.each(function(rec) {
                                    id_fluxo.push(rec.getData().id);
                                });
                                me.id_fluxo = id_fluxo.join();
                            }
                            var janelaEmail = Ext.create("Illi.view.email.Janela", {
                                id_fluxo: me.id_fluxo
                            });
                            janelaEmail.show();
                        }
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: me.store,
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.callParent(arguments);
    }
});