Ext.define('Illi.view.banco.conta.FormAcerto', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaAcerto',
    title: 'Acerto de Saldo',
    layout: 'fit',
    id_conta: null,
    requires: [
        'Illi.view.banco.conta.Combo',
        'Ext.ux.TextMaskPlugin'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: 500,
            height: 320,
            scope: me,
            items: [{
                    xtype: 'form',
                    padding: '5 5 0 5',
                    bodyPadding: 10,
                    border: false,
                    fieldDefaults: {
                        anchor: '100%',
                        labelAlign: 'left',
                        labelWidth: 150,
                        allowBlank: false,
                        combineErrors: false,
                        msgTarget: 'side'
                    },
                    defaultType: 'textfield',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'start',
                        frame: true,
                        plain: true,
                        border: false
                    },
                    itemId: 'formAcerto',
                    items: [
                        {
                            fieldLabel: 'Data',
                            name: 'data_lancamento',
                            xtype: 'datefield',
                            value: Ext.Date.format(new Date(), 'd/m/Y'),
                            format: 'd/m/Y',
                            allowBlank: false
                        },
                        {
                            plugins: 'textmask',
                            mask: 'R$ #9.999.990,00',
                            money: true,
                            itemId: 'valor',
                            name: 'valor',
                            fieldLabel: 'Valor '
                        },
                        {
                            xtype: 'textareafield',
                            name: 'observacao',
                            allowBlank: true,
                            fieldLabel: 'Observação'
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
    }



});