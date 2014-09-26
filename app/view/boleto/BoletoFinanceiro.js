Ext.define('Illi.view.boleto.BoletoFinanceiro', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.boletoFinanceiro',
    title: null,
    itemId: 'boletoFinanceiro',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Ext.toolbar.Toolbar',
        'Illi.view.usuario.entidade.Combo',
        'Illi.view.pessoa.Combo',
        'Illi.view.financeiro.prazo.Combo'
    ],
    filtroInicial: [
        {"property": "rm.id", "value": "Em Branco", "type": "string", "operator": "inl"}
    ],
    selModel: {
        mode: 'MULTI'
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.BoletoFinanceiros', {
                storeId: 'BoletoFinanceiros',
                autoLoad: false
            }),
            edicao: false,
            stateful: true,
            stateId: 'boletoFinanceiro',
            tbar: {
                items: [
                    {
                        iconCls: 'icon-boleto',
                        text: 'Boletos',
                        disabled: true,
                        action: 'gerarBoletos',
                        itemId: 'gerarBoletos'
                    },
                    {
                        text: 'Excluir',
                        iconCls: 'icon-remover',
                        disabled: true,
                        action: 'excluir',
                        itemId: 'excluir'
                    },
                    {
                        iconCls: 'icon-remessa',
                        text: 'Remessa',
                        disabled: true,
                        action: 'gerarRemessa',
                        itemId: 'gerarRemessa'
                    },
                    {
                        text: 'Atualizar',
                        action: 'atualizar',
                        iconCls: 'icon-atualizar',
                        itemId: 'atualizar'
                    }
                ]
            },
            columns: {
                defaults: {
                    filter: true,
                    editor: false
                },
                items: [
                    {
                        xtype: 'actioncolumn',
                        menuDisabled: true,
                        sortable: false,
                        filter: false,
                        width: 25,
                        items: [{
                                icon: Illi.app.Util.getPath("/resources/images/icones/tipo/pdf.png"),
                                tooltip: 'Imprimir ou Visualizar',
                                handler: function (grid, rowIndex, colIndex, item, e, record) {
                                    Ext.MessageBox.wait('Gerando PDF', 'Aguarde...');
                                    Ext.Ajax.request({
                                        url: '../pdf/pdf/url/',
                                        params: {
                                            illi: 'true',
                                            url: '/boleto/abstractBoleto/carregar_boleto/' + record.get('b.id')
                                        },
                                        success: function (arquivo) {
                                            Ext.MessageBox.show({
                                                title: 'Baixar PDF',
                                                msg: "Arquivo Gerado com Sucesso.",
                                                scope: this,
                                                buttons: Ext.MessageBox.OK,
                                                buttonText: {
                                                    iconCls: 'icon-pdf',
                                                    ok: "Baixar arquivo"
                                                },
                                                fn: function () {
                                                    closepage = true;
                                                    window.open(arquivo.responseText, "Baixar PDF");
                                                    this.close();
                                                }
                                            });
                                        }
                                    });
                                },
                                getClass: function (value, metadata, record) {
                                    var data_documento = record.get('b.dataDocumento');
                                    if (!data_documento) {
                                        return 'x-hide-display';
                                    }
                                }
                            }]
                    },
                    {
                        dataIndex: 'id',
                        xtype: 'actioncolumn',
                        menuDisabled: true,
                        sortable: false,
                        filter: false,
                        width: 25,
                        items: [{
                                icon: Illi.app.Util.getPath("/resources/images/icones/acao/visualizar.png"),
                                tooltip: 'Visualizar',
                                handler: function (grid, rowIndex, colIndex, item, e, record) {
                                    Ext.create('Ext.Window', {
                                        title: 'Boleto',
                                        width: 800,
                                        height: 600,
                                        plain: true,
                                        modal: true,
                                        win: this,
                                        autoScroll: true,
                                        frame: false,
                                        items: [
                                            {
                                                xtype: "component",
                                                id: 'iframe-win', // Add id
                                                width: '100%',
                                                height: '100%',
                                                border: '0',
                                                margin: '0',
                                                padding: '0',
                                                frameborder: '0',
                                                autoEl: {
                                                    tag: "iframe",
                                                    src: '../boleto/abstractBoleto/carregar_boleto/' + record.get('b.id') + '/'
                                                }
                                            }
                                        ]
                                    }).show();
                                },
                                getClass: function (value, metadata, record) {
                                    var data_documento = record.get('b.dataDocumento');
                                    if (!data_documento) {
                                        return 'x-hide-display';
                                    }
                                }
                            }]
                    },
                    {
                        header: 'ID',
                        dataIndex: 'b.id',
                        hidden: true
                    },
                    {
                        header: 'ID Fluxo',
                        dataIndex: 'id'
                    },
                    {
                        header: 'Numero',
                        dataIndex: 'numero',
                        hidden: true
                    },
                    {
                        header: 'Empresa',
                        dataIndex: 'e.nome',
                        flex: 1
                    },
                    {
                        header: 'Parceiro',
                        dataIndex: 'p.nome',
                        renderer: function (valor, grid, record) {
                            return record.get('p.id') + ' - ' + record.get('p.nome');
                        },
                        flex: 1.5
                    },
                    {
                        header: 'Dt. Emissão Titulo',
                        dataIndex: 'data_emissao',
                        xtype: 'datecolumn',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s')
                    },
                    {
                        header: 'Dt. Venc. Titulo',
                        dataIndex: 'data_vencimento',
                        xtype: 'datecolumn',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y')
                    },
                    {
                        header: 'Dt. Emissão Boleto',
                        dataIndex: 'b.dataDocumento',
                        xtype: 'datecolumn',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s')
                    },
                    {
                        header: 'Vl. Titulo',
                        dataIndex: 'valor_titulo',
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        align: 'right',
                        summaryRenderer: function (value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    },
                    {
                        header: 'Conta',
                        dataIndex: 'c.nome',
                        flex: 1
                    },
                    {
                        header: 'Nº Remessa',
                        dataIndex: 'rm.id'
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore('BoletoFinanceiros'),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.filtroInicial = (Illi.app.Local.get('filtro-' + me.stateId) ? Illi.app.Local.get('filtro-' + me.stateId) : me.filtroInicial);
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function (grid) {
            grid.store.filter(grid.filtroInicial);
        }
    },
    onRender: function () {
        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange', this.selecionar, this);
    },
    selecionar: function (selModel, selections) {
        if (selections[0]) {
            this.down('#excluir').setDisabled(!(selections.length === 1 && this.ativarBotao('excluir', selections[0].get('e.id'))));
            this.down('#gerarBoletos').setDisabled(!(this.ativarBotao('gerarBoletos', selections[0].get('e.id'))));
            this.down('#gerarRemessa').setDisabled(!(this.ativarBotao('gerarRemessa', selections[0].get('e.id'))));
        } else {
            this.down('#excluir').setDisabled(true);
            this.down('#gerarBoletos').setDisabled(true);
            this.down('#gerarRemessa').setDisabled(true);
        }
    }
});
