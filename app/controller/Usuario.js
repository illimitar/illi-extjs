Ext.define('Illi.controller.Usuario', {
    extend: 'Illi.controller.AbstractController',
    stores: ['Usuarios'],
    models: ['Usuario'],
    views: [
        'usuario.Lista',
        'usuario.Janela',
        'usuario.configuracao.Janela'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaUsuario'
        },
        {
            ref: 'listaUsuario',
            selector: 'listaUsuario'
        },
        {
            ref: 'usuarioGrupoUsuarioJanela',
            selector: 'usuarioGrupoUsuarioJanela'
        },
        {
            ref: 'janelaUsuario',
            selector: 'janelaUsuario'
        },
        {
            ref: 'janelaConfiguracaoUsuario',
            selector: 'janelaConfiguracaoUsuario'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaUsuario': {
                itemdblclick: me.editar
            },
            'listaUsuario button[action=incluir]': {
                click: me.incluir
            },
            'listaUsuario button[action=duplicar]': {
                click: me.duplicar
            },
            'listaUsuario button[action=excluir]': {
                click: me.excluir
            },
            'listaUsuario button[action=atualizar]': {
                click: me.atualizar
            },
            'listaUsuario button[action=associar]': {
                click: me.associar
            },
            'listaUsuario button[action=configurar]': {
                click: me.configurar
            },
            'janelaUsuario button[action=salvar]': {
                click: me.salvar
            },
            'janelaUsuario button[action=redefinir]': {
                click: me.redefinir
            },
            'janelaUsuario button[action=gravatar]': {
                click: me.gravatar
            },
            'janelaUsuario button[action=dispositivo]': {
                click: me.dispositivo
            },
            'janelaConfiguracaoUsuario': {
                render: me.carregarConfiguracao
            },
            'janelaConfiguracaoUsuario button[action=salvar]': {
                click: me.salvarConfiguracao
            },
            'janelaConfiguracaoUsuario button[action=gerar]': {
                click: me.gerarConfiguracao
            }
        });
    },
    duplicar: function(button) {
        var grid = this.getGridIlli();
        var store = grid.getStore();
        var records = grid.getSelectionModel().getSelection()[0].getData();
        records['login'] = null;
        records['senha'] = null;
        records['usuario_id'] = records['id'];
        records['p.nome'] = (records['p.id'] ? records['p.id'] : null);
        records.id = null;
        store.insert(0, records);
        grid.editingPlugin.startEdit(0, 0);

    },
    dispositivo: function() {
        Ext.create('Illi.view.dispositivo.Janela').show();
    },
    gravatar: function() {
        window.open("http://curte.eu/gravatar", true);
    },
    associar: function(btn, evt, opt) {
        var grid = btn.up('grid');
        var records = grid.getSelectionModel().getSelection();
//        Illi.app.getController('UsuarioGrupoUsuario');
        Ext.create('Illi.view.usuario.usuario_grupo_usuario.Janela', {
            id_usuario: records[0].data.id,
            title: 'Associação de Entidade / Grupo Usuário com Usuário: ' + records[0].data.nome
        }).show();
    },
    gerarConfiguracao: function() {
        Ext.MessageBox.wait('Carregando...', 'Aguarde!');
        var formConfiguracaoUsuario = this.getJanelaConfiguracaoUsuario().down('#formConfiguracaoUsuario');
        var number = "";
        for (x = 0; x <= 6; x++) {
            number += "" + Math.floor((Math.random() * 9));
        }
        formConfiguracaoUsuario.down("#pdv_pin_fiscal").setValue(number);
        Ext.MessageBox.hide();
    },
    configurar: function(btn, evt, opt) {
        var grid = btn.up('grid');
        var records = grid.getSelectionModel().getSelection();
//        Illi.app.getController('UsuarioGrupoUsuario');
        Ext.create('Illi.view.usuario.configuracao.Janela', {
            id_usuario: records[0].data.id,
            title: 'Configuração do Usuário: ' + records[0].data.nome
        }).show();
    },
    carregarConfiguracao: function() {
        Ext.MessageBox.wait('Carregando...', 'Aguarde!');
        var formConfiguracaoUsuario = this.getJanelaConfiguracaoUsuario().down('#formConfiguracaoUsuario');
        formConfiguracaoUsuario.getForm().load({
            url: '../usuario/usuario/ijson/carregar_configuracao',
            params: {
                'id_usuario': this.getJanelaConfiguracaoUsuario().id_usuario
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
        var janelaConfiguracaoUsuario = this.getJanelaConfiguracaoUsuario();
        var formConfiguracaoUsuario = janelaConfiguracaoUsuario.down('#formConfiguracaoUsuario');
        var listaUsuario = this.getListaUsuario();
        var fields = {};
        formConfiguracaoUsuario.getForm().getFields().each(function(field) {
            fields[field.getName()] = Ext.JSON.encode(field.getValue());
        });
        fields.id_usuario = janelaConfiguracaoUsuario.id_usuario;
        Ext.Ajax.request({
            url: '../usuario/usuario/ijson/alterar_configuracao',
            async: true,
            params: fields, //formConfiguracaoUsuario.getForm().getFieldValues(),
            success: function(response) {
                var retorno = Ext.JSON.decode(response.responseText);
                if (retorno.situacao) {
                    listaUsuario.store.load();
                    janelaConfiguracaoUsuario.close();
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
    },
    redefinir: function(btn, evt, opt) {
        Ext.MessageBox.wait('Redefinindo Configurações', 'Aguarde...');
        Ext.Ajax.request({
            url: '../usuario/usuario/iJson/redefinir_configuracao',
            params: {},
            failure: function() {
                Illi.app.Util.mensagemFalha();
            },
            success: function(response) {
                var retorno = false;
                try {
                    retorno = Ext.JSON.decode(response.responseText);
                    Ext.MessageBox.hide();
                } catch (e) {
                    error(e);
                    txt = " Ocorreu Um erro!</br>";
                    txt += " Tente Novamente se o Problema Pesistir entre em contato com o Suporte!.</br>";
                    txt += " Descrição do Erro: " + e.message + "</br>";
                    Ext.MessageBox.show({
                        title: 'Aviso Importante',
                        msg: txt,
                        autoScroll: true,
                        icon: Ext.MessageBox.ERROR,
                        buttons: Ext.MessageBox.OK
                    });
                    retorno = false;
                }
                if (retorno) {
                    if (retorno.success) {
                        Ext.MessageBox.show({
                            title: 'Aviso Importante',
                            msg: retorno.message + '</br>Sua sessão será reiniciada para completar a operação!',
                            buttons: Ext.MessageBox.OK,
                            fn: function() {
                                Ext.Ajax.request({
                                    url: '../illi/redefinir_sessao/',
                                    success: function(response) {
                                        closepage = true;
                                        window.location.reload(true);
                                    }
                                });
                            }
                        });
                    } else {
                        Ext.ux.Msg.flash({
                            type: 'error',
                            msg: retorno.message
                        });
                    }
                }
            }
        });
    },
    salvar: function(btn, evt, opt) {
        var janela = this.getJanelaUsuario();
        var form = janela.down('form').getForm();
        var validou = form.isValid();
        if (validou) {
            var formulario = form.getFieldValues();
            var jsonForm = Ext.JSON.encode(formulario);
            Ext.MessageBox.wait('Salvando', 'Aguarde...');
            Ext.Ajax.request({
                url: '../usuario/usuario/iJson/perfil',
                params: {
                    data: jsonForm
                },
                failure: function() {
                    Illi.app.Util.mensagemFalha();
                },
                success: function(response) {
                    var retorno = false;
                    try {
                        retorno = Ext.JSON.decode(response.responseText);
                        Ext.MessageBox.hide();
                    } catch (e) {
                        error(e);
                        txt = " Ocorreu Um erro!</br>";
                        txt += " Tente Novamente se o Problema Pesistir entre em contato com o Suporte!.</br>";
                        txt += " Descrição do Erro: " + e.message + "</br>";
                        Ext.MessageBox.show({
                            title: 'Aviso Importante',
                            msg: txt,
                            autoScroll: true,
                            icon: Ext.MessageBox.ERROR,
                            buttons: Ext.MessageBox.OK
                        });
                        retorno = false;
                    }
                    if (retorno) {
                        if (retorno.success) {
                            janela.close();
                            Ext.MessageBox.show({
                                title: 'Aviso Importante',
                                msg: retorno.message + '</br>Sua sessão será reiniciada para completar a operação!',
                                buttons: Ext.MessageBox.OK,
                                fn: function() {
                                    Ext.Ajax.request({
                                        url: '../illi/redefinir_sessao/',
                                        success: function(response) {
                                            closepage = true;
                                            window.location.reload(true);
                                        }
                                    });
                                }
                            });
                        } else {
                            Ext.ux.Msg.flash({
                                type: 'error',
                                msg: retorno.message
                            });
                        }
                    }
                }
            });
        } else {
            Ext.MessageBox.show({
                title: 'Aviso Importante',
                msg: 'Alguns campos não estão preenchidos corretamente!',
                buttons: Ext.MessageBox.OK
            });
        }
    }
});
