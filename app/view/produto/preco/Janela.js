Ext.define('Illi.view.produto.preco.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaTabelaPreco',
    layout: 'fit',
    requires: [
        'Illi.view.produto.preco.Lista'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "75%",
            height: "48%",
            title: 'Cadastro de Tabela de Preço',
            scope: me,
            xtype: 'form',
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
                    xtype: 'listaPreco',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});