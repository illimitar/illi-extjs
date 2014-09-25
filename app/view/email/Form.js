Ext.define('Illi.view.email.Form', {
    extend: 'Illi.view.AbstractForm',
    alias: 'widget.formEmail',
    itemId: 'formEmail',
    titulo: false,
    requires: [
    ],
    items: [
        {
            fieldLabel: 'Assunto',
            name: 'titulo',
            allowBlank: true,
            value: this.titulo
        },
        {
            xtype: 'textareafield',
            grow: true,
            fieldLabel: 'Email(s)',
            name: 'email'
        },
        {
            fieldLabel: 'Modelo de Relatorio',
            xtype: 'comboRelatorio',
            tipo: "fluxo",
            hidden: true,
            valueField: 'url',
            name: 'modelo'
        },
        {
            xtype: 'htmleditor',
            name: 'mensagem',
            itemId: "mensagem",
            allowBlank: true,
            border: false,
            hideLabel: true,
            anchor: '100% 85%'
        }
    ]

});
