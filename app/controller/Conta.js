Ext.define('Illi.controller.Conta', {
    extend: 'Illi.controller.AbstractController',
    requires: [
        'Illi.view.banco.conta.ListaExtrato',
        'Illi.controller.Extrato',
        'Illi.view.banco.conta.FormTransferencia',
        'Illi.view.banco.conta.FormAcerto'
    ],
    stores: ['Contas'],
    models: ['Conta'],
    views: [
        'banco.ListaConta',
        'banco.conta.ListaExtrato',
        'banco.conta.FormAcerto',
        'banco.conta.FormTransferencia',
        'banco.conta.FormUsuario',
        'banco.conta.ListaContaUsuario'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaConta'
        },
        {
            ref: 'listaConta',
            selector: 'listaConta'
        },
        {
            ref: 'janelaTransferencia',
            selector: 'janelaTransferencia'
        },
        {
            ref: 'janelaAcerto',
            selector: 'janelaAcerto'
        },
        {
            ref: 'janelaContaUsuario',
            selector: 'janelaContaUsuario'
        },
        {
            ref: 'listaContaUsuario',
            selector: 'listaContaUsuario'
        }

    ],
    init: function() {
        var me = this;
        me.control(
                {
                    'listaConta': {
                        itemdblclick: me.editar
                    },
                    'listaConta button[action=incluir]': {
                        click: me.incluir
                    },
                    'listaConta button[action=excluir]': {
                        click: me.excluir
                    },
                    'listaConta button[action=atualizar]': {
                        click: me.atualizar
                    },
                    'listaConta button[action=operador]': {
                        click: me.abrirOperador
                    },
                    'listaConta button[action=extrato]': {
                        click: me.extrato
                    },
                    'listaConta button[action=imprimir]': {
                        click: me.imprimir
                    },
                    'listaConta button[action=transferencia]': {
                        click: me.abrirTransferencia
                    },
                    'listaConta button[action=acertosaldo]': {
                        click: me.abrirAcerto
                    },
                    'janelaTransferencia button[action=salvar]': {
                        click: me.salvar
                    },
                    'janelaAcerto button[action=salvar]': {
                        click: me.acertoSaldo
                    },
                    'janelaContaUsuario button[action=incluir]': {
                        click: me.addUsuarioConta
                    },
                    'janelaContaUsuario button[action=excluir]': {
                        click: me.removeUsuarioConta
                    }


                }
        );
    },
    addUsuarioConta: function(btn, evt, opt) {
        var grid = this.getListaContaUsuario();
        var store = grid.store;
        var win = btn.up('window');
        var model = Ext.create('Illi.model.UsuarioConta');
        store.insert(0, model);
        grid.editingPlugin.startEdit(0, 0);
    },
    removeUsuarioConta: function(btn, evt, opt) {
        var grid = this.getListaContaUsuario();
        var usuario = grid.getSelectionModel().getSelection()[0];
        var store = grid.store;
        store.remove(usuario);
        grid.store.sync();
    },
    abrirAcerto: function(btn, evt, opt) {
        var grid = this.getListaConta();
        var conta = grid.getSelectionModel().getSelection()[0];
        if (conta) {
            var nome = (conta.get('nome') ? conta.get('nome') : conta.get('numero'));
            var janela = Ext.create('Illi.view.banco.conta.FormAcerto', {
                id_conta: conta.get('id'),
                title: 'Acerto de Saldo da Conta ' + nome,
                listeners: {
                    beforehide: function() {
                        grid.store.load();
                        grid.getSelectionModel().deselectAll();
                    }
                }
            });
            janela.show();
        }
    },
    abrirOperador: function(btn, evt, opt) {
        var grid = this.getListaConta();
        var conta = grid.getSelectionModel().getSelection()[0];
        if (conta) {
            var nome = (conta.get('nome') ? conta.get('nome') : conta.get('numero'));
            var janela = Ext.create('Illi.view.banco.conta.FormUsuario', {
                id_conta: conta.get('id'),
                title: 'Conta ' + nome,
                listeners: {
                    beforehide: function() {
                        grid.store.load();
                        grid.getSelectionModel().deselectAll();
                    }
                }
            });
            janela.show();
        }
    },
    abrirTransferencia: function(btn, evt, opt) {
        var grid = this.getListaConta();
        var janela = Ext.create('Illi.view.banco.conta.FormTransferencia', {
            listeners: {
                beforehide: function() {
                    grid.store.load();
                    grid.getSelectionModel().deselectAll();
                }
            }
        });
        janela.show();
    },
    extrato: function(btn) {
        var conta = btn.up('grid').getSelectionModel().getSelection()[0];
        if (conta) {
//            Illi.app.getController('Extrato');
            Ext.create('Ext.window.Window', {
                title: 'Extrato',
                width: '97%',
                height: '95%',
                autoShow: true,
                border: false,
                scope: this,
                modal: true,
                layout: 'fit',
                closeAction: 'destroy',
                items: {
                    xtype: 'listaExtrato',
                    id_conta: conta.get('id')
                }
            });
        }
    },
    salvar: function(btn, evt, opt) {
        var janela = this.getJanelaTransferencia();
        var form = janela.down('form').getForm();

        var validou = form.isValid();
        if (validou) {
            var formulario = form.getFieldValues();
            formulario.data_lancamento = Ext.Date.format(formulario.data_lancamento, 'Y-m-d');
            var jsonTransferencia = Ext.JSON.encode(formulario);
            if (formulario.conta_origem !== formulario.conta_destino) {
                Ext.MessageBox.wait('Salvando Aguarde', 'Aguarde...');
                Ext.Ajax.request({
                    url: '../banco/conta/iJson/transferencia',
                    params: {
                        data: jsonTransferencia
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
                            var tipo = 'error';
                            if (retorno.success) {
                                tipo = 'success';
                                janela.close();
                            }
                            Ext.ux.Msg.flash({
                                type: tipo,
                                msg: retorno.message
                            });
                        }
                    }
                });
            } else {
                Ext.MessageBox.show({
                    title: 'Aviso Importante',
                    msg: 'A conta origem não pode ser igual a conta destino!',
                    buttons: Ext.MessageBox.OK
                });
            }
        }
    },
    acertoSaldo: function(btn, evt, opt) {
        var janela = this.getJanelaAcerto();
        var form = janela.down('form').getForm();

        var validou = form.isValid();
        if (validou && janela.id_conta) {
            var formulario = form.getFieldValues();
            formulario.data_lancamento = Ext.Date.format(formulario.data_lancamento, 'Y-m-d');
            formulario.id = janela.id_conta;
            var json = Ext.JSON.encode(formulario);
            Ext.MessageBox.wait('Salvando Aguarde', 'Aguarde...');
            Ext.Ajax.request({
                url: '../banco/conta/iJson/acerto_saldo',
                params: {
                    data: json
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
                        var tipo = 'error';
                        if (retorno.success) {
                            tipo = 'success';
                            janela.close();
                        }
                        Ext.ux.Msg.flash({
                            type: tipo,
                            msg: retorno.message
                        });
                    }
                }
            });
        }
    }



});