Ext.define('Illi.view.configuracao.situacao.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaConfiguracaoSituacao',
    title: null,
    itemId: 'listaConfiguracaoSituacao',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.ComboSituacao'
    ],
    filtroInicial: [
        {"property": "situacao", "value": "ATIVO", "type": "string", "operator": "eq"}
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'configuracao.Situacaos',
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
                    editor: true
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id', // nome do campo no model
                        editor: false, // permite edição
                        filter: {
                            'type': 'int'
                        }
                    },
                    {
                        header: 'Nome',
                        dataIndex: 'nome',
                        allowBlank: false,
                        flex: 1
                    },
                    {
                        header: 'tipo',
                        dataIndex: 'tipo',
                        editor: {
                            xtype: 'combo',
                            name: 'tipo',
                            allowBlank: false,
                            store: ['PRODUTO', 'FLUXO', 'PESSOA', 'MOVIMENTACAO',"ATENDIMENTO"]
                        },
                        flex: 0.75
                    },
                    {
                        header: 'Obs.',
                        dataIndex: 'obs',
                        flex: 0.75
                    },
                    {
                        header: 'Ativo',
                        dataIndex: 'situacao',
                        editor: {
                            allowBlank: false,
                            xtype: 'comboSituacao'
                        },
                        flex: 0.75
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("configuracao.Situacaos"),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            grid.store.filter(grid.filtroInicial);
        }
    },
    onRender: function() {
        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange', this.selecionar, this);
        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
    }
});