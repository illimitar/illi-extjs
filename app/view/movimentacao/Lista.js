Ext.define('Illi.view.movimentacao.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaMovimentacao',
    itemId: 'listaMovimentacao',
    title: null,
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.pessoa.Combo',
        'Illi.view.usuario.entidade.Combo',
        'Illi.view.financeiro.tipo_movimentacao.Combo',
        'Illi.view.configuracao.operacao.Combo'
    ],
    filtroInicial: [
        {"property": "tp.nome", "value": ['Pedido', 'Conferência', 'Transferência'], "type": "list", "operator": "eq"}
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: "movimentacao.Movimentacaos",
            edicao: false,
            selModel: {
                mode: 'MULTI'
            },
            tbar: {
                items: [
                    {
                        text: "Incluir",
                        action: 'incluir',
                        disabled: true,
                        tooltip: '<b>Incluir</b> Movimento de Estoque',
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'

                    },
                    {
                        text: "Atualizar",
                        action: 'atualizar',
                        tooltip: 'Atualizar Lista!',
                        iconCls: 'icon-atualizar',
                        itemId: 'atualizar'
                    },
                    {
                        text: "Confirmar",
                        disabled: true,
                        action: 'confirmar',
                        tooltip: '<b>Confirmar</b> Movimento de Estoque',
                        iconCls: 'icon-confirmar',
                        itemId: 'confirmar'
                    },
                    {
                        text: "Conferir",
                        disabled: true,
                        action: 'conferir',
                        tooltip: '<b>Conferir</b>',
                        iconCls: 'icon-editar',
                        itemId: 'conferir'
                    },
                    {
                        text: "Etiquetas",
                        action: 'etiqueta',
                        tooltip: '<b>Etiquetas</b>',
                        iconCls: 'icon-etiqueta',
                        itemId: 'etiqueta'
                    },
                    {
                        text: 'Cancelar',
                        action: 'excluir',
                        iconCls: 'icon-remover',
                        disabled: true,
                        itemId: 'excluir'
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
                        sortable: false,
                        filter: false,
                        width: 25,
                        items: [{
                                icon: '../resources/images/icones/acao/visualizar.png',
                                tooltip: 'Imprimir ou Visualizar'
                            }]
                    },
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        editor: false,
                        // hidden: true,
                        filter: {
                            'type': 'int'
                        }
                    },
                    {
                        header: 'Numero',
                        dataIndex: 'numero',
                        editor: false
                    },
                    {
                        header: 'COO',
                        dataIndex: 'cupom',
                        editor: false
                    },
                    {
                        header: 'Parceiro',
                        dataIndex: 'p.nome',
                        renderer: function(value, metaData, record) {
                            return value + ' (' + record.get('p.id') + ')';
                        },
                        hideable: false,
                        filter: 'string',
                        flex: 0.6,
                        minWidth: 200
                    },
                    {
                        header: 'Transportadora',
                        dataIndex: 't.nome',
                        renderer: function(value, metaData, record) {
                            if (value) {
                                return value + ' (' + record.get('t.id') + ')';
                            } else {
                                return '';
                            }
                        },
                        filter: 'string',
                        width: 200,
                        minWidth: 50,
                        hidden: true
                    },
//                    {
//                        header: 'Vendedor',
//                        dataIndex: 'v.nome',
//                        renderer: function(value, metaData, record) {
//                            return value + ' (' + record.get('v.id') + ')';
//                        },
//                        filter: 'string',
//                        width: 200,
//                        minWidth: 50
//                    },
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
                        width: 150
                    },
                    {
                        header: 'Operação',
                        dataIndex: 'go.id',
                        hidden: true,
                        renderer: function(value, b, record) {
                            if (value) {
                                return value + ' - ' + record.get('go.nome');
                            }
                        },
                        filter: {
                            xtype: 'comboConfiguracaoOperacao',
                            fieldLabel: false,
                            name: "go.id"
                        },
                        width: 150
                    },
                    {
                        header: 'Valor ',
                        dataIndex: 'valor_venda',
                        hidden: true,
                        filter: {
                            'type': 'float'
                        },
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        },
                        width: 80
                    },
                    {
                        header: 'Valor Pago',
                        dataIndex: 'valor_pago',
                        hidden: true,
                        filter: {
                            'type': 'float'
                        },
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        },
                        width: 80
                    },
                    {
                        header: 'Valor Desconto',
                        dataIndex: 'valor_desconto',
                        hidden: true,
                        filter: {
                            'type': 'float'
                        },
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        },
                        width: 80
                    },
                    {
                        header: 'Data Emissão',
                        dataIndex: 'data_emissao',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        width: 100

                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'tp.nome',
                        filter: {
                            type: 'list',
                            displayField: 'nome',
                            valueField: 'nome',
                            //valueField: 'tp.nome',
                            editable: false,
                            store: Ext.create('Illi.store.TipoMovimentacoes', {storeId: "filtroTipoMovimentacao"})
                        },
                        width: 100

                    },
                    {
                        header: 'Situação',
                        dataIndex: 'situacao',
                        width: 80
                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'tipo',
                        hidden: true,
                        width: 50
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("movimentacao.Movimentacaos"),
                    dock: 'bottom',
                    displayInfo: true
                }
            ],
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
                    if (tipo === 'SAIDA') {
                        return 'tituloDespesa';
                    }
                }
            }
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            grid.getEl().addKeyMap({
                binding: [
                    {
                        key: Ext.EventObject.INSERT,
                        ctrl: true,
                        fn: function() {
                            grid.down('#incluir').fireHandler();
                        }
                    }
                ]
            });
        }
    },
    onRender: function() {
        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange', this.selecionar, this);
        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
    },
    selecionar: function(selModel, selections) {
        var ativaConfirmar = false;
        var ativaConferir = false;
        var ativarExcluir = false;

        if (selections[0] && selections.length === 1) {
            switch (selections[0].get('tp.id')) {
                case 3:
                    ativaConfirmar = (selections[0].getData().situacao === "Aberto" && this.ativarBotao('confirmar'));
                    switch (selections[0].getData().situacao) {
                        case "Confirmado":
                        case "Atendido Parcialmente":
                            ativaConferir = this.ativarBotao('conferir');
                            break;
                    }
                    break;
                case 5:
                    ativaConfirmar = (selections[0].getData().situacao === "Aberto" && this.ativarBotao('confirmar'));
                    switch (selections[0].getData().situacao) {
                        case "Pendente":
                            ativaConfirmar = this.ativarBotao('confirmar');
                            break;
                    }
                    break;
//                case 4:
//                    ativaConferir = (selections[0].getData().situacao === "Aberto" && this.ativarBotao('conferir'));
//                    break;
            }
            if (selections[0].getData().situacao === "Aberto" || selections[0].getData().situacao === "Pendente") {
                ativarExcluir = (selections.length === 1 && this.ativarBotao('excluir', selections[0].get('e.id')));
            }


        }
        this.down('#excluir').setDisabled(!ativarExcluir);
        this.down('#confirmar').setDisabled(!ativaConfirmar);
        this.down('#conferir').setDisabled(!ativaConferir);

        try {
            if (selections[0].get('situacao') === "Confirmado") {
                this.down('#confirmar').setText('Estornar');
                this.down('#confirmar').action = 'estornar';
                this.down('#confirmar').setDisabled(this.ativarBotao('estornar'));
            } else {
                this.down('#confirmar').setText('Confirmar');
                this.down('#confirmar').action = 'confirmar';
            }
        } catch (err) {
            error(err);
        }

    }
});
