Ext.define('Illi.view.financeiro.pdv.CampoPagamentoValor', {
    extend: 'Ext.form.field.Number',
    alias: 'widget.campoPagamentoValor',
    itemId: 'pdvPagamentoValor', // manter
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque semborda right',
            //
            hideTrigger: true,
            keyNavEnabled: false,
            mouseWheelEnabled: false,
            minValue: 0,
            negativeText: 'Informe um valor maior que 0!'
            //
//            plugins: 'textmask',
//            mask: 'R$ #9.999.990,00',
//            money: true
        });
        me.callParent(arguments);
    }
});
