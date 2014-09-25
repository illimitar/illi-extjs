Ext.define('Illi.view.pessoa.grupo_pessoa.FormPessoaGrupo', {
    extend: 'Ext.window.Window',
    alias: 'widget.formPessoaGrupo',
    title: 'Adicionar Parceiro ao Grupo',
    layout: 'fit',
    idGrupo: null,
    requires: [
        'Illi.view.pessoa.grupo_pessoa.ListaPessoaGrupo'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            modal: true,
            height: 500,
            width: 570,
            title: 'Adicionar Parceiro ao Grupo',
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
                    xtype: 'listaPessoaGrupo',
                    idGrupo: me.idGrupo

                }

            ]
        });
        me.callParent(arguments);
    }



});