Ext.define('Illi.view.usuario.acesso.Container', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.containerAcesso',
    itemId: 'containerAcesso',
    requires: [
        'Illi.view.usuario.acesso.Arvore',
        'Illi.view.usuario.acesso.Lista'
    ],
    padding: 0,
    margin: 0,
    layout: 'border',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            border: false,
            items: [
                {
                    xtype: 'arvoreAcesso',
                    title: 'Menu',
                    header: false,
                    hideHeaders: true,
                    region: 'west',
                    width: 300,
                    collapsible: true,
                    split: true
                },
                {
                    xtype: 'listaAcesso',
                    title: 'Raiz',
                    region: 'center'
                }
            ]
        });
        me.callParent(arguments);
    }
});