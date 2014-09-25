Ext.define('Illi.controller.produto.Etiqueta', {
    extend: 'Illi.controller.AbstractController',
    views: [
        'produto.etiqueta.Janela',
        'produto.etiqueta.JanelaConfiguracaoImpressoraEtiqueta',
        'produto.etiqueta.Lista',
        'produto.etiqueta.FormularioConfiguracaoImpressoraEtiqueta',
        'Illi.view.produto.etiqueta.pesquisa.Lista'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaProdutoEtiqueta'
        },
        {
            ref: 'listaProdutoEtiqueta',
            selector: 'listaProdutoEtiqueta'
        },
        {
            ref: 'listaProdutoEtiquetaPesquisa',
            selector: 'listaProdutoEtiquetaPesquisa'
        },
        {
            ref: 'etiquetaForm',
            selector: 'etiquetaForm'
        },
        {
            ref: 'janelaEtiqueta',
            selector: 'janelaEtiqueta'
        },
        {
            ref: 'formularioConfiguracaoImpressoraEtiqueta',
            selector: 'formularioConfiguracaoImpressoraEtiqueta'
        },
        {
            ref: 'janelaConfiguracaoImpressoraEtiqueta',
            selector: 'janelaConfiguracaoImpressoraEtiqueta'
        }
    ],
    init: function () {
        var me = this;
        me.control({
            'listaProdutoEtiqueta': {
                itemdblclick: me.editar
            },
            'listaProdutoEtiqueta button[action=incluir]': {
                click: me.incluir
            },
            'listaProdutoEtiqueta button[action=excluir]': {
                click: me.excluir
            },
            'listaProdutoEtiquetaPesquisa button[action=adicionarEtiquetas]': {
                click: me.adicionarEtiquetas
            },
            'janelaEtiqueta button[action=imprimir]': {
                click: me.imprimir
            },
            'janelaEtiqueta button[action=limpar]': {
                click: me.limpar
            },
            'janelaEtiqueta button[action=configurar-impressora]': {
                click: me.janelaConfiguracaoImpressoraEtiquetaExibir
            },
            'janelaConfiguracaoImpressoraEtiqueta button[action=configuracao-impressao-confirmar]': {
                click: me.janelaConfiguracaoImpressoraEtiquetaConfirmar
            },
            'janelaConfiguracaoImpressoraEtiqueta button[action=configuracao-impressao-cancelar]': {
                click: me.janelaConfiguracaoImpressoraEtiquetaOcultar
            },
            'etiquetaForm button[action=adicionar]': {
                click: me.adicionar
            },
            'etiquetaForm textfield[name=qtde]': {
                specialkey: function (field, e) {
                    if (e.getKey() === e.ENTER) {
                        me.adicionar(field);
                    }
                }
            },
            'etiquetaForm textfield[name=nome]': {
                specialkey: function (field, e) {
                    if (e.getKey() === e.ENTER) {
                        me.getEtiquetaForm().down("textfield[name=qtde]").focus();
                    }
                }
            }
        });
    },
    adicionarEtiquetas: function (btn) {
        var janela = btn.up("window");
        janela.setLoading("Adicionando Etiqueta");
        var store = Ext.getStore("tempProdutos");
        var produtos = [];
        var valores = {};
        store.each(function (rec) {
            if (rec.get("qtde") > 0) {
                produtos.push(rec.getData());
            }
        });
        var grid = this.getListaProdutoEtiqueta();
        var cfgEtiquetadora = Illi.app.Local.get('cfgEtiquetadora');
        var cfgCodigoExibicao = false;
        var cfgModelo = false;
        if (cfgEtiquetadora !== undefined && cfgEtiquetadora.codigo_exibicao !== undefined) {
            cfgCodigoExibicao = cfgEtiquetadora.codigo_exibicao;
            cfgModelo = cfgEtiquetadora.modelo;
        }
        valores.campo_codigo = cfgCodigoExibicao;
        valores.modelo = cfgModelo;
        valores.produtos = Ext.JSON.encode(produtos);
        Ext.Ajax.request({
            url: "../produto/etiqueta/ijson/alterar_grade",
            params: valores,
            failure: function () {
                Illi.app.Util.mensagemFalha();
                grid.setLoading(false);
            },
            success: function (response) {
                var retorno = Ext.JSON.decode(response.responseText);
                if (retorno.success) {
                    Ext.getStore("Etiquetas").load();
                    janela.close();
                } else {
                    janela.setLoading(false);
                    Illi.app.Util.mensagemFalha(retorno.message);
                }
            }
        });
    },
    limpar: function () {
        var grid = this.getListaProdutoEtiqueta();
        Ext.Ajax.request({
            url: "../produto/etiqueta/ijson/limpar",
            failure: function () {
                Illi.app.Util.mensagemFalha();
                grid.setLoading(false);
            },
            success: function (response) {
                Ext.getStore("Etiquetas").load();
                grid.setLoading(false);
            }
        });
    },
    adicionar: function (combo) {
        var imprimir = combo.up('#janelaEtiqueta').down('#imprimir');
        imprimir.setDisabled(false);
        var janela = combo.up('#janelaEtiqueta');
        var form = janela.down('form');
        var grid = this.getListaProdutoEtiqueta();

        if (form.getForm().isValid()) {
            var comboProduto = form.down('#id_produto');
            var cfgEtiquetadora = Illi.app.Local.get('cfgEtiquetadora');
            var cfgCodigoExibicao = false;
            var cfgModelo = false;
            if (cfgEtiquetadora !== undefined && cfgEtiquetadora.codigo_exibicao !== undefined) {
                cfgCodigoExibicao = cfgEtiquetadora.codigo_exibicao;
                cfgModelo = cfgEtiquetadora.modelo;
            }
            grid.setLoading("Adicionando Etiqueta");
            var valores = form.getForm().getFieldValues();
            valores.campo_codigo = cfgCodigoExibicao;
            valores.modelo = cfgModelo;
            Ext.Ajax.request({
                url: "../produto/etiqueta/ijson/alterar",
                params: valores,
                failure: function () {
                    Illi.app.Util.mensagemFalha();
                    grid.setLoading(false);
                },
                success: function (response) {
                    var retorno = Ext.JSON.decode(response.responseText);
                    if (retorno.success) {
                        Ext.getStore("Etiquetas").load();
                        comboProduto.focus().setValue(null);
                        comboProduto.focus();
                    } else {
                        if (retorno.data) {
                            var store = Ext.create('Ext.data.ArrayStore', {
                                storeId: 'tempProdutos',
                                autoSync: true,
                                fields: [
                                    {name: 'id_produto'},
                                    {name: 'descricao'},
                                    {name: 'marca'},
                                    {name: 'valor'},
                                    {name: 'qtde'}
                                ]
                            });
                            retorno.data.forEach(function (linha) {
                                try {
                                    var prod = {
                                        id_produto: linha.id,
                                        descricao: linha.produto.descricao + (linha.gradex ? " " + linha.gradex.nome : "") + (linha.gradey ? " " + linha.gradey.nome : ""),
                                        marca: linha.produto.marca.nome,
                                        valor: linha.precoVenda.valor,
                                        qtde: 0
                                    };
                                    store.add(prod);
                                } catch (err) {
                                    error(err);
                                }
                            });
                            Ext.create('Ext.window.Window', {
                                title: 'Selecione os Produtos',
                                width: "95%",
                                height: "95%",
                                autoShow: true,
                                border: false,
                                modal: true,
                                layout: 'fit',
                                items: {
                                    xtype: Ext.create('Illi.view.produto.etiqueta.pesquisa.Lista', {
                                        store: store
                                    })
                                }
                            });
                        } else {
                            Ext.MessageBox.show({
                                title: 'Aviso',
                                msg: "Produto nao Localizado: " + valores.nome,
                                autoScroll: true,
                                icon: Ext.MessageBox.ERROR,
                                buttons: Ext.MessageBox.OK,
                                fn: function (btn, ev) {
                                    comboProduto.focus();
                                }
                            });
                        }
                    }
                    grid.setLoading(false);
                }
            });
        } else {
            form.down("textfield[name=qtde]").focus();
        }
    },
    imprimir: function (btn) {
        var cfgEtiquetadora = Illi.app.Local.get('cfgEtiquetadora');
        var janela = btn.up('#janelaEtiqueta');
        var btnImprimir = janela.down('#imprimir');
        var modeloEtiqueta = janela.down('#modeloEtiqueta'); //.getValue();
        if (modeloEtiqueta.valueModels) {
            var modelo = modeloEtiqueta.valueModels[0].data;
            var doFalha = function (response) {
                error(response);
                Ext.MessageBox.show({
                    title: 'Aviso Importante',
                    msg: "Ocorreu Um erro!</br> Tente Novamente se o Problema Pesistir entre em contato com o Suporte!.",
                    autoScroll: true,
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.MessageBox.OK
                });
            };
            if (modelo.saida === "BARTENDER") {
                if (cfgEtiquetadora !== undefined && cfgEtiquetadora.servidor !== undefined) {
                    var servidor = 'http://' + cfgEtiquetadora.servidor
                    try {
                        Ext.MessageBox.wait('Preparando Impressão', 'Aguarde...');
                        Ext.Ajax.request({
                            url: '../produto/etiqueta/ijson/pre_imprimir',
                            method: 'POST',
                            success: function (retorno) {
                                if (retorno && retorno.responseText) {
                                    retorno = Ext.JSON.decode(retorno.responseText);
                                    if (retorno.success) {
                                        Ext.MessageBox.wait('Gerando Impressão', 'Aguarde...');
                                        var usuario = retorno.success;
                                        var data = retorno.data;
                                        var usuario = data.usuario;
                                        var impressao = data.impressao;
                                        Ext.Ajax.request({
                                            url: servidor,
                                            method: 'POST',
                                            params: {
                                                'usuario': (usuario ? usuario : ''),
                                                'modelo': (modelo.url ? modelo.url : ''),
                                                'imprimir': (impressao ? impressao : '')
                                            },
                                            success: function (data) {
                                                if (data && data.responseText) {
                                                    data = Ext.JSON.decode(data.responseText);
                                                    if (data.finalizado) {
                                                        Ext.MessageBox.hide();
                                                        Ext.MessageBox.show({
                                                            title: 'Aviso',
                                                            msg: "Etiquetas Emitidas com Sucesso!",
                                                            autoScroll: true,
                                                            buttons: Ext.MessageBox.OK
                                                        });
                                                    } else {
                                                        doFalha(data.observacao);
                                                    }
                                                }
                                            },
                                            failure: doFalha
                                        });
                                    } else {
                                        doFalha(retorno.message);
                                    }
                                } else {
                                    doFalha("Retornou nenhuma informação!");
                                }
                            },
                            failure: doFalha
                        });
                    } catch (e) {
                        doFalha(e);
                    }
                } else {
                    doFalha("Servidor não definido!");
                }
            } else {
                Ext.MessageBox.wait('Gerando Impressão', 'Aguarde...');
                Ext.Ajax.request({
                    url: '../produto/etiqueta/ijson/imprimir',
                    params: {
                        configuracao: Ext.JSON.encode(cfgEtiquetadora),
                        modelo: modeloEtiqueta.getValue()
                    },
                    failure: function () {
                        Illi.app.Util.mensagemFalha();
                    },
                    success: function (response) {
                        Ext.MessageBox.hide();
                        Ext.create('Ext.Window', {
                            title: 'Visualizar',
                            width: "95%",
                            height: "98%",
                            plain: true,
                            modal: true,
                            win: this,
                            autoScroll: true,
                            frame: false,
                            html: response.responseText
                        }).show();
                    }
                });
            }
        }
    },
    setConfiguracaoImpressoraEtiqueta: function (formulario, sucesso, falha) {
        var control = this;
        Ext.MessageBox.wait('Salvando Configuração...', 'Aguarde!');
        setTimeout(function () {
            try {
                Illi.app.Local.set('cfgEtiquetadora', formulario);
                Ext.MessageBox.hide();
                sucesso(false);
            } catch (e) {
                error(e);
                Ext.MessageBox.hide();
                Ext.MessageBox.alert('Atenção', 'Problemas em salvar a configuração, tente novamente!', falha);
            }
        }, 250);
    },
    janelaConfiguracaoImpressoraEtiquetaExibir: function () {
        var control = this;
        control.janelaConfiguracaoImpressoraEtiqueta = Ext.widget('janelaConfiguracaoImpressoraEtiqueta');
        control.formularioConfiguracaoImpressoraEtiqueta = Ext.widget('formularioConfiguracaoImpressoraEtiqueta');
        control.janelaConfiguracaoImpressoraEtiqueta.removeAll();
        control.janelaConfiguracaoImpressoraEtiqueta.add(control.formularioConfiguracaoImpressoraEtiqueta);
        control.janelaConfiguracaoImpressoraEtiqueta.show();
    },
    janelaConfiguracaoImpressoraEtiquetaConfirmar: function () {
        var control = this;
        var form = control.formularioConfiguracaoImpressoraEtiqueta.getForm();
        var validou = form.isValid();
        if (validou) {
            var formulario = form.getFieldValues();
            var sucesso = function (response) {
                control.janelaConfiguracaoImpressoraEtiquetaOcultar();
            };
            var falha = Ext.emptyFn;
            control.setConfiguracaoImpressoraEtiqueta(formulario, sucesso, falha);
        }
    },
    janelaConfiguracaoImpressoraEtiquetaOcultar: function () {
        var control = this;
        control.janelaConfiguracaoImpressoraEtiqueta.hide();
    }
});