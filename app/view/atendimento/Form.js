Ext.define('Illi.view.atendimento.Form', {
    extend: 'Illi.view.AbstractForm',
    alias: 'widget.formAtendimento',
    itemId: 'formAtendimento',
    padding: 0,
    combineErrors: false,
    msgTarget: 'side',
    defaultType: 'textfield',
    requires: [
        'Ext.ux.TextMaskPlugin',
        'Ext.ux.form.DateTimeField',
        'Illi.view.ComboSituacao',
        'Illi.view.pessoa.Combo',
        'Illi.view.configuracao.situacao.Combo'
    ],
    defaults: {
        allowBlank: false
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            items: [
                {
                    name: 'id',
                    type: 'integer',
                    itemId: 'formIdMovimentacao',
                    xtype: 'hiddenfield'
                },
                {
                    fieldLabel: 'Tipo',
                    xtype: 'comboConfiguracaoSituacao',
                    tipo: 'ATENDIMENTO',
                    name: 'tipo'
                },
                {
                    fieldLabel: 'Parceiro',
                    xtype: 'financeiroComboPessoa',
                    name: 'p.id'
                },
                {
                    fieldLabel: 'Responsável',
                    xtype: 'financeiroComboPessoa',
                    tipo: "FUNCIONARIO",
                    name: 'r.id'
                },
                {
                    fieldLabel: 'Data Abertura',
                    xtype: 'datetimefield',
                    name: 'abertura',
                    format: 'd/m/Y',
                    submitFormat: 'Y-m-d',
                    value: new Date()
                },
                {
                    fieldLabel: 'Data Atendimento',
                    xtype: 'datetimefield',
                    name: 'atendimento',
                    format: 'd/m/Y',
                    submitFormat: 'Y-m-d',
                    value: new Date()
                },
                {
                    xtype: 'textfield',
                    name: 'titulo',
                    fieldLabel: "Titulo"
                },
                {
                    xtype: 'htmleditor',
                    name: 'descricao',
                    fieldLabel: null,
                    height: 250
                },
                {
                    fieldLabel: 'Data Finalizado',
                    xtype: 'datetimefield',
                    allowBlank: true,
                    name: 'finalizado',
                    format: 'd/m/Y',
                    submitFormat: 'Y-m-d'
                }
            ]
        });
        me.callParent(arguments);
    }
});
