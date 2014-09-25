Ext.define('Illi.view.produto.produto.Container', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Illi.view.produto.produto.Lista'
    ],
    alias: 'widget.containerProduto',
    layout: 'border',
    defaults: {
        collapsible: true,
        split: true
    },
    border: false,
    bodyBorder: false,
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            items: [
                {
                    title: false,
                    xtype: 'listaProduto',
                    layout: 'fit',
                    height: '80%',
                    region: 'center',
                    border: false,
                    bodyBorder: false,
                    collapsible: false
                },
                {
                    title: "Detalhes de Produto",
                    layout: 'fit',
                    region: 'south',
                    header: false,
                    height: '20%',
                    border: false,
                    bodyBorder: false,
                    items: [
                        {
                            xtype: 'tabpanel',
                            activeTab: 0,
                            border: false,
                            bodyBorder: false,
                            tabPosition: 'left',
                            items: [
                                {
                                    title: false,
                                    iconCls: 'icon-moeda',
                                    header: false,
                                    xtype: 'listaEstoquePreco',
                                    tooltip: 'Preços e Estoque',
                                    autoScroll: true,
                                    border: false,
                                    bodyBorder: false
                                }
//                                ,
//                                {
//                                    title: false,
//                                    iconCls: 'icon-etiqueta',
//                                    html: "Função não implementada!"
//                                },
//                                {
//                                    title: false,
//                                    iconCls: 'icon-grade',
//                                    html: "Função não implementada!"
//                                }
                            ]
                        }

                    ]
                }

            ]
        });
        me.callParent(arguments);
    }
});