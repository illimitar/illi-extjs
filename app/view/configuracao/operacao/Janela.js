Ext.define('Illi.view.configuracao.operacao.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaConfiguracaoOperacao',
    itemId: 'janelaConfiguracaoOperacao',
    layout: 'fit',
    requires: [
        'Ext.ux.TextMaskPlugin',
        'Illi.view.configuracao.operacao.imposto.Form',
        'Illi.view.configuracao.operacao.Form',
        'Illi.view.ComboSituacao'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            modal: true,
            height: '80%',
            width: '80%',
            title: 'Cadastro de Operação',
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start',
                frame: true,
                plain: true,
                border: false,
                bodyBorder: false
            },
            items: [
                {
                    xtype: 'form',
                    itemId: "formGrupoOperacao",
                    bodyPadding: 15,
                    defaultType: 'textfield',
                    border: false,
                    bodyBorder: false,
                    fieldDefaults: {
                        anchor: '50%',
                        labelAlign: 'right',
                        labelClsExtra: 'texto-negrito',
                        labelWidth: "30%",
                        allowBlank: false,
                        combineErrors: false,
                        msgTarget: 'side'
                    },
                    items: [
                        {
                            name: 'id',
                            fieldLabel: 'ID',
                            allowBlank: true,
                            hidden: true
                        },
                        {
                            fieldLabel: 'Nome',
                            name: 'nome'
                        },
                        {
                            xtype: 'comboSituacao',
                            forceSelection: true,
                            fieldLabel: 'Situação'
                        }
                    ]
                }, {
                    xtype: 'tabpanel',
                    flex: 3,
                    border: false,
                    bodyBorder: false,
                    activeTab: 0,
                    defaults: {
                        bodyPadding: 10
                    },
                    items: [
                        {
                            xtype: "formPropriedade"
                        },
                        {
                            xtype: "formOperacaoImposto",
                            title: "Impostos"
                        }

                    ]
                }],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            iconCls: 'icon-salvar',
                            text: 'Salvar',
                            action: 'salvar'
                        },
                        {
                            text: 'Cancelar',
                            scope: this,
                            iconCls: 'icon-cancelar',
                            handler: this.close
                        }

                    ]
                }

            ]
        });
        me.callParent(arguments);
    },
    listeners: {
        beforeclose: function(me) {
            Ext.getStore("configuracao.Operacaos").load();
        }
    }
});