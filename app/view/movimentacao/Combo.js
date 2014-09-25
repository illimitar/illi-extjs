Ext.define('Illi.view.movimentacao.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.comboMovimentacao',
    name: 'id_movimentacao',
    ref: 'id_movimentacao',
    displayField: 'id',
    valueField: 'id',
    queryMode: 'remote',
    minChars: 0,
    queryParam: 'id',
    remoteFilter: true,
    typeAhead: true,
    forceSelection: false,
//    triggerAction: 'all',
    tipo: false,
    setTipo: function(tipo) {
        this.tipo = tipo;
    },
    getTipo: function(tipo) {
        return this.tipo;
    },
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">ID: {id}<tpl if="numero"> / DOC: {numero}</tpl><tpl if="cupom"> / COO: {cupom}</tpl></div>',
            '</tpl>'
            ),
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.movimentacao.Movimentacaos', {storeId: 'comboMovimentacaoStore' + me.getTipo()})
        });
        if (me.getTipo()) {
            me.store.getProxy().extraParams = {
                tipo: me.getTipo(),
                local: 'COMBO',
                situacao: 'ATIVO'
            };
        }
        me.callParent(arguments);
    }
});