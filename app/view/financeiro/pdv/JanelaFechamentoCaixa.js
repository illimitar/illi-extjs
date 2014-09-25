Ext.define('Illi.view.financeiro.pdv.JanelaFechamentoCaixa', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaFechamentoCaixa',
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
            width: '50%',
            height: "60%",
            bodyBorder: false,
            layout: 'card',
            //
            items: [],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Fechamento de Caixa',
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }

                    }
                ]
            },
            bbar: {
                items: [
                    {
                        iconCls: 'icon-salvar',
                        text: 'Conferir e Fechar Caixa',
                        action: 'processar-fechamento'
                    },
                    {
                        iconCls: 'icon-salvar',
                        text: 'Fechar Caixa com Divergências',
                        itemId: 'pdvProcessaFechamentoForcado', // manter
                        action: 'processar-fechamento-forcado'
                    },
                    '->',
                    {
                        iconCls: 'icon-imprimir',
                        text: 'Imprimir',
                        action: 'imprimir-fechamento'
                    },
                    {
                        iconCls: 'icon-remover',
                        text: 'Redução Z',
                        action: 'reducaoz'
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});
