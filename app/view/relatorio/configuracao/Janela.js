Ext.define('Illi.view.relatorio.configuracao.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.relatorioJanelaConfiguracao',
    title: false,
    requires: ['Illi.view.relatorio.configuracao.Lista'],
    autoScroll: true,
    modal: true,
    border: false,
    boderBody: false,
    layout: 'fit',
    height: '80%',
    width: '92%',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            bodyBorder: false,
            border: false,
            items: [
                {
                    xtype: 'form',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'start'
                    },
                    autoHeight: true,
                    bodyPadding: 10,
                    border: false,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Nome',
                            allowBlank: false,
                            name: 'nome',
                            alowBlank: false
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Campos',
                            height: 500,
                            defaults: {
                                flex: 1,
                                hideLabel: true
                            },
                            items: [
                                {
                                    xtype: 'listaRelatorioConfiguracao',
                                    border: false,
                                    boderBody: false
                                }
                            ]
                        }
                    ]
                }
            ],
            bbar: {
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
