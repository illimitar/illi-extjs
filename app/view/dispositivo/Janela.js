Ext.define('Illi.view.dispositivo.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaDispositivo',
    title: 'Dispositivos',
    layout: 'fit',
    requires: [
        'Illi.view.dispositivo.Lista'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "75%",
            height: "48%",
            scope: me,
            xtype: 'form',
            bodyPadding: 0,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start',
                frame: true,
                plain: true,
                border: false
            },
            items: [
                {
                    xtype: 'listaDispositivo',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});