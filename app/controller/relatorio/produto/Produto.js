Ext.define('Illi.controller.relatorio.produto.Produto', {
    extend: 'Illi.controller.AbstractController',
//    stores: ['relatorio.Relatorios'],
//    models: ['relatorio.Relatorio'],
    views: [
        'relatorio.produto.Form'
    ],
    refs: [
        {
            ref: 'formRelatorioProduto',
            selector: 'formRelatorioProduto'
        }
    ],
    init: function() {
        var me = this;
        me.control(
                {
                    'formRelatorioProduto button[action=gerar]': {
                        click: me.gerar
                    },
                    'formRelatorioProduto button[action=configurar]': {
                        click: me.configurar
                    },
                    'formRelatorioProduto textfield[name=modelo]': {
                        change: function(combo, b) {
                            //
                        }
                    }

                }
        );
    },
    configurar: function() {
        //
    },
    gerar: function() {
        var form = this.getFormRelatorioProduto().getForm();
        if (form.isValid()) {
            Ext.MessageBox.wait('Gerando Relatório', 'Aguarde...');
            try {
                var modelo = this.getFormRelatorioProduto().down("#modeloRelatorioProduto");
                if (modelo) {
                    //var nomeModelo = false;
                    var urlModelo = false;
                    var recordModelo = modelo.valueModels;
                    if (recordModelo !== undefined) {
                        if (recordModelo[0] !== undefined) {
                            //nomeModelo = recordModelo[0].get('nome');
                            urlModelo = recordModelo[0].get('url');
                        }
                    }
                    if (urlModelo) {
                        var produtos = Ext.getStore("relatorioListaProduto");
                        var id_produtos = [];
                        produtos.each(function(rec) {
                            id_produtos.push(rec.getData().id);
                        });
                        var filtro = form.getValues();
                        filtro["produto_grade__texto__id[]"] = id_produtos;
                        var values = Ext.JSON.encode(filtro);
                        if (recordModelo[0].get('saida') === "INTERNO") {
                            Ext.MessageBox.hide();
                            Ext.create("Illi.view.relatorio.JanelaVisualizar", {url: urlModelo + '?' + Ext.urlEncode(filtro)});
                        } else {
                            Ext.Ajax.request({
                                url: '../relatorios/abs_relatorio/gerar',
                                timeout: 1200000,
                                params: {
                                    illi: 'true',
                                    filtro: values,
                                    url: 'relatorios/abs_relatorio/gerar'
                                },
                                success: function(arquivo) {
                                    Ext.MessageBox.hide();
                                    arquivo = (arquivo.responseText);
                                    Ext.create('Ext.Window', {
                                        title: 'Visualizar',
                                        width: "95%",
                                        height: "98%",
                                        plain: true,
                                        modal: true,
                                        win: this,
                                        autoScroll: true,
                                        frame: false,
                                        html: arquivo
                                    }).show();
                                },
                                failure: function() {
                                    Illi.app.Util.mensagemFalha();
                                }
                            });
                        }
                    } else {
                        Ext.MessageBox.hide();
                        Ext.MessageBox.alert('Atenção', 'É necessário escolher um modelo para gerar o relatório!', Ext.emptyFn);
                    }
                } else {
                    Ext.MessageBox.hide();
                    Ext.MessageBox.alert('Atenção', 'É necessário escolher um modelo para gerar o relatório!', Ext.emptyFn);
                }
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
    }
});