Ext.define('Illi.view.financeiro.parecer.Lista', {
    extend: 'Ext.grid.Panel',
    requires: ['Illi.view.arquivo.Janela', 'Illi.view.financeiro.parecer.Form'],
    alias: 'widget.parecerLista',
    title: null,
    id_fluxo: null,
    id_produto: null,
    id_atendimento: null,
    emptyText: "Nenhum registro Encontrado",
    visualizarBoleto: function (id_boleto) {

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
                    width: '100%',
                    height: '100%',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    frameborder: '0',
                    autoEl: {
                        tag: "iframe",
                        src: '/boleto/abstractBoleto/carregar_boleto/' + id_boleto + '/'
                    }
                }

            ]

        }).show();
    },
    anexo: function (url) {

        Ext.create('Ext.Window', {
            title: 'Anexo Financeiro',
            width: "95%",
            height: "100%",
            border: 0,
            plain: true,
            modal: true,
            win: this,
            style: {'background-color': '#FFFFFF'},
            autoScroll: false,
            frame: false,
            items: [
                {
                    xtype: "component",
                    border: 0,
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    height: "100%",
                    frameborder: 0,
                    autoEl: {
                        tag: "iframe",
                        autoScroll: false,
                        src: url
                    }
                }

            ]

        }).show();
    },
    tbar: {
        items: [
            {
                text: 'Incluir',
                iconCls: 'icon-adicionar',
                handler: function () {
                    var janelaParecer = Ext.create('Illi.view.financeiro.parecer.Form', {
                        id_fluxo: this.up('grid').id_fluxo,
                        id_produto: this.up('grid').id_produto,
                        id_atendimento: this.up('grid').id_atendimento
                    });
                    janelaParecer.show();
                }

            },
            {
                text: 'Anexar Arquivo',
                iconCls: 'icon-anexar',
                handler: function () {
                    var anexarArquivo = Ext.create('Illi.view.arquivo.Janela', {
                        id_fluxo: this.up('grid').id_fluxo,
                        id_produto: this.up('grid').id_produto,
                        id_atendimento: this.up('grid').id_atendimento
                    });
                    anexarArquivo.show();
                }
            },
            {
                text: 'Atualizar',
                handler: function () {
                    this.up('grid').getStore().load();
                },
                iconCls: 'icon-atualizar'
            }
        ]

    },
    plugins: [{
            ptype: 'rowediting',
            itemId: 'editor',
            errorSummary: false,
            listeners: {
                validateedit: function (editor, grid, opt) {
                    Ext.Ajax.request({
                        url: '/fluxo/parecer/agendar',
                        params: {
                            data: Ext.JSON.encode(editor.editor.getForm().getValues())
                        },
                        success: function (response) {
                            grid.store.load();
                        },
                        failure: function (response) {
                            Illi.app.Util.mensagemFalha();
                        }
                    });
                },
                canceledit: function (editor, grid, opt) {
                    grid.store.load();
                }
            }
        },
        {
            ptype: 'filterbar',
            forceCreateExtraColumn: true,
            showClearAllButton: false
        }
    ],
    features: [{
            ftype: 'groupingsummary',
            groupByText: 'Agrupar por esta coluna',
            showGroupsText: 'Desagrupar',
            groupHeaderTpl: 'Agrupado Por: {columnName} = {name}  (registros : {rows.length}) ',
            onGroupChange: function (stores, group) {
                if (group) {
                    if (group.items[0]) {
                        var coluna = group.items[0].property;
                        stores.sort(coluna, 'ASC');
                    }
                }
            }
        }],
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            scope: me,
            store: Ext.create('Illi.store.Pareceres', {
                autoLoad: false
            }),
            columns: {
                defaults: {
                    filter: true
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        width: 25,
                        hidden: true,
                        editor: true
                    },
                    {
                        header: 'Atendimento',
                        dataIndex: 'a.id',
                        value: (me.id_atendimento ? me.id_atendimento : false),
                        hidden: (me.id_atendimento ? false : true)
                    },
                    {
                        header: 'Fluxo',
                        dataIndex: 'f.id',
                        value: (me.id_fluxo ? me.id_fluxo : false),
                        hidden: (me.id_fluxo ? false : true)
                    },
                    {
                        header: 'Produto',
                        dataIndex: 'pg.id',
                        value: (me.id_produto ? me.id_produto : false),
                        hidden: (me.id_produto ? false : true)
                    },
                    {
                        header: 'Parecer',
                        dataIndex: 'descricao',
                        flex: 1
                    },
                    {
                        header: 'Anexo',
                        dataIndex: 'anexo',
                        renderer: function (value) {
                            if (value) {
                                var boleto = value.split("||");
                                return  boleto[0];
                            }
                        },
                        filter: false,
                        menuDisabled: true,
                        sortable: false,
                        flex: 0.6
                    },
                    {
                        xtype: 'actioncolumn',
                        filter: false,
                        menuDisabled: true,
                        sortable: false,
                        enableCtxMenu: false,
                        width: 20,
                        items: [
                            {
                                icon: Illi.app.Util.getPath("/resources/images/icones/acao/visualizar.png"),
                                tooltip: 'Visualizar',
                                dataIndex: 'complemento',
                                handler: function (grid, rowIndex, colIndex) {
                                    var rec = grid.getStore().getAt(rowIndex);
                                    if (rec.get('anexo')) {
                                        switch (rec.get('anexo')) {
                                            case 'Boleto':
                                                me.visualizarBoleto(rec.get('url'));
                                                break;
                                            case 'Comissão':
                                                me.anexo('/relatorios/vendedor_comissao/relatorio/' + rec.get('url'));
                                                break;
                                            default:
                                                me.anexo("/" + PATH_ARQUIVOS + "/" + rec.get('url'));
                                                break;
                                        }
                                    }
                                },
                                getClass: function (value, metadata, record) {
                                    var anexo = record.get('anexo');
                                    if (!anexo) {
                                        return 'x-hide-display';
                                    }
                                }
                            }]
                    },
                    {
                        header: 'Data',
                        dataIndex: 'data',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        width: 130,
                        filter: true
                    },
                    {
                        header: 'Data Contato',
                        dataIndex: 'dataReferencia',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        width: 120,
                        editor: {
                            xtype: 'datefield',
                            format: 'd/m/Y',
                            minValue: new Date(),
                            allowBlank: false
                        },
                        filter: true
                    },
                    {
                        header: 'Complemento',
                        dataIndex: 'complemento',
                        filter: true
                    },
                    {
                        header: 'Usuário',
                        dataIndex: 'u.nome',
                        filter: true
                    }

                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore('Pareceres'),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]

        });
        if (me.id_fluxo) {
            me.filtroInicial = [
                {"property": "f.id", "value": me.id_fluxo, "type": "int", "operator": "eq"}
            ];
        }

        if (me.id_produto) {
            me.filtroInicial = [
                {"property": "pg.id", "value": me.id_produto, "type": "int", "operator": "eq"}
            ];
        }

        if (me.id_atendimento) {
            me.filtroInicial = [
                {"property": "a.id", "value": me.id_atendimento, "type": "int", "operator": "eq"}
            ];
        }
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function (grid) {
            //grid.store.proxy.extraParams = {'id_fluxo': this.id_fluxo};
            grid.store.filter(grid.filtroInicial);
        }
    }
});