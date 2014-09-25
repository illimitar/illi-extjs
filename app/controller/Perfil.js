Ext.define('Illi.controller.Perfil', {
    extend: 'Illi.controller.AbstractController',
    stores: ['Usuarios'],
    models: ['Usuario'],
    views: [
        'usuario.Janela'
    ],
    refs: [
        {
            ref: 'janelaUsuario',
            selector: 'janelaUsuario'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'janelaUsuario button[action=salvar]': {
                click: me.salvar
            }
        });
    },
    salvar: function(btn, evt, opt) {
        var janela = this.getJanelaUsuario();
        var form = janela.down('form').getForm();
        var validou = form.isValid();
        if (validou) {
            var formulario = form.getFieldValues();

            Illi.app.Local.set("suporte", formulario.suporte);

            var jsonForm = Ext.JSON.encode(formulario);
            Ext.MessageBox.wait('Salvando Aguarde', 'Aguarde...');
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
                            tipo = 'success';
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