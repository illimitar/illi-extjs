Ext.define('Illi.view.financeiro.pdv.JanelaTroco', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaTroco',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            title: false,
            header: false,
            autoShow: false,
            closable: false,
            shadow: 'frame',
            shadowOffset: 30,
            border: 10,
            style: {
                borderColor: '#C0C0C0',
                borderStyle: 'solid'
            },
            cls: 'pdv vendarapida',
            floating: true,
            constrain: true,
            modal: true,
            width: '30%',
            bodyBorder: false,
            layout: 'card',
            //
            items: []
        });
        me.callParent(arguments);
    }
});
