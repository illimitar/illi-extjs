Ext.define('Illi.view.financeiro.pdv.ListaDevolucaoEdicao', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaDevolucaoEdicao',
    itemId: 'listaDevolucaoEdicao',
    requires: [
//        'Illi.view.ComboSituacao',
        'Illi.view.produto.produto.Combo'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyBorder: false,
//            bodyStyle: 'background: transparent;',
//            layout: {
//                type: 'anchor',
//                reserveScrollbar: true // There will be a gap even when there's no scrollbar
//            },
            //
            enableColumnHide: false,
            enableColumnMove: false,
            enableColumnResize: false,
            sortableColumns: false,
            autoScroll: true,
            //
            store: Ext.create('Illi.store.MovimentacaoDetalhes', {
                autoLoad: false,
                storeId: 'storePdvDevolucaoEdicao',
                listeners: {
                    load: function(ret, dados, funcao) {
                        var valor = '<span style="font-size: 1.3em; padding-left:50px; color:blue"><b>Total Qtde: </b>' + Illi.app.Util.floatRenderer(this.sum('qtde')) + '</span>';
                        me.down('#pdvProdutoDevolucaoEdicaoQtde').update(valor);
                        var valor = '<span style="font-size: 1.3em; padding-left:50px; color:green"><b>Total Itens: </b>' + Illi.app.Util.valorRenderer(this.sum('totalitem')) + '</span>';
                        me.down('#pdvProdutoDevolucaoEdicaoTotal').update(valor);
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
                    filter: false,
                    menuDisabled: true
                },
                items: [
                    {
                        header: 'ID MOVIMENTACAO',
                        dataIndex: 'm.id',
                        hidden: true
                    },
                    {
                        header: 'ID DETALHE',
                        dataIndex: 'id',
                        hidden: true
                    },
                    {
                        header: 'ID PRODUTO',
                        dataIndex: 'pg.id',
                        hidden: true
                    },
//                    {
//                        header: 'Codigo',
//                        dataIndex: 'codigo',
//                        width: 15
//                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        flex: 1,
                        editor: (me.numero ? false : {
                            xtype: 'comboProduto',
                            pdv: true,
                            store: Ext.create('Illi.store.produto.Produtos', {storeId: "comboProdutosDetalhe", autoDestroy: true, pdv: true}),
                            listeners: {
                                'select': function(combo, records) {
//                                    var plugin = me.getPlugin('editorGrid-listaDevolucaoEdicao');
//                                    var form = plugin.getEditor().getForm();
                                    var grid = combo.up("grid");
                                    var form = grid.editingPlugin.getEditor().getForm();
                                    if (form) {
                                        form.findField('valor').setValue(records[0].get('pv.valor'));
//                                        if (!form.findField('ordem').getValue()) {
//                                            form.findField('ordem').setValue(me.store.count());
//                                        }
                                    }
                                }
                            }
                        })
                    },
                    {
                        header: 'Qtde.',
                        dataIndex: 'qtde',
                        align: 'right',
                        renderer: Illi.app.Util.floatRenderer,
                        flex: 0.3,
                        editor: {
                            xtype: 'numberfield'
                        }
                    },
                    {
                        header: 'Valor',
                        dataIndex: 'valor',
                        align: 'right',
                        renderer: Illi.app.Util.valorRenderer,
                        flex: 0.5,
                        editor: Illi.app.Util.campoMoeda('valor')
                    },
                    {
                        header: 'T. Item',
                        dataIndex: 'totalitem',
                        hidden: true
                    }
//                    {
//                        header: 'Ordem',
//                        dataIndex: 'ordem',
//                        width: 15,
//                        editor: true
//                    },
//                    {
//                        header: 'Situação',
//                        dataIndex: 'situacao',
//                        width: 15
//                    },
//                    {
//                        header: 'Data',
//                        dataIndex: 'data',
//                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
//                        hidden: true
//                    }
                ]
            },
            viewConfig: {
                forceFit: true,
                showPreview: true,
                enableRowBody: true,
                getRowClass: function(record, index) {
                    var situacao = record.get('situacao');
                    if (situacao === 'ZERADO') {
                        return 'cancelado';
                    }
                }
            },
            tbar: {
                items: [
                    {
                        iconCls: 'icon-adicionar',
                        text: 'Incluir',
                        action: 'devolucao-edicao-adicionar',
                        disabled: (me.numero ? true : false)
                    },
                    {
                        iconCls: 'icon-atualizar',
                        text: 'Atualizar',
                        action: 'devolucao-edicao-atualizar'
                    }
                ]
            },
            bbar: {
                items: [
                    '->',
                    {
                        xtype: 'panel',
                        border: false,
                        itemId: 'pdvProdutoDevolucaoEdicaoQtde',
                        bodyStyle: 'background: transparent;',
                        cls: 'destaque right',
                        html: 'Qtde'
                    },
                    {
                        xtype: 'panel',
                        border: false,
                        itemId: 'pdvProdutoDevolucaoEdicaoTotal',
                        bodyStyle: 'background: transparent;',
                        cls: 'destaque right',
                        html: 'Total'
                    }
                ]
            }
        });
        me.store.proxy.extraParams = {
            'id_movimentacao': me.id_movimentacao,
            'devolucao': true
        };
        me.store.load();
        me.callParent(arguments);
    }
});