Ext.define('Illi.controller.produto.TipoCodigoBarra', {
    extend: 'Illi.controller.AbstractController',
    stores: ['produto.TipoCodigoBarras'],
    models: ['produto.TipoCodigoBarra'],
    views: ['produto.tipo_codigobarra.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaTipoCodigoBarra'
        },
        {
            ref: 'listaTipoCodigoBarra',
            selector: 'listaTipoCodigoBarra'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaTipoCodigoBarra': {
                itemdblclick: me.editar
            },
            'listaTipoCodigoBarra button[action=incluir]': {
                click: me.incluir
            },
            'listaTipoCodigoBarra button[action=duplicar]': {
                click: me.duplicar
            },
            'listaTipoCodigoBarra button[action=excluir]': {
                click: me.excluir
            },
            'listaTipoCodigoBarra button[action=atualizar]': {
                click: me.atualizar
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getListaTipoCodigoBarra();
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