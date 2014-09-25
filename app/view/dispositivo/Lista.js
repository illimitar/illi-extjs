Ext.define('Illi.view.dispositivo.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaDispositivo',
    title: null,
    itemId: 'listaDispositivo',
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
            store: Ext.create('Illi.store.Dispositivos'),
            tbar: {
                items: [
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
                        header: 'Plataforma',
                        dataIndex: 'plataforma',
                        editor: false, // permite edição
                        flex: 0.5
                    },
                    {
                        header: 'UUID',
                        dataIndex: 'uuid',
                        editor: false, // permite edição
                        flex: 0.5
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
                    store: Ext.getStore("Dispositivos"),
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