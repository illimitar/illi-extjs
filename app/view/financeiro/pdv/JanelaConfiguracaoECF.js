Ext.define('Illi.view.financeiro.pdv.JanelaConfiguracaoECF', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaConfiguracaoECF',
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
//            height: 230,
            bodyBorder: false,
            layout: 'card',
            //
            items: [],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Configuração de Impressão ECF',
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
                            action: 'configuracao-ecf-confirmar'
                        },
                        {
                            text: 'Cancelar',
                            scope: this,
                            iconCls: 'icon-cancelar',
                            action: 'configuracao-ecf-cancelar'
                        },
                        '->',
                        {
                            text: 'Leitura X',
                            scope: this,
                            iconCls: 'icon-imprimir',
                            action: 'configuracao-ecf-leiturax'
                        },
                        {
                            text: 'Pré Configurar (Executar)',
                            scope: this,
                            action: 'ecf-preconfigurar'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});
