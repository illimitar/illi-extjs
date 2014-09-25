Ext.define('Illi.controller.Bi', {
    extend: 'Illi.controller.AbstractController',
    //requires:['Illi.store.Prazos','Illi.view.financeiro.prazo.Combo'],
    stores: ['Bis'],
    models: ['Bi'],
    views: [
        'bi.Lista', 'bi.Janela'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaBi'
        },
        {
            ref: 'listaBi',
            selector: 'listaBi'
        },
        {
            ref: 'biJanela',
            selector: 'biJanela'
        },
        {
            ref: 'listaItens',
            selector: 'listaItens'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'listaBi button[action=atualizar]': {
                click: me.atualizar
            },
            'listaBi button[action=visualizar]': {
                click: me.visualizar
            },
            'listaBi button[action=excel]': {
                click: me.excel
            },
            'listaBi': {
                itemdblclick: me.visualizar
            }
        });
    },
    atualizar: function() {
        this.getListaBi().store.load();
    },
    excel: function() {
        var grid = this.getListaBi();
        var filtro = Ext.JSON.encode(grid.store.filters.getRange());
        Ext.MessageBox.wait('Gerando Excel', 'Aguarde...');
        Ext.Ajax.request({
            url: '../fluxo/bi/exportarExcel',
            method: 'POST',
            params: {
                filter: filtro
            },
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
                            window.open('../application/remessa/' + arquivo.responseText, "Baixar Excel");
                        }

                    });
                }
            }
        });
    },
    visualizar: function() {
        var grid = this.getListaBi();
        var records = grid.getSelectionModel().getSelection();
        if (records[0].data['m.id'] > 0) {
//            Illi.app.getController('MovimentacaoDetalhe');
            Ext.create('Illi.view.bi.Janela', {
                idMovimentacao: records[0].data['m.id'],
                title: records[0].data['m.id'] + ": " + records[0].data['p.nome'] + " - " + records[0].data.numero
            }).show();
        } else {
            Ext.Msg.alert('Atenção', 'Não existe itens neste pedido.');
        }
    }
//    visualizarBotao: function() {
//        var grid = this.getListaBi();
//        var records = grid.getSelectionModel().getSelection();
//        if (records.length === 0) {
//            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
//            return false;
//        } else {
//            var janela = Ext.create('Illi.view.bi.Janela', {
//                idMovimentacao: records[0].get('id_movimentacao')
//            });
//            janela.show();
//        }
//    }
});