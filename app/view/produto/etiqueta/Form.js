Ext.define('Illi.view.produto.etiqueta.Form', {
    extend: 'Illi.view.AbstractForm',
    alias: 'widget.etiquetaForm',
    itemId: 'etiquetaForm',
    requires: [
        'Ext.ux.TextMaskPlugin'
    ],
    fieldDefaults: {
        anchor: '50%',
        labelAlign: 'left',
        labelWidth: "20%",
        allowBlank: false,
        combineErrors: false,
        msgTarget: 'side',
        labelClsExtra: 'texto-negrito'
    },
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Produto',
            name: 'nome',
            typeAhead: false,
            forceSelection: false,
            selectOnFocus: true,
            itemId: 'id_produto'
        },
        {
            itemId: 'qtdeProduto',
            name: 'qtde',
            xtype: 'numberfield',
            selectOnFocus: true,
            value: 1,
            maxValue: 999,
            minValue: 1,
            fieldLabel: 'Quantidade'
        },
        {
            itemId: 'adicionar',
            action: 'adicionar',
            xtype: 'button',
            text: 'Adicionar'
        }
    ]

});
