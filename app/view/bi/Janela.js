Ext.define('Illi.view.bi.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.biJanela',
    idMovimentacao: 0,
    requires: [
        'Illi.view.bi.ListaItens',
        'Illi.view.bi.ListaFinanceiro'
    ],
    //autoShow: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            modal: true,
            height: '80%',
            width: '80%',
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
                    xtype: 'listaItens',
                    idMovimentacao: me.idMovimentacao,
                    flex: 2
                },
                {
                    xtype: 'listaFinanceiro',
                    idMovimentacao: me.idMovimentacao,
                    flex: 1.3
                },
                {
                    xtype: 'container',
                    flex: 0.7,
                    padding: '5 5 5 5',
                    defaults: {
                        labelWidth: 120,
                        xtype: 'textfield',
                        flex: 1
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            itemId: 'valorItem',
                            value: 0,
                            fieldLabel: 'Valor Total Itens '
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'valorTitulo',
                            fieldCls: 'entrada',
                            value: 0,
                            fieldLabel: 'Valor Total Titulos '
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'valorPago',
                            fieldCls: 'filtro',
                            fieldLabel: 'Valor Total Pago'
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'valorApagar',
                            fieldCls: 'saida',
                            fieldLabel: 'Valor Total a Pagar'

                        }
                    ]
                }

            ]
        });
        me.callParent(arguments);
    }
});