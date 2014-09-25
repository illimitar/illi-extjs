Ext.define('Illi.view.produto.cfop.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboCfop',
    name: 'cfop',
    displayField: 'descricao',
    valueField: 'codigo',
    queryMode: 'remote',
    queryParam: 'descricao',
    tabela: false,
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">',
            '{codigo}  {descricao}',
            '</div>',
            '</tpl>'
            ),
    displayTpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '{codigo} {descricao}',
            '</tpl>'
            ),
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.produto.Cfops', {storeId: "comboCfop", autoLoad: false})
        });
        me.store.load();
        me.callParent(arguments);
    }
});
