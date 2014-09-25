Ext.define('Illi.view.financeiro.pdv.JanelaPagamentoValor', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaPagamentoValor',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
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
            layout: 'card',
            //
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
                ]
            }
        });
        me.callParent(arguments);
    }
});
