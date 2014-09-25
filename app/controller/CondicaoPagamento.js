Ext.define('Illi.controller.CondicaoPagamento', {
    extend: 'Illi.controller.AbstractController',
    stores: ['CondicaoPagamentos'],
    models: ['Prazo'],
    views: ['financeiro.condicao_pagamento.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaCondicaoPagamento'
        },
        {
            ref: 'listaCondicaoPagamento',
            selector: 'listaCondicaoPagamento'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaCondicaoPagamento': {
                itemdblclick: me.editar
            },
            'listaCondicaoPagamento button[action=incluir]': {
                click: me.incluir
            },
            'listaCondicaoPagamento button[action=duplicar]': {
                click: me.duplicar
            },
            'listaCondicaoPagamento button[action=excluir]': {
                click: me.excluir
            },
            'listaCondicaoPagamento button[action=atualizar]': {
                click: me.atualizar
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getListaCondicaoPagamento();
        var store = grid.getStore();
        if (grid.getSelectionModel().getSelection()[0] !== undefined) {
            var records = grid.getSelectionModel().getSelection()[0].getData();
            records.parcelas = null;
            records.id = null;
            store.insert(0, records);
            grid.editingPlugin.startEdit(0, 0);
        } else {
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
        }
    }
});