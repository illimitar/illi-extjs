Ext.define('Illi.controller.estoque.Local', {
    extend: 'Illi.controller.AbstractController',
    stores: ['estoque.Locais'],
    models: ['estoque.Local'],
    views: ['estoque.local.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaLocalEstoque'
        },
        {
            ref: 'listaLocalEstoque',
            selector: 'listaLocalEstoque'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaLocalEstoque': {
                itemdblclick: me.editar
            },
            'listaLocalEstoque button[action=incluir]': {
                click: me.incluir
            },
            'listaLocalEstoque button[action=duplicar]': {
                click: me.duplicar
            },
            'listaLocalEstoque button[action=excluir]': {
                click: me.excluir
            },
            'listaLocalEstoque button[action=atualizar]': {
                click: me.atualizar
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getListaLocalEstoque();
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