Ext.define('Illi.view.financeiro.parecer.Cabecalho', {
    extend: 'Ext.view.View',
    requires: ['Illi.view.pessoa.contato.ListaContato', 'Illi.store.Contatos'],
    alias: 'widget.parecerCabecalho',
    border: false,
    autoShow: true,
    emptyText: "Nenhum registro Encontrado",
    store: Ext.create('Illi.store.Contatos'),
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            cls: 'filtro',
            padding: 10,
            itemSelector: 'agent-list-item',
            tpl: '<tpl for="."><div><b>{tipo}</b>  {valor} - {contato}</tpl>'
        }
        );

        me.callParent(arguments);
        var idPessoa = Illi.app.Local.get('idPessoa');
        me.store.getProxy().extraParams = {
            id_pessoa: idPessoa
        };
        me.store.load();
    },
    onRender: function() {
        this.callParent(arguments);
    },
    listeners: {
        afterrender: function(me) {

        }
    }

});