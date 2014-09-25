Ext.define('Illi.view.pessoa.endereco.FormBairro', {
    extend: 'Ext.window.Window',
    alias : 'widget.bairroForm',
    layout: 'fit',
    closeAction:'Destroy',
    modal: true,
    requires: [
    'Illi.view.pessoa.endereco.ComboCidade'
    ],
   
    initComponent: function() {
        var me = this;
        
            
        Ext.apply(me, {
            scope:this,
            title: 'Cadastro de Bairro',
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
                    xtype:'ComboCidade',
                    allowBlank: false
                        
                },{
                    fieldLabel: 'Bairro',
                    name: 'bairro',
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