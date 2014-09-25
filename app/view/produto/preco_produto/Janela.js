Ext.define('Illi.view.produto.preco_produto.Janela', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaPrecoProduto',
    itemId: 'janelaPrecoProduto',
    title: false,
    header: false,
    titulo: 'Cadastro de Preço',
    autoShow: true,
    closable: true,
    shadow: 'frame',
    shadowOffset: 30,
    border: 10,
    style: {
        borderColor: '#C0C0C0',
        borderStyle: 'solid'
    },
    floating: true,
    constrain: true,
    requires: [
        'Illi.view.produto.preco_produto.Form'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "40%",
            height: "50%",
            title: me.titulo,
            scope: me,
            xtype: 'form',
            border: false,
            bodyBorder: false,
            bodyPadding: 0,
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
                    title: false,
                    xtype: 'precoProdutoForm'
                }
            ],
            tbar: {
                border: false,
                items: [
                    {
                        xtype: 'tbtext',
                        text: me.titulo,
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
                        itemId: 'salvar',
                        tooltip: 'Atalho SHIFT + ENTER'
                    },
                    {
                        text: 'Fecha',
                        scope: this,
                        iconCls: 'icon-cancelar',
                        handler: function() {
                            me.close();
                        }
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});