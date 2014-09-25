Ext.define('Illi.view.usuario.funcao.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaFuncao',
    title: null,
    itemId: 'listaFuncao',
    emptyText: "Nenhum registro Encontrado",
    requires: [
        'Illi.view.usuario.acesso.Combo',
        'Illi.view.ComboSituacao'
    ],
    filtroInicial: [
        {"property": "situacao", "value": "ATIVO", "type": "string", "operator": "eq"}
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'Funcoes',
            tbar: {// botões
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
                        disabled: true,
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'

                    },
                    {
                        text: 'Excluir',
                        action: 'excluir',
                        disabled: true,
                        iconCls: 'icon-remover',
                        itemId: 'excluir'

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
                    groupable: false,
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
                        header: 'Nome',
                        dataIndex: 'valor',
                        flex: 1
                    },
                    {
                        header: 'Função',
                        dataIndex: 'funcao',
                        flex: 0.7
                    },
                    {
                        header: 'Acesso',
                        dataIndex: 'a.titulo',
                        editor: {
                            xtype: 'comboAcesso',
                            allowBlank: true
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
                    store: Ext.getStore("Funcoes"),
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
            this.down('#excluir').setDisabled(!this.ativarBotao('excluir'));
        }
    }
});