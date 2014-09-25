Ext.define('Illi.view.produto.preco_produto.FormGrupo', {
    extend: 'Illi.view.AbstractForm',
    requires: [
        'Ext.ux.TextMaskPlugin',
        'Illi.view.usuario.grupo_entidade.Combo'
    ],
    alias: 'widget.precoProdutoFormGrupo',
    itemId: 'precoProdutoFormGrupo',
    title: false,
    padding: 0,
    border: false,
    bodyBorder: false,
    combineErrors: false,
    msgTarget: 'side',
    defaultType: 'numberfield',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            defaults: {
                anchor: '100%',
                labelWidth: "40%"
            },
            flex: 1,
            items: [
                {
                    xtype: 'comboGrupoEntidade',
                    margins: '10 10 10 20',
                    fieldLabel: 'Grupo Empresa'
                },
                Illi.app.Util.campoMoeda('valor_custo', 'Valor Custo', 'saida'),
                Illi.app.Util.campoMoeda('valor_venda', 'Valor Venda')
            ]
        });
        me.callParent(arguments);
    }

});
