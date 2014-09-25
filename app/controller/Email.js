Ext.define('Illi.controller.Email', {
    extend: 'Illi.controller.AbstractController',
    views: [
        'email.Form',
        'email.Janela'
    ],
    refs: [
        {
            ref: 'formEmail',
            selector: 'formEmail'
        },
        {
            ref: 'janelaEmail',
            selector: 'janelaEmail'
        }
    ],
    init: function() {
        var me = this;
        me.control(
                {
                    'janelaEmail button[action=enviar]': {
                        click: me.enviar
                    },
                    'listaEmail button[action=excluir]': {
                        click: me.excluir
                    },
                    'listaEmail button[action=atualizar]': {
                        click: me.atualizar
                    },
                    'listaEmail button[action=imprimir]': {
                        click: me.imprimir
                    },
                    'formEmail textfield[name=modelo]': {
                        afterrender: me.exibir
                    }


                }
        );
    },
    exibir: function(me) {
        try {
            me.setVisible(this.getJanelaEmail().id_fluxo);
        } catch (e) {
            me.setVisible(0);
        }
    },
    enviar: function(btn) {
        var janela = btn.up('window');
        var form = janela.down('form');
        var valores = form.getForm().getValues();
        valores.id_fluxo = janela.id_fluxo;

        Ext.MessageBox.wait('Enviando Email', 'Aguarde...');
        Ext.Ajax.request({
            url: '../email/ijson/enviar_email',
            params: valores,
            success: function(response) {
                var retorno = false;
                try {
                    retorno = Ext.JSON.decode(response.responseText);
                    Ext.MessageBox.hide();
                }
                catch (err) {
                    txt = " Ocorreu Um erro!</br>";
                    txt += " Tente Novamente se o Problema Pesistir entre em contato com o Suporte!.</br>";
                    txt += " Descrição do Erro: " + err.message + "</br>";
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
                    var emails = retorno.data;
                    var msg = '';
                    for (var i in emails) {
                        msg += emails[i] + '<br/>';
                    }
                    if (retorno.success) {
                        Ext.MessageBox.show({
                            title: 'Email Enviado',
                            msg: "Email enviado para:</br>" + msg,
                            scope: this,
                            buttons: Ext.MessageBox.OK,
                            fn: function() {
                                janela.close();
                            }
                        });
                    } else {
                        Ext.MessageBox.show({
                            title: 'Aviso Importante',
                            msg: retorno.message,
                            autoScroll: true,
                            icon: Ext.MessageBox.ERROR,
                            buttons: Ext.MessageBox.OK
                        });
                    }


                }

            }
        });

    }




});