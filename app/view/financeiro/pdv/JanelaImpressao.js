Ext.define('Illi.view.financeiro.pdv.JanelaImpressao', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaImpressao',
    initComponent: function () {
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
            width: '80%',
            height: "60%",
            bodyBorder: false,
            layout: 'card',
            //
            items: [],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Impressão de Venda (2ª via)',
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }

                    }
                ]
            },
            bbar: {
                items: [
                    Illi.app.Util.BotaoTeclado("Cancelar (ESC)", "ESC"),
                    "->",
                    Illi.app.Util.BotaoTeclado("Confirmar (ENTER)", "ENTER")
                ]
            }
        });
        me.callParent(arguments);
    }
});
