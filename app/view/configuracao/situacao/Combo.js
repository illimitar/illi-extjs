Ext.define('Illi.view.configuracao.situacao.Combo', {
    extend: 'Illi.view.AbstractCombo',
    queryMode: 'remote',
    queryParam: 'nome',
    alias: 'widget.comboConfiguracaoSituacao',
    name: 'id_situacao',
    store: Ext.create('Illi.store.configuracao.Situacaos', {autoLoad: false, storeId: "storecomboConfiguracaoSituacao"}),
    displayField: 'nome',
    fieldLabel: 'Situação',
    selectOnTab: true,
    valueField: 'nome',
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