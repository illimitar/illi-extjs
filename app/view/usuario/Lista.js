Ext.define('Illi.view.usuario.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaUsuario',
    title: null,
    itemId: 'listaUsuario',
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
            store: Ext.create('Illi.store.Usuarios'),
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
                        text: 'Associação Entidade / Grupo Usuário',
                        action: 'associar',
                        disabled: true,
                        iconCls: 'icon-associar',
                        itemId: 'associar'
                    },
                    {
                        text: 'Duplicar',
                        action: 'duplicar',
                        disabled: true,
                        iconCls: 'icon-duplicar',
                        itemId: 'duplicar'
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
                        flex: 1.5
                    },
                    {
                        header: 'Usuário',
                        dataIndex: 'login',
                        flex: 0.5
                    },
                    {
                        header: 'Senha',
                        dataIndex: 'senha',
                        editor: {
                            inputType: 'password',
                            emptyText: 'Sem alteração',
                            allowBlank: true
                        },
                        renderer: function(valor, b, c) {
                            return "********";
                        },
                        flex: 0.5
                    },
                    {
                        header: 'E-mail',
                        dataIndex: 'email',
                        editor: {
                            allowBlank: true
                        },
                        flex: 1
                    },
                    {
                        header: 'Parceiro',
                        dataIndex: 'p.nome',
                        editor: {
                            xtype: 'financeiroComboPessoa',
                            store: Ext.create('Illi.store.Pessoas', {storeId: 'comboPessoaUsuario'}),
                            allowBlank: false
                        },
                        hideable: false,
                        filter: 'string',
                        flex: 2
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
            plugins: Illi.app.Util.setPlugins({
                'rowediting': {
                    listeners: {
                        beforeEdit: function(editor, grid, opt) {
                            grid.record.set('senha', '');
                        }
                    }
                }
            }),
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("Usuarios"),
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
            this.down('#associar').setDisabled(selections[0].get('id_grupo_usuario') ? true : !this.ativarBotao('associar'));
            this.down('#duplicar').setDisabled(!this.ativarBotao('duplicar'));
            this.down('#configurar').setDisabled(!this.ativarBotao('configurar'));
        }
    }
});