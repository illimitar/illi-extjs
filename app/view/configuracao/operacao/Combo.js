Ext.define('Illi.view.configuracao.operacao.Combo', {
    extend: 'Illi.view.AbstractCombo',
    queryMode: 'remote',
    queryParam: 'nome',
    alias: 'widget.comboConfiguracaoOperacao',
    name: 'id_operacao',
    store: Ext.create('Illi.store.configuracao.Operacaos', {autoLoad: false, storeId: "storecomboConfiguracaoOperacao"}),
    displayField: 'nome',
    fieldLabel: 'Operação',
    selectOnTab: true,
    valueField: 'id',
    typeAhead: true,
    listClass: 'x-combo-list-small',
    triggerAction: 'all',
    tipo: false,
    excecao: false,
    forceSelection: true,
    setTipo: function(tipo) {
        this.tipo = tipo;
    },
    getTipo: function(tipo) {
        return this.tipo;
    },
    setExcecao: function(excecao) {
        this.excecao = excecao;
    },
    getExcecao: function(excecao) {
        return this.excecao;
    },
    initComponent: function() {
        var me = this;
        me.store.getProxy().extraParams = {
            tipo: me.getTipo(),
            excecao: (me.getExcecao() ? Ext.JSON.encode(me.getExcecao()) : ''),
            "situacao": "ATIVO"
        };
        me.store.load();
        me.callParent(arguments);
    }
});