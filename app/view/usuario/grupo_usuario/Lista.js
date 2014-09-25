Ext.define('Illi.view.usuario.grupo_usuario.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaGrupoUsuario',
    title: null,
    itemId: 'listaGrupoUsuario',
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
            store: 'GrupoUsuarios',
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
                        text: 'Associação Menu / Função',
                        action: 'associar',
                        disabled: true,
                        iconCls: 'icon-associar',
                        itemId: 'associar'
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
                        header: 'Código',
                        dataIndex: 'codigo',
                        editor: {
                            allowBlank: true
                        }
                    },
                    {
                        header: 'Parecer',
                        dataIndex: 'parecer',
                        flex: 0.8,
//                        renderer: function(value, b, record) {
//                            if (value) {
//                                return Ext.JSON.decode(value);
//                            }
//                        },
                        editor: {
                            xtype: 'combobox',
                            name: 'parecer',
                            //multiSelect: true,
                            store: ['FLUXO', 'PRODUTO'],
                            allowBlank: true
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
//            plugins: Illi.app.Util.setPlugins({
//                'rowediting': {
//                    listeners: {
//                        afterEdit: function(editor, grid, opt) {
//                            var store = editor.grid.store;
//                            if (grid.record.get('parecer')) {
//                                grid.record.set('parecer', Ext.JSON.encode(grid.record.get('parecer')));
//                            }
//                            if (store.getModifiedRecords()[0]) {
//                                editor.grid.el.mask('Salvando...');
//                            }
//                            store.sync({
//                                callback: function(a, b, c) {
//                                    editor.grid.el.unmask();
//                                    store.load();
//                                }
//                            });
//                        },
//                        beforeEdit: function(editor, grid, opt) {
//                            if (grid.record.get('parecer')) {
//                                grid.record.set('parecer', Ext.JSON.decode(grid.record.get('parecer')));
//                            }
//                        }
//                    }
//                }
//            }),
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("GrupoUsuarios"),
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
        }
    }
});