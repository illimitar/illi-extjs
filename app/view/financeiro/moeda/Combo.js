Ext.define('Illi.view.financeiro.moeda.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.financeiroMoedaCombo',
    name: 'id_moeda',
    store: Ext.create('Illi.store.Moedas', {illiRead: 'combo'}),
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
    // auto seleciona os tipos
    tipo: null,
    forcaSelecao: true,
    setTipo: function(tipo) {
        this.tipo = tipo;
    },
    getTipo: function(tipo) {
        return this.tipo;
    },
    initComponent: function() {
        var me = this;
        me.store.getProxy().extraParams = {
            tipo: me.getTipo()
        };
        me.callParent(arguments);
    }
});
