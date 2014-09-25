Ext.define('Illi.view.financeiro.pdv.JanelaDesconto', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaDesconto',
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
            width: '40%',
            bodyBorder: false,
            layout: 'card',
            //
            items: [],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Desconto',
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }

                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});
