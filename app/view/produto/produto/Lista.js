Ext.define('Illi.view.produto.produto.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaProduto',
    title: null,
    itemId: 'listaProduto',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.ComboSituacao',
        'Illi.view.produto.unidade.Combo',
        'Illi.view.produto.grupo.Combo',
        'Illi.view.produto.categoria.Combo',
        'Illi.view.produto.marca.Combo',
        'Illi.view.produto.produto.ListaEstoquePreco'
    ],
    filtroInicial: [
        {"property": "pg.situacao", "value": ['1'], "type": "list"}
    ],
    stateful: true,
    stateId: 'listaProduto',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            store: 'produto.Produtos',
            edicao: true,
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluirProduto',
                        disabled: true,
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'

                    },
                    {
                        text: 'Incluir (Formulário)',
                        action: 'incluirProdutoFormulario',
                        iconCls: 'icon-adicionar',
                        itemId: 'incluirProdutoFormulario'

                    },
                    {
                        text: 'Duplicar ',
                        action: 'duplicarProduto',
                        disabled: true,
                        iconCls: 'icon-duplicar',
                        itemId: 'duplicarProduto'

                    },
                    {
                        text: 'Atualizar',
                        action: 'atualizar',
                        disabled: true,
                        iconCls: 'icon-atualizar',
                        itemId: 'atualizar'
                    },
                    {
                        text: 'Formação de Preço',
                        action: 'formacaoPreco',
                        disabled: true,
                        iconCls: 'icon-preco',
                        itemId: 'formacaoPreco'
                    },
                    {
                        text: 'Parecer',
                        iconCls: 'icon-parecer',
                        action: 'listarParecer',
                        disabled: true,
                        itemId: 'listarParecer'
                    },
                    {
                        text: 'Exportar Excel',
                        iconCls: 'icon-excel',
                        action: 'excel',
                        itemId: 'excel'
                    }
                ]
            },
            columns: {
                defaults: {
                    filter: true,
                    editor: true
                },
                items: [
                    {
                        xtype: 'actioncolumn',
                        menuDisabled: true,
                        id: me.setIdColuna('actioncolumn'),
                        sortable: false,
                        filter: false,
                        editor: false,
                        width: 30,
                        items: [{
                                itemId: 'formProdutoGrade',
                                icon: Illi.app.Util.getPath("/resources/images/icones/formulario.png"),
                                tooltip: 'Editar em Formulario'
                            }]
                    },
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        id: me.setIdColuna('id'),
                        editor: false,
                        hidden: true,
                        filter: {
                            'type': 'int'
                        }
                    },
                    {
                        header: 'Produto',
                        dataIndex: 'p.id',
                        id: me.setIdColuna('p_id'),
                        editor: false,
                        hidden: true,
                        filter: {
                            'type': 'int'
                        }
                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'p.tipo',
                        id: me.setIdColuna('p_tipo'),
                        editor: false,
                        hidden: true,
                        flex: 0.75
                    },
                    {
                        header: 'Referência',
                        id: me.setIdColuna('referencia'),
                        dataIndex: 'p.codigo'
                    },
                    {
                        header: 'Código Interno',
                        id: me.setIdColuna('codigo'),
                        dataIndex: 'codigo',
                        editor: {
                            xtype: 'textfield',
                            value: "testsetes"
                        }
                    },
                    {
                        header: 'Desc. Resumida',
                        id: me.setIdColuna('nome'),
                        dataIndex: 'p.nome',
                        editor: {
                            allowBlank: false
                        },
                        flex: 2
                    },
                    {
                        header: 'Descrição',
                        hidden: true,
                        dataIndex: 'p.descricao',
                        id: me.setIdColuna('descricao'),
                        renderer: function (valor, b, record) {
                            var gradex = record.get('gradex');
                            var gradey = record.get('gradey');
                            return valor + (gradex ? ' ' + gradex : '') + (gradey ? ' ' + gradey : '');
                        },
                        flex: 2
                    },
                    {
                        header: 'Unid. Venda',
                        dataIndex: 'u.nome',
                        id: me.setIdColuna('u_nome'),
                        editor: {
                            xtype: 'comboUnidade',
                            allowBlank: false
                        }
                    },
                    {
                        header: 'Grupo',
                        dataIndex: 'g.nome',
                        id: me.setIdColuna('g_nome'),
                        editor: {
                            xtype: 'comboGrupo',
                            allowBlank: false
                        },
                        flex: 1
                    },
                    {
                        header: 'Categoria',
                        dataIndex: 'c.nome',
                        id: me.setIdColuna('c_nome'),
                        hidden: true,
                        editor: {
                            xtype: 'comboCategoria'
                        }
                    },
                    {
                        header: 'Marca',
                        dataIndex: 'm.nome',
                        id: me.setIdColuna('m_nome'),
                        editor: {
                            xtype: 'comboMarca',
                            allowBlank: false
                        }
                    },
                    {
                        header: 'Custo',
                        dataIndex: 'pc.valor',
                        id: me.setIdColuna('pc_valor'),
                        align: 'right',
                        width: 80,
                        minWidth: 80,
                        renderer: Illi.app.Util.valorRenderer,
                        editor: Illi.app.Util.campoMoeda('pc.valor')
                    },
                    {
                        header: 'Venda',
                        dataIndex: 'pv.valor',
                        id: me.setIdColuna('pv_valor'),
                        align: 'right',
                        width: 80,
                        minWidth: 80,
                        renderer: Illi.app.Util.valorRenderer,
                        editor: Illi.app.Util.campoMoeda('pv.valor')
                    },
                    {
                        header: 'Observação',
                        dataIndex: 'p.observacao',
                        id: me.setIdColuna('observacao'),
                        hidden: true
                    },
                    {
                        header: 'Complemento',
                        dataIndex: 'complemento',
                        id: me.setIdColuna('complemento'),
                        hidden: true
                    },
                    {
                        header: 'Estoque',
                        align: 'right',
                        dataIndex: 'pg.estoque',
                        id: me.setIdColuna('pg_estoque'),
                        editor: false,
                        hidden: true
                    },
                    {
                        header: 'data',
                        dataIndex: 'data',
                        id: me.setIdColuna('data'),
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        hidden: true
                    },
                    {
                        header: 'Situação',
                        dataIndex: 'p.situacao',
                        hidden: true,
                        id: me.setIdColuna('p_situacao'),
                        editor: {
                            xtype: 'comboConfiguracaoSituacao',
                            allowBlank: true,
                            fieldLabel: false,
                            tipo: 'PRODUTO'
                        },
                        filter: {
                            xtype: 'comboConfiguracaoSituacao',
                            allowBlank: true,
                            fieldLabel: false,
                            tipo: 'PRODUTO'
                        },
                        width: 80
                    },
                    {
                        header: 'Ativo',
                        dataIndex: 'pg.situacao',
                        id: me.setIdColuna('pg_situacao'),
                        renderer: function (valor) {
                            return(valor ? 'ATIVO' : 'DESATIVO');
                        },
                        editor: {
                            xtype: 'combobox',
                            allowBlank: false,
                            store: [[1, 'ATIVO'], [0, 'DESATIVO']]
                        },
                        filter: {
                            type: 'list',
                            store: [[1, 'ATIVO'], [0, 'DESATIVO']]
                        },
                        width: 80
                    }
                ]
            },
            //selType: 'cellmodel',
            dockedItems: [
                {
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'pagingtoolbar',
                            store: Ext.getStore("produto.Produtos"),
                            displayInfo: true
                        }
                    ]

                }
            ]
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function (grid) {
            grid.store.filter(grid.filtroInicial);
            grid.getEl().addKeyMap({
                binding: [
                    {
                        key: Ext.EventObject.INSERT,
                        ctrl: true,
                        fn: function () {
                            grid.down('#incluir').fireHandler();
                        }
                    }
                ]
            });
            grid.getEl().addKeyMap({
                binding: [
                    {
                        key: Ext.EventObject.INSERT,
                        ctrl: true,
                        fn: function () {
                            grid.down('#incluir').fireHandler();
                        }
                    }
                ]
            });
        }
    },
    onRender: function () {
        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange', this.selecionar, this);
        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
        this.down('#atualizar').setDisabled(!this.ativarBotao('atualizar'));
    },
    selecionar: function (selModel, selections) {
        this.down('#listarParecer').setDisabled(true);
        this.down('#formacaoPreco').setDisabled(true);
        this.down('#duplicarProduto').setDisabled(true);
        if (selections[0]) {
            this.down('#duplicarProduto').setDisabled(!(selections.length === 1));
            this.down('#listarParecer').setDisabled(!(selections.length === 1 && this.ativarBotao('listarParecer', selections[0].get('p.id'))));
            this.down('#formacaoPreco').setDisabled(!(selections.length === 1));
            try {
                var store = Ext.getStore("ProdutoPrecoEstoques");
                store.getProxy().extraParams = {
                    id_produto_grade: selections[0].get('id')
                };
                store.load();
            } catch (err) {
                error(err);
            }
        }
    }
});
