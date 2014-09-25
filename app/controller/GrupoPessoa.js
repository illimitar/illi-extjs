Ext.define('Illi.controller.GrupoPessoa', {
    extend: 'Illi.controller.AbstractController',
    stores: ['GrupoPessoas'],
    models: ['GrupoPessoa'],
    views: [
        'pessoa.grupo_pessoa.ListaGrupoPessoa',
        'pessoa.grupo_pessoa.ListaPessoaGrupo',
        'pessoa.grupo_pessoa.FormPessoaGrupo'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaGrupoPessoa'
        },
        {
            ref: 'listaGrupoPessoa',
            selector: 'listaGrupoPessoa'
        },
        {
            ref: 'formPessoaGrupo',
            selector: 'formPessoaGrupo'
        },
        {
            ref: 'listaPessoaGrupo',
            selector: 'listaPessoaGrupo'
        }

    ],
    init: function() {

        var me = this;
        me.control({
            'listaGrupoPessoa button[action=incluir]': {
                click: me.incluir
            },
            'listaGrupoPessoa button[action=atualizar]': {
                click: me.atualizar
            },
            'listaGrupoPessoa button[action=imprimir]': {
                click: me.imprimir
            },
            'listaGrupoPessoa button[action=pessoasGrupo]': {
                click: me.pessoasGrupo
            },
            'listaPessoaGrupo button[action=atualizar]': {
                click: me.atualizarPessoaGrupo
            },
            'listaPessoaGrupo button[action=incluir]': {
                click: me.incluirPessoaGrupo
            }

        });
    },
    incluirPessoaGrupo: function(btn, evt, opt) {
        var grid = this.getListaPessoaGrupo();
        var store = grid.store;
        var win = btn.up('window');
        var record = grid.getSelectionModel().getSelection();
        var financeiro = Ext.create('Illi.model.Financeiro');
        financeiro.set('gp.id', win.idGrupo);
        financeiro.set('gp.grupo', 'adicionar');
        store.insert(0, financeiro);
        grid.editingPlugin.startEdit(0, 0);

    },
    atualizarPessoaGrupo: function() {
        this.getListaPessoaGrupo().store.load();
    },
    pessoasGrupo: function() {
        var grid = this.getListaGrupoPessoa();
        var record = grid.getSelectionModel().getSelection();
        var adParceiro = Ext.create('Illi.view.pessoa.grupo_pessoa.FormPessoaGrupo', {
            idGrupo: record[0].data.id
        });
        adParceiro.show();
    },
    atualizar: function() {
        this.getListaGrupoPessoa().store.load();
    },
    incluir: function(btn, evt, opt) {
        var grid = this.getListaGrupoPessoa();
        var store = grid.store;
        store.insert(0, store.model);
        grid.editingPlugin.startEdit(0, 0);

    }




});