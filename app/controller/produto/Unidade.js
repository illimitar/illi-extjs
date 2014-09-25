Ext.define('Illi.controller.produto.Unidade', {
    extend: 'Illi.controller.AbstractController',
    stores: ['produto.Unidades'],
    models: ['produto.Unidade'],
    views: ['produto.unidade.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaUnidade'
        },
        {
            ref: 'listaUnidade',
            selector: 'listaUnidade'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaUnidade': {
                itemdblclick: me.editar
            },
            'listaUnidade button[action=incluir]': {
                click: me.incluir
            },
            'listaUnidade button[action=duplicar]': {
                click: me.duplicar
            },
            'listaUnidade button[action=excluir]': {
                click: me.excluir
            },
            'listaUnidade button[action=atualizar]': {
                click: me.atualizar
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getListaUnidade();
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