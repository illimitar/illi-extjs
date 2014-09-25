Ext.define('Illi.view.usuario.funcao.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboFuncao',
    name: 'id_funcao',
    store: Ext.create('Illi.store.Funcoes', {storeId: "comboFuncoes"}),
    displayField: 'valor',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'valor',
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">',
            ' {valor} - {id}',
            '</div>',
            '</tpl>'
            ),
    initComponent: function() {
        this.callParent(arguments);
        this.store.getProxy().extraParams = {"situacao": "ATIVO"};
        this.store.load();
    }
});