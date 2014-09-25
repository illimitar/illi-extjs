Ext.define('Illi.controller.atendimento.Atendimento', {
    extend: 'Illi.controller.AbstractController',
    stores: ['atendimento.Atendimentos'],
    models: ['atendimento.Atendimento'],
    views: [
        'atendimento.Lista',
        'atendimento.Janela'
    ],
    refs: [
        {ref: 'gridIlli', selector: 'listaAtendimento'},
        {ref: 'janelaAtendimento', selector: 'janelaAtendimento'}
    ],
    init: function () {
        var me = this;
        me.control({
            'listaAtendimento': {
                itemdblclick: me.editar
            },
            'listaAtendimento button[action=incluir]': {
                click: me.incluir
            },
            'listaAtendimento button[action=cancelar]': {
                click: me.cancelar
            },
            'listaAtendimento actioncolumn': {
                click: me.visualizar
            },
            'listaAtendimento button[action=listarParecer]': {
                click: me.listarParecer
            },
            'janelaAtendimento button[action=salvar]': {
                click: me.salvar
            }
        });
    },
    visualizar: function (grid, rowIndex, colIndex, item, e, record) {
        Ext.create("Illi.view.relatorio.JanelaVisualizar", {url: '../relatorios/relatorio_atendimento/visita/' + record.get('id') + '/'});
    },
    incluir: function (btn) {
        var janela = Ext.widget('janelaAtendimento');
        janela.show();
    },
    editar: function (btn) {
        try {
            var dados = this.getGridIlli().getSelectionModel().getSelection()[0];
            if (dados.get('situacao') === "ATIVO") {
                var janela = Ext.widget('janelaAtendimento');
                var form = janela.down('#formAtendimento');
                var dados = this.getGridIlli().getSelectionModel().getSelection()[0];
                form.getForm().loadRecord(dados);
                janela.show();
            } else {
                Ext.Msg.show({
                    title: 'Alerta',
                    msg: "Atendimento Não está Aberto!",
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        } catch (err) {
            return false;
        }
        return false;
    },
    listarParecer: function (btn, evt, opt) {
        var grid = this.getGridIlli();
        var records = grid.getSelectionModel().getSelection()[0];
        if (records.get("id")) {
            Ext.create('Illi.view.financeiro.parecer.Janela', {
                id_atendimento: records.get("id")
            }).show();
        }
    },
    cancelar: function (btn) {
        var grid = this.getGridIlli();
        var records = grid.getSelectionModel().getSelection();
        if (records) {
            Ext.Ajax.request({
                url: '../atendimento/atendimento/ijson/cancelar',
                async: true,
                params: {
                    id: records[0].get("id")
                },
                failure: function () {
                    Illi.app.Util.mensagemFalha();
                },
                success: function (response) {
                    var retorno = Ext.JSON.decode(response.responseText);
                    if (retorno.success) {
                        grid.store.load();
                        Ext.ux.Msg.flash({
                            msg: retorno.message,
                            type: 'success'
                        });
                    } else {
                        Ext.Msg.show({
                            title: 'Alerta',
                            msg: retorno.message,
                            buttons: Ext.Msg.OK,
                            icon: Ext.MessageBox.ERROR
                        });
                    }
                }
            });
        }
    },
    salvar: function (btn) {
        var form = btn.up('panel').down('#formAtendimento');
        var grid = this.getGridIlli();
        if (form.getForm().isValid()) {
            var dados = form.getForm().getFieldValues();
            dados.atendimento = Ext.Date.format(dados.atendimento, 'Y-m-d H:i:s');
            Ext.Ajax.request({
                url: '../atendimento/atendimento/ijson/alterar',
                async: true,
                params: {
                    data: Ext.JSON.encode(dados)
                },
                failure: function () {
                    Illi.app.Util.mensagemFalha();
                },
                success: function (response) {
                    var retorno = Ext.JSON.decode(response.responseText);
                    if (retorno.success) {
                        btn.up('panel').destroy();
                        grid.store.load();
                        Ext.ux.Msg.flash({
                            msg: retorno.message,
                            type: 'success'
                        });
                    } else {
                        Ext.Msg.show({
                            title: 'Alerta',
                            msg: retorno.message,
                            buttons: Ext.Msg.OK,
                            icon: Ext.MessageBox.ERROR
                        });
                    }
                }
            });
        }
    }
});
