Ext.define('Illi.view.banco.conta.FormUsuario', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaContaUsuario',
    title: 'Adicionar Operador',
    layout: 'fit',
    id_conta: null,
    requires: [
        'Illi.view.usuario.Combo',
        'Illi.view.banco.conta.ListaContaUsuario'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            modal: true,
            height: 500,
            width: 570,
            layout: {
                type: 'fit',
                align: 'stretch',
                frame: true,
                plain: true,
                border: false
            },
            items: [
                {
                    bodyPadding: 0,
                    xtype: 'listaContaUsuario',
                    id_conta: me.id_conta
                }

            ]
        });
        me.callParent(arguments);
    }



});