Ext.define('Illi.view.financeiro.Lista', {
    requires: [
        'Illi.view.usuario.entidade.Combo',
        'Illi.view.financeiro.Combo',
        'Illi.view.financeiro.moeda.Combo',
        'Illi.view.financeiro.prazo.Combo',
        'Illi.view.financeiro.tipo_titulo.Combo',
        'Illi.view.pessoa.Combo',
        'Illi.view.pessoa.ComboJuridica',
        'Illi.view.financeiro.ComboTipoDespesa',
        'Illi.view.financeiro.parecer.Janela',
        'Illi.view.banco.conta.Combo',
        'Illi.view.natureza.Combo'

    ],
    extend: 'Illi.view.AbstractList',
    alias: 'widget.financeiroLista',
    title: null,
    boder: false,
    selModel: {
        mode: 'MULTI'
    },
    emptyText: "Nenhum registro Encontrado",
    pegaTipo: function() {
        if (this.store.storeId === 'financeiroApagar') {
            return   'DESPESA';
        }
        if (this.store.storeId === 'financeiroReceber') {
            return   'RECEITA';
        }
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir',
                        disabled: true

                    },
                    {
                        text: 'Duplicar ',
                        action: 'duplicar',
                        iconCls: 'icon-duplicar',
                        disabled: true,
                        itemId: 'duplicar'

                    },
                    {
                        text: 'Multiplicar ',
                        action: 'multiplicar',
                        iconCls: 'icon-duplicar',
                        disabled: true,
                        itemId: 'multiplicar'
                    },
                    {
                        text: 'Arquivar',
                        action: 'arquivar',
                        iconCls: 'icon-arquivar',
                        disabled: true,
                        itemId: 'arquivar'
                    }
                    , {
                        text: 'Atualizar',
                        action: 'atualizar',
                        iconCls: 'icon-atualizar',
                        itemId: 'atualizar'
                    }
                    ,
                    {
                        text: 'Baixar',
                        action: 'baixarTitulo',
                        iconCls: 'icon-dinheiro',
                        disabled: true,
                        itemId: 'baixarTitulo'
                    },
                    {
                        text: 'Estornar Pré-Baixa',
                        action: 'estornarPreBaixa',
                        iconCls: 'icon-remover',
                        disabled: true,
                        itemId: 'estornarPreBaixa'
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
                        text: 'Imprimir Grade',
                        iconCls: 'icon-imprimir',
                        action: 'imprimir',
                        disabled: true,
                        itemId: 'imprimir'
                    },
                    {
                        text: 'Exportar para Excel',
                        action: 'excel',
                        iconCls: 'icon-excel',
                        disabled: true,
                        itemId: 'excel'
                    },
                    "->",
                    {
                        iconCls: 'icon-email',
                        handler: function() {
                            try {
                                if (!me.id_fluxo) {
                                    var titulos = me.getStore();
                                    var id_fluxos = [];
                                    var id_fluxo = false;
                                    titulos.each(function(rec) {
                                        id_fluxos.push(rec.getData().id);
                                    });
                                    id_fluxo = id_fluxos.join();

                                }
                                var janelaEmail = Ext.create("Illi.view.email.Janela", {
                                    id_fluxo: id_fluxo
                                });
                                delete titulos;
                                delete id_fluxo;
                                janelaEmail.show();
                            } catch (err) {
                                error(err);
                            }
                        }
                    }

                ]


            },
            columns: {
                defaults: {
                    filter: true,
                    minWidth: 10
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        hidden: true,
                        id: me.setIdColuna('id'),
                        filter: {
                            type: 'int',
                            minValue: 1
                        }
                    },
                    {
                        header: 'Parceiro',
                        dataIndex: 'p.nome',
                        id: me.setIdColuna('p_nome'),
                        renderer: function(value, metaData, record) {
                            return value + ' (' + record.get('p.id') + ')';
                        },
                        editor: {
                            xtype: 'financeiroComboPessoa',
                            itemId: 'comboParceiro',
                            forceSelection: false,
                            allowBlank: false
                        },
                        hideable: false,
                        filter: 'string',
                        flex: 1,
                        minWidth: 200
                    },
                    {
                        header: 'Grupo Parceiro',
                        id: me.setIdColuna('gp_grupo'),
                        dataIndex: 'gp.grupo',
                        hidden: true,
                        width: 200
                    },
                    {
                        header: 'Forma Pagamento',
                        hideable: false,
                        dataIndex: 'pz.id',
                        id: me.setIdColuna('pz_id'),
                        width: 120,
                        renderer: function(value, metaData, record) {
                            if (record.get('pz.descricao')) {
                                return value + ' - ' + record.get('pz.descricao');
                            } else {
                                return value;
                            }
                        },
                        editor: {
                            xtype: 'comboPrazo',
                            allowBlank: false,
                            forceSelection: false
                        },
                        filter: {
                            type: 'list',
                            displayField: 'descricao',
                            valueField: 'id',
                            store: Ext.create('Illi.store.Prazos')
                        }
                    },
                    {
                        header: 'Numero',
                        dataIndex: 'numero',
                        id: me.setIdColuna('numero'),
                        summaryType: 'count',
                        hidden: true,
                        editor: {
                            xtype: 'textfield'
                        },
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">Qt. Total: ' + value + '</span>';
                        }
                    },
                    {
                        header: 'NN Boleto',
                        dataIndex: 'b.nossoNumero',
                        id: me.setIdColuna('b_nossoNumero'),
                        hidden: true
                    },
                    {
                        header: 'Vl. Titulo',
                        renderer: Illi.app.Util.valorRenderer,
                        editor: Illi.app.Util.campoMoeda('valor_titulo'),
                        id: me.setIdColuna('valor_titulo'),
                        summaryType: 'sum',
                        hideable: false,
                        dataIndex: 'valor_titulo',
                        align: 'right',
                        width: 80,
                        minWidth: 80,
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Vl. Pago',
                        dataIndex: 'valor_pago',
                        id: me.setIdColuna('valor_pago'),
                        renderer: Illi.app.Util.valorRenderer,
                        align: 'right',
                        minWidth: 80,
                        hidden: true,
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Observação',
                        dataIndex: 'observacao',
                        id: me.setIdColuna('observacao'),
                        editor: {
                            xtype: 'textfield'
                        }
                    },
                    {
                        header: 'Tipo Titulo',
                        dataIndex: 'tp.id',
                        id: me.setIdColuna('tp_id'),
                        hidden: true,
                        editor: {
                            xtype: 'comboTipoTitulo'
                        },
                        renderer: function(value, b, record) {
                            if (record.get('tp.nome')) {
                                return record.get('tp.nome');
                            } else {
                                return value;
                            }
                        },
                        filter: {
                            xtype: 'comboTipoTitulo'
                        }
                    },
                    {
                        header: 'Tipo',
                        id: me.setIdColuna('tipo'),
                        dataIndex: 'tipo',
                        hidden: true
                    },
                    {
                        header: 'Vl. Acréscimo',
                        dataIndex: 'valor_acrescimo',
                        id: me.setIdColuna('valor_acrescimo'),
                        renderer: Illi.app.Util.valorRenderer,
                        align: 'right',
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        },
                        hidden: true
                    },
                    {
                        header: 'Vl. Multa',
                        dataIndex: 'valor_multa',
                        id: me.setIdColuna('valor_multa'),
                        renderer: Illi.app.Util.valorRenderer,
                        align: 'right',
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        },
                        hidden: true
                    },
                    {
                        header: 'Vl. Juros',
                        dataIndex: 'valor_juros',
                        id: me.setIdColuna('valor_juros'),
                        renderer: Illi.app.Util.valorRenderer,
                        align: 'right',
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        },
                        hidden: true
                    },
                    {
                        header: 'Vl. Desconto',
                        dataIndex: 'valor_desconto',
                        id: me.setIdColuna('valor_desconto'),
                        renderer: Illi.app.Util.valorRenderer,
                        align: 'right',
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        },
                        hidden: true
                    },
                    {
                        header: 'Previsão',
                        dataIndex: 'provisao',
                        id: me.setIdColuna('provisao'),
                        editor: Ext.create('Ext.form.field.ComboBox', {
                            name: 'provisao',
                            store: ['S', 'N'],
                            selectOnTab: true,
                            lazyRender: true,
                            listClass: 'x-combo-list-small',
                            triggerAction: 'all',
                            forceSelection: true
                        }),
                        hidden: true

                    },
                    {
                        header: 'Dt. Referencia',
                        dataIndex: 'data_referencia',
                        id: me.setIdColuna('data_referencia'),
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        editor: {
                            xtype: 'datefield',
                            format: 'd/m/Y',
                            allowBlank: true
                        },
                        hidden: true,
                        minWidth: 80
                    },
                    {
                        header: 'Dt. Emissão',
                        dataIndex: 'data_emissao',
                        id: me.setIdColuna('data_emissao'),
                        xtype: 'datecolumn',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        editor: {
                            xtype: 'datefield',
                            format: 'd/m/Y',
                            allowBlank: false
                        },
                        hideable: false,
                        minWidth: 80
                    },
                    {
                        header: 'Dt. Vencimento',
                        dataIndex: 'data_vencimento',
                        id: me.setIdColuna('data_vencimento'),
                        hideable: false,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        editor: {
                            xtype: 'datefield',
                            format: 'd/m/Y',
                            allowBlank: false
                        },
                        minWidth: 80
                    },
                    {
                        header: 'Dt. Baixa',
                        dataIndex: 'data_baixa',
                        xtype: 'datecolumn',
                        id: me.setIdColuna('data_baixa'),
                        hidden: true,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        minWidth: 80
                    },
                    {
                        header: 'Dt. Exclusão',
                        dataIndex: 'data_exclusao',
                        id: me.setIdColuna('data_exclusao'),
                        xtype: 'datecolumn',
                        hidden: true,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        minWidth: 80
                    },
                    {
                        header: 'Dt. Pré Baixa',
                        xtype: 'datecolumn',
                        dataIndex: 'data_prebaixa',
                        id: me.setIdColuna('data_prebaixa'),
                        type: 'date',
                        hidden: true,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        minWidth: 80
                    },
                    {
                        header: 'Dt. Arquivo',
                        xtype: 'datecolumn',
                        dataIndex: 'data_arquivado',
                        id: me.setIdColuna('data_arquivado'),
                        type: 'date',
                        hidden: true,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        minWidth: 80
                    },
                    {
                        header: 'Vendedor',
                        id: me.setIdColuna('vendedor'),
                        hidden: true,
                        dataIndex: 'v.nome'

                    },
                    {
                        header: 'Empresa',
                        dataIndex: 'e.id',
                        id: me.setIdColuna('empresa'),
                        hideable: false,
                        renderer: function(value, b, record) {
                            return value + ' - ' + record.get('e.nome');
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
                        },
                        width: 150
                    },
                    {
                        header: 'Natureza',
                        dataIndex: 'nl.descricao',
                        id: me.setIdColuna('nl_descricao'),
                        hideable: false,
                        filter: {
                            type: 'string',
                            itemId: me.pegaTipo + 'NaturezaFiltro'
                        },
                        editor: {
                            xtype: 'comboNatureza',
                            allowBlank: false,
                            forceSelection: false,
                            tipo: me.pegaTipo(),
                            store: Ext.create('Illi.store.Naturezas', {storeId: 'comboNaturezas' + me.pegaTipo()})
                        },
                        width: 200
                    },
                    {
                        header: 'ID Natureza',
                        dataIndex: 'nl.id',
                        id: me.setIdColuna('nl_id'),
                        hidden: true,
                        filter: {
                            type: 'numeric'
                        }
                    },
                    {
                        header: 'Conta/Carteira',
                        dataIndex: 'c.nome',
                        id: me.setIdColuna('c_nome'),
                        editor: false,
                        hidden: true,
                        width: 150
                    },
                    {
                        header: 'Sit.',
                        dataIndex: 'situacao',
                        id: me.setIdColuna('situacao'),
                        filter: {
                            type: 'list',
                            store: ['Aberto', 'Pré Baixa', 'Baixado', 'Cancelado', 'Vencido', 'Vencendo', 'Arquivado']
                        },
                        width: 80
                    }
                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'rowediting': {
                    listeners: {
                        validateedit: function(editor, e, opt) {
                            e.record.data.tipo = me.pegaTipo();
                        },
                        afterEdit: function(editor, grid, opt) {
                            var store = editor.grid.store;
                            if (store.getModifiedRecords()[0]) {
                                editor.grid.el.mask('Salvando...');
                            }
                            store.sync({
                                callback: function(a, b, c) {
                                    editor.grid.el.unmask();
                                    store.load();
                                }
                            });
                        },
                        beforeEdit: function(editor, grid, opt) {
                            if (editor.grid.store.isGrouped()) {
                                Ext.MessageBox.show({
                                    title: 'Alerta',
                                    msg: 'Desagrupe antes de Editar!',
                                    icon: Ext.MessageBox.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                                return false;
                            } else {
                                if (grid.record.get('data_baixa')) {
                                    Ext.MessageBox.show({
                                        title: 'Alerta',
                                        msg: 'O titulo já esta Baixado não pode ser Alterado!',
                                        icon: Ext.MessageBox.ERROR,
                                        buttons: Ext.Msg.OK
                                    });
                                    return false;
                                }
                                if (grid.record.get('data_prebaixa')) {
                                    Ext.MessageBox.show({
                                        title: 'Alerta',
                                        msg: 'O titulo já esta na Pré Baixa não pode ser Alterado',
                                        icon: Ext.MessageBox.ERROR,
                                        buttons: Ext.Msg.OK
                                    });
                                    return false;
                                }
                                if (grid.record.get('data_exclusao')) {
                                    Ext.MessageBox.show({
                                        title: 'Alerta',
                                        msg: 'O titulo não está aberto!',
                                        icon: Ext.MessageBox.ERROR,
                                        buttons: Ext.Msg.OK
                                    });
                                    return false;
                                }
                                if (grid.record.get('b.id') && !grid.record.get('id') === null) {
                                    Ext.MessageBox.show({
                                        title: 'Alerta',
                                        msg: 'O titulo possui Boleto não pode ser alterado!</br> Cancele o Boleto primeiro!',
                                        icon: Ext.MessageBox.ERROR,
                                        buttons: Ext.Msg.OK
                                    });
                                    return false;
                                }
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
                    var situacao = record.get('situacao');
                    var tipo = record.get('tipo');

                    if (situacao === 'Cancelado') {
                        return 'cancelado';
                    }

                    if (tipo === 'DESPESA') {
                        if (situacao === 'Vencido') {
                            return 'tituloDespesaVencido';
                        } else if (situacao === 'Vencendo') {
                            return 'tituloDespesaVencido';
                        } else {
                            return 'tituloDespesa';
                        }
                    } else if (tipo === 'RECEITA') {
                        if (situacao === 'Vencido') {
                            return 'tituloReceitaVencido';
                        } else if (situacao === 'Vencendo') {
                            return 'tituloReceitaVencido';
                        }
                    }
                }
            }
        });
        me.callParent(arguments);
    },
    onRender: function() {
        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange', this.selecionar, this);
        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
    },
    selecionar: function(selModel, selections) {
        try {
            var ativa = true;
            if (selections[0]) {
                try {
                    if (this.ativarBotao('baixarTitulo')) {
                        if (selections[0].getData().data_baixa) {
                            this.down('#baixarTitulo').setText('Estornar');
                            this.down('#baixarTitulo').action = 'estornar';
                        } else {
                            this.down('#baixarTitulo').setText('Baixar');
                            this.down('#baixarTitulo').action = 'baixarTitulo';
                        }
                    } else {
                        ativa = !selections[0].getData().data_baixa;
                    }
                    ativa = !selections[0].getData().data_exclusao;

                } catch (err) {
                    error(err);
                }
            }
            if (ativa && selections[0].getData()) {

                if (selections[0].getData().data_prebaixa && !(selections[0].getData().data_baixa)) {
                    this.down('#estornarPreBaixa').setDisabled(!(selections.length > 0 && this.ativarBotao('estornarPreBaixa', selections[0].get('e.id'))));
                } else {
                    this.down('#estornarPreBaixa').setDisabled(true);
                }

                this.down('#excluir').setDisabled(!(selections.length === 1 && this.ativarBotao('excluir', selections[0].get('e.id'))));
                this.down('#duplicar').setDisabled(!(selections.length === 1 && this.ativarBotao('duplicar', selections[0].get('e.id'))));
                this.down('#multiplicar').setDisabled(!(selections.length === 1 && this.ativarBotao('multiplicar', selections[0].get('e.id'))));
                this.down('#baixarTitulo').setDisabled(!(selections.length > 0 && this.ativarBotao('baixarTitulo', selections[0].get('e.id'))));
                this.down('#arquivar').setDisabled(!(selections.length === 1 && this.ativarBotao('arquivar', selections[0].get('e.id'))));
                //this.down('#listarParecer').setDisabled(!(selections.length === 1 && this.ativarBotao('listarParecer', selections[0].get('e.id'))));
                this.down('#excel').setDisabled(!this.ativarBotao('excel', selections[0].get('e.id')));
                this.down('#imprimir').setDisabled(!this.ativarBotao('imprimir', selections[0].get('e.id')));

                if (selections.length > 1) {
                    this.down('#listarParecer').setText('Parecer Multiplo');
                    this.down('#listarParecer').setDisabled(!(this.ativarBotao('listarParecer', selections[0].get('e.id'))));
                } else {
                    this.down('#listarParecer').setText('Parecer');
                    this.down('#listarParecer').setDisabled(!(selections.length === 1 && this.ativarBotao('listarParecer', selections[0].get('e.id'))));
                }

            } else {
                this.down('#excluir').setDisabled(true);
                this.down('#duplicar').setDisabled(true);
                this.down('#multiplicar').setDisabled(true);
                this.down('#baixarTitulo').setDisabled(true);
                this.down('#estornarPreBaixa').setDisabled(true);
                this.down('#arquivar').setDisabled(true);
                if (selections[0]) {
                    this.down('#listarParecer').setDisabled(false);
                }
                this.down('#excel').setDisabled(true);
                this.down('#imprimir').setDisabled(true);
            }
        } catch (e) {
            error(e);
        }
    }
});
