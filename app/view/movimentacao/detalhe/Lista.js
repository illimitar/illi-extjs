Ext.define('Illi.view.movimentacao.detalhe.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaDetalheMovimentacao',
    itemId: 'listaDetalheMovimentacao',
    title: 'Itens do Pedido',
    emptyText: "Nenhum registro encontrado",
    idMovimentacao: 0,
    tipo: false,
    operacao: false,
    requires: [
        'Illi.view.ComboSituacao',
        'Illi.view.produto.produto.Combo'
    ],
    ocultarFiltro: true,
    initComponent: function() {
        var me = this;
        //console.log(me.up("#janelaMovimentacao").operacao.tabela_preco);
        Ext.apply(me, {
            store: Ext.create('Illi.store.MovimentacaoDetalhes', {
                autoLoad: false,
                storeId: 'MovimentacaDetalhe',
                listeners: {
                    load: function(ret, dados, funcao) {
                        var valor = '<span style="font-size: 1.3em; padding-left:50px; color:blue"><b>Total de Itens: </b>' + Illi.app.Util.floatRenderer(this.sum('qtde')) + '</span>';
                        me.down('#qtdeTotal').update(valor);
                        var valor = '<span style="font-size: 1.3em; padding-left:50px; color:green"><b>Valor Total: </b>' + Illi.app.Util.valorRenderer(this.sum('totalitem')) + '</span>';
                        me.down('#valorTotal').update(valor);
                    },
                    write: function(proxy, operation) {
                        var obj = Ext.decode(operation.response.responseText);
                        if (obj.success) {
                            Ext.ux.Msg.flash({
                                msg: obj.message,
                                type: 'success'
                            });
                        } else {
                            Ext.ux.Msg.flash({
                                msg: obj.message,
                                type: 'error'
                            });
                        }
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
                        header: 'ID Produto Grade',
                        dataIndex: 'pg.id',
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
                        flex: 2.5,
                        editor: {
                            xtype: 'comboProduto',
                            dataIndex: 'p.descricao',
                            itemId: "comboProduto",
                            entidade: me.entidade,
                            permitirAdicao: true,
                            tabela: me.operacao.tabela_preco,
                            listeners: {
                                'select': function(combo, records) {
                                    var grid = combo.up("grid");
                                    var form = grid.editingPlugin.getEditor().getForm();
                                    if (form) {
                                        form.findField('valor').setValue(records[0].get('pc.valor'));
                                        if (!form.findField('ordem').getValue()) {
                                            form.findField('ordem').setValue(me.store.count());
                                        }
                                    }
                                },
                                beforerender: function(combo, b) {
                                    combo.store.getProxy().extraParams.tabela = me.operacao.tabela_preco;
                                }
                            }
                        }
                    },
                    {
                        header: 'Qtde.',
                        dataIndex: 'qtde',
                        summaryType: 'sum',
                        allowBlank: false,
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + value + '</span>';
                        },
                        editor: {
                            xtype: 'numberfield'
                        }
                    },
                    {
                        header: 'Valor Unit.',
                        dataIndex: 'valor',
                        align: 'right',
                        width: 80,
                        minWidth: 80,
                        renderer: Illi.app.Util.valorRenderer,
                        editor: Illi.app.Util.campoMoeda('valor')
                    },
                    {
                        header: 'Valor Total',
                        dataIndex: 'totalitem',
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Ordem',
                        dataIndex: 'ordem',
                        width: 15,
                        editor: {
                            xtype: 'numberfield',
                            minValue: 0.01
                        }
                    },
                    {
                        header: 'Situação',
                        dataIndex: 'situacao',
                        width: 15
                    },
                    {
                        header: 'Data',
                        dataIndex: 'data',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        hidden: true
                    }
                ]
            },
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'

                    },
                    {
                        text: 'Atualizar',
                        handler: function() {
                            me.store.load();
                        },
                        iconCls: 'icon-atualizar',
                        itemId: 'atualizar'
                    }
                ]
            },
            bbar: {
                items: [
                    '->',
                    {
                        xtype: 'panel',
                        border: false,
                        itemId: 'qtdeTotal',
                        bodyStyle: 'background: transparent;',
                        cls: 'destaque right',
                        html: ''
                    },
                    {
                        xtype: 'panel',
                        border: false,
                        itemId: 'valorTotal',
                        bodyStyle: 'background: transparent;',
                        cls: 'destaque right',
                        html: ''
                    }
                ]
            }
        });
        me.filtroInicial = [
            {"property": "situacao", "value": 'ATIVO', "type": "exact", "operator": "eq"}
        ];
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            grid.store.proxy.extraParams = {
                'id_movimentacao': grid.up('#janelaMovimentacao').id_movimentacao
            };
            grid.store.filter(grid.filtroInicial);
        }
    }
});
