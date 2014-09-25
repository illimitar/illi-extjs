Ext.define('Illi.view.usuario.usuario_grupo_usuario.Lista', {
    extend: 'Illi.view.AbstractList',
    requires: [
        'Illi.view.usuario.grupo_usuario.Combo',
        'Illi.view.usuario.entidade.Combo'
    ],
    alias: 'widget.usuarioGrupoUsuarioLista',
    title: null,
    id_usuario: null,
    emptyText: "Nenhum registro encontrado",
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            store: Ext.create('Illi.store.UsuarioGrupoUsuarios', {autoLoad: false}),
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
//                    {
//                        header: 'ID Usuario',
//                        dataIndex: 'u.id', // nome do campo no model
//                        value: me.id_usuario,
//                        editor: false, // permite edição
//                        hidden: true,
//                        hideable: false,
//                        filter: {
//                            'type': 'int'
//                        }
//                    },
                    {
                        header: 'Entidade',
                        dataIndex: 'e.nome',
//                        itemId: 'colunaComboEntidade',
                        editor: {
                            xtype: 'comboEntidade',
//                            name: 'e.nome',
                            allowBlank: false
                        },
                        flex: 1
                    },
                    {
                        header: 'Grupo Usuário',
                        dataIndex: 'gu.nome',
//                        itemId: 'colunaComboGrupoUsuario',
                        editor: {
                            xtype: 'comboGrupoUsuario',
//                            name: 'gu.nome',
                            allowBlank: false
                        },
                        flex: 1
                    }
                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'rowediting': {
                    listeners: {
                        beforeEdit: function(editor, e, opt) {
                            e.record.set('u.id', me.id_usuario);
                        }
                    }
                }
            }),
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore('UsuarioGrupoUsuarios'),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
//        me.filtroInicial = [
//            {"property": "u.id", "value": me.id_usuario, "type": "int", "operator": "eq"}
//        ];
        me.callParent(arguments);

    },
    listeners: {
        afterrender: function(grid) {
            grid.store.proxy.extraParams = {"id_usuario": grid.id_usuario};
            grid.store.load(); // grid.filtroInicial
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