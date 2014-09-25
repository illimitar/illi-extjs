Ext.define('Illi.controller.produto.Grade', {
    extend: 'Illi.controller.AbstractController',
    stores: ['produto.Grades'],
    models: ['produto.Grade'],
    views: ['produto.grade.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaGrade'
        },
        {
            ref: 'listaGrade',
            selector: 'listaGrade'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaGrade': {
                itemdblclick: me.editar
            },
            'listaGrade button[action=incluir]': {
                click: me.incluir
            },
            'listaGrade button[action=duplicar]': {
                click: me.duplicar
            },
            'listaGrade button[action=excluir]': {
                click: me.excluir
            },
            'listaGrade button[action=atualizar]': {
                click: me.atualizar
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getListaGrade();
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
