Ext.define('Illi.view.produto.grade.Tab', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.tabGrade',
    itemId: 'tabGrades',
    requires: [
        'Illi.view.produto.codigo_barra.Lista',
        'Illi.view.produto.preco_produto.Form'
    ],
    title: 'illi',
    layout: 'card',
    border: false,
    bodyBorder: false,
    items: [
        {
            xtype: 'precoProdutoForm',
            border: false
        }
    ]
});