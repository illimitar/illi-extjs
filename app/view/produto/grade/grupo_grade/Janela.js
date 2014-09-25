Ext.define('Illi.view.produto.grade.grupo_grade.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaGrupoGrade',
    layout: 'fit',
    requires: [
        'Illi.view.produto.grade.grupo_grade.Lista'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "75%",
            height: "48%",
            title: 'Cadastro de Grupo de Grade',
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
                    xtype: 'listaGrupoGrade',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});
