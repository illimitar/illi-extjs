Ext.define('Illi.view.movimentacao.detalhe.Form', {
    extend: 'Illi.view.AbstractForm',
    alias: 'widget.formDetalheMovimentacao',
    itemId: 'formDetalheMovimentacao',
    title: 'Movimentação Detalhe',
    padding: 0,
    combineErrors: false,
    msgTarget: 'side',
    defaultType: 'textfield',
    requires: [
        'Ext.ux.TextMaskPlugin',
        'Illi.view.ComboSituacao',
        'Illi.view.produto.produto.Combo'
    ],
    defaults: {
        width: 575,
        allowBlank: false
    },
    items: [
        {
            fieldLabel: 'Produto',
            xtype: 'comboProduto',
            permitirAdicao: true
        },
        {
            xtype: 'fieldset',
            title: false,
            border: false,
            padding: 0,
            bodyPadding: 0,
            defaults: {
                layout: {
                    type: 'hbox',
                    defaultMargins: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                        left: 0
                    }
                }
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Quantidade',
                            width: 300,
                            name: 'qtde',
                            anchor: false,
                            allowBlank: false
                        },
                        {
                            itemId: 'adicionar',
                            action: 'adicionar',
                            xtype: 'button',
                            text: 'Adicionar'
                        }
                    ]
                }
            ]
        }
    ]


});
