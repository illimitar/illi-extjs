Ext.define('Illi.view.produto.grade.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaGrade',
    title: null,
    itemId: 'listaGrade',
    tipo: null,
    id_produto: null,
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.ComboSituacao'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.produto.Grades'),
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
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
                    }
                ]
            }
            ,
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: me.getStore(),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            grid.getSelectionModel().on('selectionchange', grid.selecionar, grid);
            grid.store.proxy.extraParams = {'id_grupo_grade': grid.id_grupo_grade};
            grid.store.load();
        }
    },
    //,
//    listeners: {
//        afterrender: function(grid) {
//            grid.store.filter(grid.filtroInicial);
//        }
//    },
//    onRender: function() {
//        this.callParent(arguments);
//        this.getSelectionModel().on('selectionchange', this.selecionar, this);
//        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
//        this.down('#atualizar').setDisabled(!this.ativarBotao('atualizar'));
//    },
    selecionar: function(selModel, selections) {
        if (selections[0]) {
            this.down('#duplicar').setDisabled(!(selections.length === 1));
        }
    }
});
