Ext.define('Illi.view.relatorio.Combo', {
    extend: 'Illi.view.AbstractCombo',
    queryMode: 'remote',
    queryParam: 'nome',
    alias: 'widget.comboRelatorio',
    name: 'id_relatorio',
    displayField: 'nome',
    selectOnTab: true,
    valueField: 'id',
    typeAhead: true,
    listClass: 'x-combo-list-small',
    triggerAction: 'all',
    tipo: false,
    forceSelection: true,
    setTipo: function(tipo) {
        this.tipo = tipo;
    },
    getTipo: function(tipo) {
        return this.tipo;
    },
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            store: Ext.create('Illi.store.relatorio.Relatorios', {storeId: 'comboRelatorio' + me.getTipo()})
        });
        me.store.getProxy().extraParams = {
            tipo: me.getTipo(),
            "situacao": "ATIVO"
        };
        me.store.load();
        me.callParent(arguments);
    }
});