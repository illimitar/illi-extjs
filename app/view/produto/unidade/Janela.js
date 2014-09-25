Ext.define('Illi.view.produto.unidade.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaUnidade',
    layout: 'fit',
    requires: [
        'Illi.view.produto.unidade.Lista'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "75%",
            height: "48%",
            title: 'Cadastro de Unidade',
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
                    xtype: 'listaUnidade',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});