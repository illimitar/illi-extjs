Ext.require('Ext.window.MessageBox');
Ext.define('Illi.controller.AbsRelatorio', {
    extend: 'Illi.controller.AbstractController',
    modulo: 'relatorio',
    views: [
        'relatorio.APagar',
        'relatorio.AReceber'
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