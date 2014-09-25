Ext.define('Illi.view.financeiro.pdv.FormularioSangria', {
    extend: 'Illi.view.AbstractForm',
    alias: 'widget.formularioSangria',
    requires: [
        'Illi.view.banco.conta.Combo',
        'Illi.view.natureza.Combo',
        'Ext.ux.TextMaskPlugin'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            padding: '5 5 0 5',
            bodyPadding: 10,
            //
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
            items: [
                {
                    xtype: 'comboConta',
                    name: 'conta_destino',
                    fieldCls: 'entrada',
                    fieldLabel: 'Conta',
                    displayField: 'nome',
                    listeners: {
                        afterrender: function(field) {
                            field.focus(false, true);
                        }
                    }
                },
                {
                    plugins: 'textmask',
                    mask: 'R$ #9.999.990,00',
                    money: true,
                    name: 'valor',
                    minValue: 0.01,
                    fieldLabel: 'Valor '
                },
                {
                    xtype: 'textareafield',
                    name: 'observacao',
                    allowBlank: true,
                    fieldLabel: 'Observação'
                }
            ]
        });
        me.callParent(arguments);
    }
});
