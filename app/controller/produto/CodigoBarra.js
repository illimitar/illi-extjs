Ext.define('Illi.controller.produto.CodigoBarra', {
    extend: 'Illi.controller.AbstractController',
    stores: ['produto.CodigoBarras'],
    models: ['produto.CodigoBarra'],
    views: ['produto.codigo_barra.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaCodigoBarra'
        },
        {
            ref: 'listaCodigoBarra',
            selector: 'listaCodigoBarra'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaCodigoBarra': {
                itemdblclick: me.editar
            },
            'listaCodigoBarra button[action=incluir]': {
                click: me.incluir
            },
            'listaCodigoBarra button[action=duplicar]': {
                click: me.duplicar
            },
            'listaCodigoBarra button[action=excluir]': {
                click: me.excluir
            },
            'listaCodigoBarra button[action=atualizar]': {
                click: me.atualizar
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getListaCodigoBarra();
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