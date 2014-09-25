Ext.define('Illi.view.financeiro.pdv.CampoCliente', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.campoCliente',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque',
            emptyText: 'Pesquisar ou Cadastrar',
            hideTrigger: true,
            keyNavEnabled: false,
            mouseWheelEnabled: false
        });
        me.callParent(arguments);
    }
});
