Ext.define('Illi.view.movimentacao.conferencia.Janela', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaConferenciaMovimentacao',
    itemId: 'janelaConferenciaMovimentacao',
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
        borderTopColor: 'blue'
    },
    floating: true,
    constrain: true,
//    requires: [
//        'Illi.view.movimentacao.conferencia.Form',
//        'Illi.view.movimentacao.conferencia.Lista'
//    ],
    idMovimentacao: false,
    idGrupoOperacao: false,
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
                    xtype: 'tabpanel',
                    activeTab: 0,
                    itemId: 'tabMovimentacaoConferencia',
                    border: false,
                    bodyBorder: false,
                    padding: 0,
                    items: [
                        {
                            xtype: 'formConferenciaMovimentacao',
                            border: false,
                            title: 'Cabecalho',
                            idMovimentacao: me.idMovimentacao,
                            idGrupoOperacao: me.idGrupoOperacao
                        },
                        {
                            xtype: 'listaConferenciaMovimentacao',
                            border: false,
                            bodyBorder: false,
                            title: 'Produtos',
                            idMovimentacao: me.idMovimentacao
                        }
                    ]
                }],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Conferência de Movimentacao',
                        itemId: 'tituloJanelaConferenciaMovimentacao',
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }

                    },
                    '->',
                    {
                        text: 'Salvar',
                        action: 'salvar',
                        iconCls: 'icon-salvar',
                        itemId: 'salvar'
                    },
                    {
                        text: 'Cancelar',
                        action: 'cancelar',
                        iconCls: 'icon-cancelar',
                        itemId: 'cancelar'
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});
