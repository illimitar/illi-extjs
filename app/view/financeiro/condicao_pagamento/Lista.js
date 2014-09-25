Ext.define('Illi.view.financeiro.condicao_pagamento.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaCondicaoPagamento',
    title: null,
    itemId: 'listaCondicaoPagamento',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.ComboBool',
        'Illi.view.ComboSituacao'
    ],
    filtroInicial: [
        {"property": "situacao", "value": "ATIVO", "type": "string", "operator": "eq"}
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'CondicaoPagamentos',
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
                        dataIndex: 'id', // nome do campo no model
                        editor: false, // permite edição
                        hidden: true,
                        filter: {
                            'type': 'int'
                        }
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        flex: 1.5
                    },
                    {
                        header: 'Intervalo',
                        dataIndex: 'intervalo',
                        flex: 0.5,
                        editor: {
                            type: 'int',
                            allowBlank: false
                        },
                        filter: {
                            type: 'int'
                        }
                    },
                    {
                        header: 'Parcelas',
                        dataIndex: 'parcelas',
                        flex: 0.5,
                        editor: {
                            type: 'int',
                            allowBlank: false
                        },
                        filter: {
                            type: 'int'
                        }
                    },
                    {
                        header: 'Primeira Parcela',
                        dataIndex: 'primeira_parcela',
                        flex: 0.5,
                        editor: {
                            type: 'int',
                            allowBlank: false
                        },
                        filter: {
                            type: 'int'
                        }
                    },
                    {
                        header: 'Ativo',
                        dataIndex: 'situacao',
                        editor: {
                            xtype: 'comboSituacao',
                            allowBlank: false
                        },
                        flex: 1
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("CondicaoPagamentos"),
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
        this.down('#atualizar').setDisabled(!this.ativarBotao('atualizar'));
    },
    selecionar: function(selModel, selections) {
        if (selections[0]) {
            this.down('#duplicar').setDisabled(!this.ativarBotao('duplicar'));
        }
    }
});