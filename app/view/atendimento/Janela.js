Ext.define('Illi.view.atendimento.Janela', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaAtendimento',
    itemId: 'janelaAtendimento',
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
    requires: [
        "Illi.view.atendimento.Form"
    ],
    floating: true,
    constrain: true,
    initComponent: function () {
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
                    xtype: 'formAtendimento',
                    border: false
                }
            ],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Cadastro de Atendimento',
                        itemId: 'tituloJanelaMovimentacao',
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
                        text: 'Fechar',
                        action: 'fechar',
                        iconCls: 'icon-cancelar',
                        itemId: 'fechar',
                        handler: function (btn) {
                            btn.up("panel").destroy();
                        }
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
