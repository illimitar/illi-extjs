Ext.define('Illi.view.financeiro.pdv.CampoDocumento', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.campoDocumento',
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