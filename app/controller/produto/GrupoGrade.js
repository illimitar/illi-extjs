Ext.define('Illi.controller.produto.GrupoGrade', {
    extend: 'Illi.controller.AbstractController',
    stores: ['produto.GrupoGrades'],
    models: ['produto.GrupoGrade'],
    views: ['produto.grupo.Lista'],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaGrupoGrade'
        },
        {
            ref: 'listaGrupoGrade',
            selector: 'listaGrupoGrade'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaGrupoGrade': {
                itemdblclick: me.editar
            },
            'listaGrupoGrade button[action=incluir]': {
                click: me.incluir
            },
            'listaGrupoGrade button[action=duplicar]': {
                click: me.duplicar
            },
            'listaGrupoGrade button[action=excluir]': {
                click: me.excluir
            },
            'listaGrupoGrade button[action=atualizar]': {
                click: me.atualizar
            },
            'listaGrupoGrade button[action=adicionarGrade]': {
                click: me.adicionarGrade
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getListaGrupoGrade();
        var store = grid.getStore();
        if (grid.getSelectionModel().getSelection()[0] !== undefined) {
            var records = grid.getSelectionModel().getSelection()[0].getData();
            records.id = null;
            store.insert(0, records);
            grid.editingPlugin.startEdit(0, 0);
        } else {
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
        }
    },
    adicionarGrade: function(button) {
        var grid = this.getListaGrupoGrade();
//        Illi.app.getController('produto.Grade');
        var grupoGrade = grid.getSelectionModel().getSelection()[0];
        var janela = Ext.create('Ext.panel.Panel', {
            itemId: 'janelaListaGrade',
            title: 'Adicionar Grade',
            autoShow: true,
            closable: true,
            shadow: 'frame',
            shadowOffset: 30,
            width: '80%',
            height: '50%',
            border: 10,
            style: {
                borderColor: '#C0C0C0',
                borderStyle: 'solid'
            },
            floating: true,
            constrain: true,
            layout: 'card',
            modal: true,
            items: [
                Ext.widget('listaGrade', {
                    border: false,
                    ocultaFiltro: true,
                    id_grupo_grade: grupoGrade.get('id')
                })
            ]
        });

    }
});
