Ext.define('Illi.view.financeiro.pdv.PainelSuperior', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelSuperior',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            border: false,
            bodyBorder: false,
            bodyStyle: 'background: transparent;',
            bodyPadding: "0 10 0 10",
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'painelCliente',
                    flex: 1
                },
                {
                    xtype: 'painelRelogio',
                    flex: 0.15
                }
            ]
        });
        me.callParent(arguments);
    }
});
