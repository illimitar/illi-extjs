Ext.define('Illi.controller.relatorio.Relatorio', {
    extend: 'Illi.controller.AbstractController',
    stores: ['relatorio.Relatorios'],
    models: ['relatorio.Relatorio'],
    views: [
        'relatorio.Lista'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaRelatorio'
        },
        {
            ref: 'listaRelatorio',
            selector: 'listaRelatorio'
        }
    ],
    init: function() {
        var me = this;
        me.control(
                {
                    'listaRelatorio': {
                        itemdblclick: me.editar
                    },
                    'listaRelatorio button[action=incluir]': {
                        click: me.incluir
                    },
                    'listaRelatorio button[action=excluir]': {
                        click: me.excluir
                    },
                    'listaRelatorio button[action=atualizar]': {
                        click: me.atualizar
                    },
                    'listaRelatorio button[action=imprimir]': {
                        click: me.imprimir
                    },
                    'listaRelatorio button[action=executar]': {
                        click: me.executar
                    }

                }
        );
    },
    executar: function() {

        var grid = this.getListaRelatorio();
        var records = grid.getSelectionModel().getSelection();
        var filtro = Ext.JSON.encode(records[0].getData());
        if (records.length === 0) {
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
            return false;
        } else {
            Ext.Ajax.request({
                url: '../relatorios/abs_relatorio/relatorio',
                method: 'POST',
                params: records[0].getData(),
                success: function(arquivo) {
                    try {
                        arquivo = (arquivo.responseText);
                        if (arquivo) {
                            Ext.create('Ext.Window', {
                                title: 'Visualizar',
                                width: "95%",
                                height: "98%",
                                plain: true,
                                //modal: true,
                                win: this,
                                autoScroll: true,
                                frame: false,
                                html: arquivo
                            }).show();
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
                },
                failure: function() {
                    Illi.app.Util.mensagemFalha();
                }
            });
        }
    }
});