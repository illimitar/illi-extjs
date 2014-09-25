Ext.define('Illi.view.produto.etiqueta.FormularioConfiguracaoImpressoraEtiqueta', {
    extend: 'Illi.view.AbstractForm', // Ext.form.Panel
    alias: 'widget.formularioConfiguracaoImpressoraEtiqueta',
    requires: [
        'Ext.ux.TextMaskPlugin',
        'Illi.view.relatorio.Combo'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            fieldDefaults: {
                anchor: '60%',
                labelAlign: 'right',
                labelWidth: "40%",
                allowBlank: false,
                combineErrors: false,
                msgTarget: 'side',
                labelClsExtra: 'texto-negrito'
            },
            border: false,
            bodyBorder: false,
            bodyStyle: 'background: transparent;',
            padding: '5 5 0 5',
            bodyPadding: 10,
            defaultType: 'textfield',
            items: [
                {
                    xtype: 'comboRelatorio',
                    name: 'modelo',
                    tipo: "ETIQUETA",
                    value: (Illi.app.Local.get('cfgEtiquetadora') ? Illi.app.Local.get('cfgEtiquetadora').modelo : undefined),
                    allowBlank: true,
                    fieldLabel: 'Modelo'
                },
                {
                    xtype: 'combobox',
                    name: 'codigo_exibicao',
                    forceSelection: true,
                    store: [
                        [0, 'ID'],
                        [1, 'Referência'],
                        [2, 'Código de Barra'],
                        [3, 'Código Interno']
                    ],
                    value: (Illi.app.Local.get('cfgEtiquetadora') ? Illi.app.Local.get('cfgEtiquetadora').codigo_exibicao : undefined),
                    fieldLabel: 'Código de Exibição'
                },
                {
                    xtype: 'textfield',
                    name: 'servidor',
                    value: (Illi.app.Local.get('cfgEtiquetadora') ? Illi.app.Local.get('cfgEtiquetadora').servidor : undefined),
                    allowBlank: true,
                    fieldLabel: 'Servidor BarTender'
                }
            ]
        });
        me.callParent(arguments);
    }
});
