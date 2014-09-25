Ext.define('Illi.view.controleacao.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaControleAcao',
    title: null,
    emptyText: "Nenhum registro Encontrado",
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.ControleAcoes'),
            tbar: {
                items: [
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
                    editor: false,
                    filter: true
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
                        header: 'Data',
                        dataIndex: 'data',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        minWidth: 150
                    },
                    {
                        header: 'Ação',
                        dataIndex: 'acao',
                        flex: 1.5
                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'tipo'
                    },
                    {
                        header: 'Identificação',
                        dataIndex: 'identificacao'
                    },
                    {
                        header: 'Usuário',
                        dataIndex: 'u.login',
                        flex: 0.5
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore('ControleAcoes'),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.callParent(arguments);
    }
    ,
    onRender: function () {
        this.store.load();
        this.callParent(arguments);
    }

});