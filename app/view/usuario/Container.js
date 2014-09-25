Ext.define('Illi.view.usuario.Container', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.usuarioContainer',
    itemId: 'containerInicio',
    layout: 'border',
    margin: 10,
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me
        });
        me.callParent(arguments);
    }
});