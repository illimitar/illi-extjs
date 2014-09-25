Ext.define('Illi.view.AbstractWindow',{
    extend: 'Ext.window.Window',
    alias: 'widget.abstractwindow',
    title: 'Edição',
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    initComponent: function(){
        
        this.buttons = [{
            text: 'Salvar',
            action: 'save',
            iconCls: 'icon-salvar'
        },
        {
            text: 'Cancelar',
            scope: this,
            iconCls: 'icon-cancelar',
            handler: this.close
        }];
        
        this.callParent(arguments);
    }
});