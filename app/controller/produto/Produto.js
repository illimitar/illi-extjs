Ext.define('Illi.controller.produto.Produto', {
    extend: 'Illi.controller.AbstractController',
    stores: ['produto.Produtos'],
    models: ['produto.Produto'],
    views: [
        'produto.produto.Container',
        'produto.produto.Lista',
        'produto.produto.Janela',
        'produto.produto.Form',
        'produto.grade.Tab',
        'produto.produto.ListaProdutoGrade',
        'produto.produto.ListaProdutoPreco',
        'produto.preco_produto.Form',
        'produto.produto.JanelaGrade',
        'produto.produto.FormTributacao'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaProduto'
        },
        {
            ref: 'listaProduto',
            selector: 'listaProduto'
        },
        {
            ref: 'produtoJanela',
            selector: 'produtoJanela'
        },
        {
            ref: 'listaProdutoGrade',
            selector: 'listaProdutoGrade'
        },
        {
            ref: 'listaProdutoPreco',
            selector: 'listaProdutoPreco'
        },
        {
            ref: 'produtoForm',
            selector: 'produtoForm'
        },
        {
            ref: 'formTributacao',
            selector: 'formTributacao'
        }

    ],
    init: function() {
        var me = this;
        me.control({
            'produtoForm textfield[name=p.tipo]': {
                select: me.ocultaTabGrade
            },
            'listaProduto': {
                itemdblclick: me.editar
            },
            'listaProduto actioncolumn': {
                click: me.editar
            },
            'listaProduto button[action=excel]': {
                click: me.excel
            },
            'listaProduto button[action=incluirProduto]': {
                click: me.incluirProduto
            },
            'listaProduto button[action=incluirProdutoFormulario]': {
                click: me.incluirProdutoFormulario
            },
            'listaProduto button[action=duplicarProduto]': {
                click: me.duplicarProduto
            },
            'listaProduto button[action=excluir]': {
                click: me.excluir
            },
            'listaProduto button[action=atualizar]': {
                click: me.atualizar
            },
            'listaProduto button[action=formacaoPreco]': {
                click: me.formacaoPreco
            },
            'listaProduto button[action=listarParecer]': {
                click: me.listarParecer
            },
            'produtoJanela button[action=salvar]': {
                click: me.salvar
            },
            'produtoJanela button[action=salvarImposto]': {
                click: me.salvarImposto
            },
//            'produtoJanela button[action=salvarDuplicar]': {
//                click: me.salvarDuplicar
//            },
            'listaProdutoGrade button[action=gerarGrade]': {
                click: me.gerarGrade
            },
            'listaProdutoGrade button[action=precoGrade]': {
                click: me.alterarPrecoGrupo
            },
            'listaProdutoGrade button[action=selecionarTodos]': {
                click: me.selecionarTodos
            },
            'listaProdutoPreco button[action=gerarGradePreco]': {
                click: me.gerarGradePreco
            },
            'listaProdutoPreco button[action=alterarPrecoGrupo]': {
                click: me.alterarPrecoGrupo
            },
            'listaProdutoPreco button[action=salvarPreco]': {
                click: me.salvarPreco
            },
            'listaProdutoGrade button[action=salvarGrade]': {
                click: me.salvarGrade
            },
            'listaProdutoGrade #comboGradex': {
                select: me.gerarGrade
            },
            'listaProdutoGrade #comboGradey': {
                select: me.gerarGrade
            },
            'listaProdutoGrade #complementoGrade': {
                click: me.janelaTabGrade
            }
        });
    },
    incluirProdutoFormulario: function() {
        Ext.create('Illi.view.produto.produto.Janela');
    },
    selecionarTodos: function(btn) {
        var grid = this.getListaProdutoGrade();
        var janela = btn.up('#produtoJanela');
        janela.selecionaTodos = (janela.selecionaTodos ? 0 : 1);
        grid.setLoading(true);
        Ext.Ajax.request({
            url: '../produto/produto/iJson/situacao_produto',
            params: {
                id_produto: janela.id_produto,
                situacao: janela.selecionaTodos
            },
            success: function(response) {
                var retorno = Ext.JSON.decode(response.responseText);
                janela.down('#gerarGrade').fireHandler();
                grid.setLoading(false);
                if (retorno) {
                    var tipo = 'error';
                    if (retorno.success) {
                        tipo = 'success';
                    }
                    Ext.ux.Msg.flash({
                        type: tipo,
                        msg: retorno.message
                    });
                }
            },
            failure: function() {
                Ext.ux.Msg.flash({
                    type: 'error',
                    msg: "Ocorreu um erro tente novamente!"
                });
                grid.setLoading(false);
            }
        });
    },
    ocultaTabGrade: function(combo) {
        var janela = this.getProdutoJanela();
        var tipo = null;
        try {
            tipo = combo.getValue();
        } catch (e) {
            error(e);
            tipo = combo;
        }
        this.ocultaValores(tipo);
        if (tipo === 'Grade') {
            this.fechaTab('#tabCodigoBarra');
            this.fechaTab('#tabPreco');
            this.abreTab('#tabGrade');
        } else {
            if (janela.id_produto) {
                this.abreTab('#tabCodigoBarra');
                this.abreTab('#tabPreco');
            }
            this.fechaTab('#tabGrade');
        }
    },
    ocultaValores: function(tipo) {
        var janela = this.getProdutoJanela();
        var comboTipo = null;
        try {
            comboTipo = janela.produto['p.tipo'];
        } catch (e) {
            error(e);
            comboTipo = tipo;
        }

//        if (comboTipo === 'Grade') {
//            Ext.select('.ocultaGrade').hide();
//        } else {
//            Ext.select('.ocultaGrade').show();
//        }
    },
    abreTab: function(id) {
        var tabpanel = this.getProdutoJanela().down('#tabProduto');
        if (!tabpanel.down(id)) {
            eval("tabpanel.add(this." + id.replace("#", "") + "(this.getProdutoJanela().id_produto));");
        }
    },
    fechaTab: function(id) {
        var tabpanel = this.getProdutoJanela().down('#tabProduto');
        if (tabpanel.down(id)) {
            tabpanel.down(id).close();
        }
    },
    gerarGrade: function(btn) {
        var grid = this.getListaProdutoGrade();
        var janela = btn.up('#produtoJanela');
        var gradex = btn.up('toolbar').down('#comboGradex').getValue();
        var gradey = btn.up('toolbar').down('#comboGradey').getValue();
        if (janela.id_produto && gradex) {
            Ext.Ajax.request({
                url: '../produto/grupo_grade/iJson/grade',
                params: {
                    gradex: gradex,
                    gradey: gradey,
                    id_produto: janela.id_produto
                },
                success: function(response) {
                    var retorno = Ext.JSON.decode(response.responseText);
                    var storeGrid = Ext.create('Ext.data.ArrayStore', {
                        storeId: 'gradeProduto',
                        autoSync: true,
                        fields: retorno.cabecalho
                    });
                    var cabecalho = [];
                    Ext.Object.each(retorno.cabecalho, function(key, value, myself) {
                        value.editor = {
                            xtype: 'checkbox'
                        };
                        value.renderer = function(data) {
                            return (data === true ? 'SIM' : (data === false ? 'NÃO' : data));
                        };
                        cabecalho.push(value);
                    });
                    storeGrid.add(retorno.matriz);
                    //Illi.callLog('itens grade', retorno.matriz, retorno.cabecalho);
                    grid.tabela = retorno.tabela;
                    grid.reconfigure(storeGrid, cabecalho);
                }
            });
        }
    },
    gerarGradePreco: function(btn) {
        var grid = this.getListaProdutoPreco();
        if (grid.id_produto) {
            Ext.Ajax.request({
                url: '../produto/preco/iJson/lista_preco_produto_grade',
                params: {
                    id_produto_grade: grid.id_produto_grade
                },
                success: function(response) {
                    var retorno = Ext.JSON.decode(response.responseText);
                    var preco_unico = (retorno.preco_unico === 1 ? true : false);
//                    retorno.cabecalho.push({
//                        menuDisabled: true,
//                        sortable: false,
//                        editor: false,
//                        xtype: 'actioncolumn',
//                        width: 30,
//                        flex: false,
//                        header: ' ',
//                        scope: grid,
//                        items: [
//                            {
//                                icon: '../resources/images/icones/acao/editar.png',
//                                tooltip: 'Formação de Preço',
//                                handler: function(grids, rowIndex, colIndex) {
//                                    var store = grid.getStore();
//                                    var records = grid.getStore().getAt(rowIndex);
//                                    var janelaValor = Ext.create('Illi.view.produto.preco_produto.Janela', {
//                                        valorTitulo: records.get('valor_titulo'),
//                                        listeners: {
//                                            beforehide: function() {
//                                                grid.store.load();
//                                            }
//                                        }
//                                    });
//                                    var form = janelaValor.down('form');
//                                    form.getForm().loadRecord(records);
//                                }
//                            }]
//                    });
                    var storeGrid = Ext.create('Ext.data.ArrayStore', {
                        storeId: 'listaPrecoProdutoGrade', // (grid.storeNome !== undefined ? grid.storeNome : )
                        autoSync: true,
                        fields: retorno.cabecalho
                    });
//                    Ext.Object.each(retorno.cabecalho, function(key, value, myself) {
//                        value.editor = {
//                            xtype: 'checkbox'
//                        };
//                        value.renderer = function(data) {
//                            return (data === true ? 'SIM' : (data === false ? 'NÃO' : data));
//                        };
//                        cabecalho.push(value);
//                    });
                    storeGrid.add(retorno.dados);
                    grid.reconfigure(storeGrid, retorno.cabecalho);
                }
            });
        }
    },
    salvarGrade: function(btn) {
        var grid = this.getListaProdutoGrade();
        var janela = btn.up('#produtoJanela');
        var gradeProduto = Ext.getStore('gradeProduto');
        var gradex = btn.up('toolbar').down('#comboGradex').getValue();
        var gradey = btn.up('toolbar').down('#comboGradey').getValue();
        var record = [];
        gradeProduto.each(function(rec) {
            record.push(rec.getData());
        });
        btn.setDisabled(true);
        btn.setText('Aguarde ...');
        Ext.Ajax.request({
            url: '../produto/produto/iJson/salvar_grade',
            params: {
                data: Ext.JSON.encode(record),
                id_produto: janela.id_produto,
                gradex: gradex,
                gradey: gradey
            },
            success: function(response) {
                var retorno = Ext.JSON.decode(response.responseText);
                btn.setText('Salvar Grade');
                btn.setDisabled(false);
                janela.down('#gerarGrade').fireHandler();
                if (retorno) {
                    var tipo = 'error';
                    if (retorno.success) {
                        tipo = 'success';
                    }
                    Ext.ux.Msg.flash({
                        type: tipo,
                        msg: retorno.message
                    });
                }
            }
        });
    },
    salvarPreco: function(btn) {
        var grid = this.getListaProdutoPreco();
        var precoProduto = grid.getStore(); //Ext.getStore((grid.storeNome !== undefined ? grid.storeNome : 'listaPrecoProdutoGrade'));
        var record = [];
        precoProduto.each(function(rec) {
            record.push(rec.getData());
        });
        btn.setDisabled(true);
        btn.setText('Aguarde ...');
        Ext.Ajax.request({
            url: '../produto/produto/iJson/salvar_preco',
            params: {
                data: Ext.JSON.encode(record),
                id_produto: grid.id_produto,
                id_produto_grade: grid.id_produto_grade
            },
            success: function(response) {
                var retorno = Ext.JSON.decode(response.responseText);
                btn.setText('Salvar Grade');
                btn.setDisabled(false);
                if (retorno) {
                    var tipo = 'error';
                    if (retorno.success) {
                        tipo = 'success';
                    }
                    Ext.ux.Msg.flash({
                        type: tipo,
                        msg: retorno.message
                    });
                }
            }
        });
    },
    editar: function(me, dom, row, c) {
        if (!isNaN(row)) {
            var grid = this.getListaProduto();
            if (grid.editingPlugin) {
                grid.editingPlugin.cancelEdit();
            }
            var selecaoModel = false;
            try {
                var store = Ext.getStore('produto.Produtos');
                selecaoModel = store.getAt(row);
            } catch (err) {
                error(err);
            }

            if (selecaoModel) {
                var janela = Ext.create('Illi.view.produto.produto.Janela', {
                    id_produto_grade: selecaoModel.get('id'),
                    id_produto: selecaoModel.get('p.id'),
                    gradex: selecaoModel.get('ggx.id'),
                    gradey: selecaoModel.get('ggy.id'),
                    produto: selecaoModel.getData()
                });
                var formProduto = janela.down('#formProduto');
                var formTributacao = janela.down('#formTributacao');

                try {
                    var tributacao = (selecaoModel.raw.produto.tributacao ? selecaoModel.raw.produto.tributacao : false);
                    if (tributacao) {
                        alert(tributacao);
                        formTributacao.getForm().setValues(tributacao);
                    }
                } catch (err) {
                    error(err);
                }
                selecaoModel.set('p.tipo', (selecaoModel.get('p.tipo') ? selecaoModel.get('p.tipo') : "Acabado"));
                selecaoModel.set('p.situacao', (selecaoModel.get('p.situacao') ? selecaoModel.get('p.situacao') : "ATIVO"));
                formProduto.getForm().loadRecord(selecaoModel);
                janela.down('#tipoProduto').setDisabled(selecaoModel.get('id') ? true : false);
                janela.down('#tituloJanelaProduto').setText('Cadastro de Produto : ' + selecaoModel.get('id'));
                this.ocultaTabGrade(selecaoModel.get('p.tipo'));
                if (selecaoModel.get('p.tipo') === 'Grade') {
                    this.ocultaValores();
                    janela.down('#tabProduto').add(this.tabGrade(selecaoModel.get('p.id')));
                    janela.down('#comboGradex').setValue(selecaoModel.get('ggx.id'));
                    janela.down('#comboGradey').setValue(selecaoModel.get('ggy.id'));
                } else {
                    if (janela.down('#tabGrade')) {
                        janela.down('#tabGrade').close();
                    }
                }
                janela.show();
                return false;
            }
        }

    },
    incluirProduto: function(btn, evt, opt) {
        try {
            var grid = this.getListaProduto();
            var store = grid.store;
            var model = store.model;
            model['pg.situacao'] = 1;
            store.insert(0, model);
            grid.editingPlugin.cancelEdit();
            grid.editingPlugin.startEdit(0, 0);
            return false;
        } catch (err) {
            console.error(err);
            return false;
        }

    },
    duplicarProduto: function(button) {
        var grid = this.getListaProduto();
        var store = grid.getStore();
        if (grid.getSelectionModel().getSelection()[0] !== undefined) {
            var records = grid.getSelectionModel().getSelection()[0].getData();
            records.id = null;
            records.codigo = null;
            records['p.id'] = null;
            records['g.nome'] = records['g.id'];
            records['c.nome'] = records['c.id'];
            records['u.nome'] = records['u.id'];
            store.insert(0, records);
            grid.editingPlugin.startEdit(0, 0);
        } else {
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
        }
    },
    salvar: function(btn) {
        var janela = btn.up('#produtoJanela');
        janela.el.mask('Salvando!');
        var form = janela.down('form');
        var validado = true;
        var me = this;
        var dados = form.getForm().getFieldValues();
        if (dados['p.tipo'] === 'Grade') {
            var gradex = janela.down('#comboGradex').getValue();
            var gradey = janela.down('#comboGradey').getValue();
            if (!gradex) {
                var gradex = janela.down("#listaProdutoGrade").down('[name=gradex]');
                if (!gradex.getValue()) {
                    janela.down('tabpanel').setActiveTab(2);
                    gradex.markInvalid("Campo obrigtório!");
                    gradex.focus(true, 400);
                }
                validado = false;
            } else {
                dados.grupoGradex = gradex;
                dados.grupoGradey = gradey;
                dados['ggx.id'] = gradex;
                dados['ggx.nome'] = gradex;
                dados['ggy.id'] = gradey;
                dados['ggy.nome'] = gradey;
            }
        }

        if (form.getForm().isValid() && validado) {
            var store = Ext.getStore("produto.Produtos");
            if (!dados.id) {
                store.add(dados);
            } else {
                var record = store.findRecord('id', dados.id);
                try {
                    record.set(dados);
                    record.setDirty();
                } catch (err) {
                    error(err);
                }

            }
            store.sync({
                callback: function() {
                    janela.unmask();
                },
                success: function() {
                    var retorno = this.getReader().jsonData;
                    if (retorno.success) {
                        janela.down('#tipoProduto').setDisabled(retorno.data.id_produto ? true : false);
                        janela.id_produto_grade = retorno.data.id_produto_grade;
                        janela.id_produto = retorno.data.id_produto;
                        janela.produto = retorno.data;
                        form.down('#id_produto_grade').setValue(retorno.data.id_produto_grade);
                        janela.down('#tituloJanelaProduto').setText('Cadastro de Produto : ' + retorno.data.id_produto_grade);
                        if (retorno.data.id_produto && dados['p.tipo'] === 'Grade') {
                            janela.down('#gerarGrade').fireHandler();
                            var gridProdutoGrade = me.getListaProdutoGrade();
                            gridProdutoGrade.verificarProduto();
                            janela.down('#tabProduto').add(me.tabGrade(retorno.data.id_produto));
                        } else {
                            if (janela.down('#tabGrade')) {
                                janela.down('#tabGrade').close();
                            }
                        }
                        me.ocultaTabGrade(retorno.data['p.tipo']);
                        store.load();
                        janela.unmask();
                    }
                }
            });
        } else {
            janela.unmask();
        }
    },
    salvarImposto: function(btn) {
        var me = this;
        var janela = btn.up('#produtoJanela');
        var form = janela.down('#formTributacao');
        var dados = form.getForm().getFieldValues();
        dados.id_produto = (janela.id_produto ? janela.id_produto : false);

        if (form.getForm().isValid() && dados.id_produto) {
            if (form.getForm().isValid()) {
                btn.setDisabled(true);
                btn.setText("Salvando Aguarde...");
                Ext.Ajax.request({
                    url: '../produto/tributacao/iJson/alterar',
                    params: {
                        data: Ext.JSON.encode(dados)
                    },
                    success: function(response) {
                        var retorno = Ext.JSON.decode(response.responseText);
                        btn.setDisabled(false);
                        btn.setText("Salvar");
                        if (retorno) {
                            var tipo = 'error';
                            if (retorno.success) {
                                tipo = 'success';
                            }
                            Ext.ux.Msg.flash({
                                type: tipo,
                                msg: retorno.message
                            });
                        }
                    },
                    failure: function(ret) {
                        Ext.ux.Msg.flash({
                            type: 'error',
                            msg: 'Selecione um item da Grade Ativo!'
                        });
                    }
                });
            }
        } else {
            janela.unmask();
        }
    },
    formacaoPreco: function(btn) {
        var grid = this.getListaProduto();
        var selecaoModel = grid.getSelectionModel().getSelection()[0];
        var janela = Ext.create('Illi.view.produto.produto.JanelaGrade', {
            itemId: 'produtoJanelaProdutoPreco',
            autoShow: false,
            id_produto_grade: selecaoModel.get('id'),
            id_produto: selecaoModel.get('p.id'),
            gradex: selecaoModel.get('ggx.id'),
            gradey: selecaoModel.get('ggy.id'),
            produto: selecaoModel.getData(),
            titulo: 'Formação Preço do Produto: ' + selecaoModel.get('p.id'),
            items: [
                {
                    xtype: 'listaProdutoPreco',
                    id_produto_grade: selecaoModel.get('id'),
                    id_produto: selecaoModel.get('p.id'),
                    title: false,
                    border: false
                }
            ],
            listeners: {
                beforeclose: function() {
                    Ext.getStore("produto.Produtos").load();
                }
            }
        });
        this.gerarGradePreco();
        janela.show();
    },
//    salvarDuplicar: function(btn) {
//        var janela = btn.up('#produtoJanela');
//        var form = janela.down('form');
//        if (form.getForm().isValid()) {
//            btn.setDisabled(true);
//            btn.setText('Aguarde ...');
//            var dados = form.getForm().getFieldValues();
//            var store = Ext.getStore("produto.Produtos");
//            if (dados.id) {
//                var record = store.findRecord('id', dados.id);
//                record.set(dados);
//                record.setDirty();
//            } else {
//                store.add(dados);
//            }
//            store.sync({
//                callback: function() {
//                    dados.id = undefined;
//                    form.getForm().setValues(dados);
//                    form.down('textfield[name=codigo]').focus(true, 400).setValue('');
//                    btn.setDisabled(false);
//                    btn.setText('Salvar e Duplicar');
//                },
//                success: function() {
//                    var retorno = this.getReader().jsonData;
//                    janela.id_produto_grade = retorno.data;
//                }
//            });
//        }
//    },
    tabGrade: function(id_produto) {
        var janela = this.getProdutoJanela();
        if (!janela.down('#tabGrade')) {
            return {
                itemId: 'tabGrade',
                border: false,
                bodyBorder: false,
                title: 'Grade',
                scope: this,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'listaProdutoGrade',
                        flex: 1
                    }
                ],
                listeners: {
                    activate: function() {
                        this.down('#gerarGrade').fireHandler();
                    }
                }
            };
        }
    },
    tabCodigoBarra: function(id_produto) {
        var janela = this.getProdutoJanela();
        if (!janela.down('#tabCodigoBarra')) {
            return {
                itemId: 'tabCodigoBarra',
                border: false,
                bodyBorder: false,
                title: 'Codigo de Barra',
                scope: this,
                disabled: (janela.id_produto ? false : true),
                layout: 'fit',
                items: [
                    {
                        xtype: 'listaCodigoBarra',
                        title: false,
                        border: false,
                        itemId: 'listaCodigoBarra',
                        store: (janela.id_produto ? Ext.create('Illi.store.produto.CodigoBarraProdutos', {storeId: janela.id_produto + 'listaCodigo', autoLoad: false}) : false),
                        ocultaFiltro: true
                    }
                ],
                listeners: {
                    activate: function() {
                    },
                    afterrender: function() {
                    }
                }
            };
        }
    },
    tabPreco: function(id_produto) {
        var janela = this.getProdutoJanela();
        return {
            itemId: 'tabPreco',
            border: false,
            bodyBorder: false,
            title: 'Formação Preço',
            disabled: (janela.id_produto ? false : true),
            scope: this,
            layout: 'fit',
            items: [
                {
                    xtype: 'listaProdutoPreco',
                    id_produto: janela.id_produto,
                    id_produto_grade: janela.id_produto_grade,
                    title: false,
                    border: false
                }
            ],
            listeners: {
                activate: function() {
                    this.down('#gerarGradePreco').fireHandler();
                }
            }
        };
    },
    janelaTabGrade: function() {
        var janelaProduto = this.getProdutoJanela();
        if (janelaProduto.id_produto_grade) {
            var janela = Ext.create('Illi.view.produto.produto.JanelaGrade', {
                titulo: janelaProduto.descricao,
                id_produto_grade: janelaProduto.id_produto_grade,
                id_produto: janelaProduto.id_produto,
                gradex: janelaProduto.gradex,
                gradey: janelaProduto.gradey,
                produto: janelaProduto.produto,
                items: [{
                        xtype: 'tabpanel',
                        itemId: 'tabProdutoGrade',
                        disabled: (janelaProduto.id_produto ? false : true),
                        flex: 1.5,
                        width: '100%',
                        height: '100%',
                        border: false,
                        bodyBorder: false,
                        title: false,
                        items: [
                            this.tabCodigoBarra(),
                            this.tabPreco()
                        ]
                    }
                ]
            });
            janela.show();
        } else {
            Ext.ux.Msg.flash({
                type: 'error',
                msg: 'Selecione um item da Grade Ativo!'
            });
        }
    },
    alterarPrecoGrupo: function(botao) {
        var grid = this.getListaProdutoPreco();
        var id_produto_grade = false;
        if (grid) {
            id_produto_grade = grid.id_produto_grade;
        } else {
            id_produto_grade = botao.up("produtoJanela").id_produto_grade;
        }
        if (id_produto_grade) {
            var janela = Ext.create('Illi.view.AbstractJanela', {
                titulo: 'Formação de Preço por Grupo de Empresa',
                width: 450,
                height: 150,
                listeners: {
                    beforeclose: function() {
                        if (!botao.grade) {
                            delete Ext.getStore("listaPrecoProdutoGrade");
                            grid.down('#gerarGradePreco').fireHandler();
                        }
                    }
                }
            });
            var form = Ext.create('Illi.view.produto.preco_produto.FormGrupo');
            janela.add(form);
            var btn = janela.down('#salvar');
            btn.addListener('click', function() {
                var dados = form.getForm().getFieldValues();
                if (form.getForm().isValid()) {
                    btn.setDisabled(true);
                    btn.setText("Salvando Aguarde...");
                    Ext.Ajax.request({
                        url: '../produto/produto/iJson/salvar_preco_grupo',
                        params: {
                            data: Ext.JSON.encode(dados),
                            id_produto_grade: grid.id_produto_grade,
                            grade: botao.grade,
                            id_produto: grid.id_produto
                        },
                        success: function(response) {
                            var retorno = Ext.JSON.decode(response.responseText);
                            btn.setDisabled(false);
                            btn.setText("Salvar");
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
            });
            janela.show();
        } else {
            Ext.ux.Msg.flash({
                type: 'error',
                msg: 'Selecione um Produto Ativo!'
            });
        }
    },
    listarParecer: function(btn, evt, opt) {
        var grid = this.getGridIlli();
        var records = grid.getSelectionModel().getSelection();
        alert(records[0].data['p.id'], records[0].data);
        if (records[0].data.id) {
            Ext.create('Illi.view.financeiro.parecer.Janela', {
                id_produto: records[0].data['p.id'],
                nome: (records[0].data['descricao'] ? records[0].data['descricao'] : records[0].data['p.id'])
            }).show();
        }
    }
});