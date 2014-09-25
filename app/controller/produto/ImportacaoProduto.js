Ext.define('Illi.controller.produto.ImportacaoProduto', {
    extend: 'Illi.controller.AbstractController',
    stores: ['produto.ImportacaoProdutos'],
    models: ['produto.ImportacaoProduto'],
    views: [
        'produto.importacao.Lista',
        'produto.importacao.Janela'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaProdutoImportacao'
        },
        {
            ref: 'listaProdutoImportacao',
            selector: 'listaProdutoImportacao'
        },
        {
            ref: 'janelaImportacaoProduto',
            selector: 'janelaImportacaoProduto'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaProdutoImportacao': {
                itemdblclick: me.editar
            },
            'listaProdutoImportacao button[action=enviar]': {
                click: me.enviar
            },
            'listaProdutoImportacao button[action=processar]': {
                click: me.processar
            },
            'listaProdutoImportacao button[action=atualizar]': {
                click: me.atualizar
            },
            'janelaImportacaoProduto button[action=importar]': {
                click: me.importar
            }
        });
    },
    enviar: function(btn, evt, opt) {
        var grid = btn.up('grid');
//        var records = grid.getSelectionModel().getSelection();
//        Illi.app.getController('UsuarioGrupoUsuario');
        Ext.create('Illi.view.produto.importacao.Janela').show();
    },
    processar: function(btn, evt, opt) {
        var me = this;
        try {
            Ext.create('Illi.view.JanelaProcessador', {url: 'imp_produto'});
//            Ext.MessageBox.wait('Processando', 'Aguarde...');
//            Ext.Ajax.request({
//                url: '../produto/importacao/ijson/processar_produtos',
//                async: true,
//                success: function(response) {
//                    var retorno = Ext.JSON.decode(response.responseText);
//                    if (retorno) {
//                        var tipo = 'error';
//                        if (retorno.success) {
//                            tipo = 'success';
//                            Ext.MessageBox.hide();
//                            me.getListaProdutoImportacao().store.load();
//                        }
//                        Ext.ux.Msg.flash({
//                            msg: retorno.message,
//                            type: tipo
//                        });
//                    } else {
//                        Ext.ux.Msg.flash({
//                            type: 'error',
//                            msg: "Ocorreu um erro tente novamente!"
//                        });
//                    }
//                },
//                failure: function(form, action) {
//                    alert(form, action);
////                    var retorno = action.result;
//                    Ext.ux.Msg.flash({
//                        type: 'error',
//                        msg: "Ocorreu um erro tente novamente!"
//                    });
//                }
//            });
        } catch (ex) {
            Ext.ux.Msg.flash({
                type: 'error',
                msg: "Ocorreu um erro tente novamente!"
            });
        }
    },
    importar: function(button) {
        var me = this;
        var win = me.getJanelaImportacaoProduto();
        var form = win.down('#formImportacaoProduto');
        if (form.getForm().isValid()) {
            try {
                form.getForm().submit({
                    url: '../produto/importacao/ijson/importar_produto',
                    waitMsg: 'Carregando arquivo...',
                    success: function(form, action) {
                        alert(action);
                        var retorno = action.result;
                        if (retorno) {
                            var tipo = 'error';
                            if (retorno.success) {
                                tipo = 'success';
                                win.close();
                                me.getListaProdutoImportacao().store.load();
                            }
                            Ext.ux.Msg.flash({
                                type: tipo,
                                msg: retorno.message
                            });
                        } else {
                            Ext.ux.Msg.flash({
                                type: 'error',
                                msg: "Ocorreu um erro tente novamente!"
                            });
                        }
                    },
                    failure: function(form, action) {
                        var retorno = action.result;
                        Ext.ux.Msg.flash({
                            type: 'error',
                            msg: (retorno.message ? retorno.message : "Ocorreu um erro tente novamente!")
                        });
                    }
                });
            } catch (ex) {
                Ext.ux.Msg.flash({
                    type: 'error',
                    msg: "Ocorreu um erro tente novamente!"
                });
            }
        }
    }
});