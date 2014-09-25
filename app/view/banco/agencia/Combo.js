Ext.define('Illi.view.banco.agencia.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboAgencia',
    name: 'id_agencia',
    store: Ext.create('Illi.store.Agencias'),
    displayField: 'nome',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'nome'
            //forceSelection: true,
//    tpl: Ext.create('Ext.XTemplate',
//            '<tpl for=".">',
//            '<div class="x-boundlist-item">',
//            '<tpl if="nome">',
//            ' {numero} - {digito} <span style="float: right;">{nome}</span>',
//            '<tpl else>',
//            ' {numero} - {digito}',
//            '</tpl>',
//            '</div>',
//            '</tpl>'
//            )
            //,
//    initComponent: function() {
//        this.callParent(arguments);
//        this.store.load();
//    }
});
