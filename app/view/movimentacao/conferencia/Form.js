Ext.define('Illi.view.movimentacao.conferencia.Form', {
    extend: 'Illi.view.AbstractForm',
    alias: 'widget.formConferenciaMovimentacao',
    itemId: 'formConferenciaMovimentacao',
    title: 'Cabeçalho',
    requires: [
        'Ext.ux.TextMaskPlugin',
        'Illi.view.ComboSituacao',
        'Illi.view.pessoa.Combo',
        'Illi.view.configuracao.operacao.Combo'
    ],
    padding: 0,
    combineErrors: false,
    msgTarget: 'side',
    defaultType: 'textfield',
    defaults: {
        allowBlank: false
    },
    idMovimentacao: false,
    idGrupoOperacao: false,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [
                {
                    name: 'id',
                    type: 'integer',
                    itemId: 'formIdMovimentacao',
                    xtype: 'hiddenfield'
                },
                {
                    xtype: 'comboConfiguracaoOperacao',
                    name: "go.id",
                    excecao: [
                        {"property": "id", "value": me.idGrupoOperacao, "type": "int", "operator": "ne"}
                    ]
                },
                {
                    fieldLabel: 'Fornecedor',
                    xtype: 'financeiroComboPessoa',
                    tipo: 'FORNECEDOR',
                    name: 'p.id',
                    disabled: true
                },
                {
                    fieldLabel: 'Empresa',
                    xtype: 'comboEntidade',
                    name: 'e.id',
                    allowBlank: false,
                    disabled: true
                },
                {
                    fieldLabel: 'Empresa (Destino)',
                    classe: "transferencia",
                    xtype: 'comboEntidade',
                    hidden: true,
                    name: 'e.id',
                    allowBlank: true,
                    disabled: true
                },
                {
                    fieldLabel: 'Numero',
                    name: 'numero',
                    allowBlank: true,
                    disabled: true
                },
                {
                    fieldLabel: 'Data Emissão',
                    xtype: 'datefield',
                    name: 'data_emissao',
                    format: 'd/m/Y',
                    submitFormat: 'Y-m-d',
                    value: new Date(),
                    disabled: true
                },
                {
                    fieldLabel: 'Data Referencia',
                    xtype: 'datefield',
                    classe: "venda",
                    allowBlank: true,
                    name: 'data_referencia',
                    format: 'd/m/Y',
                    submitFormat: 'Y-m-d',
                    disabled: true
                },
                {
                    fieldLabel: 'Data Prevista Entrega',
                    xtype: 'datefield',
                    classe: "venda",
                    allowBlank: true,
                    name: 'data_entrega',
                    format: 'd/m/Y',
                    submitFormat: 'Y-m-d',
                    disabled: true
                },
                {
                    fieldLabel: 'Transportadora',
                    xtype: 'financeiroComboPessoa',
                    classe: "venda",
                    tipo: 'TRANSPORTADORA',
                    name: 't.id',
                    allowBlank: true,
                    disabled: true
                },
                {
                    fieldLabel: 'Observação',
                    allowBlank: true,
                    xtype: 'textareafield',
                    name: 'observacao'
                }
            ]
        });
        me.callParent(arguments);
    }
});
