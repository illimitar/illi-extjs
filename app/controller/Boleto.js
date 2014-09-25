Ext.define('Illi.controller.Boleto', {
    extend: 'Illi.controller.AbstractController',
    stores: [
        'Boletos',
        'BoletoFinanceiros'
    ],
    views: [
        'boleto.BoletoFinanceiro',
        'boleto.GerarBoleto',
        'boleto.EditarBoleto'
    ],
    refs: [
        {
            ref: 'boletoList',
            selector: 'boletoList'
        },
        {
            ref: 'gridIlli',
            selector: 'boletoFinanceiro'
        },
        {
            ref: 'boletoFinanceiro',
            selector: 'boletoFinanceiro'
        }
        ,
        {
            ref: 'gerarBoleto',
            selector: 'gerarBoleto'
        },
        {
            ref: 'editarBoleto',
            selector: 'editarBoleto'
        }
    ],
    requires: ['Ext.window.MessageBox'],
    init: function() {
        this.control({
            'boletoFinanceiro button[action=gerarBoletos]': {
                click: this.gerarBoletos
            },
            'boletoFinanceiro button[action=atualizar]': {
                click: this.atualizar
            },
            'boletoFinanceiro button[action=boletoUnico]': {
                click: this.boletoUnico
            },
            'boletoFinanceiro button[action=excluir]': {
                click: this.excluir
            },
            'boletoFinanceiro button[action=gerarRemessa]': {
                click: this.gerarRemessa
            },
            'editarBoleto button[action=processarBoletos]': {
                click: this.processarBoletos
            }
        });
    },
    atualizar: function() {
        this.getBoletoFinanceiro().store.load();
        var store = this.getBoletoFinanceiro().getStore();
    },
    processarBoletos_old: function(button) {
        var grid = this.getEditarBoleto();
        grid.store.sync();
    },
    boletoUnico: function(button) {
        var win = button.up('window');
        var grid = this.getBoletoFinanceiro();
        var record = grid.getSelectionModel().getSelection();

        if (record) {
            var json = Ext.JSON.encode(record.map(function(e) {
                return e.data;
            }));
            // Ext.MessageBox.wait('Processando Boletos...', 'Aguarde');
            Ext.Ajax.request({
                url: '../fluxo/boleto/iJson/unificar_boleto',
                async: true,
                params: {
                    data: json
                },
                success: function(response) {
                    grid.getSelectionModel().deselectAll();
                    var retorno = Ext.JSON.decode(response.responseText);
                    if (retorno.length) {
                        var texto = "";
                        for (var i = 0; i < retorno.length; i++) {
                            var div = '<div style="padding:5px; margin-bottom: 5px;background:green; color:white;">';
                            if (retorno[i].success === false) {
                                div = '<div style="padding:5px; margin-bottom: 5px; background:red;color:white;">';
                            }
                            texto = texto + div + ' Boleto: ' + retorno[i].data + ' ' + retorno[i].message + '</div>';
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
                }
            });
        } else {
            Ext.ux.Msg.flash({
                msg: "Selecione o Campo Banco!",
                type: 'error'
            });
        }
    },
    processarBoletos: function(button) {
        var win = button.up('window');
        var grid = this.getEditarBoleto();
        var gridBoletos = this.getGridIlli();
        var boletosSelecionados = Ext.getStore('boletosSelecionados');
        var record = [];
        var id_conta = win.down('comboContaBoleto').getValue();

        boletosSelecionados.each(function(rec) {
            var dados = rec.getData();
            dados.id_conta = id_conta;
            record.push(dados);
        });

        if (win.down('comboContaBoleto').getValue()) {
            var json = Ext.JSON.encode(record);
            Ext.MessageBox.wait('Processando Boletos...', 'Aguarde');
            Ext.Ajax.request({
                url: '../fluxo/boleto/iJson/gerarBoletos',
                async: true,
                params: {
                    data: json
                },
                success: function(response) {
                    gridBoletos.getSelectionModel().deselectAll();
                    var retorno = Ext.JSON.decode(response.responseText);
                    if (retorno.length) {
                        var texto = "";

                        for (var i = 0; i < retorno.length; i++) {
                            var div = '<div style="padding:5px; margin-bottom: 5px;background:green; color:white;">';

                            if (retorno[i].success === false) {
                                div = '<div style="padding:5px; margin-bottom: 5px; background:red;color:white;">';
                            }
                            texto = texto + div + ' Boleto: ' + retorno[i].data + ' ' + retorno[i].message + '</div>';

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
                }
            });
        } else {
            Ext.ux.Msg.flash({
                msg: "Selecione o Campo Banco!",
                type: 'error'
            });
        }
    },
    gerarBoletos: function(button) {
        var win = button.up('window');
        var grid = this.getBoletoFinanceiro();
        var record = grid.getSelectionModel().getSelection();
        var todosRegistros = [];
        for (var i = 0; i < record.length; i++) {
            var registro = [];
            registro.push(record[i].get('id'));
            registro.push(record[i].get('numero'));
            registro.push(record[i].get('b.id'));
            registro.push(record[i].get('p.id'));
            registro.push(record[i].get('p.nome'));
            registro.push("");
            registro.push("");
            registro.push("");
            todosRegistros.push(registro);
        }


        var janelaBaixa = Ext.create('Ext.window.Window', {
            title: 'Gerar Boletos',
            width: '97%',
            height: '95%',
            border: false,
            scope: this,
            modal: true,
            layout: 'fit',
            closeAction: 'destroy',
            listeners: {
                beforehide: function() {
                    grid.store.load();
                }
            },
            items: {
                xtype: Ext.create('Illi.view.boleto.EditarBoleto', {
                    title: null,
                    model: grid
                            //store: storeBoletos
                })
            }
        });
        var storeBoletos = Ext.getStore('boletosSelecionados');
        storeBoletos.removeAll();
        storeBoletos.add(todosRegistros);
        janelaBaixa.show();
    },
    gerarRemessa: function(button) {
        Ext.MessageBox.wait('Gerando Arquivos...', 'Aguarde');
        var win = button.up('window');
        var grid = this.getBoletoFinanceiro();
        var record = grid.getSelectionModel().getSelection();
        var json = Ext.JSON.encode(record.map(function(e) {
            return e.data;
        }));
        Ext.Ajax.request({
            url: '../fluxo/boleto/iJson/gerarRemessa',
            params: {
                data: json
            },
            success: function(response) {
                var retorno = Ext.JSON.decode(response.responseText);
                if (retorno.success) {
                    grid.store.load();
                    Ext.ux.Msg.flash({
                        msg: retorno.message,
                        type: 'success'
                    });
                    Ext.MessageBox.hide();
                } else {
                    Ext.MessageBox.show({
                        title: 'Erro',
                        msg: retorno.message,
                        scope: this,
                        buttons: Ext.MessageBox.OK,
                        fn: function() {
//win.close();
                        }
                    });
                }
            }
        });
    },
    excluir: function() {
        var grid = this.getBoletoFinanceiro(),
                records = grid.getSelectionModel().getSelection();
        if (records.length === 0) {
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
            return false;
        } else {

            Ext.Msg.show({
                title: 'Confirmação',
                msg: 'Tem certeza que deseja deletar o(s) registro(s) selecionado(s)?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.MessageBox.WARNING,
                scope: this,
                width: 450,
                fn: function(btn, ev) {
                    if (btn === 'yes') {
                        var store = grid.store;
                        store.remove(records);
                        store.sync({
                            callback: function() {
                                grid.store.sort('id', 'DESC');
                            }
                        });
                        this.atualizar();
                    }
                }
            });
        }
    }
});