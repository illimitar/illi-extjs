Ext.define('Illi.view.financeiro.venda.Janela', {
    extend: 'Ext.form.Panel',
    alias: 'widget.vendaJanela',
    itemId: 'janelaVenda',
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start',
        frame: true,
        plain: true,
        border: false
    },
    requires: [
        'Illi.view.financeiro.venda.Lista',
        'Illi.view.financeiro.venda.Form'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            xtype: 'form',
            bodyPadding: 0,
            maximizable: true,
            items: [
                {
                    xtype: 'vendaForm'
                },
                {
                    xtype: 'listaPagamento',
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
            ]         

        });
        me.callParent(arguments);

    }

});
