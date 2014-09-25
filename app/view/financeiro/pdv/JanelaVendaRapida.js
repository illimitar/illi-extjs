Ext.define('Illi.view.financeiro.pdv.JanelaVendaRapida', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaVendaRapida',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            ativa: false,
            header: false,
            border: false,
            style: {
                backgroundColor: '#fff',
                border: '0px'
            },
            cls: 'pdv vendarapida',
            width: 600,
            height: 400,
            layout: {
                type: 'border'
            },
            autoShow: true,
            closable: false,
            maximizable: false,
            maximized: true,
            scrollbars: false,
            //
            items: [
                {
                    region: 'north',
                    xtype: 'painelSuperior',
                    border: false,
                    bodyBorder: false,
                    header: false
                },
                {
                    region: 'west',
                    xtype: 'painelLateral',
                    header: false,
                    flex: 1
                },
                {
                    region: 'center',
                    xtype: 'painelCentral',
                    header: false,
                    flex: 2
                },
                {
                    region: 'south',
                    xtype: 'painelRodape',
                    header: false
                }
            ]
        });
        me.bodyStyle = "background-image: url(../resources/images/pdv/fundo.jpg) !important; background-size: cover; background-repeat: no-repeat;";
        me.callParent(arguments);
    }
});
