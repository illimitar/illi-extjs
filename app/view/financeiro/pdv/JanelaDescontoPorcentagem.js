Ext.define('Illi.view.financeiro.pdv.JanelaDescontoPorcentagem', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaDescontoPorcentagem',
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
            width: '40%',
            bodyBorder: false,
            layout: 'card',
            //
            items: [],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Desconto (Proporcional)',
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
                        xtype: 'panel',
                        border: false,
                        bodyStyle: 'background: transparent;',
                        cls: 'destaque',
                        html: 'Valor: '
                    },
                    {
                        xtype: 'painelDescontoPorcentagemValor',
                        flex: 1
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});
