Ext.define('Illi.view.usuario.entidade.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboEntidade',
    name: 'id_entidade',
    displayField: 'nome_entidade',
    valueField: 'id_entidade',
    queryMode: 'remote',
    queryParam: 'nome',
    tipo_pessoa: null,
    stringStore: 'Illi.store.UsuarioEntidades',
    tipo: false,
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">',
            ' {nome_entidade} - {id_entidade}',
            '</div>',
            '</tpl>'
            ),
    initComponent: function() {
        var me = this;
        if (me.tipo === "*") {
            me.stringStore = "Illi.store.Entidades";
        }
        Ext.apply(me, {
            store: Ext.create(me.stringStore, {storeId: "comboEntidades" + me.tipo})
        });
        me.store.getProxy().extraParams = {
            tipo_pessoa: me.tipo_pessoa
        };
        me.store.load();
        me.callParent(arguments);
    }
});
