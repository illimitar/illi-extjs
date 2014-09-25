Ext.define('Illi.view.movimentacao.conferencia.comparacao.Janela', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaComparacaoConferenciaMovimentacao',
    itemId: 'janelaComparacaoConferenciaMovimentacao',
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
        borderTopColor: 'red'
    },
    floating: true,
    constrain: true,
//    requires: [
//        'Illi.view.movimentacao.conferencia.ListaComparacao'
//    ],
    retornoEstagio: false,
    retornoMensagem: false,
    retornoItens: false,
    botao1: false,
    botao2: false,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            modal: true,
            height: '97.7%',
            width: '97.7%',
            border: false,
            bodyBorder: false,
            layout: 'card',
            items: [
                {
                    xtype: 'listaComparacaoConferenciaMovimentacao',
                    flex: 2,
                    border: false,
                    bodyBorder: false,
                    retornoItens: me.retornoItens
                }
            ],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: "<b>Atenção : </b>" + me.retornoMensagem,
                        itemId: 'tituloJanelaComparacaoConferenciaMovimentacao',
                        style: {
                            color: '#157fcc',
                            margim: 0,
                            padding: 0
                        }

                    },
                    '->'
                ]
            }
        });
        if (me.botao1 !== false) {
            me.tbar.items.push(me.botao1);
        }
        if (me.botao2 !== false) {
            me.tbar.items.push(me.botao2);
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
