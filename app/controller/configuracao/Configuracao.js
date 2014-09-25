Ext.define('Illi.controller.configuracao.Configuracao', {
    extend: 'Illi.controller.AbstractController',
    //  stores: ['configuracao.Configuracaos'],
//    models: ['configuracao.Configuracao'],
    views: ['configuracao.Janela'],
    refs: [
        {
            ref: 'janelaConfiguracao',
            selector: 'janelaConfiguracao'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'janelaConfiguracao button[action=salvar]': {
                click: me.salvar
            },
            'janelaConfiguracao': {
                render: this.carregar
            }
        });
    },
    carregar: function() {
        Ext.MessageBox.wait('Carregando...', 'Aguarde!');
        var formConfiguracao = this.getJanelaConfiguracao().down('#formConfiguracao');
        formConfiguracao.getForm().load({
            url: '../configuracao/configuracao/ijson/carregar',
            failure: function(form, action) {
                Ext.Msg.alert("Load failed", action.result.errorMessage);
            },
            success: function(data) {
                Ext.MessageBox.hide();
            }
        });
    },
    salvar: function(button) {
        var formConfiguracao = this.getJanelaConfiguracao().down('#formConfiguracao');
        var fields = {};
        formConfiguracao.getForm().getFields().each(function(field) {
            fields[field.getName()] = Ext.JSON.encode(field.getValue());
        });
        Ext.Ajax.request({
            url: '../configuracao/configuracao/ijson/alterar',
            async: true,
            params: fields, //formConfiguracao.getForm().getFieldValues(),
            success: function(response) {
                var retorno = Ext.JSON.decode(response.responseText);
                if (retorno.situacao) {
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



});