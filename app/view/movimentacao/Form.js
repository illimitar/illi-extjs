Ext.define('Illi.view.movimentacao.Form', {
    extend: 'Illi.view.AbstractForm',
    alias: 'widget.formMovimentacao',
    itemId: 'formMovimentacao',
    title: 'Movimentacao',
    padding: 0,
    tipo: false,
    combineErrors: false,
    msgTarget: 'side',
    defaultType: 'textfield',
    requires: [
        'Ext.ux.TextMaskPlugin',
        'Illi.view.ComboSituacao',
        'Illi.view.pessoa.Combo',
        'Illi.view.configuracao.operacao.Combo'
    ],
    defaults: {
        allowBlank: false,
        classe: "venda"
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [
                {
                    name: 'id',
                    type: 'integer',
                    itemId: 'formIdMovimentacao',
                    classe: 'visivel',
                    xtype: 'hiddenfield'
                },
                {
                    xtype: 'comboConfiguracaoOperacao',
                    name: "go.id",
                    classe: 'visivel',
                    listeners: {
                        change: function(combo, newValue, oldValue, eOpts) {
                            combo.setDisabled((combo.up("#janelaMovimentacao").id_movimentacao ? true : false));
                        }
                    }
                },
                {
                    fieldLabel: 'Empresa',
                    xtype: 'comboEntidade',
                    classe: 'visivel',
                    name: 'e.id',
                    tipo_pessoa: "LOJA",
                    allowBlank: false,
                    listeners: {
                        change: function(combo, newValue, oldValue, eOpts) {
                            combo.setDisabled((combo.up("#janelaMovimentacao").id_movimentacao ? true : false));
                            combo.up("#janelaMovimentacao").entidade = combo.getValue();
                        }
                    }
                },
                {
                    fieldLabel: 'Empresa (Destino)',
                    classe: "transferencia",
                    xtype: 'comboEntidade',
                    name: 'e.id_destino',
                    allowBlank: true,
                    tipo: '*',
                    tipo_pessoa: "LOJA",
                    listeners: {
                        change: function(combo, newValue, oldValue, eOpts) {
                            combo.setDisabled((combo.up("#janelaMovimentacao").id_movimentacao ? true : false));
                        }
                    }
                },
                {
                    fieldLabel: 'Numero',
                    classe: 'visivel',
                    name: 'numero',
                    value: "*",
                    allowBlank: true
                },
                {
                    fieldLabel: 'Data Emissão',
                    xtype: 'datefield',
                    classe: 'visivel',
                    name: 'data_emissao',
                    format: 'd/m/Y',
                    submitFormat: 'Y-m-d',
                    value: new Date()
                },
                {
                    fieldLabel: 'Fornecedor',
                    xtype: 'financeiroComboPessoa',
                    classe: 'visivel',
                    tipo: 'FORNECEDOR',
                    allowBlank: true,
                    name: 'p.id'
                },
                {
                    fieldLabel: 'Data Referencia',
                    xtype: 'datefield',
                    allowBlank: true,
                    classe: 'visivel',
                    name: 'data_referencia',
                    format: 'd/m/Y',
                    submitFormat: 'Y-m-d'
                },
                {
                    fieldLabel: 'Data Prevista Entrega',
                    xtype: 'datefield',
                    allowBlank: true,
                    classe: 'visivel',
                    name: 'data_entrega',
                    format: 'd/m/Y',
                    submitFormat: 'Y-m-d'
                },
                {
                    fieldLabel: 'Transportadora',
                    xtype: 'financeiroComboPessoa',
                    tipo: 'TRANSPORTADORA',
                    classe: 'visivel',
                    name: 't.id',
                    allowBlank: true
                },
                {
                    fieldLabel: 'Observação',
                    allowBlank: true,
                    xtype: 'textareafield',
                    classe: 'visivel',
                    name: 'observacao'
                }
            ],
            tbar: {
                items: [
                    //  '->',
                    {
                        text: 'Salvar',
                        action: 'salvar',
                        iconCls: 'icon-salvar',
                        itemId: 'salvar',
                        border: false,
                        bodyStyle: 'background: transparent;'
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});
