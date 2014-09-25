Ext.define('Illi.controller.produto.Grupo', {
    extend: 'Illi.controller.AbstractController',
    stores: ['produto.Grupos'],
    models: ['produto.Grupo'],
    views: ['produto.grupo.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaGrupo'
        },
        {
            ref: 'listaGrupo',
            selector: 'listaGrupo'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaGrupo': {
                itemdblclick: me.editar
            },
            'listaGrupo button[action=incluir]': {
                click: me.incluir
            },
            'listaGrupo button[action=duplicar]': {
                click: me.duplicar
            },
            'listaGrupo button[action=excluir]': {
                click: me.excluir
            },
            'listaGrupo button[action=atualizar]': {
                click: me.atualizar
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getListaGrupo();
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