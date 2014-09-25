Ext.define('Illi.view.financeiro.pdv.CampoPagamentoTroca', {
    extend: 'Ext.form.field.Number',
    alias: 'widget.campoPagamentoTroca',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque right',
            //
            hideTrigger: true,
            keyNavEnabled: false,
            mouseWheelEnabled: false
        });
        me.callParent(arguments);
    }
});
