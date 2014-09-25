Ext.define('Illi.view.usuario.grupo_usuario.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboGrupoUsuario',
    name: 'id_grupo_usuario',
    store: Ext.create('Illi.store.GrupoUsuarios', {storeId: "comboGrupoUsuarios"}),
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
