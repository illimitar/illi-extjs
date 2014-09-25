Ext.define('Illi.view.financeiro.pdv.PainelDescontoPorcentagemValor', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelDescontoPorcentagemValor',
    itemId: 'pdvDescontoPorcentagemValor', // manter
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque right',
            //
            html: '' // R$ 0,00
        });
        me.callParent(arguments);
    }
});
