Ext.define('Illi.view.usuario.entidade.JanelaEntidadeGrupoUsuario', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaEntidadeGrupoUsuario',
    layout: 'fit',
    id_entidade: null,
    requires: [
        'Illi.view.usuario.entidade.ArvoreEntidadeGrupoUsuario'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "25%",
            height: "75%",
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
                    xtype: 'arvoreEntidadeGrupoUsuario',
                    id_entidade: me.id_entidade,
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});