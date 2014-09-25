Ext.define('Illi.view.AbstractForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.abstractform',
    padding: '5 5 0 5',
    bodyPadding: 10,
    border: false,
    //style: 'background-color:#fff',
    fieldDefaults: {
        anchor: '50%',
        labelAlign: 'right',
        labelWidth: "30%",
        allowBlank: false,
        combineErrors: false,
        msgTarget: 'side',
        labelClsExtra: 'texto-negrito'
    },
    defaultType: 'textfield',
    initComponent: function() {
        this.on('beforeadd', function(me, field) {
            if (!field.allowBlank)
                field.labelSeparator += '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>';
        });
        this.callParent(arguments);
    }
});