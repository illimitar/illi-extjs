Ext.define('Illi.view.usuario.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboUsuario',
    name: 'id_usuario',
    store: Ext.create('Illi.store.Usuarios', {storeId: "comboUsuarios"}),
    displayField: 'nome',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'nome',
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">',
            ' {nome} - {id}',
            '</div>',
            '</tpl>'
            ),
    initComponent: function() {
        this.callParent(arguments);
        this.store.getProxy().extraParams = {"situacao": "ATIVO"};
        this.store.load();
    }
});