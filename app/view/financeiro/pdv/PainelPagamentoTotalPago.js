Ext.define('Illi.view.financeiro.pdv.PainelPagamentoTotalPago', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelPagamentoTotalPago',
    itemId: 'pdvPagamentoTotalPago', // manter
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque-medio right',
            //
            html: '' // R$ 0,00
        });
        me.callParent(arguments);
    }
});
