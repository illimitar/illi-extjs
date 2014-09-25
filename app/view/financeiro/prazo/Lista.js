Ext.define('Illi.view.financeiro.prazo.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaPrazo',
    title: null,
    itemId: 'listaPrazo',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.financeiro.moeda.Combo',
        'Illi.view.ComboBool',
        'Illi.view.ComboSituacao'
    ],
    filtroInicial: [
        {"property": "situacao", "value": "ATIVO", "type": "string", "operator": "eq"}
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'Prazos',
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
                        header: 'Baixa Automática',
                        dataIndex: 'baixa_automatica',
                        flex: 0.5,
                        editor: {
                            xtype: 'comboBool',
                            name: 'baixa_automatica',
                            allowBlank: false
                        },
                        renderer: function(valor) {
                            if (valor) {
                                return 'SIM';
                            }
                            return 'NÃO';
                        },
                        filter: {
                            xtype: 'comboBool',
                            type: 'int'
                        }
                    },
                    {
                        header: 'Força Financeiro',
                        dataIndex: 'forca_financeiro',
                        flex: 0.5,
                        editor: {
                            xtype: 'comboBool',
                            name: 'forca_financeiro',
                            allowBlank: false
                        },
                        renderer: function(valor) {
                            if (valor) {
                                return 'SIM';
                            }
                            return 'NÃO';
                        },
                        filter: {
                            xtype: 'comboBool',
                            type: 'int'
                        }
                    },
                    {
                        header: 'Permite Troco',
                        dataIndex: 'permite_troco',
                        flex: 0.5,
                        editor: {
                            xtype: 'comboBool',
                            name: 'permite_troco',
                            allowBlank: false
                        },
                        renderer: function(valor) {
                            if (valor) {
                                return 'SIM';
                            }
                            return 'NÃO';
                        },
                        filter: {
                            xtype: 'comboBool',
                            type: 'int'
                        }
                    },
                    {
                        header: 'Permite Condição Pagamento',
                        dataIndex: 'permite_condicao_pagamento',
                        flex: 0.5,
                        editor: {
                            xtype: 'comboBool',
                            name: 'permite_condicao_pagamento',
                            allowBlank: false
                        },
                        renderer: function(valor) {
                            if (valor) {
                                return 'SIM';
                            }
                            return 'NÃO';
                        },
                        filter: {
                            xtype: 'comboBool',
                            type: 'int'
                        }
                    },
                    {
                        header: 'Moeda',
                        dataIndex: 'm.descricao',
                        editor: {
                            xtype: 'financeiroMoedaCombo',
                            allowBlank: false
                        },
                        flex: 1
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
                    store: Ext.getStore("Prazos"),
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