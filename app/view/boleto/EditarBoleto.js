Ext.define('Illi.view.boleto.EditarBoleto', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.editarBoleto',
    title: null,
    itemId: 'editarBoleto',
    emptyText: "Nenhum registro encontrado",
    border: false,
    ocultaFiltro: true,
    requires: [
        'Ext.toolbar.Toolbar',
        'Illi.view.pessoa.Combo',
        'Illi.view.boleto.ComboContaBoleto'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Ext.data.Store', {
                model: 'Illi.model.ProcessarBoletos',
                autoSync: true,
                autoDestroy: true,
                storeId: 'boletosSelecionados',
                proxy: {
                    type: 'memory'
                }
            }),
            tbar: {
                items: [
                    {
                        xtype: 'comboContaBoleto',
                        width: 500
                    }
                ]
            },
            bbar: {
                items: [
                    {
                        iconCls: 'icon-salvar',
                        text: 'Processar',
                        action: 'processarBoletos',
                        itemId: 'processarBoletos'
                    }
                ]
            },
            columns: {
                defaults: {
                    filter: true,
                    editor: false
                },
                items: [
                    {
                        header: 'Id Boleto',
                        dataIndex: 'b.id'
                    },
                    {
                        header: 'Numero',
                        dataIndex: 'numero'
                    },
                    {
                        header: 'Parceiro',
                        dataIndex: 'p.nome',
                        flex: 1.5
                    },
                    {
                        header: 'Observação',
                        dataIndex: 'observacao1',
                        editor: {
                            xtype: 'textfield',
                            maxLength: 45,
                            allowBlank: true
                        },
                        flex: 1
                    },
                    {
                        header: 'Observação 2',
                        dataIndex: 'observacao2',
                        editor: {
                            xtype: 'textfield',
                            maxLength: 45,
                            allowBlank: true
                        },
                        flex: 1
                    },
                    {
                        header: 'Observação 3',
                        dataIndex: 'observacao3',
                        editor: {
                            xtype: 'textfield',
                            maxLength: 45,
                            allowBlank: true
                        },
                        flex: 1
                    }
                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'filterbar': false,
                'rowediting': {
                    ptype: 'rowediting',
                    clicksToEdit: 0,
                    errorSummary: false,
                    listeners: {
                        canceledit: function(editor, grid, opt) {
                            return false;
                        }
                    }
                }
            })
        });
        me.callParent(arguments);
    }
});