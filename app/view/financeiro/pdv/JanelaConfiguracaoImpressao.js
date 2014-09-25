Ext.define('Illi.view.financeiro.pdv.JanelaConfiguracaoImpressao', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaConfiguracaoImpressao',
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
            width: 600,
//            height: 350,
            bodyBorder: false,
            layout: 'card',
            //
            items: [],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Configuração de Impressão não-ECF',
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
                        },
                        '->',
                        {
                            text: 'Testar Impressão',
                            scope: this,
                            iconCls: 'icon-imprimir',
                            action: 'configuracao-impressao-testar'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});
