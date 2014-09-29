Ext.define('Illi.view.financeiro.pdv.FormularioConfiguracaoECF', {
    extend: 'Illi.view.AbstractForm', // Ext.form.Panel
    alias: 'widget.formularioConfiguracaoECF',
    requires: [
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
            //bodyPadding: 10,
            //
            defaultType: 'textfield',
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Impressora ECF via ACBR',
                    defaults: {
                        anchor: '100%',
                        typeAhead: false,
                        autoHeight: true,
                        allowBlank: true,
                        layout: {
                            type: 'hbox',
                            anchor: '60%',
                            //bodyPadding: 10,
                            defaultMargins: {
                                top: 0,
                                right: 5,
                                bottom: 0,
                                left: 0
                            }
                        }
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'servidor',
                            value: (Illi.app.Local.get('pdvImpressoraECF') ? Illi.app.Local.get('pdvImpressoraECF').servidor : '127.0.0.1:12000'),
                            allowBlank: true,
                            fieldLabel: 'Servidor'
                        },
                        {
                            xtype: 'checkboxfield',
                            name: 'concomitante',
                            allowBlank: false,
                            checked: (Illi.app.Local.get('pdvImpressoraECF') ? Illi.app.Local.get('pdvImpressoraECF').concomitante : true),
                            fieldLabel: 'Concomitante'
                        },
                        {
                            xtype: 'textfield',
                            name: 'comando',
                            allowBlank: true,
                            fieldLabel: 'Comando (ACBR)'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});
