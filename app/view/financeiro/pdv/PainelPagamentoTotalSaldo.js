Ext.define('Illi.view.financeiro.pdv.PainelPagamentoTotalSaldo', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelPagamentoTotalSaldo',
    itemId: 'pdvPagamentoTotalSaldo', // manter
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque-medio right vermelho',
            //
            html: '' // R$ 0,00
        });
        me.callParent(arguments);
    }
});
