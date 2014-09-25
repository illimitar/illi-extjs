Ext.define('Illi.view.produto.importacao.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaImportacaoProduto',
    title: 'Importação de Produto', // + Illi.app.Local.get('produto').nome,
    layout: 'fit',
    requires: [
        'Illi.view.produto.importacao.Form',
        'Ext.ux.TextMaskPlugin'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            width: 700,
            height: 395,
            items: [
                {
                    xtype: 'form',
                    padding: '5 5 0 5',
//                    bodyPadding: 10,
                    border: false,
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
                            xtype: 'formImportacaoProduto'
                        }
                    ]
                }
            ],
            tbar: {
                items: [
                    //'->',
                    {
                        iconCls: 'icon-importar',
                        text: 'Importar',
                        action: 'importar'
                    },
                    {
                        text: 'Cancelar',
                        scope: this,
                        iconCls: 'icon-cancelar',
                        handler: this.close
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});
