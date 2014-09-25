Ext.define('Illi.view.configuracao.operacao.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formPropriedade',
    itemId: "formPropriedade",
    modal: true,
    width: "100%",
    requires: [
        "Illi.view.natureza.Combo",
        "Illi.view.produto.preco.Combo",
        "Illi.view.financeiro.tipo_movimentacao.Combo"
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            title: "Propriedades",
            border: false,
            bodyBorder: false,
            defaultType: 'textfield',
            fieldDefaults: {
                anchor: '50%',
                labelAlign: 'right',
                labelClsExtra: 'texto-negrito',
                labelWidth: "30%",
                allowBlank: false,
                combineErrors: false,
                msgTarget: 'side'
            },
            items: [
//                {
//                    fieldLabel: 'Tipo de Movimento',
//                    xtype: 'combobox',
//                    forceSelection: true,
//                    store: [
//                        ["pedido_venda", "Pedido de Venda"],
//                        ["pedido_compra", "Pedido de Compra"],
//                        ["venda", "Venda"],
//                        ["compra", "Compra"],
//                        ["devolucao_venda", "Devolução de Venda"],
//                        ["devolucao_compra", "Devolução de Compra"],
//                        ["transferencia", "Transferência"],
//                        ["financeiro", "Financeiro"]
//                    ],
//                    name: 'tipo_movimento'
//                },
                {
                    fieldLabel: 'Tipo Movimentação',
                    xtype: 'comboTipoMovimentacao',
                    forceSelection: true,
                    store: Ext.create('Illi.store.TipoMovimentacoes', {storeId: "comboTipoMovimentacoes"}),
                    name: 'tipo_movimento',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function(a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Tipo Movimentação',
                            html: '<p>Especifica qual o tipo de movimentação será armazenado ao efetuar uma venda.</p>'
                        });
                    }
                },
                {
                    fieldLabel: 'Financeiro',
                    xtype: 'combobox',
                    forceSelection: true,
                    store: [
                        ["nao_atualiza", "Não Atualizar"],
                        ["DESPESA", "Despesa"],
                        ["RECEITA", "Receita"]
                    ],
                    listeners: {
                        change: function(me, b) {
                            var form = me.up('#formPropriedade');
                            Ext.Array.each(form.query('[classe="financeiro"]'), function(campo) {
                                campo.setDisabled((me.getValue() === "nao_atualiza"));
                            });
                        }
                    },
                    name: 'financeiro'
                },
                {
                    fieldLabel: 'Atualização do Financeiro',
                    xtype: 'combobox',
                    classe: "financeiro",
                    forceSelection: true,
                    allowBlank: true,
                    store: [
                        ["N", "Incluir"],
                        ["S", "Provisionar"],
                        ["C", "Ocultar"]
                    ],
                    name: 'atualiza_financeiro'
                },
                {
                    fieldLabel: 'Natureza Padrão',
                    xtype: 'comboNatureza',
                    classe: "financeiro",
                    allowBlank: true
                },
                {
                    fieldLabel: 'Atualização do Estoque',
                    xtype: 'combobox',
                    forceSelection: true,
                    store: [
                        ["nao_atualiza", "Não Atualizar"],
                        ["entrar", "Entrar"],
                        ["baixar", "Baixar"],
                        ["reservado", "Reservar"],
                        ["compra", "A Receber"],
                        ["transferir", "Transferir"]
                    ],
                    name: 'atualiza_estoque'
                },
                {
                    fieldLabel: 'Tabela de Preço',
                    xtype: 'comboPreco',
                    forceSelection: true,
                    name: 'tabela_preco'
                }
            ]
        });
        me.callParent(arguments);
    }
});