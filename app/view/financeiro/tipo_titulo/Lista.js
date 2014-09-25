Ext.define('Illi.view.financeiro.tipo_titulo.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaTipoTitulo',
    title: null,
    itemId: 'listaTipoTitulo',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.financeiro.moeda.Combo',
        'Illi.view.ComboBool',
        'Illi.view.ComboSituacao'
    ],
    filtroInicial: [
        {"property": "situacao", "value": "ATIVO", "type": "string", "operator": "eq"}
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'TipoTitulos',
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
                        header: 'Observação',
                        dataIndex: 'observacao',
                        editor: {
                            allowBlank: true
                        }
                    },
                    {
                        header: 'Ativo',
                        dataIndex: 'situacao',
                        editor: {
                            xtype: 'comboSituacao',
                            allowBlank: false
                        },
                        flex: 1
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("TipoTitulos"),
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
});