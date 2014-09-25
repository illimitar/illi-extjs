Ext.define('Illi.view.financeiro.pdv.JanelaPagamento', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaPagamento',
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
            height: "60%",
            bodyBorder: false,
            layout: 'card',
            //
            items: [],
            tbar: {
                items: [
                    {
                        xtype: 'panel',
                        border: false,
                        bodyStyle: 'background: transparent;',
                        cls: 'destaque',
                        html: 'Total: '
                    },
                    {
                        xtype: 'painelPagamentoTotal',
                        flex: 1
                    }
                ]
            },
            bbar: {
                items: [
//                    {
//                        xtype: 'panel',
//                        border: false,
//                        bodyStyle: 'background: transparent;',
//                        cls: 'destaque',
//                        html: 'Total Pago: '
//                    },
                    {
                        xtype: 'painelPagamentoSubTotal',
                        flex: 1
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});
