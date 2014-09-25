Ext.define('Illi.controller.FluxoCaixa', {
    extend: 'Illi.controller.AbstractController',
    stores: ['FluxoCaixas'],
    models: ['Financeiro'],
    views: [
        'financeiro.fluxo_caixa.Lista'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaFluxoCaixa'
        },
        {
            ref: 'listaFluxoCaixa',
            selector: 'listaFluxoCaixa'
        }
    ],
    init: function() {
        var me = this;
        me.control(
                {
                    'listaFluxoCaixa': {
                        itemdblclick: me.editar
                    },
                    'listaFluxoCaixa button[action=incluirDespesa]': {
                        click: me.incluirDespesa
                    },
                    'listaFluxoCaixa button[action=incluirReceita]': {
                        click: me.incluirReceita
                    },
                    'listaFluxoCaixa button[action=excluir]': {
                        click: me.excluir
                    },
                    'listaFluxoCaixa button[action=atualizar]': {
                        click: me.atualizar
                    },
                    'listaFluxoCaixa button[action=imprimir]': {
                        click: me.imprimir
                    },
                    'listaFluxoCaixa button[action=listarParecer]': {
                        click: me.listarParecer
                    },
                    'listaFluxoCaixa button[action=duplicar]': {
                        click: me.duplicar
                    }
                }
        );
    },
    duplicar: function(button) {
        var grid = this.getGridIlli();
        var store = grid.getStore();
        var records = grid.getSelectionModel().getSelection()[0].getData();
        grid.tipoLancamento = records['tipo'];
        records['data_baixa'] = null;
        records['nl.descricao'] = records['nl.id'];
        records['c.nome'] = records['c.id'];
        records.id = null;
        store.insert(0, records);
        grid.editingPlugin.startEdit(0, 0);

    },
    incluirDespesa: function(btn, evt, opt) {
        var grid = this.getGridIlli();
        grid.tipoLancamento = 'DESPESA';
        var store = grid.store;
        store.insert(0, 0);

        var storeNatureza = Ext.getStore('comboNaturezasFluxo');
        storeNatureza.getProxy().extraParams = {tipo: 'DESPESA'};
        storeNatureza.load();

        grid.editingPlugin.startEdit(0, 0);
    },
    incluirReceita: function(btn, evt, opt) {
        var grid = this.getGridIlli();
        grid.tipoLancamento = 'RECEITA';
        var store = grid.store;
        store.insert(0, 0);

        var storeNatureza = Ext.getStore('comboNaturezasFluxo');
        storeNatureza.getProxy().extraParams = {tipo: 'RECEITA'};
        storeNatureza.load();

        grid.editingPlugin.startEdit(0, 0);
    },
    listarParecer: function(btn, evt, opt) {
        var grid = this.getGridIlli(),
                records = grid.getSelectionModel().getSelection();
        Ext.create('Illi.view.financeiro.parecer.Janela', {
            id_fluxo: records[0].data.id,
            id_pessoa: records[0].data['p.id'],
            nome: (records[0].data['p.nome'] ? records[0].data['p.nome'] : '')
        }).show();
    }
});