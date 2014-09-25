Ext.define('Illi.view.financeiro.condicao_pagamento.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboCondicaoPagamento',
    name: 'id_condicao_pagamento',
    store: Ext.create('Illi.store.CondicaoPagamentos', {storeId: "comboCondicaoPagamentos"}),
    displayField: 'descricao',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'descricao',
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">',
            ' {descricao} - {id}',
            '</div>',
            '</tpl>'
            ),
    initComponent: function() {
        this.callParent(arguments);
        this.store.getProxy().extraParams = {"situacao": "ATIVO"};
        this.store.load();
    }
});