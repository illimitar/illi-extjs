Ext.define('Illi.view.produto.grupo.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaGrupo',
    title: null,
    itemId: 'listaGrupo',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.produto.grupo.Combo',
        'Illi.view.ComboSituacao'
    ],
    filtroInicial: [
        {"property": "situacao", "value": "ATIVO", "type": "string", "operator": "eq"}
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'produto.Grupos',
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
                        header: 'Nome',
                        dataIndex: 'nome',
                        flex: 1
                    },
                    {
                        header: 'Grupo Pai',
                        dataIndex: 'gp.nome',
                        editor: {
                            xtype: 'comboGrupo',
                            forcaSelecao: false,
                            forceSelection: false,
                            trigger2Cls: false,
                            allowBlank: true
                        },
                        flex: 1
                    },
                    {
                        header: 'Seleção',
                        dataIndex: 'selecao',
                        value: "SIM",
                        editor: {
                            xtype: 'combo',
                            store: ['SIM', 'NÃO']
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
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("produto.Grupos"),
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