Ext.define('Illi.view.financeiro.pdv.JanelaSangria', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaSangria',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            title: false,
            header: false,
            autoShow: false,
            closable: false,
            shadow: 'frame',
            shadowOffset: 30,
            border: 10,
            style: {
                borderColor: '#C0C0C0',
                borderStyle: 'solid'
            },
            cls: 'pdv vendarapida',
            floating: true,
            constrain: true,
            modal: true,
            width: 500,
            height: 260,
            bodyBorder: false,
            layout: 'card',
            //
            items: [],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Sangria',
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }

                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            iconCls: 'icon-salvar',
                            text: 'Efetuar Sangria',
                            action: 'sangria-confirmar'
                        },
                        {
                            text: 'Cancelar',
                            scope: this,
                            iconCls: 'icon-cancelar',
                            action: 'sangria-cancelar'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});
