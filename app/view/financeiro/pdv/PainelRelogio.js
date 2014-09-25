Ext.define('Illi.view.financeiro.pdv.PainelRelogio', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelRelogio',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque center',
            //
            html: '' // 00:00:00
        });
        me.callParent(arguments);
    }
});
