Ext.define('Illi.view.financeiro.pdv.PainelPagamentoTroco', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelPagamentoTroco',
    itemId: 'pdvPagamentoTroco', // manter
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque-medio right verde',
            //
            html: '' // R$ 0,00
        });
        me.callParent(arguments);
    }
});
