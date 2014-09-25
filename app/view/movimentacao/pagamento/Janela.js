Ext.define('Illi.view.movimentacao.pagamento.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaPagamentoMovimentacao',
    itemId: 'janelaPagamentoMovimentacao',
    title: 'Pedido',
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start',
        frame: true,
        plain: true,
        border: false
    },
//    requires: [
//        'Illi.view.movimentacao.pagamento.Form',
//        'Illi.view.movimentacao.pagamento.Lista'
//    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "70%",
            height: "60%",
            scope: me,
            xtype: 'form',
            bodyPadding: 0,
            maximizable: true,
            items: [
                {
                    xtype: 'formPagamentoMovimentacao'
                },
                {
                    xtype: 'listaPagamentoMovimentacao',
                    flex: 1
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    border: false,
                    items: [
                        '->'
                                ,
                        {
                            iconCls: 'icon-salvar',
                            text: 'Finalizar',
                            action: 'finalizar',
                            itemId: 'finalizar',
                            disabled: true
                        }

                    ]
                }
            ]//,
//            listeners: {
//                beforeclose: function(me) {
//                    Ext.getStore("movimentacao.Movimentacaos").load();
//                }
//            }
        });
        me.callParent(arguments);
    }
});