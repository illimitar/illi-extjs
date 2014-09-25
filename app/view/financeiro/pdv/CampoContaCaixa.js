Ext.define('Illi.view.financeiro.pdv.CampoContaCaixa', {
    extend: 'Illi.view.banco.conta.ComboUsuario',
    alias: 'widget.campoContaCaixa',
    itemId: 'pdvContaCaixa',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            cls: 'destaque',
            //
            allowBlank: false,
            forceSelection: true,
            triggerAction: false,
            trigger2Cls: false,
            autoLoad: false,
            onTrigger2Click: 'trigger-add'
        });
        me.callParent(arguments);
    }
});
