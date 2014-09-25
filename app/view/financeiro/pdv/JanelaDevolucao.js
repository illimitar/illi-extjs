Ext.define('Illi.view.financeiro.pdv.JanelaDevolucao', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaDevolucao',
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
                borderStyle: 'solid',
                borderTopColor: 'blue'
            },
            cls: 'pdv vendarapida',
            floating: true,
            constrain: true,
            modal: true,
            width: '97.7%',
            height: "97.7%",
            bodyBorder: false,
            layout: 'card',
            //
            items: [],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Devolução',
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }
                    },
                    '->',
                    {
                        iconCls: 'icon-adicionar',
                        text: 'Incluir',
                        action: 'devolucao-adicionar'
                    },
                    {
                        iconCls: 'icon-remover',
                        text: 'Cancelar',
                        action: 'devolucao-cancelar'
                    },
                    {
                        iconCls: 'icon-imprimir',
                        text: 'Imprimir',
                        action: 'devolucao-imprimir'
                    },
                    ' ',
                    {
                        iconCls: 'icon-atualizar',
                        text: 'Atualizar',
                        action: 'devolucao-atualizar'
                    },
                    {
                        iconCls: 'icon-cancelar',
                        text: 'Fechar',
                        action: 'devolucao-fechar'
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});
