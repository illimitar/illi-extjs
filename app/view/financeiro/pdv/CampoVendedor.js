Ext.define('Illi.view.financeiro.pdv.CampoVendedor', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.campoVendedor',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque',
            //
            hideTrigger: true,
            keyNavEnabled: false,
            mouseWheelEnabled: false
        });
        me.callParent(arguments);
    }
});