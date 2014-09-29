Ext.define('Illi.view.financeiro.pdv.PainelCliente', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelCliente',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            scope: me,
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque',
            html: ''
        });
        me.callParent(arguments);
    }
});
