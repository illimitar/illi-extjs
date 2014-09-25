Ext.define('Illi.view.relatorio.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaRelatorio',
    title: null,
    requires: [
        'Illi.view.ComboSituacao',
        'Illi.view.relatorio.ComboTipo'
    ],
    emptyText: "Nenhum registro Encontrado",
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'relatorio.Relatorios',
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'

                    },
                    {
                        text: 'Executar',
                        action: 'executar',
                        iconCls: 'icon-avancar',
                        itemId: 'executar'
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
                        editor: false
                    },
                    {
                        header: 'Nome',
                        dataIndex: 'nome',
                        allowBlank: false,
                        flex: 1
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        flex: 2
                    },
                    {
                        header: 'Arquivo',
                        dataIndex: 'url',
                        flex: 1
                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'tipo',
                        editor: {
                            xtype: 'comboTipoRelatorio',
                            allowBlank: false
                        }
                    },
                    {
                        header: 'Saída',
                        dataIndex: 'saida',
                        editor: {
                            xtype: 'combo',
                            allowBlank: false,
                            store: ['INTERNO', 'GERADOR', 'BARTENDER']
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