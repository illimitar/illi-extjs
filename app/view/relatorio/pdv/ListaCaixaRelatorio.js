Ext.define('Illi.view.relatorio.pdv.ListaCaixaRelatorio', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaCaixaRelatorio',
    title: null,
    itemId: 'listaCaixaRelatorio',
    emptyText: "Nenhum registro encontrado",
    selModel: {
        mode: 'MULTI'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.Caixas', {autoLoad: true, storeId: 'relatorioCaixa'}),
            tbar: {
                items: [
                    {
                        xtype: 'comboRelatorio',
                        itemId: 'modeloRelatorioCaixa',
                        plugins: ['clearbutton'],
                        name: 'modelo',
                        fieldLabel: 'Modelo',
                        tipo: 'CAIXA',
                        flex: 0.7
                    },
                    {
                        iconCls: 'icon-relatorio',
                        text: 'Gerar Relatório',
                        handler: function() {
                            Ext.MessageBox.wait('Gerando Relatório', 'Aguarde...');
                            try {
                                var modelo = me.down('#modeloRelatorioCaixa');
                                var nomeModelo = false;
                                var urlModelo = false;
                                var recordModelo = modelo.valueModels;
                                try {
                                    var tipo = (recordModelo[0].get('saida') ? recordModelo[0].get('saida') : "INTERNO");
                                } catch (err) {
                                    error(err);
                                    var tipo = "INTERNO";
                                }
                                urlModelo = (urlModelo ? urlModelo : "../relatorios/relatorio_caixa/resumo");

                                if (urlModelo) {

                                    if (recordModelo !== undefined) {
                                        if (recordModelo[0] !== undefined) {
                                            nomeModelo = recordModelo[0].get('nome');
                                            urlModelo = recordModelo[0].get('url');
                                        }
                                    }
                                    if (urlModelo) {
                                        var grid = me;
                                        var records = grid.getSelectionModel().getSelection();
                                        if (records.length > 0) {
                                            var selecionados = [];
                                            for (var i = 0; i < records.length; i++) {
                                                selecionados.push(records[i].get('id'));
                                            }
                                            if (tipo === "INTERNO") {
                                                Ext.MessageBox.hide();
                                                Ext.create("Illi.view.relatorio.JanelaVisualizar", {url: urlModelo + '?data=' + Ext.JSON.encode(selecionados)});
                                            } else {
                                                Ext.Ajax.request({
                                                    url: '../relatorios/pdv/gerar_relatorio',
                                                    params: {
                                                        selecionados: Ext.JSON.encode(selecionados),
                                                        nome: nomeModelo,
                                                        url: urlModelo
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
                                                                modal: true,
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
                                            }


                                        } else {
                                            Ext.MessageBox.hide();
                                            Ext.MessageBox.alert('Atenção', 'É necessário escolher um ou mais caixa(s) para gerar o relatório!', Ext.emptyFn);
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
                                Ext.MessageBox.hide();
                                Ext.MessageBox.alert('Atenção', 'Ocorreu um erro ao gerar relatório!', Ext.emptyFn);
                            }
                        }
                    }
                ]
            },
            columns: {
                defaults: {
                    filter: true,
                    editor: false
                },
                items: [
                    {
                        header: 'Caixa',
                        dataIndex: 'id', // nome do campo no model
                        filter: {
                            'type': 'int'
                        },
                        flex: 0.4
                    },
                    {
                        header: 'Conta',
                        dataIndex: 'cc.nome',
                        renderer: function(value, metaData, record) {
                            return record.get('bacc.nome') + ' - ' + record.get('acc.nome') + ' - ' + value;
                        },
                        flex: 1
                    },
                    {
                        header: 'Operador',
                        dataIndex: 'u.nome',
                        flex: 2
                    },
                    {
                        header: 'Abertura',
                        dataIndex: 'data_abertura',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        flex: 0.7
                    },
                    {
                        header: 'Fechamento',
                        dataIndex: 'data_fechamento',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        flex: 0.7
                    },
                    {
                        header: 'Saldo',
                        hidden: true,
                        dataIndex: 'saldo_fechamento',
                        renderer: function(value, metaData, record) {
                            if (record.get('data_fechamento')) {
                                return Illi.app.Util.valorRenderer(value);
                            }
                            return Illi.app.Util.valorRenderer(record.get('cc.saldo'));
                        },
                        flex: 0.4
                    }
                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'rowediting': false
            }),
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("relatorioCaixa"),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.callParent(arguments);
    }
});
