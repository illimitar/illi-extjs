Ext.define('Illi.controller.AbstractController', {
    extend: 'Ext.app.Controller',
    editTitle: '',
    insertTitle: '',
    modelName: '',
    carregado: true,
    requires: ['Illi.view.relatorio.JanelaVisualizar'],
    colunasGrid: function () {
        var grid = this.getGridIlli();


        var colunas = grid.getView().getGridColumns();
        var cabecalho = [];

        Ext.Object.each(colunas, function (key, value, myself) {
            if (!value.hidden) {
                var item = {};
                if (value.dataIndex) {
                    item.texto = value.text;
                    item.campo = value.dataIndex;
                    cabecalho.push(item);
                }
            }
        });
    },
    imprimir: function (btn) {
        Ext.MessageBox.wait('Gerando Impressão', 'Aguarde...');
        try {
            var grid = this.getGridIlli();
            var store = grid.getStore();
            var gridView = grid.getView();
            var tab = btn.up('tabpanel');
            var filtro = grid.getPlugin('filtroBarra');
            if (filtro) {
                filtro.setVisible(false);
            }
            if (tab === undefined) {
                tab = Ext.ComponentQuery.query('#tabCenter')[0];
            }
            tab = tab.getActiveTab();

            var relatorio = function () {
                var dataRelatorio = Ext.Date.format(new Date(), 'd/m/Y H:i:s');
                var largura = gridView.getHeaderCt().el.lastBox.width;
                tab.text = (tab.text === undefined ? 'Relatório' : tab.text);
                var cabecalho = '<head>';
                cabecalho += '<title>Illi</title>';
                cabecalho += '<link rel="stylesheet" type="text/css" href="/' + PATH_FRONTEND + '/build/production/Illi/resources/Illi-all.css" />';
                cabecalho += '<style type="text/css" media="print">';
                cabecalho += '@page { size: auto; margin: 0mm; }';
                cabecalho += 'body { background-color:#FFFFFF; border: false; margin: 10mm; }';
                cabecalho += '</style>';
                cabecalho += '</head>';
                var conteudo = '<div>';
                conteudo += '<table style="width:100%;font-weight:bold;">';
                conteudo += '<tr>';
                conteudo += '<td width="60px">';
                conteudo += '<img src="/' + PATH_FRONTEND + '/resources/images/illi.png" style="margin-right:10px" onclick="window.print()" />';
                conteudo += '</td>';
                conteudo += '<td>';
                conteudo += '<table>';
                conteudo += '<tr>';
                conteudo += '<td>' + tab.text + '</td>';
                conteudo += '</tr>';
                conteudo += '<tr>';
                conteudo += '<td> Total Registros: ' + total_registros + '</td>';
                conteudo += '</tr>';
                conteudo += '<tr>';
                conteudo += '<td>' + dataRelatorio + '</td>';
                conteudo += '</tr>';
                conteudo += '</table>';
                conteudo += '</td>';
                conteudo += '</tr>';
                conteudo += '</table>';
                conteudo += '</div>';
                conteudo += gridView.getHeaderCt().el.dom.innerHTML + gridView.getEl().dom.innerHTML;
                var html = '<!DOCTYPE HTML><html>' + cabecalho + '<body>' + conteudo + '</body></html>';
                var win = window.open('http://' + window.document.location.host + '/illi/imprimir', 'illi', "scrollbars=1,width=100,height=100");
                if (!win) {
                    Illi.app.Util.mensagemFalha("Pop-up bloqueado!");
                    return false;
                }
                win.document.open();
                win.document.write(html);



//                Ext.create('Ext.Window', {
//                    title: 'Boleto',
//                    width: 800,
//                    height: 600,
//                    plain: true,
//                    modal: true,
//                    win: this,
//                    autoScroll: true,
//                    frame: false,
//                    items: [
//                        {
//                            xtype: "component",
//                            id: 'iframe-win', // Add id
//                            width: '100%',
//                            height: '100%',
//                            border: '0',
//                            margin: '0',
//                            padding: '0',
//                            frameborder: '0',
//                            autoEl: {
//                                tag: "iframe",
//                                html: conteudo
//                            }
//                        }
//                    ]
//                }).show();


                setTimeout(function () {
                    win.focus();
                    //win.print();
                    //win.close();

                    store.pageSize = 75;
                    store.load();

                }, 400);
                Ext.MessageBox.hide();
            };



            store.pageSize = store.getTotalCount();
            var total_registros = store.pageSize;
            if (total_registros > 250) {
                Ext.Msg.show({
                    title: 'Confirmação',
                    msg: "<b>Essao Operaçao pode ser Demorada devido a quantide de REGISTROS (" + total_registros + ")</b></br> O Ideal é gerar um relatório no módulo de relatórios!</br> Deseja Continuar?",
                    buttons: Ext.Msg.YESNO,
                    icon: Ext.MessageBox.WARNING,
                    scope: this,
                    width: 450,
                    fn: function (btn, ev) {
                        if (btn === 'yes') {
                            Ext.MessageBox.wait('Gerando Impressão', 'Aguarde...');
                            store.load({
                                callback: function () {
                                    relatorio();
                                }
                            });
                        }
                    }
                });
            } else {
                store.load({
                    callback: function () {
                        relatorio();
                    }
                });
            }
        } catch (err) {
            Illi.app.Util.mensagemFalha("Não foi Possivel gerar a Impressão");
        }

    },
    atualizar: function () {
        this.getGridIlli().getSelectionModel().deselectAll();
        this.getGridIlli().store.load();
    },
    editar: function () {

    },
    excluir: function () {

        var grid = this.getGridIlli(),
                records = grid.getSelectionModel().getSelection();

        if (records.length === 0) {
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
            return false;
        } else {
            Ext.Msg.show({
                title: 'Confirmação',
                msg: 'Tem certeza que deseja deletar o registro ' + records[0].getData().id + " ?",
                buttons: Ext.Msg.YESNO,
                icon: Ext.MessageBox.WARNING,
                scope: this,
                width: 450,
                fn: function (btn, ev) {
                    if (btn === 'yes') {
                        var store = grid.store;
                        store.remove(records);
                        grid.store.sync({
                            callback: function () {
                                grid.getSelectionModel().deselectAll();
                                grid.store.load();
                            }
                        });
                    }
                }
            });
        }
        return false;
    },
    incluir: function (btn, evt, opt) {
        var grid = this.getGridIlli();
        var store = grid.store;
        try {
            store.model.situacao = 'ATIVO';
            store.insert(0, store.model);
            grid.editingPlugin.cancelEdit();
            grid.editingPlugin.startEdit(0, 0);
            return false;
        } catch (e) {
            error(e);
            return false;
        }
    },
    exportarExcel: function () {
        var grid = this.getGridIlli();
        var url = grid.store.baseUrl + '../iExcel/' + grid.store.illiRead;
        var filtro = grid.store.filters.getRange();

        filtro = Ext.JSON.encode(filtro);

        Ext.MessageBox.wait('Gerando Excel', 'Aguarde...');
        Ext.Ajax.request({
            url: url,
            method: 'POST',
            params: {
                filter: filtro
            }
            ,
            success: function (arquivo) {


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
                        fn: function () {
                            window.open(PATH_ARQUIVOS + '/' + arquivo.responseText, "Baixar Excel");
                        }

                    });
                }
            }
        });
    },
    excel: function (btn) {
        var grid = this.getGridIlli();
        var store = grid.getStore();
        var gridView = grid.getView();
        var url = grid.store.baseUrl + '../iExcel/' + grid.store.illiRead;
        var tab = btn.up('tabpanel');
        if (tab === undefined) {
            tab = Ext.ComponentQuery.query('#tabCenter')[0];
        }
        tab = tab.getActiveTab();
        var dataRelatorio = Ext.Date.format(new Date(), 'd/m/Y H:i:s');
        tab.text = (tab.text == undefined ? 'Relatório' : tab.text);
        var titulo = "  <table>\n\
                            <tr><td><b>" + tab.text + "</b></td></tr>\n\
                            <tr><td><b>" + dataRelatorio + "</b></td></tr>\n\
                        <tr><td><br/></td></tr>\n\
                        </table>";


        var colunas = gridView.getHeaderCt().getGridColumns();

        var col = '<table><tr>';
        Ext.Array.each(colunas, function (campo) {
            col += '<td><b>' + campo.text + '</b></td>';
        });

        col += '</tr></table>';
        var html = titulo + col + gridView.getEl().dom.innerHTML;


        Ext.MessageBox.wait('Gerando Excel', 'Aguarde...');
        Ext.Ajax.request({
            url: url,
            method: 'POST',
            params: {
                html: html
            }
            ,
            success: function (arquivo) {


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
                        fn: function () {
                            window.open('/' + PATH_ARQUIVOS + '/' + arquivo.responseText, "Baixar Excel");
                        }

                    });
                }
            }
        });
    }
});