Ext.require('Ext.window.MessageBox');
Ext.define('Illi.controller.relatorio.pdv.AbsRelatorio', {
    extend: 'Illi.controller.AbstractController',
    modulo: 'relatorio',
    views: [
        'relatorio.pdv.ListaCaixaRelatorio'
    ],
    constructor: function() {
        var me = this;
        me.callParent(arguments);
    },
    init: function() {
        var me = this;
        me.control(me.listeners);
    }
});
