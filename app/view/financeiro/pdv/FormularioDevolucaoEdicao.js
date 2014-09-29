Ext.define('Illi.view.financeiro.pdv.FormularioDevolucaoEdicao', {
    extend: 'Illi.view.AbstractForm',
    alias: 'widget.formularioDevolucaoEdicao',
    requires: [
        'Illi.view.pessoa.Combo',
        'Illi.view.movimentacao.Combo',
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
                    name: 'id',
                    type: 'integer',
                    itemId: 'pdvDevolucaoEdicaoIdMovimentacao',
                    xtype: 'hiddenfield'
                },
                {
                    fieldLabel: 'Cliente',
                    xtype: 'financeiroComboPessoa',
                    tipo: 'CLIENTE',
                    name: 'p.id'
                },
                {
                    fieldLabel: 'C.O.',
                    xtype: 'comboMovimentacao',
                    name: 'numero',
                    tipo: 'VENDA',
                    allowBlank: true
                },
                {
                    fieldLabel: 'Observação',
                    xtype: 'htmleditor',
                    name: 'observacao',
                    height: 200
                }
            ]
        });
        me.callParent(arguments);
    }
});
