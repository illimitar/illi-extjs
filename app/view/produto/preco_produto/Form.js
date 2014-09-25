Ext.define('Illi.view.produto.preco_produto.Form', {
    extend: 'Illi.view.AbstractForm',
    requires: [
        'Ext.ux.TextMaskPlugin',
        'Illi.view.usuario.entidade.Combo',
        'Illi.view.produto.preco_produto.Lista'
    ],
    alias: 'widget.precoProdutoForm',
    itemId: 'precoProdutoForm',
    title: 'Produto',
    padding: 0,
    border: false,
    bodyBorder: false,
    combineErrors: false,
    msgTarget: 'side',
    defaultType: 'numberfield',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [
                {
                    xtype: 'comboEntidade',
                    margins: '10 10 10 20',
                    itemId: 'comboEntidade',
                    fieldLabel: 'Empresa',
                    name: 'id_entidade'
                },
                Illi.app.Util.campoMoeda('valor_custo', 'Valor Custo', 'saida'),
//                {
//                    name: 'lucro_custo',
//                    fieldLabel: 'Lucro Custo ( % )'
//                },
                Illi.app.Util.campoMoeda('valor_venda', 'Valor Venda')
//                Illi.app.Util.campoMoeda('valor_sugerido', 'Valor Sugerido')
            ]
        });
        me.callParent(arguments);
    }

});
