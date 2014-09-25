Ext.define('Illi.view.configuracao.Janela', {
    extend: 'Ext.form.Panel',
    alias: 'widget.janelaConfiguracao',
    title: false,
    requires: ['Illi.view.configuracao.Form'],
    autoShow: true,
    autoScroll: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            height: '95%',
            width: 600,
            bodyBorder: false,
            border: false,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start',
                border: false
            },
            items: [
                {
                    xtype: 'formConfiguracao'
                }
            ],
            tbar: {
                items: [
                    {
                        text: 'Salvar',
                        action: 'salvar',
                        iconCls: 'icon-salvar',
                        itemId: 'salvar'
                    }
                ]
            }

        });

        me.callParent(arguments);
    }
});
