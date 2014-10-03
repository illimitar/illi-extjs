Ext.define('Illi.view.produto.grade.grupo_grade.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaGrupoGrade',
    title: null,
    itemId: 'listaCategoria',
    emptyText: "Nenhum registro encontrado",
    requires: [
        "Illi.view.ComboSituacao",
        "Illi.view.produto.grade.Lista"
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.produto.GrupoGrades'),
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'

                    },
                    {
                        text: 'Duplicar',
                        action: 'duplicar',
                        disabled: true,
                        iconCls: 'icon-duplicar',
                        itemId: 'duplicar'

                    },
                    {
                        text: 'Adicionar Grade ( Visualizar )',
                        action: 'adicionarGrade',
                        disabled: true,
                        iconCls: 'icon-adicionar',
                        itemId: 'adicionarGrade'
                    },
                    {
                        text: 'Excluir',
                        action: 'excluir',
                        iconCls: 'icon-remover',
                        itemId: 'excluir'
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
                        header: 'Ativo',
                        dataIndex: 'situacao',
                        editor: {
                            xtype: 'comboSituacao',
                            allowBlank: false
                        },
                        flex: 0.75
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("GrupoGrades"),
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
    }
    ,
    onRender: function() {
        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange', this.selecionar, this);
    },
//    selecionar: function(selModel, selections) {
//        if (selections[0]) {
//            this.down('#duplicar').setDisabled(!this.ativarBotao('duplicar'));
//        }
//    }
    selecionar: function(selModel, selections) {
        if (selections[0]) {
            this.down('#duplicar').setDisabled(!(selections.length === 1));
            this.down('#adicionarGrade').setDisabled(!(selections.length === 1));
        }
    }
});
