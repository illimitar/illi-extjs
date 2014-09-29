Ext.define('Illi.view.financeiro.pdv.JanelaTeclado', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaTeclado',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            scope: me,
            title: false,
            header: false,
            autoShow: false,
            autoScroll: true,
            closable: false,
            draggable: true,
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
            width: 250,
            height: 360,
            bodyBorder: false,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start',
                frame: true,
                plain: true,
                border: false
            },
            defaults: {
                border: false,
                bodyBorder: false,
                margin: 5
            },
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'table',
                        columns: 4,
                        tdAttrs: {style: 'padding: 5px 10px;'}
                    },
                    items: [
                        // linha 1 coluna 1
                        Illi.app.Util.BotaoTeclado("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDELETE&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", "DELETE", false, false, false, {colspan: 3, margin: false}),
                        // linha 1 coluna 4
                        Illi.app.Util.BotaoTeclado("&nbsp<br>E<br>S<br>C<br>&nbsp", "ESC", false, false, false, {rowspan: 2, margin: false}),
                        // linha 2 coluna 1
                        Illi.app.Util.BotaoTeclado("7", "SEVEN", false, false, false, {margin: false}),
                        // linha 2 coluna 2
                        Illi.app.Util.BotaoTeclado("8", "EIGHT", false, false, false, {margin: false}),
                        // linha 2 coluna 3
                        Illi.app.Util.BotaoTeclado("9", "NINE", false, false, false, {margin: false}),
                        // linha 3 coluna 1
                        Illi.app.Util.BotaoTeclado("4", "FOUR", false, false, false, {margin: false}),
                        // linha 3 coluna 2
                        Illi.app.Util.BotaoTeclado("5", "FIVE", false, false, false, {margin: false}),
                        // linha 3 coluna 3
                        Illi.app.Util.BotaoTeclado("6", "SIX", false, false, false, {margin: false}),
                        // linha 3 coluna 4
                        Illi.app.Util.BotaoTeclado("&nbsp<br>E<br>N<br>T<br>E<br>R<br>&nbsp", "ENTER", false, false, false, {rowspan: 3, margin: false}),
                        // linha 4 coluna 1
                        Illi.app.Util.BotaoTeclado("1", "ONE", false, false, false, {margin: false}),
                        // linha 4 coluna 2
                        Illi.app.Util.BotaoTeclado("2", "TWO", false, false, false, {margin: false}),
                        // linha 4 coluna 3
                        Illi.app.Util.BotaoTeclado("3", "THREE", false, false, false, {margin: false}),
                        // linha 5 coluna 1
                        Illi.app.Util.BotaoTeclado("0", "ZERO", false, false, false, {margin: false}),
                        // linha 5 coluna 2
                        Illi.app.Util.BotaoTeclado("&nbsp&nbsp&nbsp&nbsp&nbsp00&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", "ZERO", false, false, false, {colspan: 2, margin: false})
                    ]
                }
            ],
            tbar: {
                border: false,
                items: [
                    {
                        xtype: 'tbtext',
                        text: "Teclado Virtual",
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }
                    }
                ]
            },
            bbar: {
                items: [
                    "->",
                    {
                        xtype: 'button',
                        text: "Cancelar",
                        scale: "large",
                        action: 'teclado-fechar'
                    }
                ]
            },
            listeners: {
                deactivate: function (self) {
                    self.toFront();
                },
                delay: 1    // Ext.Window.toFront() will check the current window
            }
        });
        me.callParent(arguments);
    }
});
