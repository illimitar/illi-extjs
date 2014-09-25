Ext.define('Illi.view.produto.produto.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboProduto',
    name: 'id_produto',
    displayField: 'nome',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'nome',
    tabela: false,
    entidade: false,
    permitirAdicao: false,
//    setTabela: function(tabela) {
//        this.tabela = tabela;
//    },
//    getTabela: function(tabela) {
//        return this.tabela;
//    },
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">{nome}<tpl if="gradex"> {gradex}</tpl><tpl if="gradey"> {gradey}</tpl><tpl if="codigo"> ({codigo})</tpl></div>',
            '</tpl>'
            ),
    displayTpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '{nome}<tpl if="gradex"> {gradex}</tpl><tpl if="gradey"> {gradey}</tpl>',
            '</tpl>'
            ),
    initComponent: function () {
        var me = this;
        if (me.permitirAdicao === true) {
            me.trigger2Cls = 'trigger-add';
            me.onTrigger2Click = function () {
                Ext.create('Illi.view.produto.produto.Janela');
            };
        }
        Ext.apply(me, {
            store: Ext.create('Illi.store.produto.Produtos', {storeId: "comboProdutos", autoLoad: false})
        });
        me.store.getProxy().extraParams = {"p.situacao": "ATIVO", "pg.situacao": 1, "tabela": me.tabela, "entidade": me.entidade};
        me.store.load();
        me.callParent(arguments);
    }
});
