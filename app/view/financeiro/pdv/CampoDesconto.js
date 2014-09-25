Ext.define('Illi.view.financeiro.pdv.CampoDesconto', {
    extend: 'Ext.form.field.Number',
    alias: 'widget.campoDesconto',
    itemId: 'pdvDesconto', // manter
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
            mouseWheelEnabled: false,
            //
            plugins: 'textmask',
            mask: 'R$ #9.999.990,00',
            money: true
        });
        me.callParent(arguments);
    }
});
