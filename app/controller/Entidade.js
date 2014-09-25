Ext.define('Illi.controller.Entidade', {
    extend: 'Illi.controller.AbstractController',
    stores: ['Entidades'],
    models: ['Entidade'],
    views: [
        'usuario.entidade.Lista',
        'usuario.entidade.ArvoreEntidadeGrupoUsuario',
        'usuario.entidade.configuracao.Janela'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaEntidade'
        },
        {
            ref: 'listaEntidade',
            selector: 'listaEntidade'
        },
        {
            ref: 'arvoreEntidadeGrupoUsuario',
            selector: 'arvoreEntidadeGrupoUsuario'
        },
        {
            ref: 'janelaConfiguracaoEntidade',
            selector: 'janelaConfiguracaoEntidade'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaEntidade': {
                itemdblclick: me.editar
            },
            'listaEntidade button[action=incluir]': {
                click: me.incluir
            },
            'listaEntidade button[action=excluir]': {
                click: me.excluir
            },
            'listaEntidade button[action=associar]': {
                click: me.associar
            },
            'listaEntidade button[action=configurar]': {
                click: me.configurar
            },
            'listaEntidade button[action=atualizar]': {
                click: me.atualizar
            },
            'arvoreEntidadeGrupoUsuario button[action=salvar]': {
                click: me.salvar
            },
            'janelaConfiguracaoEntidade': {
                render: me.carregarConfiguracao
            },
            'janelaConfiguracaoEntidade button[action=salvar]': {
                click: me.salvarConfiguracao
            }
        });
    },
    associar: function(btn, evt, opt) {
        var grid = btn.up('grid');
        var records = grid.getSelectionModel().getSelection();
        Ext.create('Illi.view.usuario.entidade.JanelaEntidadeGrupoUsuario', {
            id_entidade: records[0].data.id,
            title: 'Associação de Usuário / Grupo Usuário com Entidade: ' + records[0].data.nome
        }).show();
    },
    salvar: function(btn) {
        var tree = btn.up('treepanel');
        var window = btn.up('window');
        var records = tree.getView().getChecked();
        var records_array = [];
        Ext.Array.each(records, function(rec) {
            records_array.push({
                id_usuario: rec.raw.id_usuario,
                id_grupo_usuario: rec.raw.id_grupo_usuario
            });
        });
        var records_json = Ext.JSON.encode(records_array);
        Ext.MessageBox.wait('Aguarde, salvando...', window.title);
        Ext.Ajax.request({
            url: '../usuario/entidade/iJson/salvar_arvore',
            params: {
                data: records_json,
                id_entidade: tree.id_entidade
            },
            success: function(response) {
                Ext.MessageBox.hide();
                if (response.responseText !== undefined) {
                    var response = Ext.JSON.decode(response.responseText);
                    if (response.success) {
                        window.close();
                        Ext.ux.Msg.flash({
                            type: 'success',
                            msg: response.message
                        });
                        return true;
                    }
                    var action = response.message;
                }
                Ext.Msg.show({
                    title: window.title,
                    msg: "Problemas!<br /><i>" + action + "</i>",
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR,
                    scope: this
                });
            },
            failure: function() {
                Illi.app.Util.mensagemFalha();
            }
        });
    },
    configurar: function(btn, evt, opt) {
        var grid = btn.up('grid');
        var records = grid.getSelectionModel().getSelection();
        Ext.MessageBox.wait('Carregando...', 'Aguarde!');
        Ext.create('Illi.view.usuario.entidade.configuracao.Janela', {
            id_entidade: records[0].data.id,
            title: 'Configuração da Entidade: ' + records[0].data.nome
        }).show(null, function() {
            Ext.MessageBox.wait('Carregando...', 'Aguarde!');
        });
    },
    carregarConfiguracao: function() {
        Ext.MessageBox.wait('Carregando...', 'Aguarde!');
        var formConfiguracao = this.getJanelaConfiguracaoEntidade().down('#formConfiguracao');
        formConfiguracao.getForm().load({
            url: '../usuario/entidade/ijson/carregar_configuracao',
            params: {
                'id_entidade': this.getJanelaConfiguracaoEntidade().id_entidade
            },
            failure: function(form, action) {
                Ext.Msg.alert("Load failed", action.result.errorMessage);
            },
            success: function(data) {
                Ext.MessageBox.hide();
            }
        });
    },
    salvarConfiguracao: function(button) {
        var janelaConfiguracaoEntidade = this.getJanelaConfiguracaoEntidade();
        var formConfiguracao = janelaConfiguracaoEntidade.down('#formConfiguracao');
        var listaEntidade = this.getListaEntidade();
        var fields = {};
        formConfiguracao.getForm().getFields().each(function(field) {
            fields[field.getName()] = Ext.JSON.encode(field.getValue());
        });
        fields.id_entidade = janelaConfiguracaoEntidade.id_entidade;
        Ext.Ajax.request({
            url: '../usuario/entidade/ijson/alterar_configuracao',
            async: true,
            params: fields, //formConfiguracao.getForm().getFieldValues(),
            success: function(response) {
                var retorno = Ext.JSON.decode(response.responseText);
                if (retorno.situacao) {
                    listaEntidade.store.load();
                    janelaConfiguracaoEntidade.close();
                    Ext.ux.Msg.flash({
                        msg: retorno.msg,
                        type: 'success'
                    });
                } else {
                    Ext.Msg.show({
                        title: 'Alerta',
                        msg: retorno.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                }
            }
        });
    }
});