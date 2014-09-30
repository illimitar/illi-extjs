Ext.define('Illi.controller.Movimentacao', {
    extend: 'Illi.controller.AbstractController',
    stores: ['movimentacao.Movimentacaos'],
    models: ['movimentacao.Movimentacao'],
    views: [
        'movimentacao.Lista',
        'movimentacao.Janela',
        'movimentacao.Form',
        //'movimentacao.detalhe.Form',
        'movimentacao.detalhe.Lista',
        //
        'movimentacao.pagamento.Janela',
        'movimentacao.pagamento.Form',
        'movimentacao.pagamento.Lista',
        //
        'movimentacao.conferencia.Janela',
        'movimentacao.conferencia.Form',
        'movimentacao.conferencia.Lista',
        //
        'movimentacao.conferencia.comparacao.Janela',
        'movimentacao.conferencia.comparacao.Lista',
        //
        'movimentacao.conferencia.pagamento.Janela',
        'movimentacao.conferencia.pagamento.Lista',
        'movimentacao.conferencia.pagamento.Form'
    ],
    refs: [
        {ref: 'gridIlli', selector: 'listaMovimentacao'},
        {ref: 'listaMovimentacao', selector: 'listaMovimentacao'},
        {ref: 'janelaMovimentacao', selector: 'janelaMovimentacao'},
        {ref: 'formMovimentacao', selector: 'formMovimentacao'},
        //{ref: 'formDetalheMovimentacao', selector: 'formDetalheMovimentacao'},
        {ref: 'listaDetalheMovimentacao', selector: 'listaDetalheMovimentacao'},
        //
        {ref: 'janelaPagamentoMovimentacao', selector: 'janelaPagamentoMovimentacao'},
        {ref: 'formPagamentoMovimentacao', selector: 'formPagamentoMovimentacao'},
        {ref: 'listaPagamentoMovimentacao', selector: 'listaPagamentoMovimentacao'},
        //
        {ref: 'janelaConferenciaMovimentacao', selector: 'janelaConferenciaMovimentacao'},
        {ref: 'formConferenciaMovimentacao', selector: 'formConferenciaMovimentacao'},
        {ref: 'listaConferenciaMovimentacao', selector: 'listaConferenciaMovimentacao'},
        //
        //
        {ref: 'janelaComparacaoConferenciaMovimentacao', selector: 'janelaComparacaoConferenciaMovimentacao'},
        {ref: 'listaComparacaoConferenciaMovimentacao', selector: 'listaComparacaoConferenciaMovimentacao'},
        //
        //
        {ref: 'janelaPagamentoConferenciaMovimentacao', selector: 'janelaPagamentoConferenciaMovimentacao'},
        {ref: 'listaPagamentoConferenciaMovimentacao', selector: 'listaPagamentoConferenciaMovimentacao'},
        {ref: 'formPagamentoConferenciaMovimentacao', selector: 'formPagamentoConferenciaMovimentacao'}
    ],
    init: function() {
        var me = this;
        me.control({
            'listaMovimentacao': {
                itemdblclick: me.doEditarMovimento,
                cellkeydown: function(eu, td, cellIndex, record, tr, rowIndex, e, eOpts) {
                    if (e.getKey() === e.ENTER) {
                        me.doEditarMovimento();
                    }
                }
            },
            'listaMovimentacao button[action=excel]': {
                click: me.excel
            },
            'listaMovimentacao button[action=incluir]': {
                click: me.doIncluirMovimentacao
            },
            'listaMovimentacao button[action=confirmar]': {
                click: me.doConfirmarMovimentacao
            },
            'listaMovimentacao button[action=conferir]': {
                click: me.doConferirMovimentacao
            },
            'listaMovimentacao button[action=etiqueta]': {
                click: me.doEtiqueta
            },
            'listaMovimentacao button[action=estornar]': {
                click: me.doEstornarMovimentacao
            },
            'listaMovimentacao button[action=imprimir]': {
                click: me.doImprimirMovimentacao
            },
            'listaMovimentacao button[action=atualizar]': {
                click: me.atualizar
            },
            'listaMovimentacao button[action=excluir]': {
                click: me.doExcluir
            },
            'listaMovimentacao button[action=alterar]': {
                click: me.doEditarMovimento
            },
            'listaMovimentacao actioncolumn': {
                click: me.doImprimirMovimentacao
            },
            //
            'janelaMovimentacao button[action=salvar]': {
                click: me.doSalvarMovimentacao
            },
            'janelaMovimentacao button[action=fechar]': {
                click: me.doFecharMovimentacao
            },
            'formMovimentacao textfield[name="go.id"]': {
                select: me.doSelecionaGrupoOperacao
            },
            //
            'listaDetalheMovimentacao button[action=incluir]': {
                click: me.doIncluirDetalheMovimentacao
            },
            'janelaPagamentoMovimentacao button[action=finalizar]': {
                click: me.doFinalizarPagamentoMovimentacao
            },
            'formPagamentoMovimentacao button[action=adicionar]': {
                click: me.doIncluirPagamentoMovimentacao
            },
            'formPagamentoMovimentacao textfield[name=valor_pago]': {
                specialkey: function(field, e) {
                    if (e.getKey() === e.ENTER) {
                        me.doIncluirPagamentoMovimentacao(field);
                    }
                }
            },
            //
            'janelaConferenciaMovimentacao button[action=salvar]': {
                click: me.doSalvarConferenciaMovimentacao
            },
            'janelaConferenciaMovimentacao button[action=cancelar]': {
                click: me.doFecharConferenciaMovimentacao
            },
            'listaConferenciaMovimentacao button[action=incluir-item]': {
                click: me.doIncluirConferenciaMovimentacao
            },
            //
            'janelaComparacaoConferenciaMovimentacao button[action=cancelar]': {
                click: me.doCancelarComparacaoConferencia
            },
            //
            'janelaPagamentoConferenciaMovimentacao button[action=cancelar]': {
                click: me.doCancelarPagamentoConferencia
            },
            'formPagamentoConferenciaMovimentacao button[action=adicionar]': {
                click: me.doIncluirPagamentoConferencia
            },
            'formPagamentoConferenciaMovimentacao textfield[name=valor_pago]': {
                specialkey: function(field, e) {
                    if (e.getKey() === e.ENTER) {
                        me.doIncluirPagamentoConferencia(field);
                    }
                }
            }
        });
    },
    msg: function(msg, callback) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
//        Ext.create('Ext.window.Window', {
//            title: false,
//            autoShow: true,
//            autoScroll: true,
//            modal: true,
//            layout: 'fit',
//            html: msg,
//            listeners: {
//                beforeclose: function(me) {
//                    if (callback) {
//                        callback();
//                    }
//                }
//            }
//        });

        Ext.MessageBox.show({
            title: 'Aviso Importante',
            msg: msg,
            autoScroll: true,
            icon: Ext.MessageBox.ERROR,
            buttons: Ext.MessageBox.OK,
            listeners: {
                beforeclose: function(me) {
                    if (callback) {
                        callback();
                    }
                }
            }
        });
    },
    doSelecionaGrupoOperacao: function(combo) {
        var operacao = Illi.app.Util.getOperacao(combo.getValue());
        var form = this.getFormMovimentacao();
        Ext.Array.each(form.query('[classe="venda"]'), function(campo) {
            campo.setDisabled((operacao.tipo_movimento === "1" ? false : true));
        });
        Ext.Array.each(form.query('[classe="transferencia"]'), function(campo) {
            campo.setDisabled((operacao.tipo_movimento === "5" ? false : true));
        });
    },
    doEtiqueta: function() {
        var grid = this.getListaMovimentacao();
        var selecaoModel = grid.getSelectionModel().getSelection()[0];
        if (selecaoModel) {
            var janela = Ext.create("Illi.view.produto.etiqueta.Janela");
            Ext.MessageBox.wait('Salvando Etiquetas', 'Aguarde...');
            var window = Ext.create('Ext.window.Window', {
                title: 'Etiquetas',
                width: "95%",
                height: "95%",
                autoShow: false,
                border: false,
                modal: true,
                layout: 'fit',
                items: janela
            });

            Ext.Ajax.request({
                url: '../produto/etiqueta/ijson/movimentacao/',
                params: {
                    id_movimentacao: selecaoModel.get('id'),
                    completo: true
                },
                failure: function() {
                    Illi.app.Util.mensagemFalha();
                },
                success: function(data) {
                    Ext.MessageBox.hide();
                    Ext.getStore('Etiquetas').load();
                    window.show();
                }
            });
        }

    },
    xhrImprimirMovimentacao: function(titulo) {
        if (titulo) {
            Ext.MessageBox.wait('Gerando Relatório', 'Aguarde...');
            Ext.Ajax.request({
                url: '../movimentacao/movimentacao/imprimir/',
                params: {
                    filtro: Ext.JSON.encode({"movimentacao__texto__id": titulo})
                },
                failure: function() {
                    Illi.app.Util.mensagemFalha();
                },
                success: function(data) {
                    var arquivo = (data.responseText);
                    if (/(http)/gi.test(arquivo)) {
                        Ext.MessageBox.hide();
                        Ext.create('Ext.Window', {
                            title: 'Visualizar',
                            width: "95%",
                            height: "98%",
                            plain: true,
                           // modal: true,
                            win: this,
                            autoScroll: true,
                            frame: false,
                            html: arquivo
                        }).show();
                    } else {
                        Ext.MessageBox.hide();
                        Ext.MessageBox.alert('Atenção', 'Ocorreu um erro ao gerar relatório!', Ext.emptyFn);
                    }
                }
            });
        } else {
            Ext.MessageBox.alert('Atenção', 'Configure o Modelo para Visualizar!', Ext.emptyFn);
        }
    },
    doImprimirMovimentacao: function(grid, rowIndex, colIndex, item, e, record) {
        Ext.create("Illi.view.relatorio.JanelaVisualizar", {url: '../relatorios/relatorio_movimentacao/visualizar/' + record.get('id') + '/'});
    },
    doFinalizarPagamentoMovimentacao: function(me) {
        var control = this;
        var store = Ext.getStore('tabelaPagamento');
        var titulos = [];
        var janela = me.up('window');
        var form = janela.down('#formPagamentoMovimentacao');
        var valores = form.getForm().getFieldValues();
        me.setDisabled(true);
        me.setText('Aguarde ...');
        store.each(function(rec) {
            var dados = rec.getData();
            dados.data_vencimento = Ext.Date.format(dados.data_vencimento, 'Y-m-d');
            titulos.push(dados);
        });
        Ext.Ajax.request({
            url: '../movimentacao/movimentacao/iJson/finalizar/',
            async: true,
            params: {
                titulos: Ext.JSON.encode(titulos),
                id_movimentacao: janela.id_movimentacao,
                id_operacao: valores['id_operacao']
            },
            failure: function() {
                Illi.app.Util.mensagemFalha();
            },
            success: function(response) {
                var retorno = false;
                try {
                    retorno = Ext.JSON.decode(response.responseText);
                    if (retorno.success) {
                        janela.close();
                        control.atualizar();
                        Ext.ux.Msg.flash({
                            msg: retorno.message,
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
                    Ext.MessageBox.hide();
                } catch (e) {
                    error(e);

                    var txt = " Ocorreu Um erro!</br>";
                    txt += " Tente Novamente se o Problema Pesistir entre em contato com o Suporte!.</br>";
                    txt += " Descrição do Erro: " + e.message + "</br>";

                    Ext.create('Ext.window.Window', {
                        title: 'Aviso Importante',
                        autoShow: true,
                        autoScroll: true,
                        modal: true,
                        layout: 'fit',
                        html: txt
                    });
                    retorno = false;
                }
            }
        });
        me.setDisabled(false);
        me.setText('Finalizar');
    },
    doIncluirPagamentoMovimentacao: function(me) {
        var control = this;
        var janela = me.up('window');
        var form = janela.down('#formPagamentoMovimentacao');
        var totalPago = janela.down('#totalPago');
        var comboPagamento = form.down('#comboPrazo');
        var valores = form.getForm().getFieldValues();
        valores.data_parcela = Ext.Date.format(valores.data_parcela, 'Y-m-d');
        var storePagamento = Ext.getStore('tabelaPagamento');
        var total_pago = storePagamento.sum('valor');
        var total_pagamento = total_pago + (valores.valor_pago > 0 ? valores.valor_pago : 0); //(() + );
        var diferenca = parseFloat(valores.total) - total_pagamento;
        if (form.getForm().isValid()) {
            if (diferenca >= 0 && parseFloat(valores.valor_pago) > 0) {
                var doSucesso = function(retorno) {
                    storePagamento.add(retorno.data);
                    var r_total_pago = Illi.app.Util.numberRound(storePagamento.sum('valor'), 2);
                    var diferenca = parseFloat(valores.total) - r_total_pago;
                    janela.down('#finalizar').setDisabled(!(diferenca === 0));
                    totalPago.setText('Total Pagamento ' + Illi.app.Util.valorRenderer(r_total_pago));
                    janela.down('#id_valor_pago').setValue(diferenca > 0 ? diferenca : 0);
                    comboPagamento.focus();
                };
                var doFalha = function() {
                    Illi.app.Util.mensagemFalha();
                };
                control.xhrGerarParcelas(valores, doSucesso, doFalha);
//                Ext.MessageBox.wait('Gerando Parcelas', 'Aguarde...');
//                Ext.Ajax.request({
//                    url: '../movimentacao/movimentacao/iJson/gerar_parcelas/',
//                    async: true,
//                    params: valores,
//                    failure: function() {
//                        Illi.app.Util.mensagemFalha();
//                    },
//                    success: function(response) {
//                        var retorno = Ext.JSON.decode(response.responseText);
//                        if (retorno.success) {
//                            storePagamento.add(retorno.data);
//                            var r_total_pago = Illi.app.Util.numberRound(storePagamento.sum('valor'), 2);
//                            var diferenca = parseFloat(valores.total) - r_total_pago;
//                            janela.down('#finalizar').setDisabled(!(diferenca === 0));
//                            totalPago.setText('Total Pagamento ' + Illi.app.Util.valorRenderer(r_total_pago));
//                            janela.down('#id_valor_pago').setValue(diferenca > 0 ? diferenca : 0);
//                            comboPagamento.focus();
//                        } else {
//                            error(response.message);
//                            txt = " Ocorreu Um erro!</br>";
//                            txt += " Tente Novamente se o Problema Pesistir entre em contato com o Suporte!.</br>";
//                            txt += " Descrição do Erro: " + response.message + "</br>";
//                            Ext.MessageBox.show({
//                                title: 'Aviso Importante',
//                                msg: txt,
//                                autoScroll: true,
//                                icon: Ext.MessageBox.ERROR,
//                                buttons: Ext.MessageBox.OK
//                            });
//                        }
//                    }
//                });
            } else {
                if (diferenca !== 0) {
                    var txt = "";
                    txt = " <table style:'font-family: sans-serif; font-size: 10px;'>";
                    txt += " <tr><td colspan='2'><h5>O Valor pago diferente do total do pedido!</h5></td></tr>";
                    txt += " <tr><td >Valor Pedido </td> <td style='text-align:right'>" + Illi.app.Util.valorRenderer(valores.total) + "</td></tr>";
                    txt += " <tr><td >Valor Pago </td> <td style='text-align:right'>" + Illi.app.Util.valorRenderer(total_pagamento) + "</td></tr>";
                    txt += " <tr><td >Diferença </td> <td style='text-align:right'>" + Illi.app.Util.valorRenderer(diferenca) + "</td></tr>";
                    txt += " </table>";
                    janela.down('#id_valor_pago').setValue(diferenca > 0 ? diferenca : 0);
                    Ext.MessageBox.show({
                        title: 'Aviso!',
                        msg: txt,
                        buttons: Ext.Msg.OK,
                        // icon: Ext.MessageBox.ERROR,
                        scope: this,
                        width: 400
                    });
                }
            }
        }
    },
//    adicionar: function(btn) {
//        var form = this.getFormDetalheMovimentacao();
//        var janela = form.up('#janelaMovimentacao');
//        var validado = true;
//        var me = this;
//        var dados = form.getForm().getFieldValues();
//        if (form.getForm().isValid() && validado) {
//            btn.setDisabled(true);
//            btn.setText('Aguarde ...');
//            Ext.Ajax.request({
//                url: '../movimentacao/movimentacao_detalhe/iJson/alterar',
//                async: true,
//                params: {
//                    data: Ext.JSON.encode(dados),
//                    id_movimentacao: janela.id_movimentacao
//                },
//                success: function(response) {
//                    var retorno = Ext.JSON.decode(response.responseText);
//                    btn.setDisabled(false);
//                    btn.setText('Salvar');
//                    if (retorno) {
//                        var tipo = 'error';
//                        if (retorno.success) {
//                            tipo = 'success';
//                            Ext.getStore('MovimentacaDetalhe').load();
//                        }
//                        Ext.ux.Msg.flash({
//                            type: tipo,
//                            msg: retorno.message
//                        });
//                    }
//                }
//            });
//        }
//    },
    doIncluirMovimentacao: function(btn, evt, opt) {
        var janela = Ext.create('Illi.view.movimentacao.Janela', {autoShow: true});
        return false;
    },
    doEstornarMovimentacao: function(btn) {
        var janela = btn.up('grid');
        janela.el.mask('Aguarde !');
        btn.setDisabled(true);
        var me = this;
        btn.setText('Aguarde ...');
        var grid = this.getListaMovimentacao();
        var selecaoModel = grid.getSelectionModel().getSelection()[0];
        if (selecaoModel) {
            Ext.Ajax.request({
                url: '../movimentacao/movimentacao/iJson/estornar/',
                async: true,
                params: {
                    id_movimentacao: selecaoModel.get('id')
                },
                failure: function() {
                    Illi.app.Util.mensagemFalha();
                },
                success: function(response) {
                    var retorno = Ext.decode(response.responseText);
                    btn.setDisabled(false);
                    btn.setText('Confirmar');
                    btn.action = 'confirmar';
                    janela.el.unmask();
                    if (retorno.success) {
                        Ext.ux.Msg.flash({
                            msg: retorno.message,
                            type: 'success'
                        });
                    } else {
                        Ext.Msg.show({
                            title: 'Alerta',
                            msg: retorno.message,
                            buttons: Ext.Msg.OK,
                            icon: Ext.MessageBox.ERROR
                        });
                    }
                    if (retorno) {
                        me.atualizar();
                    }
                }
            });
        }

    },
    doExcluir: function(btn) {
        alert("doExcluir");
        var me = this;
        var janela = btn.up('grid');
        janela.el.mask('Aguarde !');
        var grid = this.getListaMovimentacao();
        var selecaoModel = grid.getSelectionModel().getSelection()[0];
        if (selecaoModel) {
            Ext.Ajax.request({
                url: '../movimentacao/movimentacao/iJson/excluir/',
                async: true,
                params: {
                    id_movimentacao: selecaoModel.get('id')
                },
                failure: function() {
                    me.msg("Falha ao conectar com o servidor!");
                },
                success: function(response) {
                    try {
                        var retorno = Ext.decode(response.responseText);
                        alert(retorno);
                        janela.el.unmask();
                        if (retorno.success) {
                            me.atualizar();
                            Ext.ux.Msg.flash({
                                msg: retorno.message,
                                type: 'success'
                            });
                        } else {
                            Ext.Msg.show({
                                title: 'Alerta',
                                msg: retorno.message,
                                buttons: Ext.Msg.OK,
                                icon: Ext.MessageBox.ERROR
                            });
                        }
                    } catch (e) {
                        error(e);
                        me.msg("Falha ao Excluir a Movimentação", janela.el.unmask());
                    }

                }
            });
        }

    },
    doConfirmarMovimentacao: function(btn, evt, opt) {
        var janela = btn.up('grid');
        janela.el.mask('Aguarde !');
        btn.setDisabled(true);
        btn.setText('Aguarde ...');
        var me = this;
        var grid = this.getListaMovimentacao();
        var selecaoModel = grid.getSelectionModel().getSelection()[0];
        if (selecaoModel) {
            var operacao = Illi.app.Util.getOperacao(selecaoModel.get('go.id'));
            var validou = (selecaoModel.get('situacao') === 'Aberto' ? true : false);
            var url = '../movimentacao/movimentacao/iJson/finalizar/';

            var finalizar = function() {
                btn.setDisabled(false);
                btn.setText('Confirmar');
                me.atualizar();
                janela.unmask();
            };
            var parametros = {
                id_movimentacao: selecaoModel.get('id'),
                id_operacao: selecaoModel.get('go.id')
            };
            if (selecaoModel.get('tp.id') === 5) {
                parametros.tipo_transferencia = "baixar";
                if (selecaoModel.get('situacao') === 'Pendente') {
                    url = '../movimentacao/movimentacao/iJson/confirmar_tranferencia/';
                    validou = true;
                }
            }

            if (validou) {
                if (operacao.financeiro === 'nao_atualiza') {
                    Ext.Ajax.request({
                        url: url,
                        async: true,
                        params: parametros,
                        failure: function() {
                            me.msg("Erro ao Conectar com o Servidor", finalizar);
                        },
                        success: function(response) {
                            var retorno = false;
                            try {
                                retorno = Ext.JSON.decode(response.responseText);
                                if (retorno.success) {
                                    Ext.ux.Msg.flash({
                                        msg: retorno.message,
                                        type: 'success'
                                    });
                                } else {
                                    Ext.Msg.show({
                                        title: 'Alerta',
                                        msg: retorno.message,
                                        buttons: Ext.Msg.OK,
                                        icon: Ext.MessageBox.ERROR
                                    });
                                }
                            } catch (e) {
                                error(e);
                                var txt = " Ocorreu Um erro!</br>";
                                txt += " Tente Novamente se o Problema Pesistir entre em contato com o Suporte!.</br>";
                                me.msg(txt);

                            }

                            finalizar();
                        }
                    });


                } else {
                    Ext.Ajax.request({
                        url: '../movimentacao/movimentacao/iJson/total_pedido/',
                        async: true,
                        params: {
                            id_movimentacao: selecaoModel.get('id')
                        },
                        failure: function() {
                            Illi.app.Util.mensagemFalha();
                        },
                        callback: function(records, options, response) {
                            var retorno = Ext.decode(response.responseText);
                            finalizar();
                            if (retorno.total) {
                                var janela = Ext.create('Illi.view.movimentacao.pagamento.Janela', {autoShow: true, id_movimentacao: selecaoModel.get('id')});
                                janela.down('#totalPedido').setText('Total Pedido ' + Illi.app.Util.valorRenderer(retorno.total));
                                janela.down('#id_total').setValue(retorno.total).setVisible(false);
                            } else {
                                Illi.app.Util.mensagemFalha('O pedido não tem valor em Aberto!');
                            }
                        }
                    });
                }
            } else {
                Illi.app.Util.mensagemFalha('O pedido não esta aberto!');
            }
        }
        return false;
    },
    doEditarMovimento: function() {
        var control = this;
        var grid = control.getListaMovimentacao();
        var selecaoModel = grid.getSelectionModel().getSelection()[0];
        if (selecaoModel.get('situacao') === 'Aberto' || selecaoModel.get('situacao') === 'Conferindo') {
            var operacao = Illi.app.Util.getOperacao(selecaoModel.get('go.id'));
            var janela = Ext.create('Illi.view.movimentacao.Janela', {
                autoShow: false,
                id_movimentacao: selecaoModel.get('id'),
                tipo: selecaoModel.get('tp.id'),
                operacao: operacao,
                entidade: selecaoModel.get('e.id')
            });
            var form = janela.down('#formMovimentacao');
            form.down('combo[name=go.id]').setValue(selecaoModel.get('go.id'));
            form.down('combo[name=p.id]').setValue(selecaoModel.get('p.id'));
            form.down('combo[name=t.id]').setValue(selecaoModel.get('t.id'));
            form.getForm().loadRecord(selecaoModel);
            control.doSelecionaGrupoOperacao(form.down('combo[name=go.id]'));
            janela.show();
            return false;
        } else {
            Illi.app.Util.mensagemFalha('O pedido não esta aberto!');
            return false;

        }
    },
    doIncluirDetalheMovimentacao: function() {
        var grid = this.getListaDetalheMovimentacao();
        var store = grid.getStore();
        store.insert(0, 0);
        grid.editingPlugin.startEdit(0, 0);
    },
    doSalvarMovimentacao: function(btn) {
        var me = this;
        var janela = me.getJanelaMovimentacao();
        var form = janela.down('form');
        var validado = true;
        var url = '../movimentacao/movimentacao/iJson/alterar';
        var dados = form.getForm().getFieldValues();

        if (form.getForm().isValid() && validado) {
            var operacao = Illi.app.Util.getOperacao(dados["go.id"]);
            if (operacao.tipo_movimento === '5') {
                url = '../movimentacao/movimentacao/iJson/tranferencia';

                if (!form.down('[name=e.id_destino]').getValue()) {
                    form.down('[name=e.id_destino]').markInvalid("Campo obrigtório!");
                    validado = false;
                }

            } else if (!form.down('[name=p.id]').getValue()) {
                form.down('[name=p.id]').markInvalid("Campo obrigtório!");
                validado = false;
            }

            if (validado) {
                btn.setDisabled(true);
                btn.setText('Aguarde ...');
                Ext.Ajax.request({
                    url: url,
                    async: true,
                    params: {
                        data: Ext.JSON.encode(dados),
                        tipo: (janela.tipo ? janela.tipo : '')
                    },
                    success: function(response) {
                        try {
                            var retorno = Ext.JSON.decode(response.responseText);
                            janela.id_movimentacao = retorno.data.id_movimentacao;
                            janela.operacao = operacao;
                            janela.entidade = dados["e.id"];
                            janela.down('#tabProdutos').entidade = dados["e.id"];
                            form.down('#formIdMovimentacao').setValue(retorno.data.id_movimentacao);
                            btn.setDisabled(false);
                            btn.setText('Salvar');
                            if (retorno) {
                                var tipo = 'error';
                                if (retorno.success) {
                                    janela.down('#tabProdutos').setDisabled(false);
                                    form.down('[name=go.id]').setDisabled(true);
                                    form.down('[name=e.id]').setDisabled(true);
                                    form.down('[name=e.id_destino]').setDisabled(true);
                                    janela.down("#tabProdutos").operacao = operacao;
                                    janela.down('tabpanel').setActiveTab(1);
                                    tipo = 'success';
                                }
                                Ext.ux.Msg.flash({
                                    type: tipo,
                                    msg: retorno.message
                                });
                            }

                        } catch (e) {
                            error(e);
                            me.msg("Falha ao alterar a movimentação!");
                        }
                    }
                });
            } else {
                Illi.app.Util.mensagemFalha('Verifique todos os Campos!');
            }
        }
    },
    doFecharMovimentacao: function(btn, evt, opt) {
        var control = this;
        var janela = control.getJanelaMovimentacao();
        if (janela) {
            janela.close();
        }
        control.atualizar();
    },
    doConferirMovimentacao: function(btn, evt, opt) {
        var control = this;
        var grid = control.getListaMovimentacao();
        var selecaoModel = grid.getSelectionModel().getSelection()[0];
        if (selecaoModel) {
            switch (selecaoModel.get('situacao')) {
                case "Confirmado":
                case "Atendido Parcialmente":
                    var goId = selecaoModel.get('go.id');
                    var id = selecaoModel.get('id');
                    var janela = Ext.create('Illi.view.movimentacao.conferencia.Janela', {
                        idMovimentacao: id,
                        idGrupoOperacao: goId
                    });
                    //var form = janela.down('#formConferenciaMovimentacao');
                    var form = control.getFormConferenciaMovimentacao();
                    form.down('combo[name=p.id]').setValue(selecaoModel.get('p.id'));
                    form.down('combo[name=t.id]').setValue(selecaoModel.get('t.id'));
                    form.getForm().loadRecord(selecaoModel);
                    janela.show();
                    break;
                default:
                    Illi.app.Util.mensagemFalha('O pedido tem que estar confirmado!');
                    break;
            }
        }
        return false;
    },
    doIncluirConferenciaMovimentacao: function(btn) {
        var janela = this.getJanelaConferenciaMovimentacao();
        var lista = this.getListaConferenciaMovimentacao();
        var store = lista.getStore();
        if (lista.editando === false) {
            store.insert(0, 0);
            lista.editingPlugin.startEdit(0, 0);
        }
    },
    doSalvarConferenciaMovimentacao: function(btn) {
        var control = this;
        var janela = control.getJanelaConferenciaMovimentacao();
        var lista = control.getListaConferenciaMovimentacao();
        //var form = janela.down('form');
        var form = control.getFormConferenciaMovimentacao();
        var dados = form.getForm().getFieldValues();
        var doRestauraAcao = function(desabilitado) {
            btn.setDisabled(desabilitado);
            btn.setText((desabilitado ? 'Aguarde...' : 'Salvar'));
        };
        if (form.getForm().isValid()) {
            doRestauraAcao(true);
            var listaRaw = [];
            Ext.Array.each(lista.getStore().data.items, function(item) {
                listaRaw.push(item.data);
            });
            var doFalhou = function(response) {
                Ext.ux.Msg.flash({
                    type: 'error',
                    msg: response.message
                });
                doRestauraAcao(false);
            };
            var doFinalizado = function() {
                doRestauraAcao(false);
                control.fecharPagamentoConferencia();
                control.fecharComparacaoConferencia();
                control.doFecharConferenciaMovimentacao();
            };
            var doSucesso = function(response) {
                var data = response.data;
                switch (data.estagio) {
                    case 'abrirParcial':
                        var botao1 = {
                            text: 'Atender Parcialmente',
                            iconCls: 'icon-editar',
                            handler: function() {
                                // fechamento_pedido
                                janela.fechamentoPedido = 'parcial';
                                doExecutar('parcial', false, false);
                            }
                        };
                    case 'abrirCompleta':
                        var botao2 = {
                            text: 'Finalizar Pedido',
                            iconCls: 'icon-confirmar',
                            handler: function() {
                                // fechamento_pedido
                                janela.fechamentoPedido = 'completa';
                                doExecutar('completa', false, false);
                            }
                        };
                        var dados = data.dados;
                        control.abrirComparacaoConferencia(data.estagio, data.mensagem, dados.pedido, botao1, botao2);
                        break;
                    case 'abrirFinanceiro':
                        var botao1 = {
                            text: 'Finalizar Pedido',
                            iconCls: 'icon-confirmar',
                            handler: function() {
                                var form = control.getFormPagamentoConferenciaMovimentacao();
                                var dados = form.getForm().getFieldValues();
                                if (dados) {
                                    if (dados.total_pedido === dados.total_pago) {
                                        var listaPagamentoRaw = [];
                                        var listaPagamento = control.getListaPagamentoConferenciaMovimentacao();
                                        Ext.Array.each(listaPagamento.getStore().data.items, function(item) {
                                            listaPagamentoRaw.push(item.data);
                                        });
                                        doExecutar('finalizar', listaPagamentoRaw, janela.fechamentoPedido);
                                    } else {
                                        var diferenca = dados.total_pago - dados.total_pedido;
                                        var txt = "<table style:'font-family: sans-serif; font-size: 10px;'>";
                                        txt += " <tr><td colspan='2'><h5>O valor pago é " + (diferenca < 0 ? "inferior" : "superior") + " ao total do pedido conferido!</h5></td></tr>";
                                        txt += " <tr><td >Valor Pedido: </td> <td style='text-align:right'>" + Illi.app.Util.valorRenderer(dados.total_pedido) + "</td></tr>";
                                        txt += " <tr><td >Valor Pago: </td> <td style='text-align:right'>" + Illi.app.Util.valorRenderer(dados.total_pago) + "</td></tr>";
                                        txt += " <tr><td >Diferença: </td> <td style='text-align:right'>" + Illi.app.Util.valorRenderer(diferenca) + "</td></tr>";
                                        txt += " </table>";
                                        Ext.MessageBox.alert('Atenção', txt, Ext.emptyFn);
                                    }
                                }
                            }
                        };
                        var dados = data.dados;
                        control.abrirPagamentoConferencia(dados.id, data.estagio, data.mensagem, dados.financeiro, dados.total_valor_conferido, botao1);
                        break;
                    case 'finalizado':
                        doFinalizado();
                        break;
                }
            };
            var doExecutar = function(estagio, pagamento, finalizar) {
                control.xhrFinalizarConferencia(dados, listaRaw, pagamento, estagio, finalizar, doSucesso, doFalhou);
            };
            doExecutar('conferencia', false, false);
        } else {
            janela.down('tabpanel').setActiveTab(0);
        }
    },
    doFecharConferenciaMovimentacao: function(btn) {
        var control = this;
        var janela = control.getJanelaConferenciaMovimentacao();
        if (janela) {
            janela.close();
        }
        control.atualizar();
    },
    abrirComparacaoConferencia: function(estagio, mensagem, itens, botao1, botao2) {
        var control = this;
        var janela = Ext.create('Illi.view.movimentacao.conferencia.comparacao.Janela', {
            retornoEstagio: estagio,
            retornoMensagem: mensagem,
            retornoItens: itens,
            botao1: botao1,
            botao2: botao2
        });
        janela.show();
    },
    fecharComparacaoConferencia: function() {
        var janela = this.getJanelaComparacaoConferenciaMovimentacao();
        if (janela) {
            janela.close();
        }
    },
    doCancelarComparacaoConferencia: function(btn) {
        var janela = this.getJanelaComparacaoConferenciaMovimentacao();
        var janelaConferencia = this.getJanelaConferenciaMovimentacao();
        if (janelaConferencia) {
            var btnSalvar = janelaConferencia.down("#salvar");
            btnSalvar.setDisabled(false);
            btnSalvar.setText('Salvar');
        }
        if (janela) {
            janela.close();
        }
    },
    abrirPagamentoConferencia: function(id_movimentacao, estagio, mensagem, itens, total, botao1) {
        var janela = Ext.create('Illi.view.movimentacao.conferencia.pagamento.Janela', {
            idMovimentacao: id_movimentacao,
            retornoEstagio: estagio,
            retornoMensagem: mensagem,
            retornoItens: itens,
            botao1: botao1,
            totalPedido: total
        });
        janela.show();
    },
    fecharPagamentoConferencia: function() {
        var janela = this.getJanelaPagamentoConferenciaMovimentacao();
        if (janela) {
            janela.close();
        }
    },
    doIncluirPagamentoConferencia: function(me) {
        var control = this;
        var form = control.getFormPagamentoConferenciaMovimentacao();
        var dados = form.getForm().getFieldValues();
        if (form.getForm().isValid()) {
            var params = {
                'id_prazo': dados.id_prazo,
                'valor_pago': dados.valor_pago,
                'data_parcela': Ext.Date.format(dados.data_parcela, 'Y-m-d'),
                'vencimento_fixo': dados.vencimento_fixo
            };
            var doSucesso = function(response) {
                var records = response.data;
                var grid = control.getListaPagamentoConferenciaMovimentacao();
                var storeGrid = grid.getStore();
                var xCountGrid = storeGrid.getCount() + 1;
                Ext.Array.each(records, function(item) {
                    storeGrid.add({
                        'id': xCountGrid,
                        'id_fluxo': '',
                        'id_prazo': item.pagamento_id,
                        'descricao': item.pagamento,
                        'data_vencimento': item.data_vencimento,
                        'valor': item.valor,
                        'valor_final': item.valor,
                        'situacao': 'Novo',
                        'situacao_antigo': ''
                    });
                    xCountGrid++;
                });
            };
            var doFalha = function(response) {
                Ext.MessageBox.alert('Atenção', 'Ocorreu um erro ao adicionar pagamente, tente novamente!', Ext.emptyFn);
            };
            control.xhrGerarParcelas(params, doSucesso, doFalha);
        }





//        var janela = me.up('window');
//        var form = janela.down('#formPagamentoMovimentacao');
//        var totalPago = janela.down('#totalPago');
//        var comboPagamento = form.down('#comboPrazo');
//        var valores = form.getForm().getFieldValues();
//        valores.data_parcela = Ext.Date.format(valores.data_parcela, 'Y-m-d');
//        var storePagamento = Ext.getStore('tabelaPagamento');
//        var total_pago = storePagamento.sum('valor');
//        var total_pagamento = total_pago + (valores.valor_pago > 0 ? valores.valor_pago : 0); //(() + );
//        var diferenca = parseFloat(valores.total) - total_pagamento;
//        if (form.getForm().isValid()) {
//            if (diferenca >= 0 && parseFloat(valores.valor_pago) > 0) {
//                Ext.MessageBox.wait('Gerando Parcelas', 'Aguarde...');
//                Ext.Ajax.request({
//                    url: '../movimentacao/movimentacao/iJson/gerar_parcelas/',
//                    async: true,
//                    params: valores,
//                    failure: function() {
//                        Illi.app.Util.mensagemFalha();
//                    },
//                    success: function(response) {
//                        var retorno = false;
//                        try {
//                            retorno = Ext.JSON.decode(response.responseText);
//                            Ext.MessageBox.hide();
//                        } catch (e) {
//                            error(e);
//                            txt = " Ocorreu Um erro!</br>";
//                            txt += " Tente Novamente se o Problema Pesistir entre em contato com o Suporte!.</br>";
//                            txt += " Descrição do Erro: " + e.message + "</br>";
//                            Ext.MessageBox.show({
//                                title: 'Aviso Importante',
//                                msg: txt,
//                                autoScroll: true,
//                                icon: Ext.MessageBox.ERROR,
//                                buttons: Ext.MessageBox.OK
//                            });
//                            retorno = false;
//                        }
//
//                        if (retorno) {
//                            storePagamento.add(retorno);
//                            var r_total_pago = Illi.app.Util.numberRound(storePagamento.sum('valor'), 2);
//                            var diferenca = parseFloat(valores.total) - r_total_pago;
//                            janela.down('#finalizar').setDisabled(!(diferenca === 0));
//                            totalPago.setText('Total Pagamento ' + Illi.app.Util.valorRenderer(r_total_pago));
//                            janela.down('#id_valor_pago').setValue(diferenca > 0 ? diferenca : 0);
//                            comboPagamento.focus();
//                        }
//                    }
//                });
//            } else {
//                if (diferenca !== 0) {
//                    var txt = "";
//                    txt = " <table style:'font-family: sans-serif; font-size: 10px;'>";
//                    txt += " <tr><td colspan='2'><h5>O Valor pago diferente do total do pedido!</h5></td></tr>";
//                    txt += " <tr><td >Valor Pedido </td> <td style='text-align:right'>" + Illi.app.Util.valorRenderer(valores.total) + "</td></tr>";
//                    txt += " <tr><td >Valor Pago </td> <td style='text-align:right'>" + Illi.app.Util.valorRenderer(total_pagamento) + "</td></tr>";
//                    txt += " <tr><td >Diferença </td> <td style='text-align:right'>" + Illi.app.Util.valorRenderer(diferenca) + "</td></tr>";
//                    txt += " </table>";
//                    janela.down('#id_valor_pago').setValue(diferenca > 0 ? diferenca : 0);
//                    Ext.MessageBox.show({
//                        title: 'Aviso!',
//                        msg: txt,
//                        buttons: Ext.Msg.OK,
//                        // icon: Ext.MessageBox.ERROR,
//                        scope: this,
//                        width: 400
//                    });
//                }
//            }
//        }
    },
    doCancelarPagamentoConferencia: function(btn) {
        var janela = this.getJanelaPagamentoConferenciaMovimentacao();
        if (janela) {
            janela.close();
        }
        this.doCancelarComparacaoConferencia();

    },
    xhrGerarParcelas: function(params, sucesso, falha) {
        Ext.Ajax.request({
            url: '../movimentacao/movimentacao/iJson/gerar_parcelas',
            async: true,
            params: params,
            success: function(response) {
                var response = Ext.JSON.decode(response.responseText);
                if (response.success) {
                    sucesso(response);
                } else {
                    falha(response);
                }
            },
            failure: function() {
                Illi.app.Util.mensagemFalha();
            }
        });
    },
    xhrFinalizarConferencia: function(data, detalhe, financeiro, confirmado, finalizar, sucesso, falha) {
        Ext.Ajax.request({
            url: '../movimentacao/movimentacao/iJson/finalizar_conferencia',
            async: true,
            params: {
                data: Ext.JSON.encode(data),
                detalhe: Ext.JSON.encode(detalhe),
                financeiro: Ext.JSON.encode(financeiro),
                confirmado: (confirmado ? confirmado : ''),
                finalizar: (finalizar ? finalizar : '')
            },
            success: function(response) {
                var response = Ext.JSON.decode(response.responseText);
                if (response.success) {
                    sucesso(response);
                } else {
                    falha(response);
                }
            }
        });
    }
});
