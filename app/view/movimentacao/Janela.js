Ext.define('Illi.view.movimentacao.Janela', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaMovimentacao',
    itemId: 'janelaMovimentacao',
    title: false,
    header: false,
    id_movimentacao_grade: false,
    id_movimentacao: false,
    tipo: false,
    operacao: false,
    entidade: false,
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
//        'Illi.view.movimentacao.Form',
//        'Illi.view.movimentacao.detalhe.Form',
//        'Illi.view.movimentacao.detalhe.Lista'
//    ],
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
                    itemId: 'tabMovimentacao',
                    border: false,
                    bodyBorder: false,
                    padding: 0,
                    items: [
                        {
                            xtype: 'formMovimentacao',
                            border: false,
                            title: 'Cabecalho',
                            tipo: me.tipo
                        },
                        {
                            title: 'Produtos',
                            itemId: 'tabProdutos',
                            border: false,
                            bodyBorder: false,
                            xtype: 'listaDetalheMovimentacao',
                            tipo: me.tipo,
                            operacao: me.operacao,
                            entidade: me.entidade,
                            disabled: (me.id_movimentacao ? false : true)
                        }
                    ]
                }],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Cadastro de Movimentacao',
                        itemId: 'tituloJanelaMovimentacao',
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }

                    },
                    '->',
//                    {
//                        text: 'Salvar',
//                        action: 'salvar',
//                        iconCls: 'icon-salvar',
//                        itemId: 'salvar'
//                    },
                    {
                        text: 'Limpar',
                        scope: this,
                        iconCls: 'icon-cancelar',
                        handler: function(btn) {
                            btn.up('#janelaMovimentacao').down('form').getForm().reset();
                        }
                    },
                    {
                        text: 'Fechar',
                        action: 'fechar',
                        iconCls: 'icon-cancelar',
                        itemId: 'fechar'
                    }
                ]
            }
        });
        me.callParent(arguments);
//    },
//    listeners: {
//        beforeclose: function(me) {
//            Ext.getStore("movimentacao.Movimentacaos").load();
//        }
    }
});
