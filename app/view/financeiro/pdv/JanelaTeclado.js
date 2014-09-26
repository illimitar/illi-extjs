Ext.define('Illi.view.financeiro.pdv.JanelaTeclado', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.JanelaTeclado',
    itemId: "JanelaTeclado",
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            renderTo: Ext.getBody(),
            title: false,
            header: false,
            autoShow: true,
            closable: false,
            draggable: true,
            shadow: 'frame',
            floating: true,
            fixed: true,
            shadowOffset: 30,
            border: 10,
            style: {
                borderColor: '#C0C0C0',
                borderStyle: 'solid'
            },
            layout: 'absolute',
            cls: 'pdv vendarapida',
            constrain: true,
            width: 200,
            heigth: 400,
            bodyBorder: false,
            items: [
                {
                    xtype: 'button',
                    text: "Enter",
                    handler: function (btn) {
                        Illi.app.Util.fireKey(Ext.EventObject.ENTER);
                    }

                }
            ],
            tbar: {
                border: false,
                items: [
                    {
                        xtype: 'tbtext',
                        text: "Teclado ",
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }

                    }
                ]
            },
            listeners: {
//                'afterrender': function (panel) {
//                    panel.setPosition(10, -10);
//                    panel.setZIndex(40000);
//                    //panel.anchorTo(window, 'r-r', [-5, 0]);
//                },
                afterlayout: function (panel) {
                    // this.tbarAlign(panel);
                    panel.setPosition(10, -10);
                    panel.setZIndex(40000);
                }
            }
        });
        me.callParent(arguments);
    }
});
