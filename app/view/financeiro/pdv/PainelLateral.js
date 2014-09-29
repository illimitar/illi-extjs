Ext.define('Illi.view.financeiro.pdv.PainelLateral', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelLateral',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            padding: '0 0 5 5',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            //
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    bodyStyle: 'background: transparent;',
                    html: '',
                    flex: 1
                },
                {
                    xtype: 'painelProdutoNome',
                    cls: 'destaque quadro',
                    border: false
                },
                {
                    xtype: 'painelProduto',
                    border: false
                },
                {
                    xtype: 'panel',
                    border: false,
                    cls: 'destaque quadro',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'campoProdutoCodigo'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});
