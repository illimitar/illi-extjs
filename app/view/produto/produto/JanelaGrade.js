Ext.define('Illi.view.produto.produto.JanelaGrade', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.produtoJanelaGrade',
    itemId: 'produtoJanelaGrade',
    title: false,
    header: false,
    id_produto_grade: null,
    id_produto: null,
    autoShow: true,
    closable: true,
    shadow: 'frame',
    shadowOffset: 30,
    border: 10,
    titulo: '',
    style: {
        borderColor: '#C0C0C0',
        borderTopColor: 'green',
        borderStyle: 'solid'
    },
    floating: true,
    constrain: true,
    requires: [
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
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: me.titulo,
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
    }
});