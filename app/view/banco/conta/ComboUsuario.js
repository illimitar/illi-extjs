Ext.define('Illi.view.banco.conta.ComboUsuario', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.comboUsuarioConta',
    name: 'id_conta',
    displayField: 'nome',
    selectOnTab: true,
    valueField: 'id',
    queryMode: 'remote',
    minChars: 0,
    lazyRender: true,
    queryParam: 'nome',
    operadorExclusivo: false,
    typeAhead: true,
    listClass: 'x-combo-list-small',
    triggerAction: 'all',
    forceSelection: true,
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">',
            '<tpl if="nome">',
            '{nome} <span style="float: right;"> {numero} - {digito}</span> ',
            '<tpl else>',
            '{numero} - {digito} ',
            '</tpl>',
            '</div>',
            '</tpl>'
            ),
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.Contas')
        });
        me.store.getProxy().extraParams = {
            byUser: true
        };
        me.callParent(arguments);
        me.store.load();
    }

});
