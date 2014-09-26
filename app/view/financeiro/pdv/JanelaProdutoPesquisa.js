Ext.define('Illi.view.financeiro.pdv.JanelaProdutoPesquisa', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaProdutoPesquisa',
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
            width: '95%',
            height: "95%",
            bodyBorder: false,
            layout: 'card',
            //
            items: [],
            tbar: {
                items: [
                    {
                        border: false,
                        xtype: 'tbtext',
                        text: 'Pesquisa de Produtos',
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
