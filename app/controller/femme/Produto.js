Ext.define('Illi.controller.femme.Produto', {
    extend: 'Illi.controller.AbstractController',
    stores: ['femme.Produtos'],
    models: ['femme.Produto'],
    views: [
        'femme.produto.Lista'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaProdutoFemme'
        },
        {
            ref: 'ListaProduto',
            selector: 'listaProdutoFemme'
        }
    ],
    init: function() {
        var me = this;
        me.control(
                {
                    'listaProdutoFemme': {
                        itemdblclick: me.editar
                    },
                    'listaProdutoFemme button[action=incluir]': {
                        click: me.incluir
                    },
                    'listaProdutoFemme button[action=duplicar]': {
                        click: me.duplicar
                    },
                    'listaProdutoFemme button[action=excluir]': {
                        click: me.excluir
                    },
                    'listaProdutoFemme button[action=atualizar]': {
                        click: me.atualizar
                    },
                    'listaProdutoFemme button[action=imprimir]': {
                        click: me.imprimir
                    }

                }
        );
    },
    duplicar: function(button) {
        var grid = this.getListaProduto();
        var store = grid.getStore();
        var records = grid.getSelectionModel().getSelection()[0].getData();
        records.id = null;
        records.ativo = 'S';
        store.insert(0, records);
        grid.editingPlugin.startEdit(0, 0);
    }
});