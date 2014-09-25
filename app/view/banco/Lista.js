Ext.define('Illi.view.banco.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaBanco',
    title: null,
    emptyText: "Nenhum registro Encontrado",
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'Bancos',
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
                        xtype: 'textfield'
                    },
                    filter: true
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        editor: {
                            xtype: 'numberfield',
                            allowBlank: false

                        }
                    },
                    {
                        header: 'Nome',
                        dataIndex: 'nome',
                        allowBlank: false,
                        flex: 1
                    },
                    {
                        header: 'CNPJ',
                        dataIndex: 'cnpj'
                    },
                    {
                        header: 'Seguimento',
                        dataIndex: 'seguimento'
                    }


                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore('Bancos'),
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