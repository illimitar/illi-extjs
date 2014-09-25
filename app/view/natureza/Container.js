Ext.define('Illi.view.natureza.Container', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.containerNatureza',
    itemId: 'containerNatureza',
    requires: [
        'Illi.view.natureza.Arvore',
        'Illi.view.natureza.Lista'
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
                    xtype: 'arvoreNatureza',
                    title: 'Menu',
                    header: false,
                    hideHeaders: true,
                    region: 'west',
                    width: 300,
                    collapsible: true,
                    split: true
                },
                {
                    xtype: 'listaNatureza',
                    title: 'Raiz',
                    region: 'center'
                }
            ]
        });
        me.callParent(arguments);
    }
});