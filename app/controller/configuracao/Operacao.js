Ext.define('Illi.controller.configuracao.Operacao', {
    extend: 'Illi.controller.AbstractController',
    stores: ['configuracao.Operacaos'],
    models: ['configuracao.Operacao'],
    views: [
        'configuracao.operacao.Lista',
        'configuracao.operacao.Janela'
    ],
    refs: [
        {ref: 'gridIlli', selector: 'listaConfiguracaoOperacao'},
        {ref: 'listaConfiguracaoOperacao', selector: 'listaConfiguracaoOperacao'},
        {ref: 'janelaConfiguracaoOperacao', selector: 'janelaConfiguracaoOperacao'}
    ],
    init: function() {
        var me = this;
        me.control({
            'listaConfiguracaoOperacao': {
                itemdblclick: me.editar
            },
            'listaConfiguracaoOperacao button[action=incluir]': {
                click: me.incluir
            },
            'listaConfiguracaoOperacao button[action=excluir]': {
                click: me.excluir
            },
            'listaConfiguracaoOperacao button[action=atualizar]': {
                click: me.atualizar
            },
            'janelaConfiguracaoOperacao button[action=salvar]': {
                click: me.salvar
            }
        });
    },
    incluir: function(btn) {
        var janela = Ext.widget('janelaConfiguracaoOperacao');
        janela.show();
    },
    editar: function(btn) {
        try {
            var janela = Ext.widget('janelaConfiguracaoOperacao');
            var formOperacao = janela.down('#formGrupoOperacao');
            var dados = this.getListaConfiguracaoOperacao().getSelectionModel().getSelection()[0];
            formOperacao.getForm().loadRecord(dados);
            var operacao = Illi.app.Util.getOperacao(dados.get('id'));
            if (operacao) {
                operacao.id_natureza_lancamento = parseFloat(operacao.id_natureza_lancamento);
                operacao.tipo_movimento = parseFloat(operacao.tipo_movimento);
                operacao.tabela_preco = parseFloat(operacao.tabela_preco);
                var formPropriedade = janela.down('#formPropriedade');
                var formImpostos = janela.down('#formOperacaoImposto');
                alert(operacao);
                formPropriedade.getForm().setValues(operacao);
                formImpostos.getForm().setValues(operacao);
            }
            janela.show();
        } catch (err) {

        }
        return false;
    },
    salvar: function(btn) {
        var form = btn.up('window').down('#formGrupoOperacao');
        if (form.getForm().isValid()) {
            var formPropriedade = btn.up('window').down('#formPropriedade').getForm().getFieldValues();
            var formImpostos = btn.up('window').down('#formOperacaoImposto').getForm().getFieldValues();
            var dados = form.getForm().getFieldValues();
            Ext.Ajax.request({
                url: '../configuracao/operacao/ijson/alterar',
                async: true,
                params: {
                    data: Ext.JSON.encode(dados),
                    propriedade: Ext.JSON.encode(Ext.Object.merge(formPropriedade, formImpostos))
                },
                failure: function() {
                    Illi.app.Util.mensagemFalha();
                },
                success: function(response) {
                    var retorno = Ext.JSON.decode(response.responseText);
                    if (retorno.situacao) {
                        form.down('textfield[name=id]').setValue(retorno.data);
                        Ext.ux.Msg.flash({
                            msg: retorno.msg,
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