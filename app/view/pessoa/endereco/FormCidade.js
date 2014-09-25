Ext.define('Illi.view.pessoa.endereco.FormCidade', {
    extend: 'Ext.window.Window',
    alias : 'widget.cidadeForm',
    layout: 'fit',
    closeAction:'Destroy',
    modal: true,
    requires: [
    'Illi.view.pessoa.endereco.ComboEstado'
    ],
   
    initComponent: function() {
        var me = this;
        
            
        Ext.apply(me, {
            scope:this,
            title: 'Cadastro de Cidade',
            width: 400,
            border:false,


            items:[
                    
            {
                xtype:'form',
                border:false,
                bodyPadding: 5,
                defaults: {
                    width: 380
                },
                defaultType: 'textfield',

                items: [
                {
                    xtype:'comboEstado',
                    allowBlank: false
                        
                },{
                    fieldLabel: 'Cidade',
                    name: 'cidade',
                    allowBlank: false
                    
                        
                }
                ]
            }],
     
     

            buttons : [{
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