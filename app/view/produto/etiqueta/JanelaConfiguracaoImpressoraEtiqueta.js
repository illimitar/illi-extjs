Ext.define('Illi.view.produto.etiqueta.JanelaConfiguracaoImpressoraEtiqueta', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaConfiguracaoImpressoraEtiqueta',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
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
            floating: true,
            constrain: true,
            modal: true,
            width: 800,
            height: 300,
            bodyBorder: false,
            layout: 'card',
            items: [],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Configuração da Impressora de Etiqueta',
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }

                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            iconCls: 'icon-salvar',
                            text: 'Salvar',
                            action: 'configuracao-impressao-confirmar'
                        },
                        {
                            text: 'Cancelar',
                            scope: this,
                            iconCls: 'icon-cancelar',
                            action: 'configuracao-impressao-cancelar'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});
