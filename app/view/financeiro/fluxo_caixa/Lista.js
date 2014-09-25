Ext.define('Illi.view.financeiro.fluxo_caixa.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaFluxoCaixa',
    title: null,
    tipoLancamento: null,
    emptyText: "Nenhum registro Encontrado",
    requires: [
        'Illi.view.financeiro.Combo',
        'Illi.view.financeiro.ComboTipoDespesa',
        'Illi.view.financeiro.prazo.Combo',
        'Illi.view.banco.conta.Combo',
        'Illi.view.financeiro.ComboNatureza'
    ],
    setTipo: function(tipo) {
        this.tipoLancamento = tipo;
    },
    getTipo: function() {
        return this.tipoLancamento;
    },
    initComponent: function() {
        var me = this;
        me.filtroInicial = (Illi.app.Local.get('filtro-gridFluxoCaixa') ? Illi.app.Local.get('filtro-gridFluxoCaixa') : false);
        Ext.apply(me, {
            stateful: true,
            stateId: 'listaFluxoCaixa',
            store: 'FluxoCaixas',
            tbar: {
                items: [
                    {
                        text: 'Incluir Receita',
                        action: 'incluirReceita',
                        iconCls: 'icon-receita',
                        disabled: true,
                        itemId: 'incluirReceita'

                    },
                    {
                        text: 'Incluir Despesa',
                        action: 'incluirDespesa',
                        iconCls: 'icon-despesa',
                        disabled: true,
                        itemId: 'incluirDespesa'

                    },
                    {
                        text: 'Duplicar ',
                        action: 'duplicar',
                        iconCls: 'icon-duplicar',
                        disabled: true,
                        itemId: 'duplicar'

                    },
                    {
                        text: 'Cancelar',
                        action: 'excluir',
                        iconCls: 'icon-remover',
                        disabled: true,
                        itemId: 'excluir'
                    },
                    {
                        text: 'Parecer',
                        iconCls: 'icon-parecer',
                        action: 'listarParecer',
                        disabled: true,
                        itemId: 'listarParecer'
                    },
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
                        disabled: true,
                        itemId: 'imprimir'
                    },
                    {
                        text: 'Exportar Excel',
                        iconCls: 'icon-excel',
                        action: 'excel',
                        disabled: true,
                        itemId: 'excel'
                    }
                ]

            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: 'FluxoCaixas',
                    dock: 'bottom',
                    displayInfo: true
                }
            ],
            columns: {
                defaults: {
                    filter: true
                },
                items: [
//                    {
//                        xtype: 'rownumberer',
//                        width: 30
//                    },
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        width: 50,
                        filter: {
                            operator: 'eq',
                            type: 'int'
                        }
                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'tipo',
                        hidden: true

                    },
                    {
                        header: 'Natureza',
                        dataIndex: 'nl.descricao',
                        hideable: false,
                        editor: {
                            xtype: 'comboNatureza',
                            allowBlank: false,
                            forceSelection: true,
                            store: Ext.create('Illi.store.Naturezas', {storeId: 'comboNaturezasFluxo'})
                        },
                        flex: 1.2
                    },
                    {
                        header: 'Vl. Titulo',
                        renderer: function(valor, b, record) {
                            if (record.get('tipo') === 'DESPESA') {
                                return Illi.app.Util.valorRenderer(-valor);
                            }
                            return Illi.app.Util.valorRenderer(valor);
                        },
                        summaryType: 'sum',
                        dataIndex: 'valor_pago',
                        align: 'right',
                        editor: {
                            xtype: 'numberfield',
                            allowDecimals: true,
                            decimalPrecion: 2,
                            decimalSeparator: ',',
                            allowBlank: false,
                            minValue: 0.01

                        },
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }

                    },
                    {
                        header: 'Forma Pagamento',
                        hideable: false,
                        dataIndex: 'pz.id',
                        renderer: function(value, metaData, record) {
                            if (record.get('pz.descricao')) {
                                return record.get('pz.id') + ' - ' + record.get('pz.descricao');
                            } else {
                                return value;
                            }
                        },
                        editor: {
                            xtype: 'comboPrazo',
                            allowBlank: false
                        },
                        filter: {
                            type: 'list',
                            displayField: 'descricao',
                            valueField: 'id',
                            store: Ext.create('Illi.store.Prazos')
                        }
                    },
                    {
                        header: 'Empresa',
                        dataIndex: 'e.id',
                        hideable: false,
                        renderer: function(a, b, record) {
                            return record.get('e.id') + ' - ' + record.get('e.nome');
                        },
                        editor: {
                            xtype: 'comboEntidade',
                            allowBlank: false
                        },
                        filter: {
                            type: 'list',
                            displayField: 'nome_entidade',
                            valueField: 'e.id',
                            editable: false,
                            store: Ext.create('Illi.store.UsuarioEntidades')
                        }
                    },
                    {
                        header: 'Conta/Carteira',
                        dataIndex: 'c.nome',
                        editor: {
                            xtype: 'comboConta',
                            allowBlank: false
                        },
                        flex: 2
                    },
                    {
                        header: 'Data',
                        dataIndex: 'data_baixa',
                        dateFormat: 'Y-m-d H:i:s',
                        xtype: 'datecolumn',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        editor: {
                            xtype: 'datefield',
                            format: 'd/m/Y',
                            allowBlank: false

                        }
                    },
                    {
                        header: 'Observação',
                        dataIndex: 'observacao',
                        editor: {
                            xtype: 'textfield'
                        },
                        width: 200

                    },
                    {
                        header: 'Data Cadastrato',
                        dataIndex: 'data_emissao',
                        xtype: 'datecolumn',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        width: 80,
                        flex: false,
                        hidden: true
                    },
                    {
                        header: 'Financeiro',
                        dataIndex: 'movimenta_conta',
                        width: 50,
                        flex: false,
                        renderer: function(value, metaData, record) {
                            if (record.get('movimenta_conta') === 'S') {
                                return 'Não';
                            } else {
                                if (record.get('tipo') === 'DESPESA') {
                                    metaData.css = "tituloDespesaFinanceiro";
                                } else {
                                    metaData.css = "tituloReceitaFinanceiro";
                                }
                                return 'Sim';
                            }
                        },
                        filter: {
                            xtype: 'comboBool',
                            type: 'int'
                        }
                    }

                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'rowediting': {
                    listeners: {
                        validateedit: function(editor, e, opt) {
                            e.record.data.tipo = me.tipoLancamento;
                            //e.record.commit();
                        },
                        beforeEdit: function(editor, grid, opt) {
                            if (grid.record.get('id')) {
                                return false;
                            }
                            if (editor.grid.store.isGrouped()) {
                                Ext.MessageBox.show({
                                    title: 'Alerta',
                                    msg: 'Desagrupe antes de Editar!',
                                    icon: Ext.MessageBox.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                                return false;
                            }
                        }
                    }
                }
            }),
            viewConfig: {
                forceFit: true,
                showPreview: true,
                enableRowBody: true,
                getRowClass: function(record, index) {
                    if (record.get('tipo') === 'DESPESA') {
                        return 'tituloDespesa';
                    }
                }
            }
        });
        me.callParent(arguments);
        if (me.store.getCount() > 1) {
            me.store.group('tipo');
        }
    },
    listeners: {
        afterrender: function(grid) {
            grid.getSelectionModel().on('selectionchange', grid.selecionar, grid);
            this.down('#incluirReceita').setDisabled(!this.ativarBotao('incluirReceita'));
            this.down('#incluirDespesa').setDisabled(!this.ativarBotao('incluirDespesa'));
            if (grid.filtroInicial) {
                grid.store.filter(grid.filtroInicial);
            } else {
                grid.store.load();
            }
        }
    },
    selecionar: function(selModel, selections) {
        this.down('#incluirReceita').setDisabled(!this.ativarBotao('incluirReceita'));
        this.down('#incluirDespesa').setDisabled(!this.ativarBotao('incluirDespesa'));
        this.down('#imprimir').setDisabled(!this.ativarBotao('imprimir'));
        this.down('#excel').setDisabled(!this.ativarBotao('excel'));
        this.down('#excluir').setDisabled(!(selections.length === 1 && this.ativarBotao('excluir', selections[0].get('e.id'))));
        this.down('#listarParecer').setDisabled(!this.ativarBotao('listarParecer'));
        this.down('#duplicar').setDisabled(!(selections.length === 1 && this.ativarBotao('duplicar', selections[0].get('e.id'))));
    }
});