Ext.define('Illi.controller.relatorio.venda.Venda', {
    extend: 'Illi.controller.AbstractController',
//    stores: ['relatorio.Relatorios'],
//    models: ['relatorio.Relatorio'],
    views: [
        'relatorio.venda.Form'
    ],
    refs: [
        {
            ref: 'formRelatorioVenda',
            selector: 'formRelatorioVenda'
        }
    ],
    init: function() {
        var me = this;
        me.control(
                {
                    'formRelatorioVenda button[action=gerar]': {
                        click: me.gerar
                    },
                    'formRelatorioVenda button[action=configurar]': {
                        click: me.configurar
                    },
                    'formRelatorioVenda textfield[name=modelo]': {
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
    gerar: function(btn) {
        var form = this.getFormRelatorioVenda().getForm();
        if (form.isValid()) {
            Ext.MessageBox.wait('Gerando Relatório', 'Aguarde...');
            try {
                var modelo = this.getFormRelatorioVenda().down("#modeloRelatorioVenda");
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
                        var filtro = form.getValues();
                        var values = Ext.JSON.encode(filtro);
                        //var urlModelo = false;
                        //var modelo = this.getFormRelatorioVenda().down('#modeloRelatorioVenda');
                        //var recordModelo = modelo.valueModels;
                        //try {
                        //    var tipo = (recordModelo[0].get('saida') ? recordModelo[0].get('saida') : "INTERNO");
                        //} catch (err) {
                        //    error(err);
                        //    var tipo = "INTERNO";
                        //}
                        //urlModelo = (urlModelo ? urlModelo : "../relatorios/relatorio_caixa/quadro");
                        if (recordModelo[0].get('saida') === "INTERNO") {
                            Ext.MessageBox.hide();
                            Ext.create("Illi.view.relatorio.JanelaVisualizar", {url: urlModelo + '?' + Ext.urlEncode(filtro)});
                        } else {
                            //Ext.MessageBox.wait('Gerando Relatório', 'Aguarde...');
                            Ext.Ajax.request({
                                url: '../relatorios/abs_relatorio/gerar',
                                timeout: 1200000,
                                params: {
                                    illi: 'true',
                                    filtro: values,
                                    url: 'relatorios/abs_relatorio/gerar'
                                },
                                success: function(arquivo) {
                                    arquivo = (arquivo.responseText);
                                    Ext.MessageBox.hide();
                                    Ext.create('Ext.Window', {
                                        title: 'Visualizar',
                                        width: "95%",
                                        height: "98%",
                                        plain: true,
                                       // modal: false,
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