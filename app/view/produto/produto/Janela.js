Ext.define('Illi.view.produto.produto.Janela', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.produtoJanela',
    itemId: 'produtoJanela',
    title: false,
    header: false,
    id_produto_grade: null,
    id_produto: null,
    autoShow: true,
    closable: true,
    shadow: 'frame',
    shadowOffset: 30,
    border: 10,
    style: {
        borderColor: '#C0C0C0',
        borderStyle: 'solid',
        borderTopColor: 'blue'
    },
    floating: true,
    constrain: true,
    requires: [
        'Illi.view.produto.produto.Form',
        'Illi.view.produto.codigo_barra.Lista',
        'Illi.view.produto.grade.Lista',
        'Illi.view.produto.produto.ListaProdutoGrade',
        'Illi.view.produto.grade.grupo_grade.Lista',
        'Illi.view.produto.produto.FormTributacao'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            modal: true,
            height: '97.7%',
            width: '97.7%',
            border: false,
            bodyBorder: false,
            layout: 'card',
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    itemId: 'tabProduto',
                    border: false,
                    bodyBorder: false,
                    padding: 0,
                    items: [
                        {
                            title: 'Produto',
                            layout: 'border',
                            border: false,
                            bodyBorder: false,
                            items: [
                                {
                                    region: 'center',
                                    xtype: 'produtoForm',
                                    border: false,
                                    bodyBorder: false,
                                    flex: 2,
                                    title: false
                                }
                                //,
//                                {
//                                    region: 'east',
//                                    flex: 1,
//                                    border: false,
//                                    layout: {
//                                        type: 'vbox',
//                                        align: 'stretch'
//                                }
                            ]
                        },
                        {
                            xtype: "formTributacao",
                            layout: "vbox"
                        }
                    ]
                }],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Cadastro de Produto',
                        itemId: 'tituloJanelaProduto',
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }

                    },
                    '->',
                    {
                        text: 'Fechar',
                        scope: this,
                        iconCls: 'icon-cancelar',
                        handler: this.close
                    }
                ]
            }
        });
        me.callParent(arguments);
    },
    listeners: {
        afterRender: function(me) {
            me.getEl().addKeyMap({
                binding: [
                    {
                        key: Ext.EventObject.ENTER,
                        ctrl: true,
                        fn: function() {
                            me.down('#salvarDuplicar').fireHandler();
                        }
                    },
                    {
                        key: Ext.EventObject.ENTER,
                        shift: true,
                        fn: function() {
                            me.down('#salvar').fireHandler();
                        }
                    }
                ]
            });
            me.down('textfield[name=codigo]').focus(true, 400);
        },
        beforeclose: function(me) {
            Ext.getStore("produto.Produtos").load();
        }
    }
});