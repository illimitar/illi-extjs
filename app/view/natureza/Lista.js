Ext.define('Illi.view.natureza.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaNatureza',
    title: null,
    itemId: 'listaNaturezaLancamento',
    emptyText: "Nenhum registro Encontrado",
    id_natureza_lancamento: false,
    requires: [
        'Illi.view.financeiro.Combo',
        'Illi.view.financeiro.ComboNatureza',
        'Illi.view.natureza.Combo',
        'Illi.view.ComboSituacao'
    ],
    filtroInicial: [
        {"property": "situacao", "value": "ATIVO", "type": "string", "operator": "eq"}
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.Naturezas', {
                storeId: 'listaNaturezas',
                listeners: {
                    write: function(proxy, operation) {
                        var obj = Ext.decode(operation.response.responseText);
                        if (obj.success) {
                            Ext.ux.Msg.flash({
                                msg: obj.message,
                                type: 'success'
                            });
                            Ext.getStore("treeStoreNaturezaPai").load();
                        } else {
                            Ext.ux.Msg.flash({
                                msg: obj.message,
                                type: 'error'
                            });
                        }
                    }
                }
            }),
            plugins: Illi.app.Util.setPlugins({
                'rowediting': {
                    listeners: {
                        validateedit: function(editor, e, opt) {
                            e.record.commit();
                        },
                        beforeEdit: function(editor, e, opt) {
                            e.record.set('nl.id', me.id_natureza_lancamento);
                            e.record.set('nl.descricao', me.id_natureza_lancamento);
                        }
                    }
                }
            }),
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
                        iconCls: 'icon-adicionar',
                        disabled: true,
                        itemId: 'incluir'

                    },
                    {
                        text: 'Atualizar',
                        action: 'atualizar',
                        iconCls: 'icon-atualizar',
                        disabled: true,
                        itemId: 'atualizar'
                    },
                    {
                        text: 'Imprimir Grade',
                        iconCls: 'icon-imprimir',
                        action: 'imprimir',
                        disabled: true,
                        itemId: 'imprimir'
                    },
                    {
                        text: 'Exportar para Excel',
                        action: 'excel',
                        disabled: true,
                        iconCls: 'icon-excel',
                        itemId: 'excel'
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
                        width: 50,
                        hidden: true
                    },
                    {
                        header: 'Classificação',
                        dataIndex: 'classificacao',
                        hidden: true,
                        editor: true
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        editor: {
                            xtype: 'textfield',
                            allowBlank: false

                        },
                        flex: 1.5
                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'tipo',
                        editor: {
                            xtype: 'combo',
                            allowBlank: false,
                            store: ['RECEITA', 'DESPESA', 'TRANSFERENCIA']
//                            listeners: {
//                                'select': function(tipo, b) {
//                                    var grid = tipo.up('grid');
//                                    var form = grid.getPlugin('editorGrid').getEditor().getForm();
//                                    if (form) {
//                                        //  var natureza = form.findField('nl.descricao');
//                                        //var storeNatureza = natureza.getStore();
//                                        //natureza.setValue(undefined);
//                                        //storeNatureza.getProxy().extraParams = {tipo: tipo.getValue()};
//                                        //storeNatureza.load();
//                                    }
//                                }
//
//                            }
                        }
                    },
                    {
                        header: 'Pai Descrição',
                        dataIndex: 'nl.descricao',
                        itemId: 'colunaComboNatureza',
                        flex: 1,
                        editor: {
                            xtype: 'comboNatureza',
                            forceSelection: false,
                            forcaSelecao: false
                        },
                        filter: false
                    },
                    {
                        header: 'ID Pai',
                        dataIndex: 'nl.id',
                        hidden: true,
                        filter: false
                    },
                    {
                        header: 'Seleção',
                        dataIndex: 'selecao',
                        editor: {
                            xtype: 'combo',
                            store: ['SIM', 'NÃO']
                        }
                    },
                    {
                        header: 'Situação',
                        dataIndex: 'situacao',
                        editor: {
                            xtype: 'comboSituacao'
                        }
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore('listaNaturezas'),
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
    },
    onRender: function() {
        this.callParent(arguments);
        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
        this.getSelectionModel().on('selectionchange', this.selecionar, this);
    }

});