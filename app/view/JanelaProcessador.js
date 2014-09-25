Ext.define('Illi.view.JanelaProcessador', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaProcessador',
    title: 'Aguarde...', // + Illi.app.Local.get('usuario').nome,
    layout: 'fit',
    iconCache: "icon-homem",
    modal: true,
    url: false,
    getUrl: function() {
        var me = this;
        return "../illi/processador/" + me.url;
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            autoShow: true,
            width: "60%",
            height: "60%",
            items: [
                {
                    xtype: "component",
                    width: '100%',
                    height: '100%',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    frameborder: '0',
                    autoEl: {
                        tag: "iframe",
                        src: me.getUrl()
                    }
                }
            ]
        });
        me.callParent(arguments);
    }
});