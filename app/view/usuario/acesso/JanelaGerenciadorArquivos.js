Ext.define('Illi.view.usuario.acesso.JanelaGerenciadorArquivos', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaGerenciadorArquivos',
    title: 'Arquivos', // + Illi.app.Local.get('usuario').nome,
    layout: 'fit',
    iconCache: "icon-homem",
    modal: true,
    url: '../../extras/explorer/',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            autoShow: true,
            width: "98%",
            height: "98%",
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
                        src: me.url
                    }
                }
            ]
        });
        me.callParent(arguments);
    }
});