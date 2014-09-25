Ext.define('Illi.view.financeiro.pdv.JanelaDevolucaoEdicao', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaDevolucaoEdicao',
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
            style: {
                borderColor: '#C0C0C0',
                borderStyle: 'solid',
                borderTopColor: 'red'
            },
            cls: 'pdv vendarapida',
            floating: true,
            constrain: true,
            modal: true,
            width: '97.7%',
            height: "97.7%",
            border: false,
            bodyBorder: false,
            layout: 'card',
            //
            items: [],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        itemId: 'pdvDevolucaoEdicaoTitulo',
                        text: 'Devolução',
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }
                    },
                    '->',
                    {
                        iconCls: 'icon-avancar',
                        itemId: 'pdvDevolucaoEdicaoBtnSalvar',
                        text: 'Continuar',
                        action: 'devolucao-edicao-salvar'
                    },
                    {
                        iconCls: 'icon-imprimir',
                        itemId: 'pdvDevolucaoEdicaoBtnImprimir',
                        text: 'Salvar e Imprimir',
                        action: 'devolucao-edicao-imprimir',
                        hidden: true
                    },
                    ' ',
                    {
                        iconCls: 'icon-cancelar',
                        text: 'Fechar',
                        action: 'devolucao-edicao-cancelar'
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});
