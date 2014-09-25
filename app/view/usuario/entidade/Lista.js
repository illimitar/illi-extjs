Ext.define('Illi.view.usuario.entidade.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaEntidade',
    title: null,
    itemId: 'listaEntidade',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.usuario.grupo_entidade.Combo',
        'Illi.view.pessoa.Combo',
        'Illi.view.ComboSituacao'
    ],
    filtroInicial: [
        {"property": "situacao", "value": "ATIVO", "type": "string", "operator": "eq"}
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'Entidades',
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
                        text: 'Associação Usuário / Grupo Usuário',
                        action: 'associar',
                        disabled: true,
                        iconCls: 'icon-associar',
                        itemId: 'associar'
                    },
                    {
                        text: 'Configuração',
                        action: 'configurar',
                        disabled: true,
                        iconCls: 'icon-configuracao',
                        itemId: 'configurar'
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
                        header: 'Nome',
                        dataIndex: 'nome',
                        flex: 1
                    },
                    {
                        header: 'Pessoa',
                        dataIndex: 'p.nome',
                        editor: {
                            xtype: 'financeiroComboPessoa',
                            allowBlank: true
                        },
                        flex: 1
                    },
                    {
                        header: 'Grupo Entidade',
                        dataIndex: 'gp.nome',
                        editor: {
                            xtype: 'comboGrupoEntidade',
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
                    store: Ext.getStore("Entidades"),
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
            this.down('#associar').setDisabled(!this.ativarBotao('associar'));
            this.down('#configurar').setDisabled(!this.ativarBotao('configurar'));
        }
    }
});