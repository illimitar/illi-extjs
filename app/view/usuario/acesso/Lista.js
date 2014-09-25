Ext.define('Illi.view.usuario.acesso.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaAcesso',
    title: null,
    itemId: 'listaAcesso',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.ComboComponente',
        'Illi.view.ComboSituacao'
    ],
    filtroInicial: [
        {"property": "situacao", "value": "ATIVO", "type": "string", "operator": "eq"}
    ],
    initComponent: function() {
        var me = this;
        // o dito cujo
        Ext.apply(me, {
            scope: me,
            store: Ext.create("Illi.store.Acessos", {
                listeners: {
                    datachanged: {
                        element: this,
                        fn: function(store) {
                            var tree = me.up("container").down("arvoreAcesso");
                            tree.getSelectionModel().select((tree.nodeSelected !== undefined ? tree.nodeSelected : 0));
                        }
                    },
                    write: function(proxy, operation) {
                        var obj = Ext.decode(operation.response.responseText);

                        if (obj.success) {
                            Ext.ux.Msg.flash({
                                msg: obj.message,
                                type: 'success'
                            });
                            Ext.getStore("treeStoreAcessoPai").load();
                        } else {
                            Ext.ux.Msg.flash({
                                msg: obj.message,
                                type: 'error'
                            });
                        }
                    }
                }
            }),
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
                    sortable: false,
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
                        header: 'Título',
                        dataIndex: 'titulo',
                        flex: 1
                    },
                    {
                        header: 'Classe',
                        dataIndex: 'classe',
                        editor: {
                            allowBlank: true
                        }
                    },
                    {
                        header: 'URL',
                        dataIndex: 'url',
                        editor: {
                            allowBlank: true
                        }
                    },
                    {
                        header: 'Ícone',
                        dataIndex: 'icone',
                        editor: {
                            allowBlank: true
                        }
                    },
                    {
                        header: 'Ordem',
                        dataIndex: 'ordem',
                        editor: {
                            xtype: 'numberfield',
                            allowBlank: false
                        }
                    },
                    {
                        header: 'Componente',
                        dataIndex: 'componente',
                        editor: {
                            xtype: 'comboComponente',
                            allowBlank: false
                        }
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
                        beforeEdit: function(editor, e, opt) {
                            var store = Ext.getStore("Acessos");
                            var id_acesso = store.proxy.extraParams.id_acesso;
                            e.record.set('ac.id', (id_acesso !== -1 ? id_acesso : false));
                        }
                    }
                }
            }),
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("Acessos"),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            grid.store.proxy.extraParams = {"id_acesso": -1};
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