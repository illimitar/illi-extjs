Ext.define('Illi.view.financeiro.pdv.JanelaPagamentoValor', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaPagamentoValor',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            scope: me,
            title: false,
            header: false,
            autoShow: false,
            closable: false,
            shadow: 'frame',
            shadowOffset: 30,
            border: 10,
            style: {
                borderColor: '#C0C0C0',
                borderStyle: 'solid'
            },
            cls: 'pdv vendarapida',
            floating: true,
            constrain: true,
            modal: true,
            width: '40%',
            bodyBorder: false,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            valorSaldo: 0.00,
            items: [],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        itemId: 'pdvPagamentoValorTitulo', // manter
                        text: 'Forma de Pagamento',
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }

                    }
                ]
            },
            bbar: {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'panel',
                        border: false,
                        bodyStyle: 'background: transparent;',
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                border: false,
                                bodyStyle: 'background: transparent;',
                                cls: 'destaque vermelho',
                                html: 'Total à Pagar: '
                            },
                            {
                                xtype: 'painelPagamentoTotal',
                                cls: 'destaque vermelho',
                                itemId: 'pdvPagamentoValorSubtotal', // manter
                                flex: 1
                            }
                        ],
                        flex: 1
                    },
                    {
                        xtype: 'toolbar',
                        border: false,
                        margin: 0,
                        padding: 0,
                        style: 'background: none;',
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        defaults: {
                            flex: 1
                        },
                        items: [
                            Illi.app.Util.BotaoTeclado("Cancelar (ESC)", "ESC"),
                            Illi.app.Util.BotaoTeclado("Confirmar (ENTER)", "ENTER")
                        ],
                        flex: 1
                    }
                ]
            }

        });
        me.callParent(arguments);
    }
});
