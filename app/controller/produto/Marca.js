Ext.define('Illi.controller.produto.Marca', {
    extend: 'Illi.controller.AbstractController',
    stores: ['produto.Marcas'],
    models: ['produto.Marca'],
    views: ['produto.marca.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaMarca'
        },
        {
            ref: 'listaMarca',
            selector: 'listaMarca'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaMarca': {
                itemdblclick: me.editar
            },
            'listaMarca button[action=incluir]': {
                click: me.incluir
            },
            'listaMarca button[action=duplicar]': {
                click: me.duplicar
            },
            'listaMarca button[action=excluir]': {
                click: me.excluir
            },
            'listaMarca button[action=atualizar]': {
                click: me.atualizar
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getListaMarca();
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