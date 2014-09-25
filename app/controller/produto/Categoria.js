Ext.define('Illi.controller.produto.Categoria', {
    extend: 'Illi.controller.AbstractController',
    stores: ['produto.Categorias'],
    models: ['produto.Categoria'],
    views: ['produto.categoria.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaCategoria'
        },
        {
            ref: 'listaCategoria',
            selector: 'listaCategoria'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaCategoria': {
                itemdblclick: me.editar
            },
            'listaCategoria button[action=incluir]': {
                click: me.incluir
            },
            'listaCategoria button[action=duplicar]': {
                click: me.duplicar
            },
            'listaCategoria button[action=excluir]': {
                click: me.excluir
            },
            'listaCategoria button[action=atualizar]': {
                click: me.atualizar
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getListaCategoria();
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