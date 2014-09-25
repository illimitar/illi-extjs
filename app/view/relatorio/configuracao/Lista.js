Ext.define('Illi.view.relatorio.configuracao.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaRelatorioConfiguracao',
    title: null,
    emptyText: "Nenhum registro Encontrado",
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'relatorio.Configuracaos',
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
                    editor: {
                        xtype: 'textfield'
                    },
                    filter: true
                },
                items: [
//                    {
//                        header: 'ID',
//                        dataIndex: 'id',
//                        editor: {
//                            xtype: 'numberfield',
//                            allowBlank: false
//
//                        }
//                    },
                    {
                        header: 'Nome',
                        dataIndex: 'nome',
                        allowBlank: false,
                        flex: 1
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao'
                    },
                    {
                        header: 'Arquivo',
                        dataIndex: 'arquivo'
                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'tipo'
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
    }

});