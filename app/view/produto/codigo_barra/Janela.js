Ext.define('Illi.view.produto.codigo_barra.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaTabelaCodigoBarra',
    layout: 'fit',
    requires: [
        'Illi.view.produto.codigo_barra.Lista'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "75%",
            height: "48%",
            title: 'Cadastro de Tabela de Código de Barra',
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
                    xtype: 'listaCodigoBarra',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});