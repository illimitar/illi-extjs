
Ext.define('Illi.view.banco.agencia.Lista', {
    extend: 'Illi.view.AbstractList',
    requires: [
        'Illi.view.banco.Combo',
        'Illi.view.ComboSituacao'
    ],
    alias: 'widget.listaAgencia',
    title: null,
    emptyText: "Nenhum registro Encontrado",
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.Agencias'),
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'

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
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    },
                    filter: true
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        editor: false
                    },
                    {
                        header: 'Numero',
                        dataIndex: 'numero',
                        editor: {
                            xtype: 'numberfield',
                            allowBlank: false

                        }
                    },
                    {
                        header: 'Digito',
                        dataIndex: 'digito',
                        editor: {
                            xtype: 'numberfield',
                            allowBlank: false

                        }
                    },
                    {
                        header: 'Nome',
                        dataIndex: 'nome'
                    },
                    {
                        header: 'Banco',
                        dataIndex: 'b.nome',
                        editor: {
                            xtype: 'comboBanco',
                            allowBlank: false
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
                    store: Ext.getStore('Agencias'),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.callParent(arguments);
    }
    ,
    onRender: function() {
        this.store.load();
        this.callParent(arguments);
    }

});