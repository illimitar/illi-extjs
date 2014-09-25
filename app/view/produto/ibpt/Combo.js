Ext.define('Illi.view.produto.ibpt.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboIBPT',
    name: 'ibpt',
    displayField: 'descricao',
    valueField: 'id',
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
            store: Ext.create('Illi.store.produto.IBPTs', {storeId: "comboIBPT", autoLoad: false})
        });
        me.store.load();
        me.callParent(arguments);
    }
});
