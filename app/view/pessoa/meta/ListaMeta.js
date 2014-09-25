Ext.define('Illi.view.pessoa.meta.ListaMeta', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaMeta',
    title: null,
    emptyText: "Nenhum registro Encontrado",
    requires: [
        'Illi.view.ComboSituacao'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.Metas', {storeId: 'listaMeta'}),
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
                        text: 'Multiplicar ',
                        action: 'multiplicar',
                        iconCls: 'icon-duplicar',
                        disabled: true,
                        itemId: 'multiplicar'
                    }
                ]
            },
            columns: {
                defaults: {
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        width: 25,
                        hidden: true
                    },
                    {
                        header: 'Nome',
                        dataIndex: 'nome',
                        width: 120,
                        editor: true
                    },
                    {
                        header: 'Valor',
                        renderer: Illi.app.Util.valorRenderer,
                        editor: Illi.app.Util.campoMoeda('valor'),
                        hideable: false,
                        dataIndex: 'valor',
                        align: 'right',
                        width: 80,
                        minWidth: 80
                    },
                    {
                        header: 'Valor Atingido',
                        renderer: Illi.app.Util.valorRenderer,
                        editor: false,
                        hidden: true,
                        dataIndex: 'valor_atingido',
                        align: 'right',
                        width: 80,
                        minWidth: 80
                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'tipoValor',
                        width: 50,
                        editor: {
                            xtype: 'combobox',
                            store: ['$', '%']
                        }
                    },
                    {
                        header: 'Dt. Início',
                        dataIndex: 'dataInicio',
                        hideable: false,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        editor: {
                            xtype: 'datefield',
                            format: 'd/m/Y',
                            allowBlank: false
                        },
                        minWidth: 80
                    },
                    {
                        header: 'Dt. Fim',
                        dataIndex: 'dataFim',
                        hideable: false,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        editor: {
                            xtype: 'datefield',
                            format: 'd/m/Y',
                            allowBlank: false
                        },
                        minWidth: 80
                    },
                    {
                        header: 'Dt. Cadastro',
                        dataIndex: 'data',
                        hidden: true,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        editor: false
                    },
                    {
                        header: 'Situação',
                        dataIndex: 'situacao',
                        hideable: false,
                        editor: {
                            xtype: 'comboSituacao'
                        }
                    }
                ]
            }
        });
        me.callParent(arguments);
        me.getSelectionModel().on('selectionchange', me.onSelectChange, me);
    },
    onRender: function() {
        this.callParent(arguments);
        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
    },
    onSelectChange: function(selModel, selections) {
        this.down('#multiplicar').setDisabled(selections.length !== 1);
    },
    listeners: {
        beforerender: function(grid) {
            grid.store.filter({"property": "p.id", "value": this.up('window').id_pessoa, "type": "int", "operator": "eq"});
        }
    }
});