Ext.define('Illi.view.financeiro.pdv.CampoProdutoCodigo', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.campoProdutoCodigo',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            border: false,
            cls: 'destaque right',
            hideTrigger: true,
            keyNavEnabled: false,
            mouseWheelEnabled: false
        });
        me.callParent(arguments);
    }
});
