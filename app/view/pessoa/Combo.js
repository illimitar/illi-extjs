Ext.define('Illi.view.pessoa.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.financeiroComboPessoa',
    name: 'id_pessoa',
    ref: 'id_pessoa',
    displayField: 'nome',
    valueField: 'id',
    queryMode: 'remote',
    minChars: 0,
    queryParam: 'nome',
    remoteFilter: true,
    typeAhead: true,
    forceSelection: false,
    triggerAction: 'all',
    tipo: false,
    trigger2Cls: 'trigger-add',
    setTipo: function(tipo) {
        this.tipo = tipo;
    },
    getTipo: function(tipo) {
        return this.tipo;
    },
    onTrigger2Click: function() {
        Ext.create('Illi.view.pessoa.Form', {itemId: 'formularioPessoa'}).show();
    },
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">{nome} ({id})</div>',
            '</tpl>'
            ),
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.Pessoas', {storeId: 'comboPessoa' + me.getTipo()})
        });
        if (me.getTipo()) {
            me.store.getProxy().extraParams = {
                tipo: me.getTipo(),
                situacao: 'ATIVO'
            };
        } else {
            me.store.getProxy().extraParams = {
                situacao: 'ATIVO'
            };
        }
        me.callParent(arguments);
    }
});


