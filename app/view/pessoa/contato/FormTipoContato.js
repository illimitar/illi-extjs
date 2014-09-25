Ext.define('Illi.view.pessoa.contato.FormTipoContato', {
    extend: 'Ext.window.Window',
    alias: 'widget.tipoContatoForm',
    layout: 'fit',
    closeAction: 'Destroy',
    modal: true,
    requires: [
        'Illi.view.pessoa.contato.ComboCanalTipoContato'
    ],
    initComponent: function() {
        var me = this;


        Ext.apply(me, {
            scope: this,
            title: 'Cadastro de Tipo de Contato',
            width: 400,
            border: false,
            items: [
                {
                    xtype: 'form',
                    border: false,
                    bodyPadding: 5,
                    defaults: {
                        width: 380,
                        labelWidth: 150
                    },
                    defaultType: 'textfield',
                    items: [
                        {
                            xtype: 'canalTipoContato'

                        }
                        , {
                            fieldLabel: 'Tipo',
                            name: 'tipo',
                            allowBlank: false
                        }
                    ]
           }],
            buttons: [{
                    text: 'Salvar',
                    action: 'salvar',
                    iconCls: 'icon-salvar'

                },
                {
                    text: 'Cancelar',
                    scope: this,
                    iconCls: 'icon-cancelar',
                    handler: this.close
                }]
        })
        me.callParent(arguments);
    }
});