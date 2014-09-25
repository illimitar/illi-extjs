Ext.define('Illi.view.email.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaEmail',
    title: 'Envio de Email',
    layout: 'fit',
    autoShow: true,
    requires: [
        'Illi.view.email.Form'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: "60%",
            height: "90%",
            scope: me,
            xtype: 'form',
            bodyPadding: 0,
            border: false,
            bodyBorder: false,
            maximizable: true,
            items: [
                {
                    xtype: 'formEmail'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    border: false,
                    bodyBorder: false,
                    items: [
                        '->'
                                ,
                        {
                            iconCls: 'icon-email',
                            text: 'Enviar',
                            action: 'enviar',
                            itemId: 'enviar'
                        }

                    ]
                }
            ]


        });
        me.callParent(arguments);

    }

});
