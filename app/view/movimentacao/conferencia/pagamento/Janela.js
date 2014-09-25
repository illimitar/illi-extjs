Ext.define('Illi.view.movimentacao.conferencia.pagamento.Janela', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaPagamentoConferenciaMovimentacao',
    itemId: 'janelaPagamentoConferenciaMovimentacao',
    title: false,
    header: false,
    autoShow: true,
    closable: true,
    shadow: 'frame',
    shadowOffset: 30,
    border: 10,
    style: {
        borderColor: '#C0C0C0',
        borderStyle: 'solid',
        borderTopColor: 'green'
    },
    floating: true,
    constrain: true,
    idMovimentacao: false,
    retornoEstagio: false,
    retornoMensagem: false,
    retornoItens: false,
    fechamentoPedido: false,
    botao1: false,
    totalPedido: false,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            modal: true,
            height: '97.7%',
            width: '97.7%',
            border: false,
            bodyBorder: false,
//            layout: 'card',
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start',
                frame: true,
                plain: true,
                border: false
            },
            items: [
                {
                    xtype: 'formPagamentoConferenciaMovimentacao',
                    totalPedido: me.totalPedido
                },
                {
                    xtype: 'listaPagamentoConferenciaMovimentacao',
                    flex: 1,
                    retornoItens: me.retornoItens,
                    totalPedido: me.totalPedido
//                    idMovimentacao: me.idMovimentacao
                }
            ],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: "<b>Atenção : </b> " + me.retornoMensagem,
                        itemId: 'tituloJanelaPagamentoConferenciaMovimentacao',
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }
                    },
                    '->'
                ]
            }
        });
        if (me.botao1 !== false) {
            me.tbar.items.push(me.botao1);
        }
        me.tbar.items.push({
            text: 'Cancelar',
            action: 'cancelar',
            iconCls: 'icon-cancelar',
            itemId: 'cancelar'
        });
        me.callParent(arguments);
    }
});
