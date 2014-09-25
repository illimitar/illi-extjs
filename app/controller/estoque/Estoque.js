Ext.define('Illi.controller.estoque.Estoque', {
    extend: 'Illi.controller.AbstractController',
    stores: ['estoque.Estoques'],
    models: ['estoque.Estoque'],
    views: ['estoque.estoque.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaEstoque'
        },
        {
            ref: 'listaEstoque',
            selector: 'listaEstoque'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaEstoque': {
                itemdblclick: me.editar
            },
            'listaEstoque button[action=incluir]': {
                click: me.incluir
            },
            'listaEstoque button[action=duplicar]': {
                click: me.duplicar
            },
            'listaEstoque button[action=excluir]': {
                click: me.excluir
            },
            'listaEstoque button[action=atualizar]': {
                click: me.atualizar
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getListaEstoque();
        var store = grid.getStore();
        if (grid.getSelectionModel().getSelection()[0] !== undefined) {
            var records = grid.getSelectionModel().getSelection()[0].getData();
            records.id = null;
            store.insert(0, records);
            grid.editingPlugin.startEdit(0, 0);
        } else {
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
        }
    }
});