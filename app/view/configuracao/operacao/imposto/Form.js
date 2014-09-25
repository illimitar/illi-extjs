Ext.define('Illi.view.configuracao.operacao.imposto.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formOperacaoImposto',
    itemId: "formOperacaoImposto",
    modal: true,
    width: "100%",
    layout: 'anchor',
    defaults: {
        anchor: '90%',
        labelWidth: 200
    },
    requires: [
        "Illi.view.produto.cfop.Combo"
    ],
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            title: "Imposto",
            border: false,
            bodyBorder: false,
            defaultType: 'textfield',
            fieldDefaults: {
                labelAlign: 'right',
                labelClsExtra: 'texto-negrito',
                allowBlank: true,
                combineErrors: false,
                msgTarget: 'side'
            },
            items: [
                {
                    fieldLabel: 'CFOP',
                    xtype: 'comboCfop',
                    itemId: "comboCfop",
                    name: 'cfop'
                },
                {
                    fieldLabel: 'Aliquota',
                    xtype: 'numberfield',
                    name: 'aliquota',
                    anchor: '30%'
                },
                {
                    fieldLabel: 'Base Redução ICMS (%)',
                    xtype: 'numberfield',
                    name: 'baseReducao',
                    anchor: '30%'
                }
            ]
        });
        me.callParent(arguments);
    }
});