Ext.define('Illi.view.relatorio.JanelaVisualizar', {
    extend: 'Ext.window.Window',
    alias: 'widget.JanelaVisualizar',
    itemId: 'JanelaVisualizar',
    url: false,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            title: 'Visualizar',
            width: "90%",
            height: "95%",
            plain: true,
            autoShow: true,
            modal: false,
            autoScroll: true,
            frame: false,
            border: false,
            items: [
                {
                    xtype: "component",
                    width: '100%',
                    height: '100%',
                    id: "iframe-visualizar" + me.getId(),
                    border: false,
                    margin: '0',
                    padding: '0',
                    frameborder: '0',
                    autoEl: {
                        tag: "iframe",
                        src: me.url
                    },
                    listeners: {
                        afterrender: function() {
                            var win = this;
                            win.setLoading("Gerando Relatorio");
                            win.getEl().on('load', function() {
                                win.setLoading(false);
                            });
                        }
                    }
                }
            ],
            tbar: {
                border: false,
                items: [
                    "->",
                    {
                        text: 'Atualizar',
                        iconCls: 'icon-atualizar',
                        handler: function() {
                            var id = "iframe-visualizar" + me.getId();
                            Ext.get(id).dom.contentWindow.location.reload();
                        }

                    },
                    {
                        text: 'Imprimir',
                        iconCls: 'icon-imprimir',
                        handler: function() {
                            var id = "iframe-visualizar" + me.getId();
                            Ext.get(id).dom.contentWindow.print();
                        }

                    }
                ]

            }
        });
        me.callParent(arguments);
    }
});
