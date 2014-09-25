Ext.define('Illi.view.AbstractJanela', {
    extend: 'Ext.panel.Panel',
    title: false,
    header: false,
    titulo: '',
    autoShow: true,
    closable: true,
    shadow: 'frame',
    shadowOffset: 30,
    border: 10,
    style: {
        borderColor: '#C0C0C0',
        borderStyle: 'solid'
    },
    width: "40%",
    height: "50%",
    floating: true,
    constrain: true,
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            xtype: 'form',
            border: false,
            bodyBorder: false,
            bodyPadding: 0,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start',
                frame: true,
                plain: true,
                border: false
            },
            items: [
            ],
            tbar: {
                border: false,
                itemId: 'barraJanela',
                items: [
                    {
                        xtype: 'tbtext',
                        text: me.titulo,
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }

                    },
                    '->',
                    {
                        text: 'Salvar',
                        action: 'salvar',
                        iconCls: 'icon-salvar',
                        itemId: 'salvar'
                    },
                    {
                        text: 'Fechar',
                        scope: this,
                        iconCls: 'icon-cancelar',
                        handler: function() {
                            me.close();
                        }
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});