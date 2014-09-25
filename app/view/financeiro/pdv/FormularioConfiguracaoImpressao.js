Ext.define('Illi.view.financeiro.pdv.FormularioConfiguracaoImpressao', {
    extend: 'Illi.view.AbstractForm', // Ext.form.Panel
    alias: 'widget.formularioConfiguracaoImpressao',
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
            bodyPadding: 10,
            //
            defaultType: 'textfield',
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Impressão não-ECF via Proxy',
                    defaults: {
                        anchor: '100%',
                        typeAhead: false,
                        autoHeight: true,
                        allowBlank: true,
                        layout: {
                            type: 'hbox',
                            anchor: '60%',
                            bodyPadding: 10,
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
                            value: (Illi.app.Local.get('pdvImpressora') ? Illi.app.Local.get('pdvImpressora').servidor : 'http://127.0.0.1:11000/proxy/impressora.php'),
                            allowBlank: true,
                            fieldLabel: 'Servidor'
                        },
                        {
                            xtype: 'textfield',
                            name: 'porta',
                            value: (Illi.app.Local.get('pdvImpressora') ? Illi.app.Local.get('pdvImpressora').porta : 'COM1'),
                            allowBlank: true,
                            fieldLabel: 'Dispositivo / Porta'
                        },
//                        {
//                            xtype: 'numberfield',
//                            name: 'colunas',
//                            value: (Illi.app.Local.get('pdvImpressora') ? Illi.app.Local.get('pdvImpressora').colunas : 48),
//                            allowBlank: true,
//                            fieldLabel: 'Colunas'
//                        },
                        {
                            xtype: 'combobox',
                            name: 'drive',
                            value: (Illi.app.Local.get('pdvImpressora') ? (Illi.app.Local.get('pdvImpressora').drive !== undefined ? Illi.app.Local.get('pdvImpressora').drive : 0) : 0),
                            forceSelection: true,
                            store: [
                                [0, 'Universal'],
                                [1, 'Urmet Daruma'],
                                [2, 'Bematech'],
                                [3, 'Diebold']
                            ],
                            fieldLabel: 'Fabricante Impressora'
                        },
                        {
                            xtype: 'numberfield',
                            name: 'quebra',
                            value: (Illi.app.Local.get('pdvImpressora') ? (Illi.app.Local.get('pdvImpressora').quebra !== undefined ? Illi.app.Local.get('pdvImpressora').quebra : 8) : 8),
                            allowBlank: true,
                            maxValue: 100,
                            minValue: 0,
                            fieldLabel: 'Linhas após Impressão'
                        },
                        {
                            xtype: 'checkboxfield',
                            name: 'guilhotina',
                            allowBlank: false,
                            checked: (Illi.app.Local.get('pdvImpressora') ? (Illi.app.Local.get('pdvImpressora').guilhotina !== undefined ? Illi.app.Local.get('pdvImpressora').guilhotina : false) : false),
                            fieldLabel: 'Guilhotina (se config.)'
                        },
                        {
                            xtype: 'checkboxfield',
                            name: 'offline',
                            allowBlank: false,
                            checked: (Illi.app.Local.get('pdvImpressora') ? Illi.app.Local.get('pdvImpressora').offline : true),
                            fieldLabel: 'Offline'
                        },
                        {
                            xtype: 'checkboxfield',
                            name: 'ecfOffline',
                            allowBlank: false,
                            checked: (Illi.app.Local.get('pdvImpressoraECF') ? Illi.app.Local.get('pdvImpressoraECF').offline : true),
                            fieldLabel: 'Ignorar ECF (Offline)'
//                        },
//                        {
//                            xtype: 'checkboxfield',
//                            name: 'fiscal',
//                            allowBlank: false,
//                            checked: (Illi.app.Local.get('pdvImpressora') ? Illi.app.Local.get('pdvImpressora').fiscal : true),
//                            fieldLabel: 'Fiscal'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});
