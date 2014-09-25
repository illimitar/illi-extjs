Ext.define('Illi.controller.produto.PrecoProduto', {
    extend: 'Illi.controller.AbstractController',
    views: [
        'Illi.view.produto.preco_produto.Janela',
        'Illi.view.produto.preco_produto.Form'
    ],
    refs: [
//        {
//            ref: 'gridIlli',
//            selector: 'listaPrecoProduto'
//        },
        {
            ref: 'janelaPrecoProduto',
            selector: 'janelaPrecoProduto'
        },
        {
            ref: 'precoProdutoForm',
            selector: 'precoProdutoForm'
        }

    ],
    init: function() {
        var me = this;
        me.control({
            'janelaPrecoProduto button[action=salvar]': {
                click: me.salvar
            },
            'precoProdutoForm textfield': {
                blur: me.calcularValor
            }
        });
    },
    calcularValor: function(campo) {
        var form = this.getPrecoProdutoForm();
        //var dados = form.getForm().getFieldValues();
        var dados = form.getForm().getValues(false, true);
        if (campo) {
            switch (campo.name) {
                case 'lucro_custo':
                    dados.valor_venda = ((dados.valor_custo * dados.lucro_custo) / 100) + dados.valor_custo;
                    break;
                case 'valor_venda':
                    //
                    break;
                case 'valor_custo':
                    //
                    break;
            }
        }
        //Illi.callLog(campo.name, dados);
        form.getForm().setValues(dados);
        //form.down('textfield[name=codigo]').focus(true, 400).setValue('');
    },
    salvar: function(btn) {
        var form = this.getPrecoProdutoForm();
        var janela = this.getJanelaPrecoProduto();
        var valores = form.getForm().getFieldValues();

        Ext.Ajax.request({
            url: '../produto/preco/iJson/alterarProdutoPreco',
            params: Ext.Object.merge(valores, janela.produto),
            success: function(response) {
                var retorno = Ext.JSON.decode(response.responseText);
            }
        });
    }
});
