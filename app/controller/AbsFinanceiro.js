Ext.require('Ext.window.MessageBox');
Ext.define('Illi.controller.AbsFinanceiro', {
    extend: 'Illi.controller.AbstractController',
    views: [
        'financeiro.ListBaixa',
        'financeiro.parecer.Lista'
    ],
    constructor: function() {
        var me = this,
                refPadrao;
        me.listBaixa = '#' + me.modulo + 'Baixa';
        refPadrao = [
            {
                ref: 'gridIlli',
                selector: me.modulo
            },
            {
                ref: 'financeiroList',
                selector: me.modulo
            },
            {
                ref: me.listBaixa,
                selector: me.listBaixa
            },
            {
                ref: 'parecerJanela',
                selector: me.modulo + ' parecerJanela'
            }


        ];

        me.refs = me.refs ? Ext.Array.merge(me.refs, refPadrao) : refPadrao;
        me.callParent(arguments);
    },
    init: function() {
        var me = this,
                listeners = {};

        listeners[me.modulo] = {
            itemdblclick: me.edit
        };
        listeners[me.modulo + ' button[action=incluir]'] = {
            click: me.incluir
        };
        listeners[me.modulo + ' button[action=edit]'] = {
            click: me.edit
        };
        listeners[me.modulo + ' button[action=excluir]'] = {
            click: me.excluir
        };
        listeners[me.modulo + ' button[action=duplicar]'] = {
            click: me.duplicar
        };
        listeners[me.modulo + ' button[action=arquivar]'] = {
            click: me.arquivar
        };
        listeners[me.modulo + ' button[action=multiplicar]'] = {
            click: me.multiplicar
        };
        listeners[me.modulo + ' button[action=atualizar]'] = {
            click: me.atualizar
        };
        listeners[me.modulo + ' button[action=salvar]'] = {
            click: me.salvar
        };
        listeners[me.modulo + ' button[action=baixarTitulo]'] = {
            click: me.baixarTitulo
        };
        listeners[me.modulo + ' button[action=estornarPreBaixa]'] = {
            click: me.estornarPreBaixa
        };
        listeners[me.modulo + ' button[action=estornar]'] = {
            click: me.estornar
        };
        listeners[me.modulo + ' button[action=imprimir]'] = {
            click: me.imprimir
        };
        listeners[me.modulo + ' button[action=excel]'] = {
            click: me.excel
        };
        listeners[me.modulo + ' button[action=relatorio]'] = {
            click: me.relatorio
        };
        listeners[me.modulo + ' button[action=listarParecer]'] = {
            click: me.listarParecer
        };
        listeners[me.listBaixa + ' button[action=baixarSelecionados]'] = {
            click: me.baixarSelecionados
        };
        listeners[me.listBaixa + ' button[action=preBaixa]'] = {
            click: me.baixarSelecionados
        };
        listeners[me.modulo] = {
            selectionchange: function(view, selected, opts) {
                var grid = view.view.ownerCt;
                if (selected[0]) {
                    grid.selecionar(selected);
                }
            }
        };

        me.listeners = Ext.Object.merge(listeners, me.listeners);
        me.control(me.listeners);

    },
    listarParecer: function(btn, evt, opt) {
        var grid = this.getGridIlli();
        var records = grid.getSelectionModel().getSelection();
        if (btn.getText() === 'Parecer') {
            Ext.create('Illi.view.financeiro.parecer.Janela', {
                id_fluxo: records[0].data.id,
                id_pessoa: records[0].data['p.id'],
                nome: (records[0].data['p.nome'] ? records[0].data['p.nome'] : '')
            }).show();
        } else {
            var selecionados = [];
            for (var i = 0; i < records.length; i++) {
                selecionados.push(records[i].get('id'));
            }
            Ext.create('Illi.view.financeiro.parecer.Form', {
                id_fluxo: selecionados,
                multiplo: true
            }).show();
        }
    },
    multiplicar: function(btn, evt, opt) {
        var grid = this.getGridIlli(),
                records = grid.getSelectionModel().getSelection();

        Ext.create('Illi.view.financeiro.multiplicar.Form', {
            id_fluxo: records[0].data.id,
            data_inicial: records[0].data.data_vencimento,
            id_store: grid.getStore().storeId
        }).show();
    },
    saveNovoTitulo: function(btn, evt, opt) {


    },
//    
//    imprimir:function(){
//        Ext.MessageBox.wait('Gerando Impressão', 'Aguarde...');
//        
//        var grid = this.getGridIlli();
//        var store = grid.getStore();
//        var gridView = grid.getView();
//       
//        
//        store.pageSize = store.getTotalCount()
//        store.load({
//            callback:function(){
//                var win = window.open('', 'printgrid');
//                var header = "<!DOCTYPE HTML> <html> <head> <title>Illi</title> <link rel='stylesheet' href='../resources/css/default/app.css'></head>";
//                var cabecalho = gridView.getHeaderCt().el.dom.innerHTML;
//                var html = header+"<body>"+cabecalho+ gridView.getEl().dom.innerHTML+"</body></html>";
//                win.document.open();
//                win.document.write(html);
//                Ext.MessageBox.hide();
//            }
//                
//        });
//            
//        store.pageSize = 75;
//        store.load();
//      
//    },
    exportarExcel: function() {
        var grid = this.getFinanceiroList();
        var colunas = grid.getView().getGridColumns();
        var cabecalho = [];
        var filtro = [];

        Ext.Object.each(colunas, function(key, value, myself) {
            if (!value.hidden) {
                var item = {};
                if (value.dataIndex) {
                    item.texto = value.text;
                    item.campo = value.dataIndex;
                    cabecalho.push(item);
                }
            }
        });
        cabecalho = Ext.JSON.encode(cabecalho);

        var filtros = grid.filters.getFilterData();
        Ext.Object.each(filtros, function(key, value, myself) {
            if (value) {
                filtro.push(value);
            }


        });

        filtro = Ext.JSON.encode(filtro);



        Ext.MessageBox.wait('Gerando Excel', 'Aguarde...');
        Ext.Ajax.request({
            url: '../excel/excel/setExcel',
            method: 'POST',
            params: {
                filter: filtro,
                cabecalho: cabecalho
            }
            ,
            success: function(arquivo) {


                Ext.MessageBox.hide();
                //Illi.callLog(arquivo.responseText);
                if (arquivo.responseText) {
                    Ext.MessageBox.show({
                        title: 'Baixar Excel',
                        msg: "Arquivo Gerado com Sucesso.",
                        scope: this,
                        buttons: Ext.MessageBox.OK,
                        buttonText: {
                            iconCls: 'icon-excel',
                            ok: "Baixar arquivo"
                        },
                        fn: function() {
                            // window.open ('../application/remessa/'+arquivo.responseText,"Baixar Excel");
                        }

                    });
                }
            }
        });


    },
    incluir: function(btn, evt, opt) {
        var grid = this.getFinanceiroList();
        var store = grid.store;
        var financeiro = Ext.create('Illi.model.Financeiro');
        financeiro.set('nl.id', grid.id_financeiro_lancamento);
        financeiro.set('nl.descricao', grid.id_financeiro_lancamento);
        store.insert(0, financeiro);
        grid.editingPlugin.startEdit(0, 0);

    },
    relatorio: function() {

        var grid = this.getFinanceiroList();
        var data = Ext.encode(grid.filters.getFilterData());
        var dados = grid.filters.getFilterData();


        var filtro = [];
        dados.forEach(function(linha) {
            linha.data.field = linha.field;
            filtro.push(linha.data);

        });

        var values = Ext.JSON.encode(filtro);

        Ext.MessageBox.wait('Gerando Relatório', 'Aguarde...');
        Ext.Ajax.request({
            url: '../relatorios/abs_relatorio/contasApagar',
            params: {
                //cabecalho:cabecalhoPagina,
                illi: 'true',
                filtro: values,
                titulo: 'titulo',
                tipo: 'DESPESA',
                grid: true,
                url: 'relatorios/abs_relatorio/contasApagar'
            }
            ,
            success: function(arquivo) {
                arquivo = (arquivo.responseText);

                Ext.MessageBox.hide();

                Ext.create('Ext.Window', {
                    title: 'Visualizar',
                    width: 800,
                    height: 600,
                    plain: true,
                    modal: true,
                    win: this,
                    autoScroll: true,
                    frame: false,
                    html: arquivo
                }).show();

            }
        });
    },
    excluir: function() {
        var comissao = '';
        var grid = this.getFinanceiroList(),
                records = grid.getSelectionModel().getSelection();

        if (records.length === 0) {
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
            return false;
        } else {
            if (records[0].get('negociado') === 'C') {
                comissao = '<b style="color:red">O titulo foi gerado apartir de comissões.<br> Ao cancelar, todas as comissões serão removidas!</b><br/> Confirma o cancelamento ?';
            }
            Ext.Msg.show({
                title: 'Confirmação',
                msg: (comissao ? comissao : 'Deseja realmente cancelar o titulo :' + records[0].get('id')),
                buttons: Ext.Msg.YESNO,
                icon: Ext.MessageBox.WARNING,
                scope: this,
                width: 450,
                fn: function(btn, ev) {
                    if (btn === 'yes') {
                        var store = this.getFinanceiroList().store;
                        store.remove(records);


                        this.getFinanceiroList().store.sync();
                    }
                }
            });
        }
    },
    estornar: function() {

        var grid = this.getFinanceiroList(),
                records = grid.getSelectionModel().getSelection();
        grid.getSelectionModel().deselectAll();
        var filtro = Ext.JSON.encode(records[0].getData());
        if (records.length === 0) {
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
            return false;
        } else {
            Ext.Msg.show({
                title: 'Confirmação',
                msg: 'Tem certeza que deseja Estornar o registro ' + records[0].getData().numero + " ?",
                buttons: Ext.Msg.YESNO,
                icon: Ext.MessageBox.WARNING,
                scope: this,
                width: 450,
                fn: function(btn, ev) {
                    if (btn === 'yes') {
                        Ext.Ajax.request({
                            url: '../fluxo/fluxo/iJson/estornar',
                            method: 'POST',
                            params: {
                                filter: filtro
                            }
                            ,
                            success: function(arquivo) {

                                var retorno = Ext.JSON.decode(arquivo.responseText);
                                if (retorno.situacao) {
                                    Ext.ux.Msg.flash({
                                        msg: retorno.msg,
                                        type: retorno.situacao
                                    });
                                } else {
                                    Ext.Msg.show({
                                        title: 'Alerta',
                                        msg: retorno.msg,
                                        buttons: Ext.Msg.OK,
                                        icon: Ext.MessageBox.ERROR
                                    });
                                }
                                grid.store.load();

                            }
                        });
                    }
                }
            });
        }
    },
    estornarPreBaixa: function() {

        var grid = this.getFinanceiroList(),
                records = grid.getSelectionModel().getSelection();
        grid.getSelectionModel().deselectAll();
        var filtro = Ext.JSON.encode(records[0].getData());
        if (records.length === 0) {
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
            return false;
        } else {
            Ext.Msg.show({
                title: 'Confirmação',
                msg: 'Tem certeza que deseja Estornar o registro ' + records[0].getData().numero + " ?",
                buttons: Ext.Msg.YESNO,
                icon: Ext.MessageBox.WARNING,
                scope: this,
                width: 450,
                fn: function(btn, ev) {
                    if (btn === 'yes') {
                        Ext.Ajax.request({
                            url: '../fluxo/fluxo/iJson/estornarPreBaixa',
                            method: 'POST',
                            params: {
                                filter: filtro
                            }
                            ,
                            success: function(arquivo) {

                                var retorno = Ext.JSON.decode(arquivo.responseText);
                                if (retorno.situacao) {
                                    Ext.ux.Msg.flash({
                                        msg: retorno.msg,
                                        type: retorno.situacao
                                    });
                                } else {
                                    Ext.Msg.show({
                                        title: 'Alerta',
                                        msg: retorno.msg,
                                        buttons: Ext.Msg.OK,
                                        icon: Ext.MessageBox.ERROR
                                    });
                                }
                                grid.store.load();

                            }
                        });
                    }
                }
            });
        }
    },
    arquivar: function() {

        var grid = this.getFinanceiroList(),
                records = grid.getSelectionModel().getSelection();


        var data = Ext.JSON.encode(records[0].getData());
        if (records.length === 0) {
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
            return false;
        } else {
            Ext.Msg.show({
                title: 'Confirmação',
                msg: 'Tem certeza que deseja Arquivar o registro ' + records[0].getData().numero + " ?",
                buttons: Ext.Msg.YESNO,
                icon: Ext.MessageBox.WARNING,
                scope: this,
                width: 450,
                fn: function(btn, ev) {
                    if (btn === 'yes') {
                        Ext.Ajax.request({
                            url: '../fluxo/fluxo/iJson/arquivar',
                            method: 'POST',
                            params: {
                                data: data
                            }
                            ,
                            success: function(arquivo) {

                                var retorno = Ext.JSON.decode(arquivo.responseText);


                                if (retorno.situacao) {

                                    Ext.ux.Msg.flash({
                                        msg: retorno.msg,
                                        type: retorno.situacao
                                    });

                                    grid.store.load();

                                } else {
                                    Ext.ux.Msg.flash({
                                        msg: 'Ocorreu algum erro tente novamente',
                                        type: 'error'
                                    });
                                }


                            }
                        });
                    }
                }
            });
        }
    },
    duplicar: function(button) {

        var grid = this.getFinanceiroList();
        var store = grid.getStore();
        var records = grid.getSelectionModel().getSelection()[0].getData();

        records.data_vencimento = null;
        records.id = null;

        store.insert(0, records);
        grid.editingPlugin.startEdit(0, 0);

    },
    baixarSelecionados: function(button) {
        var url = '../fluxo/fluxo/iJson/baixarTitulo';
        var win = button.up('window');
        var grid = win.down('grid');
        var conta = win.down('comboConta').getValue();
        var validou = true;
        var data_referencia = Ext.Date.format(win.down('#dataReferencia').getValue(), 'Y-m-d 00:00:00');

        if (button.action === 'preBaixa') {
            url = '../fluxo/fluxo/iJson/preBaixarTitulo';
        } else {
            if (!win.down('comboConta').getValue()) {

                grid.getStore().each(function(rec) {
                    if (!rec.get('c.id')) {
                        Ext.MessageBox.show({
                            title: 'Aviso Importante',
                            msg: 'Selecione Uma Conta!',
                            autoScroll: true,
                            icon: Ext.MessageBox.ERROR,
                            buttons: Ext.MessageBox.OK
                        });
                        validou = false;
                        return false;
                    }

                });


                //
            }
        }




        if (grid.selecionados.length > 0 && validou) {
            Ext.MessageBox.wait('Baixando Titulos', 'Aguarde...');
            button.setText('Processando Aguarde...');
            button.setDisabled(true);

            Ext.Ajax.request({
                url: url,
                params: {
                    titulos: Ext.JSON.encode(grid.selecionados),
                    conta: conta,
                    data_referencia: data_referencia
                },
                success: function(response) {
                    var retorno = Ext.JSON.decode(response.responseText);

                    if (retorno.length) {
                        var texto = "";

                        for (var i = 0; i < retorno.length; i++) {
                            var titulo = retorno[i].titulo;
                            var div = '<div style="padding:5px; margin-bottom: 5px;background:green; color:white;">';

                            if (retorno[i].situacao === 'Falha') {
                                div = '<div style="padding:5px; margin-bottom: 5px; background:red;color:white;">';
                            }
                            if (!retorno[i].titulo) {
                                titulo = 'ID: ' + retorno[i].id;
                            }
                            texto = texto + div + ' Titulo: ' + titulo + ' ' + retorno[i].msg + '</div>';

                        }


                        Ext.create('Ext.panel.Panel', {
                            title: 'Alerta',
                            autoShow: true,
                            autoScroll: true,
                            border: false,
                            width: 600,
                            height: 400,
                            floating: true,
                            html: texto,
                            bbar: [
                                '->',
                                {
                                    xtype: 'button',
                                    text: 'Fechar',
                                    handler: function(btn) {
                                        win.close();
                                        Ext.MessageBox.hide();
                                        btn.up('panel').close();
                                    }
                                }
                            ]
                        });
                    } else {
                        win.close();
                    }

                },
                failure: function(response, ret) {
                    Ext.MessageBox.show({
                        title: 'Aviso Importante',
                        msg: ret.result.message.error,
                        autoScroll: true,
                        icon: Ext.MessageBox.ERROR,
                        buttons: Ext.MessageBox.OK
                    });
                }



            }
            );
        } else {
            if (validou) {
                Ext.ux.Msg.flash({
                    msg: 'Selecione algum Titutlo',
                    type: 'error'
                });
            }

        }
    },
    baixarTitulo: function() {
        var grid = this.getFinanceiroList();
        var record = grid.getSelectionModel().getSelection();



        if (record.length > 0) {

            var total = Ext.create('Ext.Toolbar.TextItem', {
                itemId: 'baixarTexto'
            });

            var somarTotal = function(ret, total_titulo) {
                var totais = ret.getProxy().getReader().jsonData.totais;
                var total = 0;
                Ext.Object.each(totais, function(key, value, myself) {
                    total += value;
                });
                Ext.ComponentQuery.query('#baixarTexto')[0].setText('<span style="font-size: 1.3em"><b>Total Titulo: </b>' + Illi.app.Util.valorRenderer(total_titulo) + ' </span><span style="font-size: 1.3em; padding-left:50px; color:green"><b>Total Pago: </b>' + Illi.app.Util.valorRenderer(total) + '</span>');
            };

            var setStore = Ext.create('Illi.store.FinanceiroPagar', {
                autoLoad: false,
                listeners: {
                    load: function(ret) {
                        var total_titulo = this.sum('valor_titulo');
                        somarTotal(ret, total_titulo);
                    }
                }
            });

            if (this.modulo === 'financeiroContasReceber') {
                setStore = Ext.create('Illi.store.FinanceiroReceber', {
                    autoLoad: false,
                    listeners: {
                        load: function(ret) {
                            var total_titulo = this.sum('valor_titulo');
                            somarTotal(ret, total_titulo);
                        }
                    }
                });
            }

            var selecionados = [];
            for (var i = 0; i < record.length; i++) {
                selecionados.push(record[i].get('id'));
            }

            var janelaBaixa = Ext.create('Ext.window.Window', {
                title: 'Baixa',
                width: "95%",
                height: "95%",
                autoShow: true,
                border: false,
                modal: true,
                layout: 'fit',
                listeners: {
                    beforehide: function() {
                        grid.store.load();
                        grid.getSelectionModel().deselectAll();
                    }
                },
                items: {
                    xtype: Ext.create('Illi.view.financeiro.ListBaixa', {
                        model: grid,
                        baixarTexto: total,
                        itemId: grid.xtype + 'Baixa',
                        selecionados: selecionados,
                        setStore: setStore

                    })
                }
            });

        }
    },
    salvar: function() {
        var store = this.getFinanceiroList().store;
        this.getFinanceiroList().store.sync();
    },
    edit: function(editor, e) {
        var store = this.getFinanceiroList().store;
        this.getFinanceiroList().store.sync();
    },
    verificaBoleto: function() {
        var store = Ext.create('Illi.store.BoletoFinanceiros', {
            autoLoad: true
        });
        var boleto = store.getById('194');
        if (boleto) {
            //alert(boleto.data.id_boleto);
        } else {
            //Illi.callLog('ok');
        }
    }
});
