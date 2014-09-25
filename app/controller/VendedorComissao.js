Ext.define('Illi.controller.VendedorComissao', {
    extend: 'Illi.controller.AbstractController',
    stores: ['VendedorComissoes'],
    models: ['VendedorComissao'],
    views: [
        'financeiro.vendedor_comissao.Lista',
        'financeiro.vendedor_comissao.Form'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'vendedorComissaoLista'
        },
        {
            ref: 'vendedorComissaoLista',
            selector: 'vendedorComissaoLista'
        },
        {
            ref: 'fecharComissao',
            selector: 'fecharComissao'
        }
    ],
    init: function() {
        var me = this;
        me.control({
            'vendedorComissaoLista': {
                itemdblclick: me.editar
            },
            'vendedorComissaoLista button[action=incluir]': {
                click: me.incluir
            },
            'vendedorComissaoLista button[action=excluir]': {
                click: me.excluir
            },
            'vendedorComissaoLista button[action=atualizar]': {
                click: me.atualizar
            },
            'vendedorComissaoLista button[action=imprimir]': {
                click: me.imprimir
            },
            'vendedorComissaoLista button[action=fecharComissao]': {
                click: me.fecharComissao
            },
            'fecharComissao button[action=fecharComissao]': {
                click: me.salvarComissao
            }




        });
    },
    fecharComissao: function(botao) {

        var store = Ext.getStore('VendedorComissoes');
        var record = [];
        store.each(function(rec) {
            record.push(rec.getData());
            //valor_titulo += ((rec.getData().valor * rec.getData().comissao) / 100);
        });


        if (record.length) {
            Ext.create('Illi.view.financeiro.vendedor_comissao.Form', {
                store: store,
                titulos: record
            }).show();
        } else {
            Ext.Msg.alert('Atenção', "Nenhum Registro Encontrado!");
        }

    },
    salvarComissao: function(btn) {
        var janela = btn.up('window');
        var form = btn.up('window').down('form');
        if (form.getForm().isValid()) {
            var store = Ext.getStore('VendedorComissoes');
            var record = [];
            var valor_titulo = 0;
            store.each(function(rec) {
                record.push(rec.getData());
                valor_titulo += ((rec.getData().valor * rec.getData().comissao) / 100);
            });

            Ext.MessageBox.wait('Fechando Comissao...', 'Aguarde');

            Ext.Ajax.request({
                url: '../fluxo/fluxo/iJson/fechar_comissao',
                params: {
                    titulos: Ext.JSON.encode(record),
                    form: Ext.JSON.encode(form.getValues())
                }
                ,
                success: function(response) {

//f                    var retorno = Ext.JSON.decode(response.responseText);
                    Ext.MessageBox.hide();
                    Ext.getStore('VendedorComissoes').load();
                    janela.close();

                },
                failure: function(response, ret) {
                    Ext.Msg.alert('Atenção', ret.result.message.error);
                    janela.close();
                }



            });
        }

    }



});