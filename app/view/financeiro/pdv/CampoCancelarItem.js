Ext.define('Illi.view.financeiro.pdv.CampoCancelarItem', {
    extend: 'Ext.form.field.Number',
    alias: 'widget.campoCancelarItem',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque right',
            //
            allowDecimals: false,
            //
            hideTrigger: true,
            keyNavEnabled: false,
            mouseWheelEnabled: false
        });
        me.callParent(arguments);
    }
});
