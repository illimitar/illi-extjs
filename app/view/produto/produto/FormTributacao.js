Ext.define('Illi.view.produto.produto.FormTributacao', {
    extend: 'Illi.view.AbstractForm',
    requires: [
        'Ext.ux.TextMaskPlugin',
        'Illi.view.produto.ibpt.Combo',
        'Illi.view.ComboSituacao'
    ],
    alias: 'widget.formTributacao',
    itemId: 'formTributacao',
    title: 'Tributação',
    padding: 0,
    combineErrors: false,
    msgTarget: 'side',
    defaultType: 'textfield',
    border: false,
    bodyBorder: false,
    id_tributacao: false,
    defaults: {
        allowBlank: true,
        width: "100%"
    },
    fieldDefaults: {
        anchor: '100%',
        labelAlign: 'right',
        labelWidth: "30%",
        allowBlank: false,
        combineErrors: false,
        msgTarget: 'side',
        labelClsExtra: 'texto-negrito'
    },
    items: [
        {
            fieldLabel: 'NCM',
            tooltip: "Nomenclatura Comum do MERCOSUL (NCM)",
            name: 'ncm',
            xtype: 'comboIBPT'
        },
        {
            fieldLabel: 'Arredondamento (IAT)',
            xtype: 'combo',
            name: 'arredondamento',
            store: [
                ["A", "A - Arredondamento"],
                ["T", "T - Truncamento"]
            ]
        },
        {
            fieldLabel: 'Produção Própria (IPPT)',
            xtype: 'combo',
            name: 'producaoPropria',
            store: [
                ["P", "P - Próprio"],
                ["T", "T - Terceiros"]
            ]
        },
        {
            fieldLabel: 'Situação Tributária',
            xtype: 'combo',
            name: 'situacaoTributaria',
            store: [
                ["I", "I - Isento"],
                ["N", "N - Não Tributado"],
                ["F", "F - Substituição Tributária"],
                ["T", "T - Tributado pelo ICMS"],
                ["S", "S - Tributado pelo ISSQN"]
            ],
            listeners: {
                change: function(combo, newValue, oldValue, eOpts) {
                    if (newValue === "T") {
                        combo.up("#formTributacao").down("#aliquota").setDisabled(!(combo.getValue() === "T"));
                    } else if (newValue === "S") {
                        combo.up("#formTributacao").down("#aliquota").setDisabled(!(combo.getValue() === "S"));
                    } else {
                        combo.up("#formTributacao").down("#aliquota").setDisabled(true);
                    }
                }
            }
        },
        {
            fieldLabel: 'Aliquota',
            name: 'aliquota',
            itemId: "aliquota",
            disabled: true,
            xtype: 'numberfield',
            minValue: 0.01,
            allowDecimals: true,
            decimalPrecion: 2,
            decimalSeparator: ',',
            allowBlank: true
        },
        {
            fieldLabel: 'Aliquota IPI',
            name: 'aliquotaIpi',
            itemId: "aliquotaIpi",
            xtype: 'numberfield',
            minValue: 0.01,
            allowDecimals: true,
            decimalPrecion: 2,
            decimalSeparator: ',',
            allowBlank: true
        },
        {
            fieldLabel: '(CST) Origem',
            xtype: 'combo',
            value: "0 ",
            name: 'cstOrigem',
            store: [
                ["0 ", "0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8"],
                ["1", "1 - Estrangeira - Importação direta, exceto a indicada no código 6"],
                ["2", "2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7"],
                ["3", "3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%"],
                ["4", "4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam o Decreto-Lei no 288/67, e as Leis no 8.248/91, 8.387/91, 10.176/01 e 11.484/07"],
                ["5", "5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%"],
                ["6", "6 - Estrangeira - Importação direta, sem similar nacional, constante em lista de Resolução CAMEX e gás natural"],
                ["7", "7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante em lista de Resolução CAMEX e gás natural"],
                ["8", "8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70% "]
            ]
        },
        {
            fieldLabel: '(CST) Tributação pelo ICMS',
            xtype: 'combo',
            name: 'cstIcms',
            value: "00",
            store: [
                ["00", "00 - Tributada integralmente"],
                ["10", "10 - Tributada e com cobrança do ICMS por substituição tributária"],
                ["20", "20 - Com redução de base de cálculo"],
                ["30", "30 - Isenta ou não tributada e com cobrança do ICMS por substituição tributária"],
                ["40", "40 - Isenta"],
                ["41", "41 - Não tributada"],
                ["50", "50 - Suspensão"],
                ["51", "51 - Diferimento"],
                ["60", "60 - ICMS cobrado anteriormente por substituição tributária"]

            ]
        }
    ],
    tbar: {
        items: [
           // '->',
            {
                text: 'Salvar',
                action: 'salvarImposto',
                iconCls: 'icon-salvar',
                itemId: 'salvarImposto'
            }
        ]
    }
});
