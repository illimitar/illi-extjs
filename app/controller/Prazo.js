//Ext.define('Illi.controller.Prazo', {
//    extend: 'Illi.controller.AbstractController',
//    stores: ['Moedas'],
//    models: ['Moeda'],
//    views: ['financeiro.moeda.Lista'],
//    refs: [
//        {
//            ref: 'gridIlli',
//            selector: 'listaMoeda'
//        },
//        {
//            ref: 'listaMoeda',
//            selector: 'listaMoeda'
//        }
//    ],
//    init: function() {
//        var me = this;
//        me.control({
//            'listaMoeda': {
//                itemdblclick: me.editar
//            },
//            'listaMoeda button[action=incluir]': {
//                click: me.incluir
//            },
//            'listaMoeda button[action=excluir]': {
//                click: me.excluir
//            },
//            'listaMoeda button[action=atualizar]': {
//                click: me.atualizar
//            }
//        });
//    }
//});
Ext.define('Illi.controller.Prazo', {
    extend: 'Illi.controller.AbstractController',
    stores: ['Prazos'],
    models: ['Prazo'],
    views: ['financeiro.prazo.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaPrazo'
        },
        {
            ref: 'listaPrazo',
            selector: 'listaPrazo'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaPrazo': {
                itemdblclick: me.editar
            },
            'listaPrazo button[action=incluir]': {
                click: me.incluir
            },
            'listaPrazo button[action=duplicar]': {
                click: me.duplicar
            },
            'listaPrazo button[action=excluir]': {
                click: me.excluir
            },
            'listaPrazo button[action=atualizar]': {
                click: me.atualizar
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getListaPrazo();
        var store = grid.getStore();
        if (grid.getSelectionModel().getSelection()[0] !== undefined) {
            var records = grid.getSelectionModel().getSelection()[0].getData();
            records.parcelas = null;
            records.id = null;
            store.insert(0, records);
            grid.editingPlugin.startEdit(0, 0);
        } else {
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
        }
    }
});