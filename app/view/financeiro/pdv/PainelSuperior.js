Ext.define('Illi.view.financeiro.pdv.PainelSuperior', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelSuperior',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            scope: me,
            border: false,
            bodyBorder: false,
            bodyStyle: 'background: transparent;',
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'painelCliente',
                    cls: 'destaque quadro',
                    flex: 1
                },
                {
                    xtype: 'painelRelogio',
                    cls: 'destaque quadro',
                    flex: 0.15
                }
            ]
        });
        me.callParent(arguments);
    }
});
