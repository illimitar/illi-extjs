Ext.define('Illi.view.configuracao.JanelaAjuda', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaAjuda',
    title: 'Ajuda!',
    closable: true,
    autoScroll: true,
    border: false,
    width: 250,
    height: 250,
    floating: true,
    bodyPadding: 10,
    constrain: true,
    style: {
        backgroundColor: '#fff',
        border: '1px solid black'
    },
    draggable: {
        delegate: 'h1'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            autoShow: false
        });
        me.callParent(arguments);
    }
});
