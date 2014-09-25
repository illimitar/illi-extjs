Ext.define('Illi.view.produto.codigo_barra.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaCodigoBarra',
    title: null,
    itemId: 'listaCodigoBarra',
    id_produto_grade: null,
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.produto.tipo_codigobarra.Combo',
        'Illi.view.ComboSituacao'
    ],
    store: 'produto.CodigoBarras',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
                        disabled: true,
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'

                    },
                    {
                        text: 'Duplicar ',
                        action: 'duplicar',
                        disabled: true,
                        iconCls: 'icon-duplicar',
                        itemId: 'duplicar'

                    },
                    {
                        text: 'Atualizar',
                        action: 'atualizar',
                        disabled: true,
                        iconCls: 'icon-atualizar',
                        itemId: 'atualizar'
                    }
                ]
            },
            columns: {
                defaults: {
                    filter: true,
                    editor: {
                        allowBlank: false
                    }
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id', // codigo do campo no model
                        editor: false, // permite edição
                        hidden: true,
                        filter: {
                            'type': 'int'
                        }
                    },
                    {
                        header: 'Código',
                        dataIndex: 'codigo',
                        flex: 1
                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'tcb.nome',
                        editor: {
                            xtype: 'comboTipoCodigoBarra',
                            allowBlank: false
                        },
                        renderer: function(valor, b, record) {
//                            if (!valor) {
//                                valor = record.raw.tipo_codigobarra.nome;
//                                record.set('tcb.nome', record.raw.tipo_codigobarra.nome);
//                                record.set('tcb.id', record.raw.tipo_codigobarra.id);
//                            }
                            return valor;
                        },
                        flex: 1
                    },
                    {
                        header: 'Ativo',
                        dataIndex: 'situacao',
                        editor: {
                            xtype: 'comboSituacao',
                            allowBlank: false
                        }
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: me.getStore(),
                    dock: 'bottom',
                    displayInfo: true
                }
            ],
            plugins: Illi.app.Util.setPlugins({
                'filterbar': false
            })
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            var janela = (grid.up('#produtoJanelaGrade') ? grid.up('#produtoJanelaGrade') : grid.up('#produtoJanela'));
            var store = grid.getStore();
            if (store) {
                try {
                    store.proxy.extraParams = {
                        'gradex': janela.gradex,
                        'gradey': janela.gradey,
                        'id_produto': janela.id_produto,
                        'id_produto_grade': janela.id_produto_grade,
                        'tipo': janela.produto['p.tipo']
                    };
                } catch (err) {
                    console.warn(err);
                }
                store.load();
            }
        }
    },
    onRender: function() {
        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange', this.selecionar, this);
        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
        this.down('#atualizar').setDisabled(!this.ativarBotao('atualizar'));
    },
    selecionar: function(selModel, selections) {
        if (selections[0]) {
            this.down('#duplicar').setDisabled(!this.ativarBotao('duplicar'));
        }
    }
});