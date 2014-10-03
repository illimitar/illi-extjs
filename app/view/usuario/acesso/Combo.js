Ext.define('Illi.view.usuario.acesso.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboAcesso',
    name: 'id_acesso',
    store: Ext.create('Illi.store.Acessos', {storeId: "comboAcessos"}),
    displayField: 'titulo',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'titulo',
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '   <tpl if="this.selecao(pai)">',
            '       <div class="x-boundlist-item" style="color: #bbb;">{titulo}</div>',
            '   <tpl else>',
            '       <div class="x-boundlist-item">{titulo}</div>',
            '   </tpl>',
            '</tpl>',
            {
                disableFormats: true,
                selecao: function(pai) {
                    return (pai === 'S');
                }
            }
    ),
    listeners: {
        beforeselect: function(combo, record, index) {
            if (record.get('pai') === 'S') {
                return false;
            }
        },
        blur: function(combo) {
            var selecao = combo.findRecord("id", combo.getValue());
            if (selecao) {
                if (selecao.get('pai') === 'S') {
                    combo.setValue(null);
                }
            }
        }
    },
    initComponent: function() {
        this.callParent(arguments);
        this.store.load();
    }
});
////Ext.define('Illi.view.usuario.acesso.Combo', {
//    extend: 'Illi.view.AbstractCombo',
//    alias: 'widget.comboAcesso',
//    name: 'id_acesso',
//    store: Ext.create('Illi.store.Acessos', {storeId: "comboAcessos"}),
//    displayField: 'titulo',
//    valueField: 'id',
//    queryMode: 'remote',
//    queryParam: 'titulo',
//    tpl: Ext.create('Ext.XTemplate',
//            '<tpl for=".">',
//            '<div class="x-boundlist-item">',
//            '<tpl if="url">',
//            ' {titulo} - {id} <span style="float: right;">{url}</span>',
//            '<tpl else>',
//            ' {titulo} - {id}',
//            '</tpl>',
//            '</div>',
//            '</tpl>'
//            ),
//    initComponent: function() {
//        this.callParent(arguments);
//        this.store.getProxy().extraParams = {"situacao": "ATIVO"};
//        this.store.load();
//    }
//});