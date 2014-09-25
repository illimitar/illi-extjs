Ext.define('Illi.view.financeiro.venda.Form', {
    extend: 'Illi.view.AbstractForm',
    alias: 'widget.vendaForm',
    itemId: 'vendaForm',
    requires: [
        'Ext.ux.TextMaskPlugin',
        'Illi.view.financeiro.prazo.Combo',
        'Illi.view.banco.conta.Combo'

    ],
    items: [
        {
            xtype: 'datefield',
            fieldLabel: 'Data',
            name: 'data_vencimento',
            imteId: 'data_vencimento',
            value: new Date(),
            submitFormat: 'Y-m-d'
        },
        {
            xtype: 'comboConta',
            scope: this,
            allowBlank: false,
            store: Ext.create('Illi.store.Contas', {
                storeId: 'contaExclusiva',
                autoLoad: false

            }),
            operadorExclusivo: true,
            fieldLabel: 'Conta/Carteira'
        },
        {
            xtype: 'comboPrazo',
            fieldLabel: 'Forma de Pagamento',
            itemId: 'id_prazo'
        },
        {
            plugins: 'textmask',
            mask: 'R$ #9.999.990,00',
            money: true,
            itemId: 'valorPago',
            name: 'valor_pago',
            fieldLabel: 'Valor Pago',
            width: 250
        },
        {
            itemId: 'adicionar',
            action: 'adicionar',
            xtype: 'button',
            text: 'Adicionar'
        }
    ]

});
