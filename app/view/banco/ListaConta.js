Ext.define('Illi.view.banco.ListaConta', {
    extend: 'Illi.view.AbstractList',
    requires: [
        'Illi.view.banco.agencia.Combo',
        'Illi.view.ComboSituacao',
        'Illi.view.usuario.entidade.Combo',
        'Illi.view.banco.conta.ComboTipoConta'
    ],
    alias: 'widget.listaConta',
    title: null,
    emptyText: "Nenhum registro Encontrado",
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.Contas'),
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
                        itemId: 'atualizar'
                    },
                    {
                        text: 'Extrato',
                        action: 'extrato',
                        iconCls: 'icon-extrato',
                        disabled: true,
                        itemId: 'extrato'
                    },
                    {
                        text: 'Acerto de Saldo',
                        action: 'acertosaldo',
                        iconCls: 'icon-extrato',
                        disabled: true,
                        itemId: 'acertosaldo'
                    },
                    {
                        text: 'Operadores',
                        action: 'operador',
                        iconCls: 'icon-usuario',
                        disabled: true,
                        itemId: 'operador'
                    },
                    {
                        text: 'Transferência',
                        action: 'transferencia',
                        iconCls: 'icon-transferir',
                        disabled: true,
                        itemId: 'transferencia'
                    },
                    {
                        text: 'Imprimir Grade',
                        iconCls: 'icon-imprimir',
                        action: 'imprimir',
                        disabled: true,
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
                        header: 'Numero Conta',
                        dataIndex: 'numero',
                        editor: {
                            xtype: 'numberfield',
                            allowBlank: false

                        }
                    },
                    {
                        header: 'Digito Conta',
                        dataIndex: 'digito',
                        editor: {
                            xtype: 'numberfield',
                            allowBlank: false

                        }
                    },
                    {
                        header: 'Nome conta',
                        dataIndex: 'nome'
                    },
                    {
                        header: 'Numero Agencia',
                        dataIndex: 'a.nome',
                        editor: false,
                        hidden: true

                    },
                    {
                        header: 'Tipo de Conta',
                        dataIndex: 'tipo',
                        editor: {
                            xtype: 'comboTipoConta',
                            allowBlank: false
                        }
                    },
                    {
                        header: 'Empresa',
                        dataIndex: 'e.nome',
                        editor: {
                            xtype: 'comboEntidade',
                            allowBlank: false
                        },
                        filter: {
                            type: 'list',
                            displayField: 'nome_entidade',
                            valueField: 'e.id',
                            editable: false,
                            store: Ext.create('Illi.store.UsuarioEntidades', {
                            })
                        },
                        flex: 1
                    },
                    {
                        header: 'Parceiro Vinculado',
                        dataIndex: 'p.nome',
                        editor: {
                            xtype: 'financeiroComboPessoa',
                            allowBlank: true
                        },
                        flex: 1
                    },
                    {
                        header: 'Agencia',
                        dataIndex: 'a.id',
                        renderer: function(valor, metaData, record) {
                            return valor + ' -' + record.get('a.nome');
                        },
                        editor: {
                            xtype: 'comboAgencia',
                            allowBlank: false
                        },
                        filter: {
                            type: 'list',
                            displayField: 'nome',
                            valueField: 'id',
                            editable: false,
                            store: Ext.create('Illi.store.Agencias', {storeId: 'comboFiltroAgencia'})
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
                    },
                    {
                        header: 'Numero Banco',
                        dataIndex: 'b.id',
                        editor: false,
                        hidden: true
                    },
                    {
                        header: 'Banco',
                        dataIndex: 'b.nome',
                        editor: false,
                        hidden: true
                    },
                    {
                        header: 'Saldo',
                        dataIndex: 'saldo',
                        editor: false,
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore('Contas'),
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
        this.getSelectionModel().on('selectionchange', this.selecionar, this);
        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
    },
    selecionar: function(selModel, selections) {
        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
        this.down('#atualizar').setDisabled(!this.ativarBotao('atualizar'));
        this.down('#imprimir').setDisabled(!this.ativarBotao('imprimir'));
        this.down('#transferencia').setDisabled(!this.ativarBotao('transferencia'));
        this.down('#operador').setDisabled(!(selections.length === 1 && this.ativarBotao('operador')));
        this.down('#extrato').setDisabled(!(selections.length === 1 && this.ativarBotao('extrato')));
        this.down('#acertosaldo').setDisabled(!(selections.length === 1 && this.ativarBotao('acertosaldo')));
    }

});