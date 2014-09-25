
Ext.define('Illi.view.femme.produto.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaProdutoFemme',
    itemId: "listaProdutoFemme",
    title: null,
    emptyText: "Nenhum registro Encontrado",
    requires: [],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.femme.Produtos'),
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
                    },
                    {
                        text: 'Imprimir Grade',
                        iconCls: 'icon-imprimir',
                        action: 'imprimir',
                        itemId: 'imprimir'
                    }

                ]


            },
            columns: {
                defaults: {
                    filter: true
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        width: 25,
                        hidden: true
                    },
                    {
                        header: 'Código',
                        dataIndex: 'codigo',
                        editor: {
                            xtype: 'textfield',
                            allowBlank: false
                        },
                        flex: 0.5
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        editor: {
                            xtype: 'textfield',
                            allowBlank: false

                        },
                        flex: 1
                    },
                    {
                        header: 'Grupo',
                        dataIndex: 'grupo',
                        editor: {
                            xtype: 'textfield',
                            allowBlank: false

                        },
                        flex: 1
                    },
                    {
                        header: 'Grade',
                        dataIndex: 'tamanho',
                        editor: {
                            xtype: 'textfield',
                            allowBlank: false

                        }
                    },
                    {
                        header: '20/30/40',
                        dataIndex: 'valor',
                        renderer: Illi.app.Util.valorRenderer,
                        editor: {
                            xtype: 'numberfield',
                            minValue: 0.01,
                            allowDecimals: true,
                            decimalPrecion: 2,
                            decimalSeparator: ',',
                            allowBlank: false
                        }
                    },
                    {
                        header: '30/45/60',
                        dataIndex: 'valor_prazo',
                        renderer: Illi.app.Util.valorRenderer,
                        editor: {
                            xtype: 'numberfield',
                            minValue: 0.01,
                            allowDecimals: true,
                            decimalPrecion: 2,
                            decimalSeparator: ',',
                            allowBlank: false

                        }
                    }

                ]
            }
        });
        me.callParent(arguments);
    }
    ,
    onRender: function() {
        this.store.load();
        this.callParent(arguments);

        this.getSelectionModel().on('selectionchange', this.selecionar, this);
        this.down('#excluir').setDisabled(true);
        this.down('#duplicar').setDisabled(true);
        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
    },
    selecionar: function(selModel, selections) {
        this.down('#excluir').setDisabled(selections.length !== 1);
        this.down('#duplicar').setDisabled(selections.length !== 1);

    }
});