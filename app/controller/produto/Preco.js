Ext.define('Illi.controller.produto.Preco', {
    extend: 'Illi.controller.AbstractController',
    stores: ['produto.Precos'],
    models: ['produto.Preco'],
    views: [
        'produto.preco.Lista',
        'produto.preco_produto.Form',
        'produto.preco_produto.Janela'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaPreco'
        },
        {
            ref: 'listaPreco',
            selector: 'listaPreco'
        },
        {
            ref: 'precoProdutoForm',
            selector: 'precoProdutoForm'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaPreco': {
                itemdblclick: me.editar
            },
            'listaPreco button[action=incluir]': {
                click: me.incluir
            },
            'listaPreco button[action=duplicar]': {
                click: me.duplicar
            },
            'listaPreco button[action=excluir]': {
                click: me.excluir
            },
            'listaPreco button[action=atualizar]': {
                click: me.atualizar
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getlistaPreco();
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