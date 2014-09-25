Ext.define('Illi.view.financeiro.pdv.PainelInferior', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.painelInferior',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyStyle: 'background: transparent;',
            //
            title: 'Operador: ' + Illi.app.Local.get('usuario').nome,
            items: [
                {
                    xtype: 'barraOpcoesGerais'
                }
            ]
        });
        me.callParent(arguments);
    }
});
