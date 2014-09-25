Ext.define('Illi.view.financeiro.pdv.BarraOpcoesGerais', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.barraOpcoesGerais',
    initComponent: function() {
        var me = this;
        var width_screen = Ext.getBody().getViewSize().width;
        var level_screen = (width_screen > 1000 ? (width_screen > 1600 ? 'large' : 'medium') : 'small');
        Ext.apply(me, {
            scope: me,
            //
            defaults: {
                scale: level_screen
            },
            items: [
                {
                    text: 'Pesquisar Produto (F1)',
                    action: 'produto-pesquisar'
                },
                '|',
                {
                    text: 'Itens Cancelados (SHIFT + DELETE)',
                    action: 'item-cancelados'
                },
                {
                    text: 'Cancelar Item (DELETE)',
                    action: 'item-selecionar'
                },
                '|',
                {
                    text: 'Cancelar Venda (F12)',
                    action: 'venda-cancelar'
                },
                '->',
//                {
//                    text: 'Ocultar Janela (SHIFT + ESC)',
//                    action: 'janela-ocultar'
//                },
                {
                    text: 'Sair (CTRL + Q)',
                    action: 'janela-sair'
                }
            ]
        });
        me.callParent(arguments);
    }
});
