Ext.define('Illi.view.financeiro.pdv.CampoAutenticador', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.campoAutenticador',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque right',
            //
            inputType: 'password',
            hideTrigger: true,
            keyNavEnabled: false,
            mouseWheelEnabled: false
        });
        me.callParent(arguments);
    }
});
