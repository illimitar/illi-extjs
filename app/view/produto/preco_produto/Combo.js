Ext.define('Illi.view.produto.preco_produto.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboPrecoProduto',
    name: 'id_preco',
    store: Ext.create('Illi.store.produto.Precos', {storeId: "comboPrecos"}),
    displayField: 'nome',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'nome',
    tipo: null,
    setTipo: function(tipo) {
        this.tipo = tipo;
    },
    getTipo: function(tipo) {
        return this.tipo;
    },
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">',
            ' {nome} - {id}',
            '</div>',
            '</tpl>'
            ),
    trigger2Cls: 'trigger-add',
    onTrigger2Click: function() {
//        var controller = Illi.app.getController('produto.Preco');
//        if (!controller.carregado) {
//            controller.carregado = true;
//            controller.init();
//        }
        Ext.create('Illi.view.produto.preco_produto.Janela').show();
    },
    initComponent: function() {
        this.callParent(arguments);
        this.store.getProxy().extraParams = {
            tipo: this.getTipo(),
            situacao: 'ATIVO'
        };
        this.store.load();
    }
});
