Ext.define('Illi.controller.Venda', {
    extend: 'Illi.controller.AbstractController',
    //stores: ['Vendas'],
    //models: ['Venda'],
    views: [
        'financeiro.venda.Lista',
        'financeiro.venda.Janela'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaPagamento'
        },
        {
            ref: 'listaPagamento',
            selector: 'listaPagamento'
        },
        {
            ref: 'vendaForm',
            selector: 'vendaForm'
        },
        {
            ref: 'vendaJanela',
            selector: 'vendaJanela'
        }
    ],
    init: function() {
        var me = this;
        me.control(
                {
                    'listaPagamento': {
                        itemdblclick: me.editar
                    },
                    'listaPagamento button[action=incluir]': {
                        click: me.incluir
                    },
                    'listaPagamento button[action=excluir]': {
                        click: me.excluir
                    },
                    'listaPagamento button[action=atualizar]': {
                        click: me.atualizar
                    },
                    'listaPagamento button[action=imprimir]': {
                        click: me.imprimir
                    },
                    'vendaForm button[action=adicionar]': {
                        click: me.gerarPagamento
                    },
                    'vendaJanela button[action=finalizar]': {
                        click: me.lancamento_caixa
                    },
                    'vendaForm textfield[name=valor_pago]': {
                        specialkey: function(field, e) {
                            if (e.getKey() === e.ENTER) {
                                me.gerarPagamento(field);
                            }
                        }
                    }
                }
        );
    }
    ,
    gerarPagamento: function(combo) {
        var finalizar = combo.up('#janelaVenda').down('#finalizar');
        finalizar.setDisabled(false);

        var janela = combo.up('#janelaVenda');
        var form = janela.down('form');
        var totalPago = janela.down('#totalPago');
        var comboPagamento = form.down('#id_prazo');
        var valorPago = form.down('#valorPago');

        if (form.getForm().isValid()) {
            var valores = form.getForm().getFieldValues();
            valores.moeda = comboPagamento.getRawValue();
            var storePagamento = Ext.getStore('tabelaPagamento');
            storePagamento.add(valores);
            //comboPagamento.getRawValue();
            var total_pagamento = Math.round(storePagamento.sum('valor_pago') * 100) / 100;
            totalPago.setText('Total  ' + Illi.app.Util.valorRenderer(total_pagamento));
            comboPagamento.focus().setValue('');
            valorPago.setValue('');
        }


    },
    lancamento_caixa: function(btn) {
        var janela = btn.up('#janelaVenda');
        var finalizar = janela.down('#finalizar');
        var form = janela.down('form');
        var valores = form.getForm().getValues();
        var storePagamento = Ext.getStore('tabelaPagamento');


        var total_pagamento = Math.round(storePagamento.sum('valor_pago') * 100) / 100;


        if ((total_pagamento) > 0) {
            var parcelas = [];

            storePagamento.each(function(rec) {
                var parcela = {};
                parcela.valor_pago = rec.get('valor_pago');
                parcela.id_prazo = rec.get('id_prazo');
                parcela.id_conta = rec.get('id_conta');
                parcela.data_vencimento = Ext.Date.format(rec.get('data_vencimento'), 'Y-m-d');
                parcelas.push(parcela);
            });

            valores.pagamento = Ext.JSON.encode(parcelas);


            Ext.MessageBox.wait('Salvando Aguarde', 'Aguarde...');
            Ext.Ajax.request({
                url: '../fluxo/fluxo/iJson/venda_caixa/',
                params: valores,
                failure: function() {
                    Illi.app.Util.mensagemFalha();
                },
                success: function(response) {
                    var retorno = false;
                    try {
                        retorno = Ext.JSON.decode(response.responseText);
                        Ext.MessageBox.hide();
                        var icone = Ext.MessageBox.ERROR;
                        if (retorno.success) {
                            storePagamento.removeAll();
                            icone = false;
                        }
                        form.getForm().reset();
                        Ext.MessageBox.show({
                            title: 'Aviso',
                            msg: retorno.message,
                            autoScroll: true,
                            icon: icone,
                            buttons: Ext.MessageBox.OK
                        });
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
                    }

                }
            });



        } else {
            txt = " <table style:'font-family: sans-serif; font-size: 10px;'>";
            txt += " <tr><td colspan='2'><h4>O Valor Total Pago Diferente do Total do Pedido!</h4></td></tr>";
            txt += " <tr><td >Valor Pedido </td> <td style='text-align:right'>" + Illi.app.Util.valorRenderer(total_item) + "</td></tr>";
            txt += " <tr><td >Valor Pago </td> <td style='text-align:right'>" + Illi.app.Util.valorRenderer(total_pagamento) + "</td></tr>";
            txt += " <tr><td >Diferença </td> <td style='text-align:right'>" + Illi.app.Util.valorRenderer(diferenca) + "</td></tr>";
            txt += " </table>";

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
});