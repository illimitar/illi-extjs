Ext.define('Illi.view.financeiro.Container', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.containerFinanceiro',
    itemId: 'containerFinanceiro',
    requires: [
        'Illi.view.financeiro.Arvore',
        'Illi.view.financeiro.ContasApagar'
    ],
    border: false,
    bodyBorder: false,
    layout: 'border',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [
                {
                    xtype: 'arvoreFinanceiro',
                    header: false,
                    hideHeaders: true,
                    collapsible: true,
                    border: false,
                    bodyBorder: false,
                    split: true,
                    region: 'west',
                    width: 230,
                    tipo: 'DESPESA'
                },
                {
                    xtype: 'financeiroContasApagar',
                    title: 'Raiz',
                    border: false,
                    bodyBorder: false,
                    region: 'center',
                    scope: this
                }
            ]


        });
        me.callParent(arguments);
    }
});