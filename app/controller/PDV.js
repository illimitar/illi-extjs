Ext.define('Illi.controller.PDV', {
    extend: 'Illi.controller.AbstractController',
    views: [
        'financeiro.pdv.BarraOpcoesGerais',
        'financeiro.pdv.CampoAutenticador',
        'financeiro.pdv.CampoCancelarItem',
        'financeiro.pdv.CampoCliente',
        'financeiro.pdv.CampoContaCaixa',
        'financeiro.pdv.CampoDesconto',
        'financeiro.pdv.CampoDescontoPorcentagem',
        'financeiro.pdv.CampoPagamentoTroca',
        'financeiro.pdv.CampoPagamentoValor',
        'financeiro.pdv.CampoProdutoCodigo',
        'financeiro.pdv.CampoVendedor',
        'financeiro.pdv.CampoDocumento',
        'financeiro.pdv.FormularioConfiguracaoECF',
        'financeiro.pdv.FormularioConfiguracaoImpressao',
        'financeiro.pdv.FormularioSangria',
        'financeiro.pdv.FormularioSuprimento',
        'financeiro.pdv.FormularioDevolucaoEdicao',
        'financeiro.pdv.ImagemLogotipo',
        'financeiro.pdv.ImagemProduto',
        'financeiro.pdv.JanelaTeclasAtalho',
        'financeiro.pdv.JanelaTeclado',
        'financeiro.pdv.JanelaAutenticador',
        'financeiro.pdv.JanelaCancelamentoVenda',
        'financeiro.pdv.JanelaCancelarItem',
        'financeiro.pdv.JanelaCliente',
        'financeiro.pdv.JanelaClienteSelecao',
        'financeiro.pdv.JanelaVendedorSelecao',
        'financeiro.pdv.JanelaConfiguracaoECF',
        'financeiro.pdv.JanelaConfiguracaoImpressao',
        'financeiro.pdv.JanelaContaCaixa',
        'financeiro.pdv.JanelaDesconto',
        'financeiro.pdv.JanelaDescontoPorcentagem',
        'financeiro.pdv.JanelaFechamentoCaixa',
        'financeiro.pdv.JanelaImpressao',
        'financeiro.pdv.JanelaPagamento',
        'financeiro.pdv.JanelaPagamentoCondicao',
        'financeiro.pdv.JanelaPagamentoForma',
        'financeiro.pdv.JanelaPagamentoTroca',
        'financeiro.pdv.JanelaPagamentoValor',
        'financeiro.pdv.JanelaProdutoPesquisa',
        'financeiro.pdv.JanelaProdutoSelecao',
        'financeiro.pdv.JanelaSangria',
        'financeiro.pdv.JanelaSuprimento',
        'financeiro.pdv.JanelaDevolucao',
        'financeiro.pdv.JanelaDevolucaoEdicao',
        'financeiro.pdv.JanelaTroco',
        'financeiro.pdv.JanelaVendaRapida',
        'financeiro.pdv.JanelaVendedor',
        'financeiro.pdv.JanelaDocumento',
        'financeiro.pdv.JanelaTabelaPrecoVenda',
        'financeiro.pdv.ListaCancelamentoVenda',
        'financeiro.pdv.ListaClienteSelecao',
        'financeiro.pdv.ListaVendedorSelecao',
        'financeiro.pdv.ListaTabelaPreco',
        'financeiro.pdv.ListaFechamentoCaixa',
        'financeiro.pdv.ListaImpressao',
        'financeiro.pdv.ListaItensCancelados',
        'financeiro.pdv.ListaItensPagamento',
        'financeiro.pdv.ListaItensVenda',
        'financeiro.pdv.ListaPagamentoCondicao',
        'financeiro.pdv.ListaPagamentoForma',
        'financeiro.pdv.ListaProdutoPesquisa',
        'financeiro.pdv.ListaProdutoSelecao',
        'financeiro.pdv.ListaDevolucao',
        'financeiro.pdv.ListaDevolucaoEdicao',
        'financeiro.pdv.PainelCentral',
        'financeiro.pdv.PainelCliente',
        'financeiro.pdv.PainelDescontoPorcentagemValor',
        'financeiro.pdv.PainelInferior',
        'financeiro.pdv.PainelLateral',
        'financeiro.pdv.PainelPagamento',
        'financeiro.pdv.PainelPagamentoSubTotal',
        'financeiro.pdv.PainelPagamentoTotal',
        'financeiro.pdv.PainelPagamentoTotalPago',
        'financeiro.pdv.PainelPagamentoTotalSaldo',
        'financeiro.pdv.PainelPagamentoTroco',
        'financeiro.pdv.PainelProduto',
        'financeiro.pdv.PainelProdutoNome',
        'financeiro.pdv.PainelProdutoQtd',
        'financeiro.pdv.PainelProdutoTotal',
        'financeiro.pdv.PainelRelogio',
        'financeiro.pdv.PainelRodape',
        'financeiro.pdv.PainelSuperior',
        'financeiro.pdv.PainelDevolucaoEdicao',
        'financeiro.pdv.PainelVenda',
        'financeiro.pdv.PainelVendaQuantidade',
        'financeiro.pdv.PainelVendaTotal'
    ],
    refs: [
        {ref: 'barraOpcoesGerais', selector: 'barraOpcoesGerais'},
        {ref: 'campoAutenticador', selector: 'campoAutenticador'},
        {ref: 'campoCancelarItem', selector: 'campoCancelarItem'},
        {ref: 'campoCliente', selector: 'campoCliente'},
        {ref: 'campoContaCaixa', selector: 'campoContaCaixa'},
        {ref: 'campoDesconto', selector: 'campoDesconto'},
        {ref: 'campoDescontoPorcentagem', selector: 'campoDescontoPorcentagem'},
        {ref: 'campoPagamentoTroca', selector: 'campoPagamentoTroca'},
        {ref: 'campoPagamentoValor', selector: 'campoPagamentoValor'},
        {ref: 'campoProdutoCodigo', selector: 'campoProdutoCodigo'},
        {ref: 'campoVendedor', selector: 'campoVendedor'},
        {ref: 'campoDocumento', selector: 'campoDocumento'},
        {ref: 'formularioConfiguracaoECF', selector: 'formularioConfiguracaoECF'},
        {ref: 'formularioConfiguracaoImpressao', selector: 'formularioConfiguracaoImpressao'},
        {ref: 'formularioSangria', selector: 'formularioSangria'},
        {ref: 'formularioSuprimento', selector: 'formularioSuprimento'},
        {ref: 'formularioDevolucaoEdicao', selector: 'formularioDevolucaoEdicao'},
        {ref: 'imagemLogotipo', selector: 'imagemLogotipo'},
        {ref: 'imagemProduto', selector: 'imagemProduto'},
        {ref: 'janelaTeclasAtalho', selector: 'janelaTeclasAtalho'},
        {ref: 'janelaTeclado', selector: 'janelaTeclado'},
        {ref: 'janelaAutenticador', selector: 'janelaAutenticador'},
        {ref: 'janelaCancelamentoVenda', selector: 'janelaCancelamentoVenda'},
        {ref: 'janelaCancelarItem', selector: 'janelaCancelarItem'},
        {ref: 'janelaCliente', selector: 'janelaCliente'},
        {ref: 'janelaClienteSelecao', selector: 'janelaClienteSelecao'},
        {ref: 'janelaVendedorSelecao', selector: 'janelaVendedorSelecao'},
        {ref: 'janelaConfiguracaoECF', selector: 'janelaConfiguracaoECF'},
        {ref: 'janelaConfiguracaoImpressao', selector: 'janelaConfiguracaoImpressao'},
        {ref: 'janelaContaCaixa', selector: 'janelaContaCaixa'},
        {ref: 'janelaDesconto', selector: 'janelaDesconto'},
        {ref: 'janelaDescontoPorcentagem', selector: 'janelaDescontoPorcentagem'},
        {ref: 'janelaFechamentoCaixa', selector: 'janelaFechamentoCaixa'},
        {ref: 'janelaImpressao', selector: 'janelaImpressao'},
        {ref: 'janelaPagamento', selector: 'janelaPagamento'},
        {ref: 'janelaPagamentoCondicao', selector: 'janelaPagamentoCondicao'},
        {ref: 'janelaPagamentoForma', selector: 'janelaPagamentoForma'},
        {ref: 'janelaPagamentoTroca', selector: 'janelaPagamentoTroca'},
        {ref: 'janelaPagamentoValor', selector: 'janelaPagamentoValor'},
        {ref: 'janelaProdutoPesquisa', selector: 'janelaProdutoPesquisa'},
        {ref: 'janelaProdutoSelecao', selector: 'janelaProdutoSelecao'},
        {ref: 'janelaSangria', selector: 'janelaSangria'},
        {ref: 'janelaSuprimento', selector: 'janelaSuprimento'},
        {ref: 'janelaDevolucao', selector: 'janelaDevolucao'},
        {ref: 'janelaDevolucaoEdicao', selector: 'janelaDevolucaoEdicao'},
        {ref: 'janelaTroco', selector: 'janelaTroco'},
        {ref: 'janelaVendaRapida', selector: 'janelaVendaRapida'},
        {ref: 'janelaVendedor', selector: 'janelaVendedor'},
        {ref: 'janelaDocumento', selector: 'janelaDocumento'},
        {ref: 'janelaTabelaPrecoVenda', selector: 'janelaTabelaPrecoVenda'},
        {ref: 'listaCancelamentoVenda', selector: 'listaCancelamentoVenda'},
        {ref: 'listaClienteSelecao', selector: 'listaClienteSelecao'},
        {ref: 'listaVendedorSelecao', selector: 'listaVendedorSelecao'},
        {ref: 'listaTabelaPreco', selector: 'listaTabelaPreco'},
        {ref: 'listaFechamentoCaixa', selector: 'listaFechamentoCaixa'},
        {ref: 'listaImpressao', selector: 'listaImpressao'},
        {ref: 'listaItensCancelados', selector: 'listaItensCancelados'},
        {ref: 'listaItensPagamento', selector: 'listaItensPagamento'},
        {ref: 'listaItensVenda', selector: 'listaItensVenda'},
        {ref: 'listaPagamentoCondicao', selector: 'listaPagamentoCondicao'},
        {ref: 'listaPagamentoForma', selector: 'listaPagamentoForma'},
        {ref: 'listaProdutoPesquisa', selector: 'listaProdutoPesquisa'},
        {ref: 'listaProdutoSelecao', selector: 'listaProdutoSelecao'},
        {ref: 'listaDevolucao', selector: 'listaDevolucao'},
        {ref: 'listaDevolucaoEdicao', selector: 'listaDevolucaoEdicao'},
        {ref: 'painelCentral', selector: 'painelCentral'},
        {ref: 'painelCliente', selector: 'painelCliente'},
        {ref: 'painelDescontoPorcentagemValor', selector: 'painelDescontoPorcentagemValor'},
        {ref: 'painelInferior', selector: 'painelInferior'},
        {ref: 'painelLateral', selector: 'painelLateral'},
        {ref: 'painelPagamento', selector: 'painelPagamento'},
        {ref: 'painelPagamentoSubTotal', selector: 'painelPagamentoSubTotal'},
        {ref: 'painelPagamentoTotal', selector: 'painelPagamentoTotal'},
        {ref: 'painelPagamentoTotalPago', selector: 'painelPagamentoTotalPago'},
        {ref: 'painelPagamentoTotalSaldo', selector: 'painelPagamentoTotalSaldo'},
        {ref: 'painelPagamentoTroco', selector: 'painelPagamentoTroco'},
        {ref: 'painelProduto', selector: 'painelProduto'},
        {ref: 'painelProdutoNome', selector: 'painelProdutoNome'},
        {ref: 'painelProdutoQtd', selector: 'painelProdutoQtd'},
        {ref: 'painelProdutoTotal', selector: 'painelProdutoTotal'},
        {ref: 'painelRelogio', selector: 'painelRelogio'},
        {ref: 'painelRodape', selector: 'painelRodape'},
        {ref: 'painelSuperior', selector: 'painelSuperior'},
        {ref: 'painelDevolucaoEdicao', selector: 'painelDevolucaoEdicao'},
        {ref: 'painelVenda', selector: 'painelVenda'},
        {ref: 'painelVendaQuantidade', selector: 'painelVendaQuantidade'},
        {ref: 'painelVendaTotal', selector: 'painelVendaTotal'}
    ],
    init: function () {
        //alert('PDV::init()');
        var me = this;
        // ativa simulação da impressora fiscal
//        me.simulacaoECF = false;
        me.ecf = false;
        //
//        Ext.Ajax.on("beforerequest", function(conn, options, eOpts) {
//            try {
//                console.debug("PHP --->", options.url, options.params);
//            } catch (err) {
//                console.error(err);
//            }
//
//        });
        me.setVariavelGlobal();
        //
        //
        //
        me.janelaTeclasAtalho = Ext.widget('janelaTeclasAtalho');
        me.janelaTeclado = Ext.widget('janelaTeclado');
        me.janelaAutenticador = Ext.widget('janelaAutenticador');
        me.janelaCancelamentoVenda = Ext.widget('janelaCancelamentoVenda');
        me.janelaCancelarItem = Ext.widget('janelaCancelarItem');
        me.janelaCliente = Ext.widget('janelaCliente');
        me.janelaClienteSelecao = Ext.widget('janelaClienteSelecao');
        me.janelaVendedorSelecao = Ext.widget('janelaVendedorSelecao');
        me.janelaConfiguracaoECF = Ext.widget('janelaConfiguracaoECF');
        me.janelaConfiguracaoImpressao = Ext.widget('janelaConfiguracaoImpressao');
        me.janelaContaCaixa = Ext.widget('janelaContaCaixa');
        me.janelaDesconto = Ext.widget('janelaDesconto');
        me.janelaDescontoPorcentagem = Ext.widget('janelaDescontoPorcentagem');
        me.janelaFechamentoCaixa = Ext.widget('janelaFechamentoCaixa');
        me.janelaImpressao = Ext.widget('janelaImpressao');
        me.janelaPagamento = Ext.widget('janelaPagamento');
        me.janelaPagamentoCondicao = Ext.widget('janelaPagamentoCondicao');
        me.janelaPagamentoForma = Ext.widget('janelaPagamentoForma');
        me.janelaPagamentoTroca = Ext.widget('janelaPagamentoTroca');
        me.janelaPagamentoValor = Ext.widget('janelaPagamentoValor');
        me.janelaProdutoPesquisa = Ext.widget('janelaProdutoPesquisa');
        me.janelaProdutoSelecao = Ext.widget('janelaProdutoSelecao');
        me.janelaSangria = Ext.widget('janelaSangria');
        me.janelaSuprimento = Ext.widget('janelaSuprimento');
        me.janelaDevolucao = Ext.widget('janelaDevolucao');
        me.janelaDevolucaoEdicao = Ext.widget('janelaDevolucaoEdicao');
        me.janelaTroco = Ext.widget('janelaTroco');
        me.janelaVendedor = Ext.widget('janelaVendedor');
        me.janelaDocumento = Ext.widget('janelaDocumento');
        me.janelaTabelaPrecoVenda = Ext.widget('janelaTabelaPrecoVenda');
        //
        //
        //
        me.storeProdutos = Ext.create('Illi.store.produto.Produtos', {
            autoLoad: false,
            storeId: 'pdvStoreProduto'
        });
        me.storeClientes = Ext.create('Illi.store.Pessoas', {
            autoLoad: false,
            storeId: 'pdvStoreCliente'
        });
        me.storeVendedores = Ext.create('Illi.store.Pessoas', {
            autoLoad: false,
            storeId: 'pdvStoreVendedor'
        });
        me.storePrazoFechamento = Ext.create('Illi.store.Prazos', {
            autoLoad: false,
            storeId: 'pdvStorePrazoFechamento'
        });
        me.storePrazoFechamento.proxy.extraParams = {
            'filter': Ext.JSON.encode([
                {"property": "situacao", "value": "ATIVO", "type": "string", "operator": "eq"}
            ]),
            'forceOrder': '1'
        };
        me.storePrazoFechamento.load();
        //
        //
        //
        me.control({
            'barraOpcoesGerais button': {
                click: me.onClick
            },
            //
            'campoAutenticador': {
                afterrender: me.onAfterRender,
                focus: me.onFocus
            },
            'campoCancelarItem': {
                afterrender: me.onAfterRender,
                focus: me.onFocus
            },
            'campoCliente': {
                afterrender: me.onAfterRender,
                focus: me.onFocus
            },
            'campoContaCaixa': {
                afterrender: me.onAfterRender,
                focus: me.onFocus
            },
            'campoDesconto': {
                afterrender: me.onAfterRender,
                focus: me.onFocus
            },
            'campoDescontoPorcentagem': {
                afterrender: me.onAfterRender,
                focus: me.onFocus,
                keyup: me.onKeyUp
            },
            'campoPagamentoTroca': {
                afterrender: me.onAfterRender,
                focus: me.onFocus
            },
            'campoPagamentoValor': {
                afterrender: me.onAfterRender,
                focus: me.onFocus
            },
            'campoProdutoCodigo': {
                afterrender: me.onAfterRender,
                focus: me.onFocus
            },
            'campoVendedor': {
                afterrender: me.onAfterRender,
                focus: me.onFocus
            },
            'campoDocumento': {
                afterrender: me.onAfterRender,
                focus: me.onFocus
            },
            //
            'formularioConfiguracaoECF': {
                afterrender: me.onAfterRender
            },
            'formularioConfiguracaoImpressao': {
                afterrender: me.onAfterRender
            },
            'formularioSangria': {
                afterrender: me.onAfterRender
            },
            'formularioSuprimento': {
                afterrender: me.onAfterRender
            },
            'formularioDevolucaoEdicao': {
                afterrender: me.onAfterRender
            },
            //
            'imagemLogotipo': {
                afterrender: me.onAfterRender
            },
            'imagemProduto': {
                afterrender: me.onAfterRender
            },
            //
            'janelaTeclasAtalho': {
                afterrender: me.onAfterRender
            },
            'janelaTeclasAtalho button': {
                click: me.onClick
            },
            'janelaTeclado': {
                afterrender: me.onAfterRender
            },
            'janelaTeclado button': {
                click: me.onClick
            },
            'janelaAutenticador': {
                afterrender: me.onAfterRender
            },
            'janelaCancelamentoVenda': {
                afterrender: me.onAfterRender
            },
            'janelaCancelarItem': {
                afterrender: me.onAfterRender
            },
            'janelaCliente': {
                afterrender: me.onAfterRender
            },
            'janelaClienteSelecao': {
                afterrender: me.onAfterRender
            },
            'janelaVendedorSelecao': {
                afterrender: me.onAfterRender
            },
            'janelaConfiguracaoECF': {
                afterrender: me.onAfterRender
            },
            'janelaConfiguracaoECF button': {
                click: me.onClick
            },
            'janelaConfiguracaoImpressao': {
                afterrender: me.onAfterRender
            },
            'janelaConfiguracaoImpressao button': {
                click: me.onClick
            },
            'janelaContaCaixa': {
                afterrender: me.onAfterRender
            },
            'janelaDesconto': {
                afterrender: me.onAfterRender
            },
            'janelaDescontoPorcentagem': {
                afterrender: me.onAfterRender
            },
            'janelaFechamentoCaixa button': {
                click: me.onClick
            },
            'janelaImpressao': {
                afterrender: me.onAfterRender
            },
            'janelaPagamento': {
                afterrender: me.onAfterRender
            },
            'janelaFechamentoCaixa': {
                afterrender: me.onAfterRender
            },
            'janelaPagamentoCondicao': {
                afterrender: me.onAfterRender
            },
            'janelaPagamentoForma': {
                afterrender: me.onAfterRender
            },
            'janelaPagamentoTroca': {
                afterrender: me.onAfterRender
            },
            'janelaPagamentoValor': {
                afterrender: me.onAfterRender
            },
            'janelaProdutoPesquisa': {
                afterrender: me.onAfterRender
            },
            'janelaProdutoSelecao': {
                afterrender: me.onAfterRender
            },
            'janelaSangria': {
                afterrender: me.onAfterRender
            },
            'janelaSangria button': {
                click: me.onClick
            },
            'janelaSuprimento': {
                afterrender: me.onAfterRender
            },
            'janelaSuprimento button': {
                click: me.onClick
            },
            'janelaDevolucao': {
                afterrender: me.onAfterRender
            },
            'janelaDevolucao button': {
                click: me.onClick
            },
            'janelaDevolucaoEdicao': {
                afterrender: me.onAfterRender
            },
            'janelaDevolucaoEdicao button': {
                click: me.onClick
            },
            'janelaTroco': {
                afterrender: me.onAfterRender
            },
            'janelaVendaRapida': {
                afterrender: me.onAfterRender,
                show: me.onShow
            },
            'janelaVendedor': {
                afterrender: me.onAfterRender
            },
            'janelaDocumento': {
                afterrender: me.onAfterRender
            },
            //
            'listaCancelamentoVenda': {
                afterrender: me.onAfterRender,
                select: me.onSelect,
                cellkeydown: me.onCellKeyDown
            },
            'listaClienteSelecao': {
                afterrender: me.onAfterRender,
                select: me.onSelect,
                cellkeydown: me.onCellKeyDown
            },
            'listaVendedorSelecao': {
                afterrender: me.onAfterRender,
                select: me.onSelect,
                cellkeydown: me.onCellKeyDown
            },
            'listaTabelaPreco': {
                afterrender: me.onAfterRender,
                select: me.onSelect,
                cellkeydown: me.onCellKeyDown
            },
            'listaFechamentoCaixa': {
                afterrender: me.onAfterRender,
                select: me.onSelect,
                cellkeydown: me.onCellKeyDown
            },
            'listaImpressao': {
                afterrender: me.onAfterRender,
                select: me.onSelect,
                cellkeydown: me.onCellKeyDown
            },
            'listaItensCancelados': {
                afterrender: me.onAfterRender
            },
            'listaItensPagamento': {
                afterrender: me.onAfterRender,
                select: me.onSelect
            },
            'listaItensVenda': {
                afterrender: me.onAfterRender,
                select: me.onSelect
            },
            'listaPagamentoCondicao': {
                afterrender: me.onAfterRender,
                select: me.onSelect,
                cellkeydown: me.onCellKeyDown
            },
            'listaPagamentoForma': {
                afterrender: me.onAfterRender,
                select: me.onSelect,
                cellkeydown: me.onCellKeyDown
            },
            'listaProdutoPesquisa': {
                afterrender: me.onAfterRender,
                select: me.onSelect,
                cellkeydown: me.onCellKeyDown
            },
            'listaProdutoSelecao': {
                afterrender: me.onAfterRender,
                select: me.onSelect,
                cellkeydown: me.onCellKeyDown
            },
            'listaDevolucao': {
                afterrender: me.onAfterRender,
                select: me.onSelect,
                cellkeydown: me.onCellKeyDown,
                itemdblclick: me.onItemDblClick
            },
            'listaDevolucaoEdicao': {
                afterrender: me.onAfterRender,
                select: me.onSelect,
                cellkeydown: me.onCellKeyDown
            },
            //
            'painelCentral': {
                afterrender: me.onAfterRender
            },
            'painelCliente': {
                afterrender: me.onAfterRender
            },
            'painelDescontoPorcentagemValor': {
                afterrender: me.onAfterRender
            },
            'painelInferior': {
                afterrender: me.onAfterRender
            },
            'painelLateral': {
                afterrender: me.onAfterRender
            },
            'painelPagamento': {
                afterrender: me.onAfterRender
            },
            'painelPagamentoSubTotal': {
                afterrender: me.onAfterRender
            },
            'painelPagamentoTotal': {
                afterrender: me.onAfterRender
            },
            'painelPagamentoTotalPago': {
                afterrender: me.onAfterRender
            },
            'painelPagamentoTotalSaldo': {
                afterrender: me.onAfterRender
            },
            'painelPagamentoTroco': {
                afterrender: me.onAfterRender
            },
            'painelProduto': {
                afterrender: me.onAfterRender
            },
            'painelProdutoNome': {
                afterrender: me.onAfterRender
            },
            'painelProdutoQtd': {
                afterrender: me.onAfterRender
            },
            'painelProdutoTotal': {
                afterrender: me.onAfterRender
            },
            'painelRelogio': {
                afterrender: me.onAfterRender
            },
            'painelRodape': {
                afterrender: me.onAfterRender
            },
            'painelSuperior': {
                afterrender: me.onAfterRender
            },
            'painelDevolucaoEdicao': {
                afterrender: me.onAfterRender
            },
            'painelVenda': {
                afterrender: me.onAfterRender
            },
            'painelVendaQuantidade': {
                afterrender: me.onAfterRender
            },
            'painelVendaTotal': {
                afterrender: me.onAfterRender
            }
        });
    },
    setVariavelGlobal: function () {
        //alert('PDV::setVariavelGlobal()');
        var control = this;
        control.cenarioAtivo = "abertura";
        control.tentativasFechamentoCaixa = -1;
        control.itemUltimoInserido = 0; // control.cupom.total_item
        control.itemPagamentoUltimoInserido = 0;
        control.itemVendaSelecionado = false;
        control.itemPagamentoSelecionado = false;
        control.itemImpressaoSelecionado = false;
        control.itemCancelamentoVendaSelecionado = false;
        control.itemPagamentoCondicaoSelecionado = false;
        control.itemPagamentoFormaSelecionado = false;
        control.itemFechamentoCaixaSelecionado = false;
        control.itemProdutoPesquisaSelecionado = false;
        control.itemProdutoSelecionado = false;
        control.itemClienteSelecionado = false;
        control.itemTabelaPreco = false;
        control.itemVendedorSelecionado = false;
        control.itemDevolucaoSelecionado = false;
        control.permitirTroco = true;
        control.totalVenda = 0; // control.cupom.total
        control.totalDesconto = 0; // control.cupom.desconto
//        control.totalDescontoPorcentagem = 0; // control.cupom.porcenta_desconto
        control.totalPagamento = 0; // control.cupom.pagamento.
        control.totalTroco = 0; // control.cupom.troco
        control.setTabelaPreco(0, '');
        control.setCliente(0, 'Selecionar cliente...');
        control.setVendedor(0, 'Selecionar vendedor...');
        control.setDocumento();
    },
    setCliente: function (id, nome) {
        //alert('PDV::setCliente()', id, nome);
        var control = this;
        control.clienteSelecionado = {
            'id': id,
            'nome': nome
        };
        if (id) {
            control.setSuperiorCliente(nome);
        }
    },
    setVendedor: function (id, nome) {
        //alert('PDV::setVendedor()', id, nome);
        var control = this;
        control.vendedorSelecionado = {
            'id': id,
            'nome': nome
        };
        if (id) {
            control.setRodapeVendedor(nome);
        }
    },
    setDocumento: function (documento) {
        //alert('PDV::setDocumento()', documento);
        var control = this;
        control.documentoSelecionado = documento;
        if (documento) {
            control.setRodapeDocumento(documento);
        } else {
            control.setRodapeDocumento("");
        }
    },
    setRelogio: function (callback) {
        //alert('PDV::setRelogio()', callback);
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var doSucessoRelogio = function (response) {
            control.relogioHorario = response.horario * 1000;
            var task = new Ext.util.TaskRunner();
            control.relogio = task.newTask({
                run: function () {
                    control.painelRelogio.update(Ext.Date.format(new Date(control.relogioHorario), 'H:i:s'));
                    control.relogioHorario += 1000;
                },
                interval: 1000
            });
            control.relogio.start();
            control.setRelogioSync(callback);
        };
        var doFalhaRelogio = function (response) {
            control.janelaVendaRapidaOcultar();
        };
        control.xhrRelogio(true, doSucessoRelogio, doFalhaRelogio);
    },
    setRelogioSync: function (callback) {
        //alert('PDV::setRelogioSync()', callback);
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var task = new Ext.util.TaskRunner();
        var relogio = task.newTask({
            run: function () {
                //alert('taskRelogioSync.newTask.run()', control.relogioHorario);
                var doSucessoRelogio = function (response) {
                    control.relogio.stop();
                    control.relogioHorario = response.horario * 1000;
                    control.relogio.start();
                };
                control.xhrRelogio(false, doSucessoRelogio, Ext.emptyFn);
            },
            interval: 300000
        });
        relogio.start();
        if (callback) {
            callback();
        }
    },
    setProduto: function () {
        //alert('PDV::setProduto()');
        var control = this;
        var campoProduto = control.campoProdutoCodigo;
        if (!campoProduto.isDisabled()) {
            if (campoProduto.getValue().length > 0) {
                control.listaItensVendaAdicionar(campoProduto.getValue());
            }
        }
    },
    setRodapeOperador: function (valor) {
        //alert('PDV::setRodapeOperador()', valor);
        var control = this;
        control.janelaVendaRapida.down('#pdvRodapeOperador').update('<b>Operador: </b>' + valor);
    },
    setRodapeCaixa: function (valor) {
        //alert('PDV::setRodapeCaixa()', valor);
        var control = this;
        control.janelaVendaRapida.down('#pdvRodapeCaixa').update('<b>Caixa: </b>' + valor);
    },
    setRodapeVendedor: function (valor) {
        //alert('PDV::setRodapeVendedor()', valor);
        var control = this;
        control.janelaVendaRapida.down('#pdvRodapeVendedor').update('<b>Vendedor: </b>' + valor);
    },
    setRodapeDocumento: function (valor) {
        var control = this;
        if (control.janelaVendaRapida) {
            control.janelaVendaRapida.down('#pdvRodapeDocumento').update((valor !== '' ? '<b>Documento: </b>' + valor : ''));
        }
    },
    setRodapeTabelaPreco: function (valor) {
        //alert('PDV::setRodapeTabelaPreco()', valor);
        var control = this;
        control.janelaVendaRapida.down('#pdvRodapeTabelaPreco').update('<b>Tabela Preço: </b>' + valor);
    },
    setSuperiorCliente: function (valor) {
        //alert('PDV::setSuperiorCliente()', valor);
        var control = this;
        control.painelCliente.update(valor);
    },
    setRodapeAjuda: function () {
        //alert('PDV::pdvRodapeAjuda()');
        var control = this;
        control.painelRodape.add(
//                {
//                    xtype: 'panel',
//                    itemId: 'pdvRodapeAjuda',
//                    style: {cursor: "pointer"},
//                    padding: '0 5 0 5',
//                    cls: 'rodape',
//                    html: '<b>CTRL + H: Ajuda</b>',
//                    listeners: {
//                        click: {
//                            element: 'el',
//                            fn: function () {
//                                control.janelaTeclasAtalhoExibir();
//                            }
//                        }
//                    }
//                },
                {
                    xtype: 'image',
                    style: {cursor: "pointer"},
                    itemId: 'suporteIlli',
                    src: Illi.app.Util.getPath("/resources/images/icones/suporte.png"),
                    tooltip: "Suporte",
                    padding: 0,
                    height: 36,
                    listeners: {
                        click: {
                            element: 'el',
                            fn: function () {
                                try {
                                    Ext.MessageBox.show({
                                        title: 'Atenção',
                                        msg: "<h3>Carregando acesso remoto</h3>",
                                        waitConfig: {interval: 0}
                                    });
                                    var url = Illi.app.Local.get('suporte');
                                    Ext.Ajax.request({
                                        method: 'POST',
                                        url: (url ? url : "http://127.0.0.1:12000/suporte"),
                                        success: function (response) {

                                            try {
                                                var retorno = Ext.JSON.decode(response.responseText);
                                                if (retorno.finalizado === true) {

                                                } else {
                                                    window.open("http://app.illi.com.br/Remoto.exe", "illi");
                                                }
                                            } catch (err) {
                                                window.open("http://app.illi.com.br/Remoto.exe", "illi");
                                            }
                                            Ext.MessageBox.hide();
                                        },
                                        failure: function () {
                                            Ext.MessageBox.hide();
                                            window.open("http://app.illi.com.br/Remoto.exe", "illi");
                                        }
                                    });
                                } catch (err) {
                                    console.error(err);
                                    Ext.MessageBox.hide();
                                    window.open("http://app.illi.com.br/Remoto.exe", "illi");
                                }
                            }
                        }
                    }
                },
        {
            xtype: 'image',
            style: {cursor: "pointer"},
            itemId: 'logoIlli',
            src: Illi.app.Util.getPath("/resources/images/icones/acao/sair.png"),
            tooltip: "Sair",
            padding: 0,
            height: 36,
            listeners: {
                click: {
                    element: 'el',
                    fn: function () {
                        control.janelaVendaRapidaOcultar();
                    }
                }
            }
        }
        );
    },
    setCache: function () {
        //alert('PDV::setCache()');
        var control = this;
        var doSucessoCache = function () {
            closepage = true;
            window.location.reload(true);
        };
        control.xhrCache(cache, doSucessoCache, Ext.emptyFn);
    },
    getQuantidadeProduto: function (codigo) {
        //alert('PDV::getQuantidadeProduto()', codigo);
        var quantidade = 1;
        var n = codigo.toLowerCase().split("x", 2);
        if (n.length > 1) {
            quantidade = Illi.app.Util.stringToFloat(n[0]);
            codigo = n[1];
        } else {
            n = codigo.toLowerCase().split("*", 2);
            if (n.length > 1) {
                quantidade = Illi.app.Util.stringToFloat(n[0]);
                codigo = n[1];
            }
        }
        return {quantidade: quantidade, codigo: codigo};
    },
    getVendaIniciada: function (silent) {
        var control = this;
        if (control.janelaVendaRapida.quantidadeVenda !== undefined && control.janelaVendaRapida.quantidadeVenda > 0) {
            return true;
        }
        if (silent !== true) {
            control.MSG("Sua venda ainda não foi iniciada!", Ext.emptyFn);
        }
        return false;
    },
    //
    //
    //
    //
    //
    //
    setTabelaPreco: function (id, nome) {
        var control = this;
        control.tabelaSelecionada = {
            'id': id,
            'nome': nome
        };
        if (id) {
            control.setRodapeTabelaPreco(nome);
        }
    },
    setContaCaixa: function () {
        //alert('PDV::setContaCaixa()');
        var control = this;
        var codigo = control.campoContaCaixa;
        var proxy = codigo.store.getProxy().extraParams;
        Ext.apply(proxy, {
            nome: control.ultimaSessao.contaCaixaPadrao
        });
        codigo.store.getProxy().extraParams = proxy;
        codigo.store.load({
            callback: function () {
                //alert('codigo.store.load.callback()', control.ultimaSessao.contaCaixaPadrao);
                codigo.setValue(control.ultimaSessao.contaCaixaPadrao);
                codigo.focus();
            }
        });
    },
    setConfiguracaoECF: function (form, sucesso, falha) {
        //alert('PDV::setConfiguracaoECF()', form, sucesso, falha);
        var control = this;
        control.MSG('Salvando Configuração...');
        setTimeout(function () {
            try {
                form.offline = Illi.app.Local.get('pdvImpressoraECF').offline;
                Illi.app.Local.set('pdvImpressoraECF', form);
                sucesso(false);
            } catch (e) {
                error(e);
                control.MSG('Problemas em salvar a configuração, tente novamente!', falha);
            }
        }, 250);
    },
    setConfiguracaoImpressao: function (form, sucesso, falha) {
        //alert('PDV::setConfiguracaoImpressao()', form, sucesso, falha);
        var control = this;
        control.MSG('Salvando Configuração...');
        setTimeout(function () {
            try {
                Illi.app.Local.set('pdvImpressora', form);
                var ecf = Illi.app.Local.get('pdvImpressoraECF');
                if (ecf === undefined) {
                    ecf = {};
                }
                ecf.offline = form.ecfOffline;
                Illi.app.Local.set('pdvImpressoraECF', ecf);
                sucesso(false);
            } catch (e) {
                error(e);
                control.MSG('Problemas em salvar a configuração, tente novamente!', falha);
            }
        }, 250);
    },
    MSG: function (mensagem, acao, confirmar) {
        var control = this;
        acao = (acao && typeof (acao) === 'function' ? acao : false);
        try {
            if (mensagem) {
                if (acao) {
                    if (confirmar) {
                        Ext.MessageBox.show({
                            title: 'Atenção',
                            msg: '<h3>' + mensagem + '</h3>',
                            buttons: Ext.Msg.YESNO,
                            waitConfig: {interval: 0},
                            fn: acao
                        });
                    } else {
                        Ext.MessageBox.alert('Atenção', '<h3>' + mensagem + '</h3>', acao);
                    }
                } else {
                    Ext.MessageBox.show({
                        title: 'Atenção',
                        msg: '<h3>' + mensagem + '</h3>',
                        waitConfig: {interval: 0}
                    });
                }
            } else {
                if (Ext.MessageBox.isVisible()) {
                    Ext.MessageBox.hide();
                }
            }
        } catch (e) {
            if (Ext.MessageBox.isVisible()) {
                Ext.MessageBox.hide();
            }
        }
    },
    //
    //
    //
    xhrRelogio: function (first, sucesso, falha) {
        //alert('PDV::xhrRelogio()', first, sucesso, falha);
        var control = this;
        if (first) {
            control.MSG("Sincronizando relógio!");
        }
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }
                //if (first) {
                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(relogio)', falha);
                //}
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            if (first) {
                                control.MSG();
                            }
                            sucesso(response);
                        } else {
                            if (first) {
                                control.MSG('O contador do relógio não foi iniciado!', function () {
                                    falha(response);
                                });
                            }
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/illi/relogio',
                    method: 'POST',
                    async: false,
                    params: {},
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrPreAbertura: function (idConta, sucesso, falha) {
        //alert('PDV::xhrPreAbertura()', idConta, sucesso, falha);
        var control = this;
        //setTimeout(function() {
        var doFalha = function (response) {
            if (response) {
                error(response);
            }
            control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(preabertura)', falha);
        };
        try {
            var doSucesso = function (data) {
                if (data.responseText) {
                    var response = Ext.JSON.decode(data.responseText);
                    if (response.status === true) {
                        control.MSG();
                        sucesso(response.informacao);
                    } else {
                        control.MSG('Seu caixa não pode ser iniciado!<br /><b>Motivo:</b> ' + response.observacao, function () {
                            falha(response);
                        });
                    }
                } else {
                    doFalha(false);
                }
            };
            Ext.Ajax.request({
                url: '/pdv/vendarapida/iJson/pre_abertura',
                method: 'POST',
                async: false,
                params: {
                    'id_conta': (idConta ? idConta : '')
                },
                success: doSucesso,
                failure: doFalha
            });
        } catch (e) {
            console.error(e);
            doFalha(e);
        }
        //}, 250);
    },
    xhrAbertura: function (idConta, sucesso, falha) {
        //alert('PDV::xhrAbertura()', idConta, sucesso, falha);
        var control = this;
        control.MSG('Abrindo Caixa...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }
                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(abertura)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {
                            control.MSG('Seu caixa não pode ser iniciado!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/abertura',
                    method: 'POST',
                    async: false,
                    params: {
                        'id_conta': (idConta ? idConta : '')
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrAutenticacao: function (senha, funcao, acao, idConta, sucesso, falha) {
        //alert('PDV::xhrAutenticacao()', senha, sucesso, falha);
        var control = this;
        control.MSG('Autenticando...');
        var id_movimentacao = (control.itemImpressaoSelecionado ? control.itemImpressaoSelecionado.get('m.id') : null);
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }
                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(autenticacao)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {

                            control.MSG('Sua operação não foi autorizada!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/autenticador',
                    method: 'POST',
                    async: false,
                    params: {
                        pin: (senha ? senha : ''),
                        funcao: (funcao ? funcao : ''),
                        acao: (acao ? acao : ''),
                        id_movimentacao: id_movimentacao,
                        tipo: funcao,
                        id_conta: (idConta ? idConta : '')
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrTroca: function (codigo, sucesso, falha) {
        //alert('PDV::xhrTroca()', codigo, sucesso, falha);
        var control = this;
        control.MSG('Analizando Troca...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }

                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(troca)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {

                            control.MSG('Troca não foi efetuada!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/troca',
                    method: 'POST',
                    async: false,
                    params: {
                        'codigo': (codigo ? codigo : '')
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrCache: function (caching, sucesso, falha) {
        //alert('PDV::xhrCache()', caching, sucesso, falha);
        var control = this;
        if (caching) {
            control.MSG('Desativando Cache...');
        } else {
            control.MSG('Ativando Cache ...');
        }
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }

                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(cache)', falha);
            };
            try {
                var doSucesso = function (data) {

                    sucesso(data);
                };
                Ext.Ajax.request({
                    url: '../illi/definir_cache/',
                    method: 'POST',
                    async: false,
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrFinalizaVenda: function (shift, idCliente, idVendedor, documento, idConta, totalVenda, totalDesconto, totalPagamento, totalTroco, listaItensVenda, listaItensCancelados, listaItensPagamento, sucesso, falha) {
        //alert('PDV::xhrFinalizaVenda(shift, idCliente, idVendedor, documento, idConta, totalVenda, totalDesconto, totalPagamento, totalTroco, listaItensVenda, listaItensCancelados, listaItensPagamento);
        var control = this;
        control.MSG('Finalizando Venda...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }

                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(finalizavenda)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            control.estadoECF = false;
                            control.itemImpressaoSelecionado = false;
                            sucesso(response);
                        } else {
                            control.MSG('Sua venda não foi finalizada!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/finaliza_venda',
                    method: 'POST',
                    async: false,
                    params: {
                        'shift': (shift ? shift : ''),
                        'tabela_venda': (control.tabelaSelecionada ? control.tabelaSelecionada.id : ""),
                        'id_cliente': (idCliente ? idCliente : ''),
                        'id_vendedor': (idVendedor ? idVendedor : ''),
                        'documento': (documento ? documento : ''),
                        'id_conta': (idConta ? idConta : ''),
                        'total_venda': (totalVenda ? totalVenda : ''),
                        'total_desconto': (totalDesconto ? totalDesconto : ''),
                        'total_pagamento': (totalPagamento ? totalPagamento : ''),
                        'total_troco': (totalTroco ? totalTroco : ''),
                        'itens': (listaItensVenda ? listaItensVenda : ''),
                        'itens_cancelados': (listaItensCancelados ? listaItensCancelados : ''),
                        'pagamento': (listaItensPagamento ? listaItensPagamento : ''),
                        'ecf': (shift ? '' : (control.ecf ? Ext.JSON.encode(control.ecf) : ''))
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 150);
    },
    xhrImpressao: function (conteudo, sucesso, falha) {
        //alert('PDV::xhrImpressao()', conteudo, sucesso, falha);
        var control = this;
//        if (control.simulacaoECF === true) {
//            if (sucesso) {
//                sucesso(false);
//            }
//            return;
//        }
        var impressoraOffline = true;
        var impressoraServidor = 'http://127.0.0.1:11000/proxy/impressora.php';
        var impressoraPorta = 'COM1';
        var impressoraGuilhotina = false;
        var impressoraDrive = 'UNIVERSAL';
        var impressoraQuebraPagina = 8;
        var pdvImpressora = Illi.app.Local.get('pdvImpressora');
        if (pdvImpressora) {
            try {
                impressoraOffline = (pdvImpressora.offline !== undefined ? pdvImpressora.offline : impressoraOffline);
                impressoraServidor = (pdvImpressora.servidor !== undefined ? 'http://' + pdvImpressora.servidor : impressoraServidor);
                impressoraPorta = (pdvImpressora.porta !== undefined ? pdvImpressora.porta : impressoraPorta);
                impressoraGuilhotina = (pdvImpressora.guilhotina !== undefined ? pdvImpressora.guilhotina : impressoraGuilhotina);
                impressoraDrive = (pdvImpressora.drive !== undefined ? pdvImpressora.drive : impressoraDrive);
                impressoraQuebraPagina = (pdvImpressora.quebra !== undefined ? pdvImpressora.quebra : impressoraQuebraPagina);
            } catch (err) {
                console.error(err);
            }

        }
        if (impressoraOffline) {
            sucesso(false);
        } else {
            control.MSG('Gerando Impressão...');
            setTimeout(function () {
                var doFalha = function (response) {
                    if (response) {
                        error(response);
                    }
                    control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(impressao)', falha);
                };
                try {
                    var doSucesso = function (data) {
                        if (data.responseText) {
                            var response = Ext.JSON.decode(data.responseText);
                            if (response.finalizado === true) {
                                control.MSG();
                                sucesso(response);
                            } else {
                                control.MSG('Sua informação foi processada, mas não foi possível imprimir!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                    falha(response);
                                });
                            }
                        } else {
                            doFalha(false);
                        }
                    };
                    switch (impressoraDrive) {
                        case 1:
                            impressoraDrive = 'daruma';
                            break;
                        case 2:
                            impressoraDrive = 'bematech';
                            break;
                        case 3:
                            impressoraDrive = 'diebold';
                            break;
                        default:
                            impressoraDrive = 'UNIVERSAL';
                            break;
                    }
                    for (iQuebra = 0; iQuebra < impressoraQuebraPagina; iQuebra++) {
                        conteudo = conteudo + "\n"; // + iQuebra;
                    }
                    Ext.Ajax.request({
                        url: impressoraServidor,
                        method: 'POST',
                        params: {
                            'imprimir': (conteudo ? conteudo : ''),
                            'porta': (impressoraPorta ? impressoraPorta : ''),
                            'guilhotina': (impressoraGuilhotina ? impressoraGuilhotina : ''),
                            'drive': (impressoraDrive ? impressoraDrive : '')
                        },
                        success: doSucesso,
                        failure: doFalha
                    });
                } catch (e) {
                    console.error(e);
                    control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(impressao)', falha);
                    doFalha(e);
                }
            }, 250);
        }
    },
    xhrImpressaoTeste: function (impressoraServidor, impressoraPorta, impressoraDrive, impressoraQuebraPagina, impressoraGuilhotina, impressoraConteudo, sucesso, falha) {
        //alert('PDV::xhrImpressaoTeste()', impressoraServidor, impressoraPorta, impressoraDrive, impressoraQuebraPagina, impressoraGuilhotina, impressoraConteudo, sucesso, falha);
        var control = this;
        control.MSG('Imprimindo Teste...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }

                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(impressaoteste)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.finalizado === true) {
                            control.MSG();
                            sucesso(response);
                        } else {

                            control.MSG('Impressão do Teste não foi efetuada!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                switch (impressoraDrive) {
                    case 1:
                        impressoraDrive = 'daruma';
                        break;
                    case 2:
                        impressoraDrive = 'bematech';
                        break;
                    case 3:
                        impressoraDrive = 'diebold';
                        break;
                    default:
                        impressoraDrive = 'UNIVERSAL';
                        break;
                }
                for (iQuebra = 0; iQuebra < impressoraQuebraPagina; iQuebra++) {
                    impressoraConteudo = impressoraConteudo + "\n"; // + iQuebra;
                }
                Ext.Ajax.request({
                    url: 'http://' + impressoraServidor,
                    method: 'POST',
                    async: false,
                    params: {
                        'imprimir': (impressoraConteudo ? impressoraConteudo : ''),
                        'porta': (impressoraPorta ? impressoraPorta : ''),
                        'guilhotina': (impressoraGuilhotina ? impressoraGuilhotina : ''),
                        'drive': (impressoraDrive ? impressoraDrive : '')
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrCupomImprimirPHP: function (params, servidor, drive, concomitante, sucesso, falha) {
//        var impressoraServidor = '../ecf/send';
//        var impressoraDrive = 0;
//        var impressoraConcomitante = false;
//        var impressoraOffline = true;
//        if (servidor !== undefined && servidor !== false) {
//            impressoraDrive = drive;
//            impressoraConcomitante = true;
//            impressoraOffline = false;
//        } else {
//            var pdvImpressoraECF = Illi.app.Local.get('pdvImpressoraECF');
//            if (pdvImpressoraECF) {
//                impressoraDrive = pdvImpressoraECF.drive;
//                impressoraConcomitante = pdvImpressoraECF.concomitante;
//                impressoraOffline = pdvImpressoraECF.offline;
//            }
//        }
//        if (impressoraOffline) {
////            sucesso(false);
//        } else {
//            if (!impressoraConcomitante && params.acao !== undefined) {
//                switch (params.acao) {
//                    case 'Leitura X':
//                    case 'Redução Z':
//                    case 'Sangria':
//                    case 'Suprimento':
//                    case 'Relatorio Gerencial':
//                    case 'Abrir Cupom':
//                        impressoraConcomitante = true;
//                        break;
//                    default:
//                        if (concomitante) {
//                            impressoraConcomitante = true;
//                        }
//                        break;
//                }
//            }
//            if (impressoraConcomitante) {
//                Ext.MessageBox.show({
//                    msg: '<h3>' + params.acao + '</h3>',
//                    wait: true,
//                    waitConfig: {interval: 0}
//                });
//                //setTimeout(function() {
//                var doFalha = function(response) {
//                    alert("doFalha " + params.acao, response);
//                    if (response) {
//                        error(response);
//                    }
//                    control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(imprimircupom)', (falha ? falha : false));
//                };
//                try {
//                    var doSucesso = function(data) {
//                        alert("doSucesso " + params.acao, data);
//                        if (data.responseText) {
//                            var response = Ext.JSON.decode(data.responseText);
//                            if (response.finalizado === true) {
//                                control.MSG();
//                                sucesso(response);
//                            } else {
//                                if (falha !== 'hide') {
//                                    control.MSG('Impressão no cupom fiscal não foi efetuada!<br /><b>Motivo:</b> ' + response.observacao, function() {
//                                        falha(response);
//                                    });
//                                } else {
//                                    alert("***** falha *****", response);
//                                    control.MSG();
//                                    sucesso(response);
//                                }
//                            }
//                        } else {
//                            doFalha(false);
//                        }
//                    };
//                    params.servidor = pdvImpressoraECF.servidor;
//                    Ext.Ajax.request({
//                        url: '../paf/ecf/send',
//                        method: 'POST',
//                        async: false,
//                        params: params,
//                        success: doSucesso,
//                        failure: doFalha
//                    });
//                } catch (e) {
//                    error(e);
//                    doFalha(e);
//                }
//                // }, 250);
//            } else {
//
//                sucesso(false);
//            }
//        }
    },
    xhrCupomImprimir: function (params, servidor, drive, concomitante, sucesso, falha) {
        console.debug("********* ECF ******** => " + params.comando);
        sucesso = (sucesso && typeof (sucesso) === 'function' ? sucesso : false);
        if (falha !== 'hide') {
            falha = (falha && typeof (falha) === 'function' ? falha : false);
        }
        var control = this;
//        if (control.simulacaoECF === true) {
//            if (sucesso) {
//                sucesso(false);
//            }
//            return;
//        }
        var impressoraConcomitante = false;
        var impressoraOffline = true;
        var pdvImpressoraECF = Illi.app.Local.get('pdvImpressoraECF');
        if (pdvImpressoraECF) {
            impressoraConcomitante = pdvImpressoraECF.concomitante;
            impressoraOffline = pdvImpressoraECF.offline;
        }
        if (!impressoraOffline) {
            if (!impressoraConcomitante) {
                switch (params.acao) {
                    case 'Leitura X':
                    case 'Redução Z':
                    case 'Sangria':
                    case 'Suprimento':
                    case 'Relatorio Gerencial':
                        //case 'Abrir Cupom':
                        impressoraConcomitante = true;
                        break;
                    default:
                        if (concomitante) {
                            impressoraConcomitante = true;
                        }
                        break;
                }
            }
            if (impressoraConcomitante) {
                var doFalha = function (response) {
                    if (response) {
                        error("Falha comunicar com o ECF", response);
                    }
                    control.MSG("Falha comunicar com o ECF", falha);
                };
                try {
                    var doSucesso = function (data) {
                        if (data.responseText) {
                            var response = Ext.JSON.decode(data.responseText);
                            if (response.finalizado === true) {
                                control.MSG();
                                if (sucesso) {
                                    sucesso(response);
                                }
                            } else {
                                if (falha !== 'hide') {
                                    control.MSG('Impressão no cupom fiscal não foi efetuada!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                        alert("control.MSG >>> ", response.observacao);
                                        if (/(não está Ativo)/gi.test(response.observacao)) {
//                                            control.estadoECF = false;
                                            control.doEstado(function () {
                                                control.xhrCupomImprimir(params, servidor, drive, concomitante, sucesso, falha);
                                            });
                                        } else {
                                            if (falha) {
                                                falha(response);
                                            }
                                        }
                                    });
                                } else {
                                    alert("***** falha *****", response);
                                    if (sucesso) {
                                        sucesso(response);
                                    }
                                }
                            }
                        } else {
                            doFalha(false);
                        }
                    };
                    params.servidor = pdvImpressoraECF.servidor;
                    var servidorAcbr = (pdvImpressoraECF.servidor ? pdvImpressoraECF.servidor : "127.0.0.1:12000");
                    var ACBR = new Ext.data.Connection({
                        listeners: {
                            'beforerequest': {
                                fn: function (con, opt) {
                                    alert("ACBR--->", params.acao);
                                    if (params.acao) {
                                        control.MSG(params.acao);
                                    }
                                },
                                scope: this
                            },
//                            'requestcomplete': {
//                                fn: function(con, res, opt) {
//                                    Ext.get(document.body).unmask();
//                                },
//                                scope: this
//                            },
                            'requestexception': {
                                fn: function (con, res, opt) {
                                    control.MSG("Falha ao Conectar ao ECF, Verifique as Configurações!", function () {
                                        control.janelaConfiguracaoECFExibir();
                                    });
                                },
                                scope: this
                            }
                        }
                    });
                    ACBR.request({
                        url: 'http://' + servidorAcbr + '/enviar',
                        method: 'POST',
                        async: true,
                        params: JSON.stringify(params),
                        success: doSucesso,
                        failure: doFalha
                    });
                } catch (e) {
                    setTimeout(function () {
                        control.MSG("Falha ao Conectar ao ECF, Verifique as Configurações!", function () {
                            control.janelaConfiguracaoECFExibir();
                        });
                    }, 250);
                }
            } else {
                sucesso(false);
            }
        }
    },
    xhrCancelamentoVenda: function (efetuarCancelamento, idConta, idCancelamentoVenda, sucesso, falha) {
        //alert('PDV::xhrCancelamentoVenda()', idCancelamentoVenda, sucesso, falha);
        var control = this;
        control.MSG('Cancelando Venda...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }
                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(cancelarvenda)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {
                            control.MSG('Cancelamento de venda não foi efetuada!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/cancelamento_venda',
                    method: 'POST',
                    async: false,
                    params: {
                        id_conta: (idConta ? idConta : ''),
                        id_impressao: (idCancelamentoVenda ? idCancelamentoVenda : ''),
                        efetuar_cancelamento: (efetuarCancelamento ? efetuarCancelamento : '')
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrSegundaVia: function (id_impressao, ecf, confirmacao, sucesso, falha) {
        //alert('PDV::xhrSegundaVia()', id_impressao, sucesso, falha);
        var control = this;
        control.MSG('Gerando Segunda Via...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }
                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(segundavia)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {
                            control.MSG('Emissão da Segunda Via não foi efetuada!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: (confirmacao ? '/pdv/vendarapida/iJson/imprimir_confirmacao' : '/pdv/vendarapida/iJson/imprimir'),
                    method: 'POST',
                    async: false,
                    params: {
                        id_impressao: (id_impressao ? id_impressao : ''),
                        ecf: (ecf ? ecf : '')
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrTesteImpressao: function (idConta, sucesso, falha) {
        //alert('PDV::xhrTesteImpressao()', idConta, sucesso, falha);
        var control = this;
        control.MSG('Efetuando Teste de Impressão...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }
                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(testeimpresao)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {

                            control.MSG('Teste de Impressão não foi efetuada!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/teste_impressao',
                    method: 'POST',
                    async: false,
                    params: {
                        'id_conta': (idConta ? idConta : '')
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrDevolucaoEdicao: function (data, sucesso, falha) {
        //alert('PDV::xhrDevolucaoEdicao()', data, sucesso, falha);
        var control = this;
        control.MSG('Salvando Devolução...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }

                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(devolucaoedicao)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {

                            control.MSG('Devolução não foi gerada!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/devolucao_edicao',
                    method: 'POST',
                    async: false,
                    params: {
                        data: data
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrDevolucaoCancelamento: function (idDevolucao, sucesso, falha) {
        //alert('PDV::xhrDevolucaoCancelamento()', idDevolucao, sucesso, falha);
        var control = this;
        control.MSG('Cancelando Devolução...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }

                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(devolucaocancelamento)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {

                            control.MSG('Cancelamento da Devolução não foi efetuada!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/devolucao_cancelamento',
                    method: 'POST',
                    async: false,
                    params: {
                        id_devolucao: (idDevolucao ? idDevolucao : '')
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrDevolucaoImpressao: function (idConta, idDevolucao, sucesso, falha) {
        //alert('PDV::xhrDevolucaoImpressao()', idConta, idDevolucao, sucesso, falha);
        var control = this;
        control.MSG('Gerando Impressão...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }

                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(devolucaoimpressao)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {

                            control.MSG('Emissão da impressão da Devolução não foi efetuada!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/devolucao_impressao',
                    method: 'POST',
                    async: false,
                    params: {
                        id_conta: (idConta ? idConta : ''),
                        id_devolucao: (idDevolucao ? idDevolucao : '')
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrSangria: function (data, sucesso, falha) {
        //alert('PDV::xhrSangria()', data, sucesso, falha);
        var control = this;
        control.MSG('Gerando Sangria...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }

                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(sangria)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {

                            control.MSG('Sangria do seu caixa não foi efetuada!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/sangria',
                    method: 'POST',
                    async: false,
                    params: {
                        data: data
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrSuprimento: function (data, sucesso, falha) {
        //alert('PDV::xhrSuprimento()', data, sucesso, falha);
        var control = this;
        control.MSG('Gerando Suprimento...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }

                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(suprimento)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {

                            control.MSG('Suprimento do seu caixa não foi efetuado!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/suprimento',
                    method: 'POST',
                    async: false,
                    params: {
                        data: data
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrPreFechamento: function (idConta, tentativa, itens, sucesso, falha) {
        //alert('PDV::xhrPreFechamento()', idConta, tentativa, itens, sucesso, falha);
        var control = this;
        control.MSG('Conferindo Caixa...');
        var doFalha = function (response) {
            if (response) {
                error(response);
            }
            control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(prefechamento)', falha);
        };
        try {
            var doSucesso = function (data) {
                if (data.responseText) {
                    var response = Ext.JSON.decode(data.responseText);
                    if (response.status === true) {
                        sucesso(response);
                    } else {
                        control.MSG('Seu caixa não pode ser fechado!<br /><b>Motivo:</b> ' + response.observacao, function () {
                            falha(response);
                        });
                    }
                } else {
                    doFalha(false);
                }
            };
            Ext.Ajax.request({
                url: '/pdv/vendarapida/iJson/pre_fechamento',
                method: 'POST',
                async: false,
                params: {
                    'id_conta': (idConta ? idConta : ''),
                    'tentativa': (tentativa ? tentativa : ''),
                    'itens': itens
                },
                success: doSucesso,
                failure: doFalha
            });
        } catch (e) {
            doFalha(e);
        }
    },
    xhrImprimirFechamento: function (idConta, sucesso, falha) {
        var control = this;
        control.MSG('Imprimindo Fechamento Caixa...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }
                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente! (impressão fechamento)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {
                            control.MSG('Não foi possível emitir impressão do fechamento de caixa!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/imprimir_fechamento',
                    method: 'POST',
                    async: false,
                    params: {
                        'id_conta': (idConta ? idConta : '')
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrFechamento: function (idConta, itens, sucesso, falha) {
        var control = this;
        control.MSG('Encerrando Caixa...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }
                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(fechamento)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {
                            control.MSG('Seu caixa não pode ser fechado!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/fechamento',
                    method: 'POST',
                    async: false,
                    params: {
                        'id_conta': (idConta ? idConta : ''),
                        'itens': itens
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    xhrFechamentoSaldo: function (idConta, sucesso, falha) {
        var control = this;
        control.MSG('Conferindo Saldo...');
        setTimeout(function () {
            var doFalha = function (response) {
                if (response) {
                    error(response);
                }
                control.MSG('Comunicação com o servidor falhou ou servidor retornou uma operação ilegal, tente novamente!(fechamento)', falha);
            };
            try {
                var doSucesso = function (data) {
                    if (data.responseText) {
                        var response = Ext.JSON.decode(data.responseText);
                        if (response.status === true) {
                            control.MSG();
                            sucesso(response);
                        } else {
                            control.MSG('Não foi possível carregar os valores para fechamento do caixa!<br /><b>Motivo:</b> ' + response.observacao, function () {
                                falha(response);
                            });
                        }
                    } else {
                        doFalha(false);
                    }
                };
                Ext.Ajax.request({
                    url: '/pdv/vendarapida/iJson/fechamento_saldo',
                    method: 'POST',
                    async: false,
                    params: {
                        'id_conta': (idConta ? idConta : '')
                    },
                    success: doSucesso,
                    failure: doFalha
                });
            } catch (e) {
                doFalha(e);
            }
        }, 250);
    },
    //
    //
    //

    doAbrirCaixa: function () {
        var control = this;
        control.ultimaSessao = Illi.app.Local.get('pdvUltimaSessao'); // armazena a ultima informação de caixa.
        var doSucessoPreAbertura = function (response) {
            var doExibirContaCaixa = function (response) {
                if (control.ultimaSessao === undefined || control.ultimaSessao.active !== true || control.ultimaSessao.diaOperacao !== response.dia_operacao || response.fechado === true) {
                    control.ultimaSessao = {};
                    control.ultimaSessao.contaCaixaDefinida = false;
                    control.ultimaSessao.contaCaixaPadrao = response.conta.rows[0].id;
                    control.ultimaSessao.contaCaixaNome = (response.conta.total > 1 ? false : response.conta.rows[0].nome);
                    control.ultimaSessao.contaCaixaSaldo = (response.conta.total > 1 ? false : response.conta.rows[0].saldo);
                    control.ultimaSessao.contaCaixa = (response.conta.total > 1 ? false : control.ultimaSessao.contaCaixaPadrao);
                    control.ultimaSessao.diaOperacao = response.dia_operacao;
                    control.ultimaSessao.active = true;
                }
                control.ultimaSessao.arquivoMD5 = response.arquivo_md5;
                Illi.app.Local.set('pdvUltimaSessao', control.ultimaSessao);
                control.setRodapeOperador(Illi.app.Local.get('usuario').nome);
                control.setRodapeAjuda();
                control.janelaContaCaixaExibir();
            };
            if (control.relogioHorario === undefined) {
                var doSucessoRelogio = function () {
                    doExibirContaCaixa(response);
                };
                control.setRelogio(doSucessoRelogio);
            } else {
                doExibirContaCaixa(response);
            }
        };
        var doFalhaPreAbertura = function (response) {
            control.janelaVendaRapidaOcultar();
        };
        var iniciarCaixa = function () {
            if (control.ultimaSessao !== undefined) {
                control.xhrPreAbertura(control.ultimaSessao.contaCaixa, doSucessoPreAbertura, doFalhaPreAbertura);
            } else {
                control.xhrPreAbertura(false, doSucessoPreAbertura, doFalhaPreAbertura);
            }
        };
        if (control.verificaECF()) {
            var callback = function (retorno) {
                if (retorno.data) {
                    switch (retorno.data) {
                        case 'estVenda':
                        case 'estPagamento':
                            control.doCancelarVendaCupom(iniciarCaixa, Ext.emptyFn);
                            break;
                        case 'estPagamento':
                            control.doCancelarVendaCupom(iniciarCaixa, Ext.emptyFn);
                            break;
                        case 'estRequerZ':
                            var ret = function (retz) {
                                iniciarCaixa();
                                //control.MSG("Não é possivel operar o ECF, com redução Z pendente!<br/> Verifique se emitiu a redução do dia anterior!");
                            };
                            setTimeout(function () {
                                //control.doReducaoZCupom(ret, ret, true, "Redução Z Pendente!</br>Emitir Agora !?");
                                control.doReducaoZ(ret, ret, true, "Redução Z Pendente!</br>Emitir Agora?");
                            }, 50);
                            break;
                        default:
                            if (retorno.sucesso === true) {
                                iniciarCaixa();
                            } else {
                                control.MSG(retorno.mensagem, Ext.emptyFn);
                            }
                            break;
                    }
                } else {
                    iniciarCaixa();
                }
            };
            control.doEstado(callback);
        } else {
            iniciarCaixa();
        }
    },
    doFecharCaixa: function (fechar, bloqueado) {
        var control = this;
        var store = control.listaItensVenda.getStore();
        var storeCancelados = control.listaItensCancelados.getStore();
        if (store.getCount() === storeCancelados.getCount()) {
            control.janelaFechamentoCaixaExibir(fechar, bloqueado);
        } else {
            control.MSG('Não é possível fechar o caixa enquanto a venda estiver em curso!', Ext.emptyFn);
        }
    },
    doMinimizarCaixa: function () {
        var control = this;
        var store = control.listaItensVenda.getStore();
        var storeCancelados = control.listaItensCancelados.getStore();
        if (store.getCount() === storeCancelados.getCount()) {
            control.janelaVendaRapidaOcultar();
        } else {
            control.MSG('Não é possível sair do caixa enquanto a venda estiver em curso!', Ext.emptyFn);
        }
    },
    doConferirCaixa: function (forcado) {
        var control = this;
        control.tentativasFechamentoCaixa = control.tentativasFechamentoCaixa + 1;
        var store = Ext.getStore('storeFechamentoCaixa');
        var itens = [];
        if (store.data.getCount() > 0) {
            var records = store.data.items;
            for (var i = 0; i < records.length; i++) {
                itens.push({
                    'id': records[i].get('id'),
                    'descricao': records[i].get('descricao'),
                    'valor': records[i].get('valor')
                });
            }
        }
        itens = Ext.JSON.encode(itens);
        var doSucessoPreFechamento = function () {
            control.janelaFechamentoCaixaConfirmar(control.janelaFechamentoCaixa.fechar, itens);
        };
        var doFalhaPreFechamento = function () {
            control.listaFechamentoCaixaFocus();
            control.janelaFechamentoCaixa.down('#pdvProcessaFechamentoForcado').show();
        };
        if (control.ultimaSessao.conferenciaObrigatoria) {
            if (control.tentativasFechamentoCaixa > 0) {
                var doSucessoAutenticador = function () {
                    if (forcado) {
                        doSucessoPreFechamento();
                    } else {
                        control.xhrPreFechamento(control.ultimaSessao.contaCaixa, control.tentativasFechamentoCaixa, itens, doSucessoPreFechamento, doFalhaPreFechamento);
                    }
                };
                control.janelaAutenticadorExibir('fechamento', doSucessoAutenticador, "Autorizou a conferência do caixa após a primeira tentativa.\nTentaticas: " + control.tentativasFechamentoCaixa + "\nConta ID: " + control.ultimaSessao.contaCaixa);
            } else {
                control.xhrPreFechamento(control.ultimaSessao.contaCaixa, control.tentativasFechamentoCaixa, itens, doSucessoPreFechamento, doFalhaPreFechamento);
            }
        } else {
            var doSucessoAutenticador = function () {
                doSucessoPreFechamento();
            };
            control.janelaAutenticadorExibir('fechamento', doSucessoAutenticador, "Autorizou a conferência do caixa.\nConta ID: " + control.ultimaSessao.contaCaixa);
        }
    },
    doIniciarVenda: function () {
        //alert('PDV::doIniciarVenda()');
        var control = this;
        control.setVariavelGlobal();
        control.listaItensVendaFocus();
        control.painelProdutoNome.update('<center>Caixa Livre</center>');
        control.painelProdutoTotal.update('R$ 0,00');
        control.painelProdutoQtd.update('0,00 x');
        control.listaItensCancelados.getStore().removeAll();
        control.listaItensVenda.getStore().removeAll();
        control.setCliente(control.ultimaSessao.clientePadrao, control.ultimaSessao.clientePadraoNome);
        control.setVendedor(Illi.app.Local.get('usuario').pessoa.id, Illi.app.Local.get('usuario').nome);
        control.setTabelaPreco(0);
        control.setRodapeTabelaPreco("Padrão");
        control.setDocumento('');
        control.ecf.numero_cupom = "";
        control.cenarioAtivo = 'venda';
    },
    doCancelarVenda: function (callback) {
        //alert('PDV::doCancelarVenda()');
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var store = control.listaItensVenda.getStore();
        var storeCancelados = control.listaItensCancelados.getStore();
        if (store.getCount() !== storeCancelados.getCount()) {
            var doConfirma = function (buttonId, text, opt) {
                if (buttonId === 'yes') {
                    var doSucessoAutenticador = function () {
                        var ecf = control.verificaECF();
                        if (ecf) {
                            if (ecf.concomitante) {
                                control.doCancelarVendaCupom(callback, Ext.emptyFn);
                            } else {
                                if (callback) {
                                    callback();
                                }
                            }
                        } else {
                            callback();
                        }
                    };
                    control.janelaAutenticadorExibir('cancelamento-venda', doSucessoAutenticador, "Autorizou cancelamento da venda em andamento.\nConta ID: " + control.ultimaSessao.contaCaixa);
                }
            };
            control.MSG("Cancelar venda?", doConfirma, true);
        } else {
            if (callback) {
                callback();
            }
        }
    },
    doAdicionarItemCupom: function (codigo, descricao, unidade, quantidade, valor, desconto, sucesso, falha, concomitante, aliquota) {
        // //alert('PDV::doAdicionarItemCupom()', codigo, descricao, unidade, quantidade, valor, sucesso, falha, concomitante);
        var control = this;
        var doAdicionarItem = function () {
            aliquota = (aliquota ? aliquota : 19);
            var produto = codigo;
            produto += ',"' + descricao;
            produto += '",' + aliquota;
            produto += "," + quantidade;
            produto += "," + valor;
            produto += ",0";
            produto += "," + unidade;
            if (desconto) {
                var produto = codigo;
                produto += ',"' + descricao;
                produto += '",' + aliquota;
                produto += "," + quantidade;
                produto += "," + valor;
                produto += "," + desconto.valor;
                produto += "," + unidade;
                produto += ",$";
                produto += "," + desconto.tipo;
            }
            var params = {
                comando: "ECF.VendeItem(" + produto + ")",
                acao: 'Adicionar Item',
                codigo: codigo,
                descricao: descricao,
                unidade: unidade,
                quantidade: quantidade,
                valor: valor
            };
            control.xhrCupomImprimir(params, false, false, concomitante, sucesso, falha);
        };
        if (control.estadoECF === "estVenda") {
            doAdicionarItem();
        } else {
            control.doEstado(function (retorno) {
                if (retorno.data) {
                    if (retorno.data === "estVenda") {
                        doAdicionarItem();
                    } else if (retorno.data === "estLivre") {
                        var doAberto = function (response) {
                            var doNumeroCupom = function (response) {
                                control.ecf.numero_cupom = response.observacao;
                                doAdicionarItem();
                            };
                            control.doNumeroCupom(doNumeroCupom);
                        };
                        control.doAbrirCupom(doAberto);
                    } else {
                        control.MSG("Ocorreu um Erro: </br>" + retorno.mensagem + "Estado do ECF: " + retorno.data);
                    }
                } else {
                    doAdicionarItem();
                }
            });
        }
        //var estado = control.doEstado(doFalha);
        //control.xhrCupomImprimir(params, false, false, concomitante, sucesso, 'hide');
    },
    doCancelarItemCupom: function (item, sucesso, falha, concomitante) {
        //alert('PDV::doCancelarItemCupom()', item, sucesso, falha, concomitante);
        var control = this;
        var params = {
            acao: 'Cancelar Item',
            comando: "ECF.CancelaItemVendido(" + item + ")",
            item: item
        };
        control.xhrCupomImprimir(params, false, false, concomitante, sucesso, falha);
    },
    doTotalCupom: function (sucesso, falha, concomitante) {
        //alert('PDV::doTotalCupom()', sucesso, falha, concomitante);
        var control = this;
        var params = {
            comando: "ECF.SubtotalizaCupom",
            acao: 'Total Cupom'
        };
        control.xhrCupomImprimir(params, false, false, concomitante, sucesso, falha);
    },
    doTotalDescontoCupom: function (valor, sucesso, falha, concomitante) {
        //alert('PDV::doTotalDescontoCupom()', valor, sucesso, falha, concomitante);
        var control = this;
        var params = {
            comando: "ECF.SubtotalizaCupom(" + valor + ")",
            acao: 'Total Cupom Desconto',
            valor: valor
        };
        control.xhrCupomImprimir(params, false, false, concomitante, sucesso, falha);
    },
    doNumeroCupom: function (sucesso, falha, concomitante) {
        //alert('PDV::doNumeroCupom()', sucesso, falha, concomitante);
        var control = this;
        var params = {
            comando: "ECF.NumCupom",
            acao: 'Número Cupom'
        };
        control.xhrCupomImprimir(params, false, false, true, sucesso, falha);
    },
    doAbrirCupom: function (sucesso, falha) {
        var control = this;
        var params = {
            comando: "ECF.AbreCupom",
            acao: 'Abrir Cupom'
        };
        var doSucesso = function (ret) {
            control.estadoECF = "estVenda";
            if (typeof (sucesso) === 'function') {
                sucesso(ret);
            }
        };
        var doFalha = function (ret) {
            control.estadoECF = false;
            if (typeof (falha) === 'function') {
                falha(ret);
            }
        };
        control.xhrCupomImprimir(params, false, false, true, doSucesso, doFalha);
    },
    doAdicionarPagamentoCupom: function (descricao, valor, sucesso, falha, concomitante) {
        //alert('PDV::doAdicionarPagamentoCupom()', descricao, valor, sucesso, falha, concomitante);
        var control = this;
        var adicionarPagamento = function (ret) {
            var codigo = ret.observacao.substr(0, 4).trim(); //(control.simulacaoECF === true ? ret.observacao : );
            var params = {
                comando: "ECF.EfetuaPagamento(" + codigo + ", " + valor + ")",
                acao: 'Adicionar Pagamento',
                descricao: descricao,
                valor: valor
            };
            control.xhrCupomImprimir(params, false, false, concomitante, sucesso, falha);
        };
        var params = {
            comando: "ECF.AchaFPGDescricao(" + descricao + ")",
            acao: 'Adicionar Pagamento',
            descricao: descricao,
            valor: valor
        };
        control.xhrCupomImprimir(params, false, false, concomitante, adicionarPagamento, falha);
    },
    doFecharVendaCupom: function (sucesso, falha, concomitante) {
        var control = this;
        var mensagem = [];
        var ie = (control.ultimaSessao.entidadePessoa ? control.ultimaSessao.entidadePessoa.ie : false); //control.retaguarda.getParametro('entidade_ie');
        mensagem.push("MD-5: " + control.ultimaSessao.arquivoMD5);
        if (ie) {
            mensagem.push("CUPOM MANIA, CONCORRA A PRÊMIOS");
            mensagem.push("ENVIE SMS P/6789:" + ie.replace(/[^0-9\s]/g, "") + "" + Ext.Date.format(new Date(control.relogioHorario), 'dmy') + "" + control.ecf.numero_cupom + "" + control.ecf.numero_ecf);
        }
        mensagem.push("PROCON - R da Ajuda 5 - RJ - (21) 151");
        mensagem.push("ALERJ - R 1º de Março s/n - RJ - (21) 25881418");
        var mensagem = mensagem.join("|");
        var params = {
            acao: 'Finalizar Venda',
            comando: 'ECF.FechaCupom("' + mensagem + '")'
        };
        var doFinalizado = function (response) {
            control.estadoECF = false;
            if (typeof (falha) === 'function') {
                sucesso(response);
            }
        };
        control.xhrCupomImprimir(params, false, false, concomitante, doFinalizado, falha);
    },
    doCancelarVendaCupom: function (sucesso, falha, concomitante) {
        var control = this;
        var params = {
            acao: 'Cancelar Cupom',
            comando: "ECF.CancelaCupom"
        };
        var doCancelado = function (response) {
            control.estadoECF = false;
            if (typeof (falha) === 'function') {
                sucesso(response);
            }
        };
        control.xhrCupomImprimir(params, false, false, true, doCancelado, falha);
    },
    doSangriaCupom: function (valor, sucesso, falha, observacao, concomitante) {
        var control = this;
        var params = {
            comando: "ECF.Sangria(" + valor + "," + observacao + ")",
            acao: 'Sangria',
            valor: valor
        };
        control.xhrCupomImprimir(params, false, false, concomitante, sucesso, falha);
    },
    doSuprimentoCupom: function (valor, sucesso, falha, observacao, concomitante) {
        var control = this;
        var params = {
            comando: "ECF.Suprimento(" + valor + "," + observacao + ")",
            acao: 'Suprimento',
            valor: valor
        };
        control.xhrCupomImprimir(params, false, false, concomitante, sucesso, falha);
    },
    doRelatorioGerencialCupom: function (texto, sucesso, falha, concomitante) {
        var control = this;
        var params = {
            acao: 'Relatorio Gerencial',
            texto: texto
        };
        control.xhrCupomImprimir(params, false, false, concomitante, sucesso, falha);
    },
    doLeituraX: function (sucesso, falha) {
        var control = this;
        var params = {
            comando: "ECF.LeituraX",
            acao: 'Leitura X'
        };
        control.xhrCupomImprimir(params, false, false, true, sucesso, falha);
    },
    doAliquota: function (sucesso, falha) {
        var control = this;
        var params = {
            comando: "ECF.ProgramaAliquota(19)",
            acao: 'Programa Aliquota'
        };
        control.xhrCupomImprimir(params, false, false, true, sucesso, falha);
    },
    doFormasPagamento: function (sucesso, falha) {
        var control = this;
        var params = {
            comando: "ECF.FormasPagamento",
            acao: 'Formas de Pagamento'
        };
        control.xhrCupomImprimir(params, false, false, true, sucesso, falha);
    },
    doReducaoZ: function (sucesso, falha, concomitante, mensagem) {
        var control = this;
        var acao = function (retorno) {
            if (retorno === 'yes') {
                falha = (falha && typeof (falha) === 'function' ? falha : Ext.emptyFn);
                var params = {
                    comando: "ECF.ReducaoZ",
                    acao: 'Redução Z'
                };
                control.xhrCupomImprimir(params, false, false, true, sucesso, sucesso);
            } else {
                sucesso();
            }
        };
        control.MSG((mensagem ? mensagem : "Deseja Realmente Emitir a Redução Z ? <br> O ECF ficará bloqueado até as 00:00 hs"), acao, true);
    },
    doEstado: function (callback) {
        var control = this;
        var doCallback = function (response) {
            if (callback) {
                callback(response);
            }
        };
        var doInformacaoECF = function (responseECF) {
            if (!control.ecf) {
//                if (control.simulacaoECF === true) {
//                    control.ecf = {
//                        numero_serie: "000000000000000",
//                        fabricante: "ILLI",
//                        modelo: "Fictícia"
//                    };
//                    doCallback(responseECF);
//                } else {
                if (responseECF.sucesso === true) {
                    var doIdentificaPAF = function (response) {
                        var doInfFabricante = function (response) {
                            var fabricante = (response.finalizado === true ? response.observacao : false);
                            var doInfModelo = function (response) {
                                var modelo = (response.finalizado === true ? response.observacao : false);
                                var doInfSerie = function (response) {
                                    var serie = (response.finalizado === true ? response.observacao : false);
                                    var doInfNumECF = function (response) {
                                        var num_ecf = (response.finalizado === true ? response.observacao : false);
                                        control.ecf = {
                                            numero_serie: serie,
                                            numero_cupom: "",
                                            fabricante: fabricante,
                                            modelo: modelo,
                                            numero_ecf: num_ecf
                                        };
                                        doCallback(responseECF);
                                    };
                                    control.xhrCupomImprimir({comando: 'ECF.NumECF', acao: "Carregando informações ECF."}, false, false, true, doInfNumECF, doInfNumECF);
                                };
                                control.xhrCupomImprimir({comando: "ECF.NumSerie", acao: "Carregando informações ECF."}, false, false, true, doInfSerie, doInfSerie);
                            };
                            control.xhrCupomImprimir({comando: "ECF.SubModeloECF", acao: "Carregando informações ECF."}, false, false, true, doInfModelo, doInfModelo);
                        };
                        control.xhrCupomImprimir({comando: "ECF.ModeloStr", acao: "Carregando informações ECF."}, false, false, true, doInfFabricante, doInfFabricante);
                    };
                    control.xhrCupomImprimir({comando: 'ECF.IdentificaPAF("","")', acao: "Carregando informações ECF."}, false, false, true, doIdentificaPAF, doIdentificaPAF);
                } else {
                    doCallback(responseECF);
                }
//                }
            } else {
                doCallback(responseECF);
            }
        };
        var estadoOffline = function (retorno) {
            var msg = {};
            msg.sucesso = false;
            msg.mensagem = "ECF Offline. (estOffline)";
            msg.data = "estOffline";
            doInformacaoECF(msg);
            control.estado = msg.data;
            return msg;
        };
        var estado = function (retorno) {
            var msg = {};
            switch (retorno.observacao) {
                case 'estNaoInicializada':
                    var ativou = function (ret) {
                        if (ret.sucesso === true) {
                            control.doEstado(callback);
                        } else {
                            msg.sucesso = false;
                            msg.mensagem = "Não foi Possivel Ativar o ECF";
                            msg.data = undefined;
                            doInformacaoECF(msg);
                        }
                    };
                    control.xhrCupomImprimir({comando: "ECF.Ativar"}, false, false, true, ativou, ativou);
                    break;
                case 'estDesconhecido':
                    msg.sucesso = false;
                    msg.mensagem = "Estado Desconhecido. (estDesconhecido)";
                    msg.data = "estDesconhecido";
                    doInformacaoECF(msg);
                    break;
                case 'estLivre':
                    msg.sucesso = true;
                    msg.mensagem = "ECF Livre. (estLivre)";
                    msg.data = "estLivre";
                    doInformacaoECF(msg);
                    break;
                case 'estVenda':
                    msg.sucesso = false;
                    msg.mensagem = "Cupom de Venda Aberto com ou sem venda do 1º Item. (estVenda)";
                    msg.data = "estVenda";
                    doInformacaoECF(msg);
                    break;
                case 'estPagamento':
                    msg.sucesso = false;
                    msg.mensagem = "Iniciado Fechamento de Cupom com Formas Pagamento pode ou não ter efetuado o 1º pagamento. Não pode mais vender itens, ou alterar Sub-total. (estPagamento)";
                    msg.data = "estPagamento";
                    doInformacaoECF(msg);
                    break;
                case 'estRelatorio':
                    msg.sucesso = false;
                    msg.mensagem = "Imprimindo Cupom Fiscal Vinculado ou Relatório Gerencial! (estRelatorioestRelatorio)";
                    msg.data = "estRelatorio";
                    doInformacaoECF(msg);
                    break;
                case 'estBloqueada':
                    msg.sucesso = false;
                    msg.mensagem = "Redução Z já emitida, bloqueada até as 00:00";
                    msg.data = "estBloqueada";
                    doInformacaoECF(msg);
                    break;
                case 'estRequerZ':
                    msg.sucesso = false;
                    msg.mensagem = "Redução Z do dia anterior ainda não foi emitida. Emitir agora";
                    msg.data = "estRequerZ";
                    doInformacaoECF(msg);
                    break;
                case 'estRequerX':
                    msg.sucesso = false;
                    msg.mensagem = "Esta impressora requer Leitura X todo inicio de dia. É necessário imprimir uma Leitura X para poder vender";
                    msg.data = "estRequerX";
                    control.doLeituraX();
                    doInformacaoECF(msg);
                    break;
            }
            control.estado = msg.data;
            return msg;
        };
        if (control.verificaECF()) { // impressora configurada
            control.xhrCupomImprimir({comando: "ECF.Estado", acao: "Estado do ECF"}, false, false, true, estado, estado);
        } else {
            estadoOffline();
        }
    },
    //
    //
    //
    janelaTeclasAtalhoExibir: function () {
        //alert('PDV::janelaTeclasAtalhoExibir()');
        var control = this;
        var cenario = control.cenarioAtivo;
        // control.cenarioAtivo = 'teclas-atalho';
        //control.janelaTeclasAtalho.removeAll();
        control.janelaTeclasAtalho.cenario = cenario;
        control.janelaTeclasAtalho.show();
    },
    janelaTeclasAtalhoOcultar: function () {
        //alert('PDV::janelaTeclasAtalhoOcultar()');
        var control = this;
        var cenario = control.janelaTeclasAtalho.cenario;
        control.janelaTeclasAtalho.hide(null, function () {
            control.cenarioAtivo = cenario;
        });
    },
    //
    //
    //
    janelaTecladoExibir: function () {
        //alert('PDV::janelaTecladoExibir()');
        var control = this;
        control.janelaTeclado.show();
    },
    janelaTecladoOcultar: function () {
        //alert('PDV::janelaTecladoOcultar()');
        var control = this;
        control.janelaTeclado.hide();
    },
    //
    //
    //
    janelaAutenticadorExibir: function (funcao, callback, acao, failback, novoCenario) {
        //alert('PDV::janelaAutenticadorExibir()', funcao, callback, novoCenario);
        callback = (callback && typeof (callback) == 'function' ? callback : false);
        var control = this;
        var bypass = true;
        var cenarioOut = control.cenarioAtivo;
        if (control.ultimaSessao.necessarioAutenticacao) {
            if (control.ultimaSessao.necessarioAutenticacao[funcao] !== undefined && control.ultimaSessao.necessarioAutenticacao[funcao]) {
                bypass = false;
            }
        }
        if (bypass) {
            control.janelaAutenticador.funcao = funcao;
            control.janelaAutenticador.callback = callback;
            control.janelaAutenticador.failback = failback;
            control.janelaAutenticador.acao = acao;
            control.janelaAutenticador.cenario = (novoCenario !== undefined ? novoCenario : funcao);
            control.janelaAutenticador.cenarioOut = cenarioOut;
            control.janelaAutenticadorConfirmar(true);
        } else {
            control.cenarioAtivo = 'autenticador';
            control.janelaAutenticador.removeAll();
            control.janelaAutenticador.add({xtype: 'campoAutenticador', emptyText: 'PIN Fiscal'});
            control.janelaAutenticador.funcao = funcao;
            control.janelaAutenticador.callback = callback;
            control.janelaAutenticador.failback = failback;
            control.janelaAutenticador.acao = acao;
            control.janelaAutenticador.cenario = (novoCenario !== undefined ? novoCenario : funcao);
            control.janelaAutenticador.cenarioOut = cenarioOut;
            control.janelaAutenticador.show();
        }
    },
    janelaAutenticadorConfirmar: function (bypass) {
        //alert('PDV::janelaAutenticadorConfirmar()', bypass);
        var control = this;
        var acao = control.janelaAutenticador.acao;
        var doSucessoAutenticador = function (response, bypass) {
            var callback = control.janelaAutenticador.callback;
            control.janelaAutenticadorOcultar(callback, bypass);
        };
        if (bypass) {
            doSucessoAutenticador(false, true);
        } else {
            var funcao = control.janelaAutenticador.funcao;
            var senha = control.campoAutenticador.getValue();
            if (senha.length > 0) {
                control.xhrAutenticacao(senha, funcao, acao, control.ultimaSessao.contaCaixa, doSucessoAutenticador, Ext.emptyFn);
            }
        }
    },
    janelaAutenticadorLimpar: function () {
        //alert('PDV::janelaAutenticadorLimpar()');
        var control = this;
        control.campoAutenticador.setValue('');
    },
    janelaAutenticadorOcultar: function (callback, bypass, failback) {
        //alert('PDV::janelaAutenticadorOcultar()', callback, bypass);
        callback = (callback && typeof (callback) == 'function' ? callback : false);
        var control = this;
        var cenario = (failback ? control.janelaAutenticador.cenarioOut : control.janelaAutenticador.cenario);
        if (failback) {
            failback = control.janelaAutenticador.failback;
            callback = (failback && typeof (failback) == 'function' ? failback : false);
        }
        if (bypass !== true) {
            control.campoAutenticador.blur();
            control.janelaAutenticador.hide(null, function () {
                control.cenarioAtivo = cenario;
                //                setTimeout(function() {
                if (callback) {
                    callback();
                }
                //                }, 250);
            });
        } else {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
        }
    },
    //
    //
    //
    janelaCancelamentoVendaExibir: function () {
        //alert('PDV::janelaCancelamentoVendaExibir()');
        var control = this;
        var cenario = control.cenarioAtivo;
        //        var doSucessoAutenticador = function() {
        control.cenarioAtivo = 'cancelamento-venda';
        control.janelaCancelamentoVenda.removeAll();
        control.janelaCancelamentoVenda.ultimoItemECF = false;
        control.janelaCancelamentoVenda.add({xtype: 'listaCancelamentoVenda', idConta: control.ultimaSessao.contaCaixa, ecf: control.ecf});
        control.janelaCancelamentoVenda.cenario = cenario; // 'venda'
        control.janelaCancelamentoVenda.show();
//        };
        //        control.janelaAutenticadorExibir('cancelamento-venda', doSucessoAutenticador);
    },
    janelaCancelamentoVendaConfirmar: function () {
        //alert('PDV::janelaCancelamentoVendaConfirmar()');
        var control = this;
        if (control.itemCancelamentoVendaSelecionado) {
            var continuarCancelamento = true;
            if (control.itemCancelamentoVendaSelecionado.get('ecf')) {
                if (control.janelaCancelamentoVenda.ultimoItemECF !== control.itemCancelamentoVendaSelecionado.get('id')) {
                    continuarCancelamento = "nao_ultimo";
                }
            }
            var doFalhaCancelamentoVenda = function () {
                control.listaCancelamentoVendaFocus();
            };
            if (continuarCancelamento === true) {
                // control.janelaCancelamentoVenda.ultimoItemECF
                var doSucessoAutenticador = function () {
                    var doSucessoCancelamentoVenda = function (response) {
                        // imprime e fecha a janela
                        var doConfirmarCancelamentoVenda = function (response) {
                            var doSucessoImpressao = function (response) {
                                control.janelaCancelamentoVendaOcultar();
                            };
                            if (control.itemCancelamentoVendaSelecionado.get('ecf')) {
                                if (control.verificaECF()) {
                                    control.doCancelarVendaCupom(Ext.emptyFn, Ext.emptyFn);
                                } else {
                                    Ext.MessageBox.alert('Atenção', '<h3>Esta venda não pode ser cancelada pois a ECF está Offline ou indisponível!</h3>', doFalhaCancelamentoVenda);
                                }
                            } else {
                                control.xhrImpressao(response.impressao, doSucessoImpressao, doSucessoImpressao);
                            }
                        };
                        // se exigir confirmação
                        if (response.confirmacao) {
                            var doConfirma = function (buttonId, text, opt) {
                                if (buttonId === 'yes') {
                                    control.xhrCancelamentoVenda(true, control.ultimaSessao.contaCaixa, control.itemCancelamentoVendaSelecionado.get('id'), doConfirmarCancelamentoVenda, doFalhaCancelamentoVenda);
                                }
                            };
                            Ext.MessageBox.confirm('Atenção', 'Existem devoluções em abertos ou impressos, deseja cancelar venda?<br /><i>As devoluções também serão canceladas!</i>', doConfirma);
                        } else {
                            doConfirmarCancelamentoVenda(response);
                        }
                    };
                    control.xhrCancelamentoVenda(false, control.ultimaSessao.contaCaixa, control.itemCancelamentoVendaSelecionado.get('id'), doSucessoCancelamentoVenda, doFalhaCancelamentoVenda);
                };
                control.itemImpressaoSelecionado = control.itemCancelamentoVendaSelecionado;
                control.janelaAutenticadorExibir('cancelamento-venda', doSucessoAutenticador, "Autorizou cancelamento da venda.\nVenda ID: " + control.itemCancelamentoVendaSelecionado.get('m.id') + "\nConta ID: " + control.ultimaSessao.contaCaixa, doFalhaCancelamentoVenda);
            } else {
                Ext.MessageBox.alert('Atenção', '<h3>Esta venda não pode ser cancelada pois não é permitido pelo ECF!</h3>', doFalhaCancelamentoVenda);
            }
        }
    },
    janelaCancelamentoVendaOcultar: function () {
        //alert('PDV::janelaCancelamentoVendaOcultar()');
        var control = this;
        var cenario = control.janelaCancelamentoVenda.cenario;
        control.janelaCancelamentoVenda.hide(null, function () {
            control.cenarioAtivo = cenario;
        });
    },
    //
    //
    //
    janelaCancelarItemExibir: function () {
        //alert('PDV::janelaCancelarItemExibir()');
        var control = this;
        var cenario = control.cenarioAtivo;
        control.cenarioAtivo = 'cancela-item';
        control.janelaCancelarItem.removeAll();
        control.janelaCancelarItem.add({xtype: 'campoCancelarItem'});
        control.janelaCancelarItem.cenario = cenario;
        control.janelaCancelarItem.show();
    },
    janelaCancelarItemConfirmar: function () {
        //alert('PDV::janelaCancelarItemConfirmar()');
        var control = this;
        control.itemVendaSelecionado = parseInt(control.campoCancelarItem.getValue());
        control.campoCancelarItem.setDisabled(true);
        control.listaItensVendaRemover();
    },
    janelaCancelarItemOcultar: function () {
        //alert('PDV::janelaCancelarItemOcultar()');
        var control = this;
        var cenario = control.janelaCancelarItem.cenario;
        control.janelaCancelarItem.hide(null, function () {
            control.cenarioAtivo = cenario;
        });
    },
    //
    //
    //
    janelaClienteExibir: function () {
        //alert('PDV::janelaClienteExibir()');
        var control = this;
        var cenario = control.cenarioAtivo;
        control.cenarioAtivo = 'cliente';
        control.janelaCliente.removeAll();
        control.janelaCliente.add({xtype: 'campoCliente'});
        control.janelaCliente.cenario = cenario;
        control.janelaCliente.show();
    },
    janelaCadastroCliente: function () {
        var control = this;
        var cenario = control.cenarioAtivo;
        control.cenarioAtivo = 'cliente-cadastro';
        var janela = Ext.create('Ext.window.Window', {
            title: 'Cadastro de Parceiro',
            itemId: "janelaCadastroCliente",
            width: '97%',
            height: '95%',
            border: false,
            scope: this,
            modal: true,
            layout: 'fit',
            closeAction: 'destroy',
            items: {
                xtype: Ext.create('Illi.view.pessoa.Lista', {
                    listeners: {
                        afterrender: function (grid) {
                            grid.store.getProxy().extraParams = {
                                tipo: "CLIENTE",
                                situacao: 'ATIVO'
                            };
                        }
                    }
                })
            },
            listeners: {
                beforedestroy: function () {
                    control.cenarioAtivo = cenario;
                }
            }
        });
        janela.show();
        janela.focus();
    },
    janelaClienteConfirmar: function () {
        //alert('PDV::janelaClienteConfirmar()');
        var control = this;
        var codigo = control.campoCliente.getValue();
        control.storeClientes.getProxy().extraParams = {
            nome: (codigo.length > 0 ? codigo : ''),
            tipo: 'CLIENTE',
            situacao: 'ATIVO'
        };
        if (codigo.length > 0) {
            control.storeClientes.load({
                callback: function (records, options, success) {
                    if (records.length > 1) {
                        var doOcultarCliente = function () {
                            control.janelaClienteSelecaoExibir(control.storeClientes);
                        };
                        control.janelaClienteOcultar(doOcultarCliente);
                    } else {
                        var record = records[0];
                        if (record) {
                            var doOcultarCliente = function () {
                                control.setCliente(record.get('id'), record.get('nome'));
                            };
                            control.janelaClienteOcultar(doOcultarCliente);
                        } else {
                            control.MSG('Cliente não encontrado!', Ext.emptyFn);
                        }
                    }
                }
            });
        } else {
            control.janelaCadastroCliente();
        }
    },
    janelaClienteLimpar: function () {
        //alert('PDV::janelaClienteLimpar()');
        var control = this;
        control.campoCliente.setValue('');
    },
    janelaClienteOcultar: function (callback) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaCliente.cenario;
        if (control.campoCliente !== undefined) {
            control.janelaCliente.hide(null, function () {
                control.cenarioAtivo = cenario;
                if (callback) {
                    callback();
                }
            });
        } else {
            if (callback) {
                callback();
            }
        }
    },
    //
    //
    //
    janelaClienteSelecaoExibir: function (store) {
        var control = this;
        var cenario = control.cenarioAtivo;
        control.cenarioAtivo = 'cliente-selecao';
        control.janelaClienteSelecao.removeAll();
        control.janelaClienteSelecao.add({xtype: 'listaClienteSelecao', store: store});
        control.janelaClienteSelecao.cenario = cenario;
        control.janelaClienteSelecao.show(null, function () {
            control.listaClienteSelecaoFocus();
        });
    },
    janelaClienteSelecaoConfirmar: function () {
        var control = this;
        var record = control.itemClienteSelecionado;
        var ocultarClienteSelecao = function () {
            control.setCliente(record.get('id'), record.get('nome'));
        };
        control.janelaClienteSelecaoOcultar(ocultarClienteSelecao);
    },
    janelaClienteSelecaoOcultar: function (callback) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaClienteSelecao.cenario;
        control.janelaClienteSelecao.hide(null, function () {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
        });
    },
    //
    //
    //
    janelaVendedorSelecaoExibir: function (store, callback) {
        var control = this;
        var cenario = control.cenarioAtivo;
        control.cenarioAtivo = 'vendedor-selecao';
        control.janelaVendedorSelecao.removeAll();
        control.janelaVendedorSelecao.add({xtype: 'listaVendedorSelecao', store: store});
        control.janelaVendedorSelecao.cenario = cenario;
        control.janelaVendedorSelecao.callback = callback;
        control.janelaVendedorSelecao.show(null, function () {
            control.listaVendedorSelecaoFocus();
        });
    },
    janelaVendedorSelecaoConfirmar: function () {
        try {
            var control = this;
            var record = control.itemVendedorSelecionado;
            var callback = control.janelaVendedorSelecao.callback;
            control.setVendedor(record.get('id'), record.get('nome'));
            control.janelaVendedorSelecaoOcultar(callback);
        } catch (err) {
            console.error(err);
        }
    },
    janelaVendedorSelecaoOcultar: function (callback) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaVendedorSelecao.cenario;
        control.janelaVendedorSelecao.hide(null, function () {
            //            setTimeout(function() {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
        });
    },
    //
    //
    //
    janelaTabelaPrecoVendaExibir: function (store, callback) {
        var control = this;
        var cenario = control.cenarioAtivo;
        if (!control.getVendaIniciada(true)) {
            control.cenarioAtivo = 'tabela-preco';
            control.janelaTabelaPrecoVenda.removeAll();
            control.janelaTabelaPrecoVenda.title = "Tabela de Preço";
            control.janelaTabelaPrecoVenda.add({xtype: 'listaTabelaPreco'});
            control.janelaTabelaPrecoVenda.cenario = cenario;
            control.janelaTabelaPrecoVenda.callback = callback;
            control.janelaTabelaPrecoVenda.show(null, function () {
                control.listaTabelaPrecoFocus();
            });
        } else {
            control.MSG("Selecione a <b>Tabela de Preço</b> antes de iniciar a Venda", Ext.emptyFn);
        }
    },
    janelaTabelaPrecoVendaConfirmar: function () {
        try {
            var control = this;
            var record = control.itemTabelaPreco;
            var callback = control.janelaTabelaPrecoVenda.callback;
            control.setTabelaPreco(record.get('id'), record.get('nome'));
            control.janelaTabelaPrecoVendaOcultar(callback);
        } catch (err) {
            console.error(err);
        }
    },
    janelaTabelaPrecoVendaOcultar: function (callback) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaTabelaPrecoVenda.cenario;
        //  if (control.campoVendedor !== undefined) {
        control.janelaTabelaPrecoVenda.hide(null, function () {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
        });
//        } else {
//            if (callback) {
//                callback();
//            }
//        }
    },
    //
    //
    //
    janelaConfiguracaoECFExibir: function () {
        var control = this;
        var cenario = control.cenarioAtivo;
        control.cenarioAtivo = 'configuracao-ecf';
        control.janelaConfiguracaoECF.removeAll();
        control.janelaConfiguracaoECF.add({xtype: 'formularioConfiguracaoECF'});
        control.janelaConfiguracaoECF.cenario = cenario;
        control.janelaConfiguracaoECF.show();
    },
    janelaConfiguracaoECFConfirmar: function () {
        var control = this;
        var form = control.formularioConfiguracaoECF.getForm();
        if (form.isValid()) {
            form = form.getFieldValues();
            var doSucessoAutenticador = function () {
                var doSucessoConfiguracaoECF = function (response) {
                    var doOcultarConfiguracaoECF = function () {
                        control.MSG('Configuração efetuada com sucesso!', function () {
                            control.doAbrirCaixa();
                        });
                    };
                    control.janelaConfiguracaoECFOcultar(doOcultarConfiguracaoECF);
                };
                control.setConfiguracaoECF(form, doSucessoConfiguracaoECF, Ext.emptyFn);
            };
            control.janelaAutenticadorExibir('configuracao-ecf', doSucessoAutenticador, "Autorizou a configuração da impressora ECF.\nConta ID: " + control.ultimaSessao.contaCaixa);
        }
    },
    //
    //
    //
    janelaConfiguracaoECFEmitirLeituraX: function () {
        var control = this;
        var form = control.formularioConfiguracaoECF.getForm();
        if (form.isValid()) {
            form = form.getFieldValues();
            var doSucessoLeituraXCupom = function (response) {
                control.MSG('Emissão da Leitura X efetuado com sucesso!', Ext.emptyFn);
            };
            control.doLeituraX(doSucessoLeituraXCupom, Ext.emptyFn);
        }
    },
    janelaConfiguracaoECFPreConfigurar: function () {
        var control = this;
        var form = control.formularioConfiguracaoECF.getForm();
        if (form.isValid()) {
            form = form.getFieldValues();
            var teste = function () {
                var executaTeste = function () {
                    doSucessoLeituraXCupom = function (response) {
                        var doSucessoAliquota = function (response) {
                            var doSucessoPagamento = function () {
                                control.MSG('Leitura X </br> Aliquotas </br> Formas de Pagamento', Ext.emptyFn);
                            };
                            control.doFormasPagamento(doSucessoPagamento);
                        };
                        control.doAliquota(doSucessoAliquota);
                    };
                    control.doLeituraX(doSucessoLeituraXCupom, doSucessoLeituraXCupom);
                };
                if (form.comando) {
                    var params = {
                        comando: form.comando,
                        acao: "Leitura X"
                    };
                    var retorno = function (ret) {
                        control.MSG(ret.observacao, Ext.emptyFn);
                    };
                    control.xhrCupomImprimir(params, false, false, true, retorno, retorno);
                } else {
                    executaTeste();
                }
            };
            var callback = function (retorno) {
                if (retorno.data) {
                    switch (retorno.data) {
                        case 'estVenda':
                        case 'estPagamento':
                            control.doCancelarVendaCupom(teste, Ext.emptyFn);
                            break;
                        case 'estNaoInicializada':
                            control.MSG(retorno.mensagem, Ext.emptyFn);
                            break;
                        case 'estRequerZ':
                            var reducao = function () {
                                control.doLeituraX(teste, teste);
                            };
                            control.doReducaoZ(reducao, reducao, true, "Redução Z Pendente!</br>Emitir Agora !?");
                            break;
                        default:
                            if (retorno.sucesso === true) {
                                teste();
                            } else {
                                control.MSG(retorno.mensagem, Ext.emptyFn);
                            }
                            break;
                    }
                } else {
                    control.MSG(retorno.mensagem, Ext.emptyFn);
                }
            };
            control.doEstado(callback);
        }
    },
    janelaConfiguracaoECFOcultar: function (callback) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaConfiguracaoECF.cenario;
        control.janelaConfiguracaoECF.hide(null, function () {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
        });
    },
    //
    //
    //
    janelaConfiguracaoImpressaoExibir: function () {
        //alert('PDV::janelaConfiguracaoImpressaoExibir()');
        var control = this;
        var cenario = control.cenarioAtivo;
        control.cenarioAtivo = 'configuracao-impressao';
        control.janelaConfiguracaoImpressao.removeAll();
        control.janelaConfiguracaoImpressao.add({xtype: 'formularioConfiguracaoImpressao'});
        control.janelaConfiguracaoImpressao.cenario = cenario;
        control.janelaConfiguracaoImpressao.show();
    },
    janelaConfiguracaoImpressaoConfirmar: function () {
        //alert('PDV::janelaConfiguracaoImpressaoConfirmar()');
        var control = this;
        var form = control.formularioConfiguracaoImpressao.getForm();
        if (form.isValid()) {
            form = form.getFieldValues();
            var doSucessoAutenticador = function () {
                var doSucessoConfiguracaoImpressao = function (response) {
                    var doOcultarConfiguracaoImpressao = function () {
                        control.MSG('Configuração efetuada com sucesso!', Ext.emptyFn);
                    };
                    control.janelaConfiguracaoImpressaoOcultar(doOcultarConfiguracaoImpressao);
                };
                control.setConfiguracaoImpressao(form, doSucessoConfiguracaoImpressao, Ext.emptyFn);
            };
            control.janelaAutenticadorExibir('configuracao-impressao', doSucessoAutenticador, "Autorizou a configuração da impressora.\nConta ID: " + control.ultimaSessao.contaCaixa);
        }
    },
    janelaConfiguracaoImpressaoTestarImpressao: function () {
        //alert('PDV::janelaConfiguracaoImpressaoTestarImpressao()');
        var control = this;
        var form = control.formularioConfiguracaoImpressao.getForm();
        if (form.isValid()) {
            form = form.getFieldValues();
            var doSucessoTesteImpressao = function (response) {
                var doSucessoImpressaoTeste = function (response2) {
                    control.MSG('Teste de Impressão efetuado com sucesso!', Ext.emptyFn);
                };
                control.xhrImpressaoTeste(form.servidor, form.porta, form.drive, form.quebra, form.guilhotina, response.impressao, doSucessoImpressaoTeste, Ext.emptyFn);
            };
            control.xhrTesteImpressao(control.ultimaSessao.contaCaixa, doSucessoTesteImpressao, Ext.emptyFn);
        }
    },
    janelaConfiguracaoImpressaoOcultar: function (callback) {
        //alert('PDV::janelaConfiguracaoImpressaoOcultar()', callback);
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaConfiguracaoImpressao.cenario;
        control.janelaConfiguracaoImpressao.hide(null, function () {
            //            setTimeout(function() {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
            //            }, 250);
        });
    },
    //
    //
    //
    janelaContaCaixaExibir: function () {
        //alert('PDV::janelaContaCaixaExibir()');
        var control = this;
        var cenario = control.cenarioAtivo;
        if (control.ultimaSessao.contaCaixa) {
            control.janelaContaCaixaConfirmar(control.ultimaSessao.contaCaixa, control.ultimaSessao.contaCaixaNome, control.ultimaSessao.contaCaixaSaldo);
        } else {
            control.cenarioAtivo = 'conta-caixa';
            control.janelaContaCaixa.removeAll();
            control.janelaContaCaixa.add({xtype: 'campoContaCaixa'});
            control.janelaContaCaixa.cenario = cenario;
            control.janelaContaCaixa.show(null, function () {
                control.setContaCaixa();
            });
        }

    },
    janelaContaCaixaConfirmar: function (conta, nome, saldo) {
        //alert('PDV::janelaContaCaixaConfirmar()', conta, nome, saldo);
        var control = this;
        if (!conta) {
            conta = control.campoContaCaixa.getValue();
            var record = control.campoContaCaixa.findRecordByValue(conta);
            nome = record.get('nome');
            saldo = record.get('saldo');
        }
        if (control.ultimaSessao.contaCaixaDefinida !== true) {
            if (conta > 0) {
                control.ultimaSessao.contaCaixa = conta;
                control.ultimaSessao.contaCaixaNome = nome;
                control.ultimaSessao.contaCaixaSaldo = saldo;
                control.ultimaSessao.contaCaixaDefinida = true;
                Illi.app.Local.set('pdvUltimaSessao', control.ultimaSessao);
                var doConfirma = function () {
                    var doSucessoAbertura = function (response) {
                        response = response.informacao;
                        control.ultimaSessao.entidadePessoa = response.entidade;
                        control.ultimaSessao.clientePadrao = parseInt(response.cliente.id);
                        control.ultimaSessao.clientePadraoNome = response.cliente.nome;
                        control.ultimaSessao.pesquisaProduto = parseInt(response.pesquisa_exibicao);
                        control.ultimaSessao.digitosProduto = parseInt(response.pesquisa_digitos);
                        control.ultimaSessao.conferenciaObrigatoria = response.conferencia_cega;
                        control.ultimaSessao.mensagemRomaneio = response.mensagem;
                        control.ultimaSessao.pesquisaVendedor = (response.pesquisa_vendedor !== 1 ? false : true);
                        control.ultimaSessao.solicitarDocumento = (response.solicitar_documento !== 1 ? false : true);
                        control.ultimaSessao.vendedorObrigatorio = (response.vendedor !== 1 ? false : true);
                        control.ultimaSessao.naturezaSangria = response.natureza_sangria;
                        control.ultimaSessao.naturezaSuprimento = response.natureza_suprimento;
                        control.ultimaSessao.necessarioAutenticacao = response.autenticacao;
                        Illi.app.Local.set('pdvUltimaSessao', control.ultimaSessao);
                        var doSucessoImpressao = function (response2) {
                            var doOcultarContaCaixa = function () {
                                control.doIniciarVenda();
                            };
                            control.setRodapeCaixa(control.ultimaSessao.contaCaixaNome);
                            control.janelaContaCaixaOcultar(doOcultarContaCaixa);
                        };
                        if (response.impressao !== false) {
                            control.xhrImpressao(response.impressao, doSucessoImpressao, doSucessoImpressao);
                        } else {
                            doSucessoImpressao(false);
                        }
                    };
                    var doFalhaAbertura = function (response) {
                        var doOcultarContaCaixa = function () {
                            if (response !== undefined) {
                                if (response !== undefined && response.fechamento === true) {
                                    control.doFecharCaixa(false, true);
                                } else {
                                    control.janelaVendaRapidaOcultar();
                                }
                            } else {

                            }
                        };
                        control.janelaContaCaixaOcultar(doOcultarContaCaixa);
                    };
                    control.xhrAbertura(control.ultimaSessao.contaCaixa, doSucessoAbertura, doFalhaAbertura);
                };
                if (saldo > 0) {
                    control.MSG('Saldo atual em caixa: ' + Illi.app.Util.valorRenderer(saldo), doConfirma);
                } else {
                    doConfirma();
                }
            }
        } else {
            var doOcultarContaCaixa = function () {
                control.doIniciarVenda();
            };
            control.setRodapeCaixa(control.ultimaSessao.contaCaixaNome);
            control.janelaContaCaixaOcultar(doOcultarContaCaixa);
        }
    },
    janelaContaCaixaLimpar: function () {
        //alert('PDV::janelaContaCaixaLimpar()');
        var control = this;
        control.campoContaCaixa.setValue('');
    },
    janelaContaCaixaOcultar: function (callback) {
        //alert('PDV::janelaContaCaixaOcultar()', callback);
        callback = (callback && typeof (callback) == 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaContaCaixa.cenario;
        if (control.campoContaCaixa !== undefined) {
            control.campoContaCaixa.triggerBlur();
            control.campoContaCaixa.blur();
            control.janelaContaCaixa.hide(null, function () {
                //                setTimeout(function() {
                control.cenarioAtivo = cenario;
                if (callback) {
                    callback();
                }
                //                }, 250);
            });
        } else {
            setTimeout(callback, 250);
        }
    },
    //
    //
    //
    janelaDescontoExibir: function (valor, tipo, titulo) {
        //alert('PDV::janelaDescontoExibir()');
        var control = this;
        var cenario = control.cenarioAtivo;
        if (control.getVendaIniciada()) {
            control.cenarioAtivo = 'desconto';
            control.janelaDesconto.removeAll();
            control.janelaDesconto.add({xtype: 'campoDesconto', value: Illi.app.Util.numberRound(valor, 2)});
            control.janelaDesconto.valor = valor;
            control.janelaDesconto.tipo = tipo;
            control.janelaDesconto.cenario = cenario;
            control.janelaDesconto.show(null, function () {
                control.janelaDesconto.down('tbtext').setText(titulo);
            });
        }
    },
    janelaDescontoConfirmar: function () {
        //alert('PDV::janelaDescontoConfirmar()');
        var control = this;
        var valor = control.campoDesconto.getValue();
        if (valor > 0) {
            var store = control.listaItensVenda.getStore();
            var itemLinha = false;
            var tipo_autenticacao = "";
            switch (control.janelaDesconto.tipo) {
                case 'desconto_item':
                    tipo_autenticacao = "desconto";
                    var item = (control.itemVendaSelecionado ? control.itemVendaSelecionado : control.itemUltimoInserido);
                    var record = control.listaItensVenda.getSelectionModel().getStore().getById(item);
                    if (record) {
                        if (record.get("situacao") === "ATIVO") {
                            itemLinha = {
                                id: "D" + (item),
                                id_produto_grade: "",
                                codigo: "",
                                descricao: "Desconto item " + item,
                                unidade: "",
                                quantidade: "",
                                valor_venda: -(valor),
                                valor_custo: 0,
                                valor_total: -(valor),
                                situacao: 'DESCONTO'
                            };
                        } else {
                            Ext.MessageBox.alert('Atenção', '<h3>Não é possivel dar desconto no item!</h3> </br>');
                        }
                    }
                    break;
                case 'acrescimo_item':
                    tipo_autenticacao = "acrescimo";
                    var item = (control.itemVendaSelecionado ? control.itemVendaSelecionado : control.itemUltimoInserido);
                    var record = control.listaItensVenda.getSelectionModel().getStore().getById(item);
                    if (record.get("situacao") === "ATIVO") {
                        itemLinha = {
                            id: "A" + (item),
                            id_produto_grade: "",
                            codigo: "",
                            descricao: "Acréscimo item " + item,
                            unidade: "",
                            quantidade: "",
                            valor_venda: (valor),
                            valor_custo: 0,
                            valor_total: (valor),
                            situacao: 'ACRESCIMO'
                        };
                    } else {
                        Ext.MessageBox.alert('Atenção', '<h3>Não é possivel dar acrescrimo no item!</h3> </br>');
                    }
                    break;
                case 'desconto_venda':
                    tipo_autenticacao = "desconto-venda";
                    var total_desconto = (parseFloat(control.totalDesconto) - parseFloat(valor));
                    if ((total_desconto * -1) >= control.janelaVendaRapida.totalVenda) {
                        Ext.MessageBox.alert('Atenção', '<h3>Não é possivel dar desconto maior ou igual ao total da venda!</h3>');
                    } else {
//                        control.totalDesconto = total_desconto;
                        itemLinha = {
                            id: "D",
                            id_produto_grade: "",
                            codigo: "",
                            descricao: "Desconto Venda ",
                            unidade: "",
                            quantidade: "",
                            valor_venda: -(valor),
                            valor_custo: 0,
                            valor_total: -(valor),
                            situacao: 'DESCONTO'
                        };
                    }
                    break;
                case 'acrescimo_venda':
                    tipo_autenticacao = "acrescimo-venda";
//                    control.totalDesconto = (parseFloat(control.totalDesconto) + parseFloat(valor));
                    itemLinha = {
                        id: "A",
                        id_produto_grade: "",
                        codigo: "",
                        descricao: "Acréscimo Venda ",
                        unidade: "",
                        quantidade: "",
                        valor_venda: (valor),
                        valor_custo: 0,
                        valor_total: (valor),
                        situacao: 'ACRESCIMO'
                    };
                    break;
            }
            if (itemLinha) {
                var doSucessoAutenticador = function () {
                    var doOcultarDesconto = function () {
                        if (valor > 0) {
                            switch (control.janelaDesconto.tipo) {
                                case 'desconto_item':
                                    control.janelaDescontoLimpar();
                                    //
                                    var desconto = control.listaItensVenda.getSelectionModel().getStore().getById("D");
                                    if (desconto) {
                                        control.totalDesconto = (parseFloat(control.totalDesconto) - parseFloat(desconto.get('valor_total')));
//                                        desconto.set('situacao', 'DESATIVO');
                                        control.listaItensVenda.store.remove(desconto);
                                    }
                                    //
                                    record.set('valor_desconto_acrescimo', -(valor));
                                    record.commit();
//                                    store.add(itemLinha);
//                                    break;
                                case 'desconto_venda':
                                    control.totalDesconto = (parseFloat(control.totalDesconto) - parseFloat(valor));
                                    store.add(itemLinha);
                                    break;
                                case 'acrescimo_item':
                                    control.janelaDescontoLimpar();
                                    //
                                    var acrescimo = control.listaItensVenda.getSelectionModel().getStore().getById("A");
                                    if (acrescimo) {
                                        control.totalDesconto = (parseFloat(control.totalDesconto) + parseFloat(acrescimo.get('valor_total')));
//                                        acrescimo.set('situacao', 'DESATIVO');
                                        control.listaItensVenda.store.remove(acrescimo);
                                    }
                                    //
                                    record.set('valor_desconto_acrescimo', (valor));
                                    record.commit();
//                                    store.add(itemLinha);
//                                    break;
                                case 'acrescimo_venda':
                                    control.totalDesconto = (parseFloat(control.totalDesconto) + parseFloat(valor));
                                    store.add(itemLinha);
                                    break;
                            }
                        }
                    };
                    control.janelaDescontoOcultar(doOcultarDesconto);
                };
                control.janelaAutenticadorExibir(tipo_autenticacao, doSucessoAutenticador, "Autorizou " + itemLinha.descricao + ".\nValor: " + itemLinha.valor_total + "\nConta ID: " + control.ultimaSessao.contaCaixa, false, 'desconto');
            }
        }
    },
    janelaDescontoLimpar: function () {
        //alert('PDV::janelaDescontoLimpar()');
        var control = this;
        control.campoDesconto.setValue('');
    },
    janelaDescontoOcultar: function (callback) {
        //alert('PDV::janelaDescontoOcultar()', callback);
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaDesconto.cenario;
        control.campoDesconto.triggerBlur();
        control.campoDesconto.blur();
        control.janelaDesconto.hide(null, function () {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
        });
    },
    //
    //
    //
    janelaDescontoPorcentagemExibir: function (tipo) {
        //alert('PDV::janelaDescontoPorcentagemExibir()');
        var control = this;
        var cenario = control.cenarioAtivo;
        if (control.getVendaIniciada()) {
            var item = (control.itemVendaSelecionado ? control.itemVendaSelecionado : control.itemUltimoInserido);
            var record = control.listaItensVenda.getSelectionModel().getStore().getById(item);
            if (record) {
                var aberto = true;
                var titulo = "";
                var valor_aplicado = parseFloat(control.janelaVendaRapida.totalVenda);
                switch (tipo) {
                    case 'desconto_venda':
                        titulo = 'Desconto Venda';
//                        valor_aplicado = valor_aplicado;
                        break;
                    case 'desconto_item':
                        titulo = 'Desconto Item ' + item;
                        valor_aplicado = record.get("valor_total");
                        if (record.get("situacao") !== "ATIVO") {
                            aberto = false;
                        }
                        break;
                    case 'acrescimo_venda':
//                        valor_aplicado = valor_aplicado;
                        titulo = 'Acréscimo Venda';
                        break;
                    case 'acrescimo_item':
                        titulo = 'Acréscimo Item ' + item;
                        valor_aplicado = record.get("valor_total");
                        if (record.get("situacao") !== "ATIVO") {
                            aberto = false;
                        }
                        break;
                }
                if (aberto) {
                    control.cenarioAtivo = 'desconto-porcentagem';
                    control.janelaDescontoPorcentagem.removeAll();
                    control.janelaDescontoPorcentagem.add({xtype: 'campoDescontoPorcentagem'}); // , value: (control.totalDescontoPorcentagem > 0 ? control.totalDescontoPorcentagem : false) || (control.totalDesconto > 0 ? control.totalDesconto / control.janelaVendaRapida.totalVenda : false)
                    control.janelaDescontoPorcentagem.tipo = tipo;
                    control.janelaDescontoPorcentagem.titulo = titulo;
                    control.janelaDescontoPorcentagem.valor = valor_aplicado;
                    control.janelaDescontoPorcentagem.cenario = cenario;
                    control.janelaDescontoPorcentagem.show(null, function () {
                        control.janelaDescontoPorcentagem.down('#pdvDescontoPorcentagemValor').update(Illi.app.Util.valorRenderer(0.00, 2));
                        control.janelaDescontoPorcentagem.down('tbtext').setText(titulo);
                    });
                } else {
                    Ext.MessageBox.alert('Atenção', '<h3>Não é possivel dar desconto no item!</h3>');
                }
            }

//            control.cenarioAtivo = 'desconto-porcentagem';
//            control.janelaDescontoPorcentagem.removeAll();
//            control.janelaDescontoPorcentagem.add({xtype: 'campoDescontoPorcentagem', value: (control.totalDescontoPorcentagem > 0 ? control.totalDescontoPorcentagem : false) || (control.totalDesconto > 0 ? control.totalDesconto / control.janelaVendaRapida.totalVenda : false)});
//            control.janelaDescontoPorcentagem.cenario = cenario;
//            control.janelaDescontoPorcentagem.show(null, function() {
//                control.janelaDescontoPorcentagem.down('#pdvDescontoPorcentagemValor').update(Illi.app.Util.valorRenderer(control.totalDesconto, 2));
//            });
        }
    },
    janelaDescontoPorcentagemConfirmar: function () {
        //alert('PDV::janelaDescontoPorcentagemConfirmar()');
        var control = this;
        var valor = control.campoDescontoPorcentagem.getValue();
        var titulo = control.janelaDescontoPorcentagem.titulo;
        if (valor >= 0) {
            var doOcultarDescontoPorcentagem = function () {
                control.janelaDescontoExibir((valor > 0 ? control.janelaDescontoPorcentagem.valor * valor : false), control.janelaDescontoPorcentagem.tipo, titulo);
            };
//            control.totalDescontoPorcentagem = valor;
            control.janelaDescontoPorcentagemOcultar(doOcultarDescontoPorcentagem);
        }
    },
    janelaDescontoPorcentagemLimpar: function () {
        //alert('PDV::janelaDescontoPorcentagemLimpar()');
        var control = this;
        control.campoDescontoPorcentagem.setValue('');
    },
    janelaDescontoPorcentagemOcultar: function (callback) {
        //alert('PDV::janelaDescontoPorcentagemOcultar()', callback);
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaDescontoPorcentagem.cenario;
        control.campoDescontoPorcentagem.triggerBlur();
        control.campoDescontoPorcentagem.blur();
        control.janelaDescontoPorcentagem.hide(null, function () {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
        });
    },
    //
    //
    //
    janelaFechamentoCaixaExibir: function (fechar, bloqueado) {
        //alert('PDV::janelaFechamentoCaixaExibir()', fechar, bloqueado);
        var control = this;
        var doSucessoSaldo = function (response) {
            var cenario = control.cenarioAtivo;
            var store = control.storePrazoFechamento;
            var novoStore = [];
            if (store.data.getCount() > 0) {
                var records = store.data.items;
                for (var i = 0; i < records.length; i++) {
                    var newRecord = [];
                    var desc = records[i].get('descricao').trim();
                    var value = "";
                    if (response) {
                        if (response.saldo[desc]) {
                            value = response.saldo[desc];
                        }
                    }
                    newRecord.push(records[i].get('id'));
                    newRecord.push(records[i].get('descricao'));
                    newRecord.push(value);
                    novoStore.push(newRecord);
                }
            }
            control.cenarioAtivo = 'fechamento';
            control.janelaFechamentoCaixa.removeAll();
            control.janelaFechamentoCaixa.add({xtype: 'listaFechamentoCaixa'});
            control.janelaFechamentoCaixa.fechar = fechar;
            control.janelaFechamentoCaixa.cenario = cenario;
            control.janelaFechamentoCaixa.bloqueado = bloqueado;
            control.janelaFechamentoCaixa.show(null, function () {
                var storeFechamentoCaixa = Ext.getStore('storeFechamentoCaixa');
                storeFechamentoCaixa.removeAll();
                storeFechamentoCaixa.add(novoStore);
                control.janelaFechamentoCaixa.down('#pdvProcessaFechamentoForcado').hide();
                control.listaFechamentoCaixaFocus();
            });
        };
        if (control.ultimaSessao.conferenciaObrigatoria) {
            doSucessoSaldo(false);
        } else {
            control.xhrFechamentoSaldo(control.ultimaSessao.contaCaixa, doSucessoSaldo, Ext.emptyFn);
        }

    },
    janelaFechamentoCaixaSelecionar: function () {
        var control = this;
        control.listaFechamentoCaixa.editingPlugin.startEdit(control.itemFechamentoCaixaSelecionado, 2);
    },
    janelaFechamentoCaixaImprimir: function () {
        var control = this;
        var doSucessoAutenticador = function () {
            var doSucessoFechamento = function (response) {
                var doSucessoImpressao = function (response3) {
                    alert(response3);
                };
                control.xhrImpressao(response.impressao, doSucessoImpressao, doSucessoImpressao);
            };
            control.xhrImprimirFechamento(control.ultimaSessao.contaCaixa, doSucessoFechamento, Ext.emptyFn);
        };
        var cenario = control.cenarioAtivo;
        control.janelaAutenticadorExibir('impressao-fechamento', doSucessoAutenticador, "Autorizou impressão do resumo de fechamento de caixa.\nConta ID: " + control.ultimaSessao.contaCaixa, false, cenario);
    },
    janelaFechamentoCaixaConfirmar: function (fechar, formData) {
        var control = this;
        var fechar = function () {
            var doSucessoFechamento = function (response) {
                var doSucessoImpressao = function (response3) {
                    var doOcultarFechamentoCaixa = function () {
                        var doVendaCancelar = function () {
                            //if (fechar === true) {
                            control.ultimaSessao.active = false;
                            Illi.app.Local.set('pdvUltimaSessao', control.ultimaSessao);
                            control.janelaVendaRapidaOcultar();
//                            } else {
//                                control.doAbrirCaixa();
//                            }
                        };
                        control.doCancelarVenda(doVendaCancelar);
                    };
                    control.janelaFechamentoCaixa.bloqueado = false;
                    control.janelaFechamentoCaixaOcultar(doOcultarFechamentoCaixa);
                };
                control.xhrImpressao(response.impressao, doSucessoImpressao, doSucessoImpressao);
            };
            control.xhrFechamento(control.ultimaSessao.contaCaixa, formData, doSucessoFechamento, Ext.emptyFn);
        };
//        if (control.verificaECF()) {
//            control.doReducaoZ(fechar, fechar, false, "Emitir Redução agora Z!<br/> O ECF ficará bloqueado até as 0:00hs");
//        } else {
        fechar();
        //}

    },
    janelaFechamentoCaixaOcultar: function (callback) {
        //alert('PDV::janelaFechamentoCaixaOcultar()', callback);
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaFechamentoCaixa.cenario;
        if (control.janelaFechamentoCaixa.bloqueado) {
            control.MSG('É obrigatório o fechamento do caixa!', Ext.emptyFn);
        } else {
            control.janelaFechamentoCaixa.hide(null, function () {
                control.cenarioAtivo = cenario;
                if (callback) {
                    callback();
                }
            });
        }
    },
    //
    //
    //
    janelaImpressaoExibir: function () {
        var control = this;
        var cenario = control.cenarioAtivo;
        var callback = function () {
//        var impressora = Illi.app.Local.get('pdvImpressora');
//        if (impressora && impressora.offline !== true) {
            control.cenarioAtivo = 'impressao';
            control.janelaImpressao.removeAll();
            control.janelaImpressao.add({xtype: 'listaImpressao', idConta: control.ultimaSessao.contaCaixa, ecf: control.ecf});
            control.janelaImpressao.cenario = cenario;
            control.janelaImpressao.show();
//        } else {
//            control.MSG('Impressora desabilitada!', Ext.emptyFn);
//        }
        };
        control.doEstado(callback);
    },
    janelaImpressaoConfirmar: function (shift) {
        //alert('PDV::janelaImpressaoConfirmar()');
        var control = this;
        if (control.itemImpressaoSelecionado) {
            var doFalhaSegundaVia = function () {
                control.listaImpressaoFocus();
            };
            var emitirImpressao = "nao_fiscal";
            if (control.itemImpressaoSelecionado.get('ecf')) { // se for fiscal
                if (!shift) { // não imprimir
                    emitirImpressao = false;
                    Ext.MessageBox.alert('Atenção', '<h3>Não é possível emitir uma segunda via de um cupom fiscal!</h3>', doFalhaSegundaVia);
                }
            } else {
                if (shift) {
                    if (control.ecf) {
                        var emitirImpressao = "fiscal";
                    } else {
                        emitirImpressao = false;
                        Ext.MessageBox.alert('Atenção', '<h3>Não é possível emitir uma segunda via de um cupom fiscal!</h3>', doFalhaSegundaVia);
                    }
                }
            }
            if (emitirImpressao) {
                var doSucessoAutenticador = function () {
                    if (emitirImpressao === "nao_fiscal") {
                        var doSucessoSegundaVia = function (response) {
                            var doSucessoImpressao = function (response) {
                                control.janelaImpressaoOcultar();
                            };
                            control.xhrImpressao(response.impressao, doSucessoImpressao, Ext.emptyFn);
                        };
                        control.xhrSegundaVia(control.itemImpressaoSelecionado.get('id'), false, false, doSucessoSegundaVia, Ext.emptyFn);
                    } else {
                        var doSucessoSegundaVia = function (response) {
                            if (response && response.status === true) {
                                var obj = response.impressao;
                                // itens de venda
                                var listaItensVenda = [];
                                Ext.Array.each(obj.itens, function (item) {
                                    listaItensVenda.push(item);
                                });
                                alert(listaItensVenda);
                                // itens de pagamento
                                var listaItensPagamento = [];
                                Ext.Array.each(obj.pagamentos, function (item) {
                                    listaItensPagamento.push(item);
                                });
                                // cancela cupom
                                var doCancelarVendaCupom = function () {
                                    control.doCancelarVendaCupom(Ext.emptyFn, Ext.emptyFn, true);
                                };
                                // adiciona itens ao cupom
                                var doAdicionarItemCupom = function (thisItem) { // adiciona item ao cupom
                                    if ((thisItem + 1) <= listaItensVenda.length) {
                                        var item = listaItensVenda[thisItem];
                                        var nextItem = thisItem + 1;
                                        var doSucessoAdicionarItemCupom = function () {
                                            doAdicionarItemCupom(nextItem);
                                        };
                                        control.doAdicionarItemCupom(item.codigo, item.descricao, item.unidade, item.quantidade, item.valor_venda, false, doSucessoAdicionarItemCupom, (thisItem > 0 ? doCancelarVendaCupom : Ext.emptyFn), true);
                                    } else {
                                        doTotalCupom(true);
                                    }
                                };
                                var doTotalCupom = function (cupomAberto) {
                                    if (control.totalDesconto !== 0) {
                                        var doSucessoTotalDescontoCupom = function () {
                                            doAdicionarPagamentoCupom(0);
                                        };
                                        control.doTotalDescontoCupom(control.totalDesconto, doSucessoTotalDescontoCupom, (cupomAberto ? doCancelarVendaCupom : Ext.emptyFn), true);
                                    } else {
                                        var doSucessoTotalCupom = function () {
                                            doAdicionarPagamentoCupom(0);
                                        };
                                        control.doTotalCupom(doSucessoTotalCupom, (cupomAberto ? doCancelarVendaCupom : Ext.emptyFn), true);
                                    }
                                };
                                var doAdicionarPagamentoCupom = function (thisPagamento) { // adiciona pagamento ao cupom
                                    if ((thisPagamento + 1) <= listaItensPagamento.length) {
                                        var item = listaItensPagamento[thisPagamento];
                                        var doSucessoAdicionarPagamentoCupom = function () {
                                            doAdicionarPagamentoCupom(++thisPagamento);
                                        };
                                        control.doAdicionarPagamentoCupom(item.prazo, item.valor, doSucessoAdicionarPagamentoCupom, doCancelarVendaCupom, true);
                                    } else {
                                        control.doFecharVendaCupom(doFinalizaVenda, doCancelarVendaCupom, true);
                                    }
                                };
                                var doFinalizaVenda = function (response) {
                                    var doSucessoSegundaViaConfirmacao = function (response) {
                                        control.janelaImpressaoOcultar();
                                    };
                                    control.xhrSegundaVia(control.itemImpressaoSelecionado.get('id'), Ext.JSON.encode(control.ecf), true, doSucessoSegundaViaConfirmacao, Ext.emptyFn);
                                };
                                doAdicionarItemCupom(0);
                            }
                        };
                        control.xhrSegundaVia(control.itemImpressaoSelecionado.get('id'), Ext.JSON.encode(control.ecf), false, doSucessoSegundaVia, Ext.emptyFn);
                    }
                };
                control.janelaAutenticadorExibir('impressao', doSucessoAutenticador, "Autorizou a impressão da segunda via de venda.\nVenda ID: " + control.itemImpressaoSelecionado.get('m.id') + "\nConta ID: " + control.ultimaSessao.contaCaixa, doFalhaSegundaVia);
            }
        }
    },
    janelaImpressaoOcultar: function (callback) {
        //alert('PDV::janelaImpressaoOcultar()');
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaImpressao.cenario;
        control.janelaImpressao.hide(null, function () {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
        });
    },
    //
    //
    //
    janelaPagamentoExibir: function (valor, formaPagamento, prazo, condicao) {
        //alert('PDV::janelaPagamentoExibir()');
        var control = this;
        var cenario = control.cenarioAtivo;
        var valorSaldo = control.janelaVendaRapida.totalVenda; //  - control.totalDesconto
        control.cenarioAtivo = 'pagamento';
        if (control.listaItensPagamento) {
            control.listaItensPagamento.valorSaldo = valorSaldo;
            if (control.janelaPagamento.isHidden()) {
                control.janelaPagamento.cenario = cenario;
                control.janelaPagamento.show(null, function () {
                    control.janelaPagamento.down('#pdvPagamentoTotal').update(Illi.app.Util.valorRenderer(valorSaldo));
                    control.listaItensPagamentoAdicionar(valor, formaPagamento, prazo, condicao);
                });
            } else {
                control.listaItensPagamentoAdicionar(valor, formaPagamento, prazo, condicao);
            }
        } else {
            setTimeout(function () {
                control.janelaPagamento.removeAll();
                control.janelaPagamento.add({xtype: 'listaItensPagamento', valorSaldo: valorSaldo});
                control.janelaPagamento.cenario = cenario;
                control.janelaPagamento.show(null, function () {
                    control.janelaPagamento.down('#pdvPagamentoTotal').update(Illi.app.Util.valorRenderer(valorSaldo));
                    control.listaItensPagamentoAdicionar(valor, formaPagamento, prazo, condicao);
                });
            }, 250);
        }
    },
    janelaPagamentoConfirmar: function (shift) {
        //alert('PDV::janelaPagamentoConfirmar()');
        var control = this;
        var doConfirma = function (response) {
            control.totalVenda = Illi.app.Util.numberRound(control.janelaVendaRapida.totalVenda, 2);
            control.totalDesconto = Illi.app.Util.numberRound(control.totalDesconto, 2);
            control.totalPagamento = Illi.app.Util.numberRound(control.janelaPagamento.totalPago, 2);
            control.totalTroco = Illi.app.Util.numberRound(control.totalPagamento - control.totalVenda, 2); //  - control.totalDesconto
            if (control.totalTroco >= 0) {
                var listaItensVenda = [];
                Ext.Array.each(control.listaItensVenda.getStore().data.items, function (item) {
                    item.raw.situacao = item.data.situacao;
                    listaItensVenda.push(item.raw);
                });
                var listaItensCancelados = [];
                Ext.Array.each(control.listaItensCancelados.getStore().data.items, function (item) {
                    listaItensCancelados.push(item.raw);
                });
                var listaItensPagamento = [];
                Ext.Array.each(control.listaItensPagamento.getStore().data.items, function (item) {
                    listaItensPagamento.push(item.raw);
                });
                var doCancelarVendaCupom = function () {
                    control.listaItensPagamentoFocus();
                    control.doCancelarVendaCupom(Ext.emptyFn, Ext.emptyFn, true);
                };
                var doAdicionarItemCupom = function (thisItem) { // adiciona item ao cupom
                    if ((thisItem + 1) <= listaItensVenda.length) {
                        var item = listaItensVenda[thisItem];
                        var nextItem = thisItem + 1;
                        if (item.situacao === "ATIVO") {
                            var doSucessoAdicionarItemCupom = function () {
                                doAdicionarItemCupom(nextItem);
                            };
                            control.doAdicionarItemCupom(item.codigo, item.descricao, item.unidade, item.quantidade, item.valor_venda, false, doSucessoAdicionarItemCupom, (thisItem > 0 ? doCancelarVendaCupom : Ext.emptyFn), true);
                        } else {
                            doAdicionarItemCupom(nextItem);
                        }
                    } else {
                        doTotalCupom(true);
                    }
                };
                var doTotalCupom = function (cupomAberto) {
                    if (control.totalDesconto !== 0) {
                        var doSucessoTotalDescontoCupom = function () {
                            doAdicionarPagamentoCupom(0);
                        };
                        control.doTotalDescontoCupom(control.totalDesconto, doSucessoTotalDescontoCupom, (cupomAberto ? doCancelarVendaCupom : Ext.emptyFn), true);
                    } else {
                        var doSucessoTotalCupom = function () {
                            doAdicionarPagamentoCupom(0);
                        };
                        control.doTotalCupom(doSucessoTotalCupom, (cupomAberto ? doCancelarVendaCupom : Ext.emptyFn), true);
                    }
                };
                var doAdicionarPagamentoCupom = function (thisPagamento) { // adiciona pagamento ao cupom
                    if ((thisPagamento + 1) <= listaItensPagamento.length) {
                        var item = listaItensPagamento[thisPagamento];
                        if (item.troca !== true) {
                            var doSucessoAdicionarPagamentoCupom = function () {
                                doAdicionarPagamentoCupom(++thisPagamento);
                            };
                            control.doAdicionarPagamentoCupom(item.codigo, item.valor, doSucessoAdicionarPagamentoCupom, doCancelarVendaCupom, true);
                        }
                    } else {
                        control.doFecharVendaCupom(doFinalizaVenda, doCancelarVendaCupom, true);
                    }
                };
                var doFinalizaVenda = function (response) {
                    listaItensVenda = Ext.JSON.encode(listaItensVenda);
                    listaItensCancelados = Ext.JSON.encode(listaItensCancelados);
                    listaItensPagamento = Ext.JSON.encode(listaItensPagamento);
                    var doSucessoFinalizaVenda = function (response2) {
                        var doSucessoImpressao = function (response) {
                            var doOcultarPagamento = function () {
                                control.doIniciarVenda();
                            };
                            control.janelaPagamentoOcultar(doOcultarPagamento);
                        };
                        if (control.verificaECF() && !shift) {
                            doSucessoImpressao();
                        } else {
                            control.xhrImpressao(response2.impressao, doSucessoImpressao, doSucessoImpressao);
                        }
                    };
                    control.xhrFinalizaVenda(shift, control.clienteSelecionado.id, control.vendedorSelecionado.id, control.documentoSelecionado, control.ultimaSessao.contaCaixa, control.totalVenda, control.totalDesconto, control.totalPagamento, control.totalTroco, listaItensVenda, listaItensCancelados, listaItensPagamento, doSucessoFinalizaVenda, doCancelarVendaCupom);
                };
                //TOAK
                var pdvImpressoraECF = Illi.app.Local.get('pdvImpressoraECF');
                if (control.verificaECF()) { // impressora configurada
                    if (pdvImpressoraECF.concomitante !== true) { // não é concomitante
                        if (shift) { // imprimir direto não-fiscal
                            doFinalizaVenda(false);
                        } else { // imprimir fiscal
                            doAdicionarItemCupom(0);
                        }
                    } else {
                        doTotalCupom(false);
                    }
                } else {
                    doFinalizaVenda(false);
                }
            }
        };
        var doVerificaVendedor = function () {
            if (control.ultimaSessao.vendedorObrigatorio) {
                if (control.vendedorSelecionado.id === Illi.app.Local.get('usuario').pessoa.id) {
                    var doExibirVendedor = function () {
                        //alert('PDV::janelaPagamentoConfirmar()->doExibirVendedor');
                        doConfirma(false);
                    };
                    control.janelaVendedorExibir(doExibirVendedor);
                } else {
                    doConfirma(false);
                }
            } else {
                doConfirma(false);
            }
        };
        var doVerificaDocumento = function () {
            if (control.ultimaSessao.solicitarDocumento) {
                if (control.documentoSelecionado === false || control.documentoSelecionado === '') {
                    var doExibirDocumento = function () {
                        //alert('PDV::janelaPagamentoConfirmar()->doExibirVendedor');
                        doVerificaVendedor();
                    };
                    control.janelaDocumentoExibir(doExibirDocumento);
                } else {
                    doVerificaVendedor();
                }
            } else {
                doVerificaVendedor();
            }
        };
        doVerificaDocumento();
    },
    verificaECF: function () {
        var pdvImpressoraECF = Illi.app.Local.get('pdvImpressoraECF');
        if (pdvImpressoraECF) { // impressora configurada
            return (pdvImpressoraECF.offline ? false : pdvImpressoraECF);
        } else {
            return false;
        }
    },
    janelaPagamentoOcultar: function (callback) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaPagamento.cenario;
        control.listaItensPagamento.getStore().removeAll();
        control.janelaPagamento.hide(null, function () {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
        });
    },
    //
    //
    //
    janelaPagamentoCondicaoExibir: function (forma, novoCenario, callback) {
        var control = this;
        var cenario = control.cenarioAtivo;
        control.cenarioAtivo = 'pagamento-condicao';
        control.janelaPagamentoCondicao.removeAll();
        control.janelaPagamentoCondicao.add({xtype: 'listaPagamentoCondicao'});
        control.janelaPagamentoCondicao.cenario = novoCenario;
        control.janelaPagamentoCondicao.cenarioOut = cenario;
        control.janelaPagamentoCondicao.callback = callback;
        control.janelaPagamentoCondicao.bypass = false;
        control.janelaPagamentoCondicao.down('#pdvPagamentoCondicaoTitulo').setText('Condições de Pagamento para ' + forma.toUpperCase());
        control.janelaPagamentoCondicao.callShow = function () {
            control.janelaPagamentoCondicao.show(null, function () {
                control.listaPagamentoCondicaoFocus();
            });
        };
        control.janelaPagamentoCondicao.callOnlyRecord = function (record) {
            if (record !== false) {
                control.janelaPagamentoCondicao.bypass = true;
                control.itemPagamentoCondicaoSelecionado = record;
                control.janelaPagamentoCondicaoConfirmar();
            } else {
                var doOk = function () {
                    control.cenarioAtivo = control.janelaPagamentoCondicao.cenario;
                };
                control.MSG('Esta forma de pagamento está desabilitada!', doOk);
            }
        };
    },
    janelaPagamentoCondicaoConfirmar: function () {
        var control = this;
        var cenario = control.janelaPagamentoCondicao.cenario;
        var callback = control.janelaPagamentoCondicao.callback;
        var bypass = control.janelaPagamentoCondicao.bypass;
        if (control.itemPagamentoCondicaoSelecionado) {
            var doOcultarPagamentoCondicao = function () {
                callback(control.itemPagamentoCondicaoSelecionado, cenario);
            };
            control.janelaPagamentoCondicaoOcultar(doOcultarPagamentoCondicao, bypass);
        }
    },
    janelaPagamentoCondicaoOcultar: function (callback, bypass) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaPagamentoCondicao.cenario;
        if (bypass !== true) {
            control.janelaPagamentoCondicao.hide(null, function () {
                control.cenarioAtivo = cenario;
                if (callback) {
                    callback();
                }
            });
        } else {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
        }
    },
    //
    //
    //
    janelaPagamentoFormaExibir: function (forma, novoCenario) {
        var control = this;
        var cenario = control.cenarioAtivo;
        if (control.getVendaIniciada()) {
            var value = (control.janelaVendaRapida.totalVenda); // control.totalDesconto
            if (control.janelaPagamento.totalPago) {
                value = value - control.janelaPagamento.totalPago;
                if (value < 0) {
                    value = 0;
                }
            }
            if (value > 0) {
                control.cenarioAtivo = 'pagamento-forma';
                control.janelaPagamentoForma.removeAll();
                control.janelaPagamentoForma.add({xtype: 'listaPagamentoForma', forma: forma});
                control.janelaPagamentoForma.cenario = novoCenario;
                control.janelaPagamentoForma.cenarioOut = cenario;
                control.janelaPagamentoForma.forma = forma;
                control.janelaPagamentoForma.bypass = false;
                control.janelaPagamentoForma.down('#pdvPagamentoFormaTitulo').setText('Forma de Pagamento: ' + forma.toUpperCase());
                control.janelaPagamentoForma.callShow = function () {
                    control.janelaPagamentoForma.show(null, function () {
                        control.listaPagamentoFormaFocus();
                    });
                };
                control.janelaPagamentoForma.callOnlyRecord = function (record) {
                    if (record !== false) {
                        control.janelaPagamentoForma.bypass = true;
                        control.itemPagamentoFormaSelecionado = record;
                        control.janelaPagamentoFormaConfirmar();
                    } else {
                        var doOk = function () {
                            control.cenarioAtivo = control.janelaPagamentoForma.cenario;
                        };
                        control.MSG('Esta forma de pagamento está desabilitada!', doOk);
                    }
                };
            }
        }
    },
    janelaPagamentoFormaConfirmar: function () {
        var control = this;
        var forma = control.janelaPagamentoForma.forma;
        var bypass = control.janelaPagamentoForma.bypass;
        var cenario = control.janelaPagamentoForma.cenario;
        var prazo = control.itemPagamentoFormaSelecionado;
        if (prazo) {
            var doOcultarPagamentoForma = function () {
                var doConfirma = function (condicao, cenario) {
                    switch (forma) {
                        case 'troca':
                            control.janelaPagamentoTrocaExibir(forma, prazo, condicao, cenario);
                            break;
                        default:
                            control.janelaPagamentoValorExibir(forma, prazo, condicao, cenario);
                            break;
                    }
                };
                if (prazo.get('permite_condicao_pagamento')) {
                    control.janelaPagamentoCondicaoExibir(forma, cenario, doConfirma);
                } else {
                    doConfirma(false, cenario);
                }
            };
            control.janelaPagamentoFormaOcultar(doOcultarPagamentoForma, bypass);
        }
    },
    janelaPagamentoFormaOcultar: function (callback, bypass) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaPagamentoForma.cenario;
        if (bypass !== true) {
            control.janelaPagamentoForma.hide(null, function () {
                control.cenarioAtivo = cenario;
                if (callback) {
                    callback();
                }
            });
        } else {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
        }
    },
    //
    //
    //
    janelaPagamentoTrocaExibir: function (forma, prazo, condicao, novoCenario) {
        //alert('PDV::janelaPagamentoTrocaExibir()', forma, prazo, condicao, novoCenario);
        var control = this;
        var cenario = control.cenarioAtivo;
        if (control.getVendaIniciada()) {
            var valorSaldo = (control.janelaVendaRapida.totalVenda); // control.totalDesconto
            if (control.janelaPagamento.totalPago) {
                valorSaldo = valorSaldo - control.janelaPagamento.totalPago;
                if (valorSaldo < 0) {
                    valorSaldo = 0;
                }
            }
            if (valorSaldo > 0) {
                control.cenarioAtivo = 'pagamento-troca';
                control.permitirTroco = prazo.get('permite_troco');
                control.janelaPagamentoTroca.removeAll();
                control.janelaPagamentoTroca.add({xtype: 'campoPagamentoTroca'});
                control.janelaPagamentoTroca.forma = forma;
                control.janelaPagamentoTroca.prazo = prazo;
                control.janelaPagamentoTroca.condicao = condicao;
                control.janelaPagamentoTroca.cenario = novoCenario;
                control.janelaPagamentoTroca.cenarioOut = cenario;
                control.janelaPagamentoTroca.valorSaldo = Illi.app.Util.numberRound(valorSaldo, 2);
                control.janelaPagamentoTroca.show();
            }
        }
    },
    janelaPagamentoTrocaConfirmar: function () {
        //alert('PDV::janelaPagamentoTrocaConfirmar()');
        var control = this;
        var codigo = control.campoPagamentoTroca.getValue();
        if (codigo > 0) {
            var doSucessoTroca = function (response) {
                var valorTroca = response.valor;
                var efetuarPagamento = true;
                if (!control.permitirTroco) {
                    if (valorTroca > control.janelaPagamentoTroca.valorSaldo) {
                        efetuarPagamento = false;
                    }
                }
                //alert('>>>>>>>>>>>', efetuarPagamento, control.permitirTroco, control.janelaPagamentoTroca.valorSaldo, valorTroca);
                if (efetuarPagamento) {
                    var doOcultarPagamento = function () {
                        control.janelaPagamentoExibir(valorTroca, control.janelaPagamentoTroca.forma, control.janelaPagamentoTroca.prazo, control.janelaPagamentoTroca.condicao);
                    };
                    control.janelaPagamentoTroca.prazo.troca = codigo;
                    control.janelaPagamentoTrocaOcultar(doOcultarPagamento);
                } else {
                    control.MSG('Esta forma de pagamento não permite troco.<br /> Por favor, informe um vale troca com valor inferior ou igual ao subtotal!<br /> <b>Troca Nº:</b> ' + codigo + '<br /> <b>Valor:</b> ' + Illi.app.Util.valorRenderer(valorTroca, 2), Ext.emptyFn);
                }
            };
            control.xhrTroca(codigo, doSucessoTroca, Ext.emptyFn);
        }
    },
    janelaPagamentoTrocaLimpar: function () {
        //alert('PDV::janelaPagamentoTrocaLimpar()');
        var control = this;
        control.campoPagamentoTroca.setValue('');
    },
    janelaPagamentoTrocaOcultar: function (callback) {
        //alert('PDV::janelaPagamentoTrocaOcultar()', callback);
        callback = (callback && typeof (callback) == 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaPagamentoTroca.cenario;
        control.campoPagamentoTroca.blur();
        control.janelaPagamentoTroca.hide(null, function () {
            //            setTimeout(function() {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
            //            }, 250);
        });
    },
    //
    //
    //
    janelaPagamentoValorExibir: function (formaPagamento, prazo, condicao, novoCenario) {
        //alert('PDV::janelaPagamentoValorExibir()', formaPagamento, prazo, condicao, novoCenario);
        var control = this;
        var cenario = control.cenarioAtivo;
        if (control.getVendaIniciada()) {
            var valorSaldo = (control.janelaVendaRapida.totalVenda); //  - control.totalDesconto
            if (control.janelaPagamento.totalPago) {
                valorSaldo = valorSaldo - control.janelaPagamento.totalPago;
                if (valorSaldo < 0) {
                    valorSaldo = 0;
                }
            }
            if (valorSaldo > 0) {
                control.cenarioAtivo = 'pagamento-valor';
                control.permitirTroco = prazo.get('permite_troco');
                control.janelaPagamentoValor.removeAll();
                control.janelaPagamentoValor.add({xtype: 'campoPagamentoValor', emptyText: Illi.app.Util.floatRenderer(valorSaldo, 2)});
                control.janelaPagamentoValor.formaPagamento = formaPagamento.toUpperCase();
                control.janelaPagamentoValor.prazo = prazo;
                control.janelaPagamentoValor.condicao = condicao;
                control.janelaPagamentoValor.cenario = novoCenario;
                control.janelaPagamentoValor.cenarioOut = cenario;
                control.janelaPagamentoValor.valorSaldo = Illi.app.Util.numberRound(valorSaldo, 2);
                control.janelaPagamentoValor.down('#pdvPagamentoValorTitulo').setText(prazo.get('descricao') + (condicao ? ' ' + condicao.get("descricao") : ''));
                control.janelaPagamentoValor.down('#pdvPagamentoValorSubtotal').update(Illi.app.Util.floatRenderer(valorSaldo, 2));
                control.janelaPagamentoValor.show();
            }
        }
    },
    janelaPagamentoValorConfirmar: function () {
        //alert('PDV::janelaPagamentoValorConfirmar()');
        var control = this;
        var valorPagar = control.campoPagamentoValor.getValue();
        if (valorPagar <= 0) {
            valorPagar = control.janelaPagamentoValor.valorSaldo;
        }
        var efetuarPagamento = true;
        if (!control.permitirTroco) {
            if (valorPagar > control.janelaPagamentoValor.valorSaldo) {
                efetuarPagamento = false;
            }
        }
        if (efetuarPagamento) {
            var doOcultarPagamentoValor = function () {
                control.janelaPagamentoExibir(valorPagar, control.janelaPagamentoValor.formaPagamento, control.janelaPagamentoValor.prazo, control.janelaPagamentoValor.condicao);
            };
            control.janelaPagamentoValorOcultar(doOcultarPagamentoValor);
        } else {
            control.MSG('Esta forma de pagamento não permite troco.<br /> Por favor, digite um valor inferior ou igual ao subtotal!', Ext.emptyFn);
        }
    },
    janelaPagamentoValorLimpar: function () {
        //alert('PDV::janelaPagamentoValorLimpar()');
        var control = this;
        control.campoPagamentoValor.setValue('');
    },
    janelaPagamentoValorOcultar: function (callback) {
        //alert('PDV::janelaPagamentoValorOcultar()', callback);
        callback = (callback && typeof (callback) == 'function' ? callback : false);
        var control = this;
        control.campoPagamentoValor.triggerBlur();
        control.campoPagamentoValor.blur();
        control.janelaPagamentoValor.hide(null, function () {
            setTimeout(function () {
                control.cenarioAtivo = control.janelaPagamentoValor.cenario; //(control.janelaPagamento ? (control.janelaPagamento.isHidden() ? 'venda' : 'pagamento') : 'venda');
                if (callback) {
                    callback();
                }
            }, 250);
        });
    },
    //
    //
    //
    janelaProdutoPesquisaExibir: function () {
        //alert('PDV::janelaProdutoPesquisaExibir()');
        var control = this;
        var cenario = control.cenarioAtivo;
        var cmpQuantidade = control.getQuantidadeProduto(control.campoProdutoCodigo.getValue());
        control.cenarioAtivo = 'produto-pesquisa';
        control.janelaProdutoPesquisa.removeAll();
        control.janelaProdutoPesquisa.add({xtype: 'listaProdutoPesquisa', pesquisaProduto: control.ultimaSessao.pesquisaProduto, digitosProduto: control.ultimaSessao.digitosProduto, tabela_venda: (control.tabelaSelecionada ? control.tabelaSelecionada.id : "")});
        control.janelaProdutoPesquisa.cenario = cenario;
        control.janelaProdutoPesquisa.quantidade = cmpQuantidade.quantidade;
        control.janelaProdutoPesquisa.show();
    },
    janelaProdutoPesquisaConfirmar: function () {
        //alert('PDV::janelaProdutoPesquisaConfirmar()');
        var control = this;
        if (control.itemProdutoPesquisaSelecionado) {
            var record = control.itemProdutoPesquisaSelecionado;
            //var codigo = record.get('codigo');
            var codigo = record.get('id');
            switch (control.ultimaSessao.pesquisaProduto) {
                case 1:
                    codigo = record.raw.produto.codigo;
                    break;
                case 2:
                    if (record.raw.codigobarra[0]) {
                        codigo = record.raw.codigobarra[0].codigo;
                    } else {
                        alert("Código de Barras não configurado para este produto, será utilizado o ID do produto: " + codigo);
                    }
                    break;
                case 3:
                    codigo = record.raw.codigo;
                    break;
            }
            var quantidade = control.janelaProdutoPesquisa.quantidade;
            var doOcultarProdutoPesquisa = function () {
                if (typeof (codigo) == 'number') {
                    codigo = codigo.toString();
                }
                control.listaItensVendaAdicionar(codigo, quantidade, record);
            };
            control.janelaProdutoPesquisaOcultar(doOcultarProdutoPesquisa);
        }
    },
    janelaProdutoPesquisaOcultar: function (callback) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaProdutoPesquisa.cenario;
        control.janelaProdutoPesquisa.hide(null, function () {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
        });
    },
    //
    //
    //
    janelaProdutoSelecaoExibir: function (codigo, quantidade, store, doAdicionarLista) {
        //alert('PDV::janelaProdutoSelecaoExibir()', codigo, quantidade, store, doAdicionarLista);
        var control = this;
        var cenario = control.cenarioAtivo;
        control.cenarioAtivo = 'produto-selecao';
        control.janelaProdutoSelecao.removeAll();
        control.janelaProdutoSelecao.add({xtype: 'listaProdutoSelecao', store: store, pesquisaProduto: control.ultimaSessao.pesquisaProduto, digitosProduto: control.ultimaSessao.digitosProduto});
        control.janelaProdutoSelecao.cenario = cenario;
        control.janelaProdutoSelecao.codigo = codigo;
        control.janelaProdutoSelecao.quantidade = quantidade;
        control.janelaProdutoSelecao.doAdicionarLista = doAdicionarLista;
        control.janelaProdutoSelecao.show(null, function () {
            control.listaProdutoSelecaoFocus();
        });
    },
    janelaProdutoSelecaoConfirmar: function () {
        //alert('PDV::janelaProdutoSelecaoConfirmar()');
        var control = this;
        var codigo = control.janelaProdutoSelecao.codigo;
        var quantidade = control.janelaProdutoSelecao.quantidade;
        var doAdicionarLista = control.janelaProdutoSelecao.doAdicionarLista; // codigo, quantidade, record
        var doOcultarProdutoSelecao = function () {
            doAdicionarLista(codigo, quantidade, control.itemProdutoSelecionado);
        };
        control.janelaProdutoSelecaoOcultar(doOcultarProdutoSelecao);
    },
    janelaProdutoSelecaoOcultar: function (callback) {
        //alert('PDV::janelaProdutoSelecaoOcultar()', callback);
        callback = (callback && typeof (callback) == 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaProdutoSelecao.cenario;
        control.janelaProdutoSelecao.hide(null, function () {
            //            setTimeout(function() {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
            //            }, 250);
        });
    },
    //
    //
    //
    janelaSangriaExibir: function () {
        //alert('PDV::janelaSangriaExibir()');
        var control = this;
        var cenario = control.cenarioAtivo;
        control.cenarioAtivo = 'sangria';
        control.janelaSangria.removeAll();
        control.janelaSangria.add({xtype: 'formularioSangria'});
        control.janelaSangria.cenario = cenario;
        control.janelaSangria.show();
    },
    janelaSangriaConfirmar: function () {
        //alert('PDV::janelaSangriaConfirmar()');
        var control = this;
        var form = control.formularioSangria.getForm();
        if (form.isValid()) {
            form = form.getFieldValues();
            form.data_lancamento = false; //Ext.Date.format(new Date(), 'Y-m-d H:i:s');
            form.conta_origem = control.ultimaSessao.contaCaixa;
            form.id_natureza_lancamento = control.ultimaSessao.naturezaSangria;
            var jsonTransferencia = Ext.JSON.encode(form);
            if (form.conta_origem !== form.conta_destino) {
                var doSucessoAutenticador = function () {
                    var doSucessoSangria = function (response) {
//                        var doSucessoSangriaCupom = function(response2) {
//                            var doSucessoImpressao = function(response3) {
//                                control.janelaSangriaOcultar(function() {
//                                    control.MSG((response2 === 'no-ecf' ? 'Sangria efetuada com sucesso, porém não pode ser impressa!' : 'Sangria efetuada com sucesso!'), Ext.emptyFn);
//                                });
//                            };
//                            control.xhrImpressao(response.impressao, doSucessoImpressao, doSucessoImpressao);
//                        };
//                        var doFalhaSangriaCupom = function() {
//                            doSucessoSangriaCupom('no-ecf');
//                        };
//                        if (control.verificaECF()) {
//                            control.doSangriaCupom(form.valor, doSucessoSangriaCupom, doFalhaSangriaCupom, true);
//                        } else {
                        var doSucessoImpressao = function (retorno) {
                            control.janelaSangriaOcultar();
                        };
                        control.xhrImpressao(response.impressao, doSucessoImpressao, doSucessoImpressao);
//                        }

                    };
                    control.xhrSangria(jsonTransferencia, doSucessoSangria, Ext.emptyFn);
                };
                control.janelaAutenticadorExibir('sangria', doSucessoAutenticador, "Autorizou a sangria.\nValor: " + form.valor + "\nConta ID (origem): " + form.conta_origem + "\nConta ID (destino): " + form.conta_destino);
            } else {
                control.MSG('Você não pode selecionar sua conta de abertura de caixa!', Ext.emptyFn);
            }
        }
    },
    janelaSangriaOcultar: function (callback) {
        //alert('PDV::janelaSangriaOcultar()', callback);
        callback = (callback && typeof (callback) == 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaSangria.cenario;
        control.janelaSangria.hide(null, function () {
            //            setTimeout(function() {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
            //            }, 250);
        });
    },
    //
    //
    //
    janelaSuprimentoExibir: function () {
        //alert('PDV::janelaSuprimentoExibir()');
        var control = this;
        var cenario = control.cenarioAtivo;
        control.cenarioAtivo = 'suprimento';
        control.janelaSuprimento.removeAll();
        control.janelaSuprimento.add({xtype: 'formularioSuprimento'});
        control.janelaSuprimento.cenario = cenario;
        control.janelaSuprimento.show();
    },
    janelaSuprimentoConfirmar: function () {
        //alert('PDV::janelaSuprimentoConfirmar()');
        var control = this;
        var form = control.formularioSuprimento.getForm();
        if (form.isValid()) {
            form = form.getFieldValues();
            form.data_lancamento = false; //Ext.Date.format(new Date(), 'Y-m-d H:i:s');
            form.conta_destino = control.ultimaSessao.contaCaixa;
            form.id_natureza_lancamento = control.ultimaSessao.naturezaSuprimento;
            var jsonTransferencia = Ext.JSON.encode(form);
            if (form.conta_origem !== form.conta_destino) {
                control.janelaAutenticadorExibir('suprimento', function () {
                    var doSucessoSuprimento = function (response) {
//                        var doSucessoSuprimentoCupom = function(response2) {
//                            var doSucessoImpressao = function(response3) {
//                                control.janelaSuprimentoOcultar(function() {
//                                    control.MSG((response2 === 'no-ecf' ? 'Suprimento efetuado com sucesso, porém não pode ser impressa!' : 'Suprimento efetuado com sucesso!'), Ext.emptyFn);
//                                });
//                            };
//                            control.xhrImpressao(response.impressao, doSucessoImpressao, doSucessoImpressao);
//                        };
//                        var doFalhaSuprimentoCupom = function() {
//                            doSucessoSuprimentoCupom('no-ecf');
//                        };
//                        if (control.verificaECF()) {
//                            control.doSuprimentoCupom(form.valor, doSucessoSuprimentoCupom, doFalhaSuprimentoCupom, true);
//                        } else {
                        var doSucessoImpressao = function (response3) {
                            control.janelaSuprimentoOcultar();
                        };
                        control.xhrImpressao(response.impressao, doSucessoImpressao, doSucessoImpressao);
//                        }
                    };
                    control.xhrSuprimento(jsonTransferencia, doSucessoSuprimento, Ext.emptyFn);
                }, "Autorizou o suprimento.\nValor: " + form.valor + "\nConta ID (origem): " + form.conta_origem + "\nConta ID (destino): " + form.conta_destino);
            } else {
                control.MSG('Você não pode selecionar sua conta de abertura de caixa!', Ext.emptyFn);
            }
        }
    },
    janelaSuprimentoOcultar: function (callback) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaSuprimento.cenario;
        control.janelaSuprimento.hide(null, function () {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
        });
    },
    //
    //
    //
    janelaDevolucaoExibir: function () {
        var control = this;
        var cenario = control.cenarioAtivo;
        if (!control.getVendaIniciada(true)) {
            control.cenarioAtivo = 'devolucao';
            control.janelaDevolucao.removeAll();
            control.janelaDevolucao.add({xtype: 'listaDevolucao'});
            control.janelaDevolucao.cenario = cenario;
            control.janelaDevolucao.show();
        }
    },
    janelaDevolucaoEditar: function (novo) {
        //alert('PDV::janelaDevolucaoEditar()', novo);
        var control = this;
        control.janelaDevolucaoEdicaoExibir((novo ? false : control.itemDevolucaoSelecionado), false);
    },
    janelaDevolucaoAtualizar: function () {
        //alert('PDV::janelaDevolucaoAtualizar()');
        var control = this;
        control.listaDevolucao.getSelectionModel().deselectAll();
        control.listaDevolucao.store.load();
    },
    janelaDevolucaoCancelar: function () {
        //alert('PDV::janelaDevolucaoCancelar()');
        var control = this;
        if (control.itemDevolucaoSelecionado) {
            var doFalhaDevolucaoCancelamento = function () {
                control.janelaDevolucaoAtualizar();
            };
            var doSucessoDevolucaoCancelamento = function (response) {
                control.MSG('Devolução cancelada com sucesso!', doFalhaDevolucaoCancelamento);
            };
            var doSucessoAutenticador = function () {
                control.xhrDevolucaoCancelamento(control.itemDevolucaoSelecionado.get('id'), doSucessoDevolucaoCancelamento, doFalhaDevolucaoCancelamento);
            };
            control.janelaAutenticadorExibir('cancelamento-devolucao', doSucessoAutenticador, "Autorizou o cancelamento da devolução.\nDevolução ID: " + control.itemDevolucaoSelecionado.get('id') + "\nConta ID: " + control.ultimaSessao.contaCaixa, doFalhaDevolucaoCancelamento, control.cenarioAtivo);
        }
    },
    janelaDevolucaoImprimir: function (callback, id_devolucao, no_print) {
        //alert('PDV::janelaDevolucaoImprimir()', callback, id_devolucao, no_print);
        callback = (callback && typeof (callback) == 'function' ? callback : false);
        var control = this;
        if (control.itemDevolucaoSelecionado || id_devolucao) {
            var doAtualizarDevolucao = function () {
                control.janelaDevolucaoAtualizar();
            };
            var doSucessoImpressao = (callback ? callback : function (response2) {
                control.MSG('Impressão gerada com sucesso!', doAtualizarDevolucao);
            });
            var doSucessoDevolucaoImpressao = function (response) {
                control.xhrImpressao(response.impressao, doSucessoImpressao, doSucessoImpressao);
            };
            control.xhrDevolucaoImpressao(control.ultimaSessao.contaCaixa, (id_devolucao ? id_devolucao : control.itemDevolucaoSelecionado.get('id')), (no_print ? doSucessoImpressao : doSucessoDevolucaoImpressao), (callback ? false : doAtualizarDevolucao));
        }
    },
    janelaDevolucaoOcultar: function (callback) {
        //alert('PDV::janelaDevolucaoOcultar()', callback);
        callback = (callback && typeof (callback) == 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaDevolucao.cenario;
        control.janelaDevolucao.hide(null, function () {
            //            setTimeout(function() {
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
            //            }, 250);
        });
    },
    //
    //
    //
    janelaDevolucaoEdicaoExibir: function (record, resumida) {
        //alert('PDV::janelaDevolucaoEdicaoExibir()', record, resumida);
        var control = this;
        var cenario = control.cenarioAtivo;
        var finalizado = false;
        if (record && record.get('situacao') != 'Aberto') {
            finalizado = true;
        }
        if (!finalizado) {
            control.cenarioAtivo = 'devolucao-edicao';
            control.janelaDevolucaoEdicao.removeAll();
            control.janelaDevolucaoEdicao.add({xtype: 'painelDevolucaoEdicao', id_movimentacao: control.janelaDevolucaoEdicao.id_movimentacao, clientePadrao: control.ultimaSessao.clientePadrao});
            control.janelaDevolucaoEdicao.cenario = cenario;
            control.janelaDevolucaoEdicao.id_movimentacao = (record ? record.get('id') : false);
            control.janelaDevolucaoEdicao.resumida = resumida;
            control.janelaDevolucaoEdicao.show(null, function () {
                //                setTimeout(function() {
                if (record) {
                    control.janelaDevolucaoEdicao.down("#pdvDevolucaoEdicaoBtnSalvar").setIconCls('icon-salvar');
                    control.janelaDevolucaoEdicao.down("#pdvDevolucaoEdicaoBtnSalvar").setText('Salvar');
                    control.janelaDevolucaoEdicao.down("#pdvDevolucaoEdicaoBtnImprimir").show();
                    //                        control.janelaDevolucaoEdicao.down("#pdvDevolucaoEdicaoTitulo").setText('Devolução (editando)');
                    control.formularioDevolucaoEdicao.getForm().loadRecord(record);
                    control.formularioDevolucaoEdicao.down('combo[name=numero]').setValue(record.get('numero'));
                    control.formularioDevolucaoEdicao.down('combo[name=p.id]').setValue(record.get('p.id'));
                    control.formularioDevolucaoEdicao.down('combo[name=numero]').setReadOnly(true);
                    control.formularioDevolucaoEdicao.down('combo[name=p.id]').setReadOnly(true);
                    control.painelDevolucaoEdicao.add({
                        title: 'Produtos',
                        xtype: 'listaDevolucaoEdicao',
                        itemId: 'pdvDevolucaoEdicaoTabProdutos',
                        id_movimentacao: control.janelaDevolucaoEdicao.id_movimentacao,
                        numero: record.get('numero')
                    });
                    control.painelDevolucaoEdicao.setActiveTab(1);
                } else {
                    control.formularioDevolucaoEdicao.down('combo[name=p.id]').setValue(control.clienteSelecionado.id);
                }
                //                }, 300);
            });
        } else {
            control.MSG('Devolução já finalizado ou impresso!', Ext.emptyFn);
        }
    },
    janelaDevolucaoEdicaoEditar: function (novo) {
        //alert('PDV::janelaDevolucaoEdicaoEditar()', novo);
        var control = this;
        if (novo) {
            control.listaDevolucaoEdicao.getStore().insert(0, 0);
            control.listaDevolucaoEdicao.editingPlugin.startEdit(0, 0);
        }
    },
    janelaDevolucaoEdicaoAtualizar: function () {
        //alert('PDV::janelaDevolucaoEdicaoAtualizar()');
        var control = this;
        control.listaDevolucaoEdicao.getSelectionModel().deselectAll();
        control.listaDevolucaoEdicao.store.load();
    },
    janelaDevolucaoEdicaoConfirmar: function (imprimir) {
        //alert('PDV::janelaDevolucaoEdicaoConfirmar()', imprimir);
        var control = this;
        var form = control.formularioDevolucaoEdicao.getForm();
        if (form.isValid()) {
            form = form.getFieldValues();
            form.pdv = true;
            form.id_conta = control.ultimaSessao.contaCaixa;
            var jsonTransferencia = Ext.JSON.encode(form);
            var doSucessoAutenticador = function () {
                var doSucessoDevolucaoEdicao = function (response) {
                    if (control.janelaDevolucaoEdicao.id_movimentacao === false) {
                        control.janelaDevolucaoEdicao.id_movimentacao = response.id_movimentacao;
                        control.janelaDevolucaoEdicao.down("#pdvDevolucaoEdicaoBtnSalvar").setIconCls('icon-salvar');
                        control.janelaDevolucaoEdicao.down("#pdvDevolucaoEdicaoBtnSalvar").setText('Salvar');
                        control.janelaDevolucaoEdicao.down("#pdvDevolucaoEdicaoBtnImprimir").show();
                        //                        control.janelaDevolucaoEdicao.down("#pdvDevolucaoEdicaoBtnCancelar").setText('Fechar');
                        control.formularioDevolucaoEdicao.down('#pdvDevolucaoEdicaoIdMovimentacao').setValue(control.janelaDevolucaoEdicao.id_movimentacao);
                        //                        setTimeout(function() {
                        control.painelDevolucaoEdicao.add({
                            title: 'Produtos',
                            xtype: 'listaDevolucaoEdicao',
                            itemId: 'pdvDevolucaoEdicaoTabProdutos',
                            id_movimentacao: control.janelaDevolucaoEdicao.id_movimentacao,
                            numero: form.numero
                        });
                        control.painelDevolucaoEdicao.setActiveTab(1);
                        //                        }, 300);
                    } else {
                        var doOcultarDevolucaoEdicaoResumida = function () {
                            control.janelaDevolucaoEdicaoOcultar();
                        };
                        var doOcultarDevolucaoEdicao = function () {
                            var doAtualizarDevolucao = function () {
                                control.janelaDevolucaoAtualizar();
                            };
                            control.janelaDevolucaoEdicaoOcultar(doAtualizarDevolucao);
                        };
                        if (imprimir) {
                            var doConfirma = (control.janelaDevolucaoEdicao.resumida ? doOcultarDevolucaoEdicaoResumida : doOcultarDevolucaoEdicao);
                            var doSucessoDevolucaoImprimir = function (response) {
                                control.MSG('Devolução gerada com sucesso!<br /><br /><span style="font-size: xx-large;">Código: <span style="color: #FF0000;">' + control.janelaDevolucaoEdicao.id_movimentacao + '</span></span>', doConfirma);
                            };
                            control.janelaDevolucaoImprimir(doSucessoDevolucaoImprimir, control.janelaDevolucaoEdicao.id_movimentacao, (imprimir ? false : true));
                        } else {
                            if (control.janelaDevolucaoEdicao.resumida) {
                                doOcultarDevolucaoEdicaoResumida();
                            } else {
                                doOcultarDevolucaoEdicao();
                            }
                        }
//                        if (control.janelaDevolucaoEdicao.resumida || imprimir) {
//                            var doConfirma = (control.janelaDevolucaoEdicao.resumida ? doOcultarDevolucaoEdicaoResumida : doOcultarDevolucaoEdicao);
//                            var doSucessoDevolucaoImprimir = function(response) {
//                               control.MSG( 'Devolução gerada com sucesso!<br /><br /><span style="font-size: xx-large;">Código: <span style="color: #FF0000;">' + control.janelaDevolucaoEdicao.id_movimentacao + '</span></span>', doConfirma);
//                            };
//                            control.janelaDevolucaoImprimir(doSucessoDevolucaoImprimir, control.janelaDevolucaoEdicao.id_movimentacao, (imprimir ? false : true));
//                        } else {
//                            doOcultarDevolucaoEdicao();
//                        }
//                        if (imprimir) {
//                        } else {
//                            control.janelaDevolucaoEdicaoOcultar((control.janelaDevolucaoEdicao.resumida ? false : function() {
//                                control.janelaDevolucaoEdicaoOcultar(function() {
//                                    control.janelaDevolucaoAtualizar();
//                                });
//                            }));
                        //                        }
                    }
                };
                control.xhrDevolucaoEdicao(jsonTransferencia, doSucessoDevolucaoEdicao, Ext.emptyFn);
            };
            if (control.janelaDevolucaoEdicao.id_movimentacao === false) {
                doSucessoAutenticador();
            } else {
                control.janelaAutenticadorExibir('devolucao-edicao', doSucessoAutenticador, "Autorizou a devolução.\nDevolução ID: " + control.janelaDevolucaoEdicao.id_movimentacao + (form.numero ? "\nVenda ID: " + form.numero : "") + "\nConta ID: " + control.ultimaSessao.contaCaixa);
            }
        }
    },
    janelaDevolucaoEdicaoOcultar: function (callback) {
        //alert('PDV::janelaDevolucaoEdicaoOcultar()', callback);
        callback = (callback && typeof (callback) == 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaDevolucaoEdicao.cenario;
        control.janelaDevolucaoEdicao.hide(null, function () {
            //            setTimeout(function() {
            control.janelaDevolucaoEdicao.down("#pdvDevolucaoEdicaoBtnSalvar").setIconCls('icon-avancar');
            control.janelaDevolucaoEdicao.down("#pdvDevolucaoEdicaoBtnSalvar").setText('Continuar');
            control.janelaDevolucaoEdicao.down("#pdvDevolucaoEdicaoBtnImprimir").hide();
            control.cenarioAtivo = cenario;
            if (callback) {
                callback();
            }
            //            }, 250);
        });
    },
    //
    //
    //
    janelaVendaRapidaExibir: function () {
        //alert('PDV::janelaVendaRapidaExibir()');
        var control = this;
        control.cenarioAtivo = 'venda';
    },
    janelaVendaRapidaFechar: function () {
        //alert('PDV::janelaVendaRapidaFechar()');
        var control = this;
        control.doFecharCaixa(true, false);
    },
    janelaVendaRapidaMinimizar: function () {
        //alert('PDV::janelaVendaRapidaMinimizar()');
        var control = this;
        control.doMinimizarCaixa();
    },
    janelaVendaRapidaOcultar: function () {
        //alert('PDV::janelaVendaRapidaOcultar()');
        var control = this;
        closepage = true;
        window.location = "http://" + window.document.location.host + (pdv ? "/illi/inicial" : "");
    },
    //
    //
    //
    janelaVendedorExibir: function (callback) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.cenarioAtivo;
        control.cenarioAtivo = 'vendedor';
        control.janelaVendedor.removeAll();
        control.janelaVendedor.add({xtype: 'campoVendedor'});
        control.janelaVendedor.cenario = cenario;
        control.janelaVendedor.callback = callback;
        control.janelaVendedor.show();
    },
    janelaVendedorConfirmar: function () {
        var control = this;
        var codigo = control.campoVendedor.getValue();
        var callback = control.janelaVendedor.callback;
        control.storeVendedores.getProxy().extraParams = {
            pesquisa: (control.ultimaSessao.pesquisaVendedor ? 'nome' : 'codigo'),
            nome: (codigo.length > 0 ? codigo : ''),
            tipo: 'VENDEDOR',
            situacao: 'ATIVO'
        };
        control.storeVendedores.load({
            callback: function (records, options, success) {
                if (records.length > 1) {
                    if (control.ultimaSessao.pesquisaVendedor) {
                        var doOcultarVendedor = function () {
                            control.janelaVendedorSelecaoExibir(control.storeVendedores, callback);
                        };
                        control.janelaVendedorOcultar(doOcultarVendedor);
                    } else {
                        control.MSG('Vendedor não encontrado!', Ext.emptyFn);
                    }
                } else {
                    var record = records[0];
                    if (record) {
                        control.setVendedor(record.get('id'), record.get('nome'));
                        control.janelaVendedorOcultar(callback);
                    } else {
                        control.MSG('Vendedor não encontrado!', Ext.emptyFn);
                    }
                }
            }
        });
    },
    janelaVendedorLimpar: function () {
        var control = this;
        control.campoVendedor.setValue('');
    },
    janelaVendedorOcultar: function (callback) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaVendedor.cenario;
        if (control.campoVendedor !== undefined) {
            control.janelaVendedor.hide(null, function () {
                control.cenarioAtivo = cenario;
                if (callback) {
                    callback();
                }
            });
        } else {
            if (callback) {
                callback();
            }
        }
    },
    //
    //
    //
    janelaDocumentoExibir: function (callback) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.cenarioAtivo;
        control.cenarioAtivo = 'documento';
        control.janelaDocumento.removeAll();
        control.janelaDocumento.add({xtype: 'campoDocumento'});
        control.janelaDocumento.cenario = cenario;
        control.janelaDocumento.callback = callback;
        control.janelaDocumento.show();
    },
    janelaDocumentoConfirmar: function () {
        var control = this;
        var documento = control.campoDocumento.getValue();
        var callback = control.janelaDocumento.callback;
        control.setDocumento((documento.length > 0 ? documento : ''));
        control.janelaDocumentoOcultar(callback);
    },
    janelaDocumentoLimpar: function () {
        var control = this;
        control.campoDocumento.setValue('');
    },
    janelaDocumentoOcultar: function (callback) {
        callback = (callback && typeof (callback) === 'function' ? callback : false);
        var control = this;
        var cenario = control.janelaDocumento.cenario;
        if (control.campoDocumento !== undefined) {
            control.janelaDocumento.hide(null, function () {
                control.cenarioAtivo = cenario;
                if (callback) {
                    callback();
                }
            });
        } else {
            if (callback) {
                callback();
            }
        }
    },
    //
    //
    //
    //
    //
    //
    //
    //
    //
    listaTabelaPrecoFocus: function () {
        //alert('PDV::listaTabelaPrecoFocus()');
        var control = this;
        setTimeout(function () {
            control.listaTabelaPreco.getView().focusRow(0);
            var row = control.listaTabelaPreco.getStore().getAt(0);
            if (row) {
                control.listaTabelaPreco.getSelectionModel().select(row);
            }
        }, 300);
    },
    //
    //
    //
    //
    //
    //
    listaItensCanceladosToggle: function (callback) {
        //alert('PDV::listaItensCanceladosToggle()', callback);
        var control = this;
        if (control.listaItensCancelados.isHidden()) {
            control.listaItensCancelados.show();
        } else {
            control.listaItensCancelados.hide(null, setTimeout(callback, 250));
        }
    },
    //
    //
    //
    listaItensPagamentoFocus: function () {
        //alert('PDV::listaItensPagamentoFocus()');
        var control = this;
        setTimeout(function () {
            var store = control.listaItensPagamento.getStore();
            var idx = store.getCount() - 1;
            control.listaItensPagamento.getView().focusRow(idx);
            var row = store.getAt(idx);
            if (row) {
                control.listaItensPagamento.getSelectionModel().select(row);
            }
            if (store.getCount() === 0) {
                control.permitirTroco = true;
            }
        }, 300);
    },
    listaItensPagamentoAdicionar: function (valor, formaPagamento, prazo, condicao) {
        //alert('PDV::listaItensPagamentoAdicionar()', valor, formaPagamento, prazo, condicao);
        var control = this;
        if (formaPagamento.length > 0) {
            control.itemPagamentoUltimoInserido = control.itemPagamentoUltimoInserido + 1;
            var store = control.listaItensPagamento.getStore();
            var troca = (prazo.troca !== undefined ? prazo.troca : false);
            store.add({
                id: control.itemPagamentoUltimoInserido,
                prazo: prazo.get('id'),
                condicao: (condicao ? condicao.get('id') : false),
                codigo: formaPagamento,
                descricao: prazo.get('descricao') + (condicao ? ' ' + condicao.get('descricao') : '') + (troca ? " (" + troca + ")" : ""),
                valor: valor,
                troca: troca
            });
            control.listaItensPagamentoFocus();
        }
    },
    listaItensPagamentoRemover: function () {
        //alert('PDV::listaItensPagamentoRemover()');
        var control = this;
        if (control.itemPagamentoSelecionado) {
            var record = control.listaItensPagamento.getSelectionModel().getStore().getById(control.itemPagamentoSelecionado);
            if (record) {
                control.listaItensPagamento.getStore().remove(record);
            }
            control.listaItensPagamentoFocus();
        }
    },
    //
    //
    //
    listaItensVendaFocus: function () {
        //alert('PDV::listaItensVendaFocus()');
        var control = this;
        var grid = control.listaItensVenda;
        var total = grid.getStore().getCount();
        control.itemVendaSelecionado = false;
        control.campoProdutoCodigo.setDisabled(false);
        control.campoProdutoCodigo.setValue('');
        grid.getView().focusRow(total - 1);
        grid.getSelectionModel().clearSelections();
        if (control.campoCancelarItem) {
            control.campoCancelarItem.setDisabled(false);
            control.campoCancelarItem.setValue('');
        }
    },
    listaItensVendaAdicionar: function (codigo, quantidade, record) {
        //alert('PDV::listaItensVendaAdicionar()', codigo, quantidade, record);
        var control = this;
        control.campoProdutoCodigo.setDisabled(true);
        if (codigo.length > 0) {
            if (quantidade === undefined) {
                var n = control.getQuantidadeProduto(codigo);
                quantidade = n.quantidade;
                codigo = n.codigo;
            }
            var doAdicionarLista = function (codigo, quantidade, record) {
                try {
                    control.itemUltimoInserido = control.itemUltimoInserido + 1;
                    var store = control.listaItensVenda.getStore();
                    var valor_venda = record.get('pv.valor');
                    var valor_custo = record.get('pc.valor');
                    var valor_total = quantidade * valor_venda;
                    var gradex = record.get('gradex');
                    var gradey = record.get('gradey');
                    var descricao = record.get('p.descricao') + (gradex ? ' ' + gradex : '') + (gradey ? ' ' + gradey : '');
                    var sucesso = function (response) {
                        store.add({
                            id: control.itemUltimoInserido,
                            id_produto_grade: record.get('id'),
                            codigo: codigo,
                            descricao: descricao,
                            unidade: record.get('u.nome'),
                            quantidade: quantidade,
                            valor_venda: valor_venda,
                            valor_custo: valor_custo,
                            valor_total: valor_total,
                            situacao: 'ATIVO'
                        });
                        control.listaItensVendaFocus();
                    };
                    var falha = function (response) {
                        control.listaItensVendaFocus();
                    };
                    var ecf = control.verificaECF();
                    if (ecf) {
                        if (ecf.concomitante) {
                            control.doAdicionarItemCupom(codigo, descricao, record.get('u.nome'), quantidade, valor_venda, false, sucesso, falha);
                        } else {
                            sucesso();
                        }
                    } else {
                        sucesso();
                    }
                } catch (err) {
                    control.campoProdutoCodigo.setDisabled(false);
                    console.error(err);
                }
            };
            if (record !== undefined) {
                doAdicionarLista(codigo, quantidade, record);
            } else {
                control.storeProdutos.getProxy().extraParams = {
                    codigo: codigo,
                    tabela_venda: (control.tabelaSelecionada ? control.tabelaSelecionada.id : ""),
                    pdv: true
                };
                control.storeProdutos.load({
                    callback: function (records, options, success) {
                        if (records) {
                            if (records.length > 1) {
                                control.janelaProdutoSelecaoExibir(codigo, quantidade, control.storeProdutos, doAdicionarLista);
                            } else {
                                var record = records[0];
                                if (record) {
                                    doAdicionarLista(codigo, quantidade, record);
                                } else {
                                    control.MSG('Produto não encontrado!', function () {
                                        control.listaItensVendaFocus();
                                    });
                                }
                            }
                        } else {
                            control.listaItensVendaFocus();
                        }
                    }
                });
            }
        } else {
            control.MSG('Produto não encontrado!', function () {
                control.listaItensVendaFocus();
            });
        }
    },
    listaItensVendaRemover: function () {
        //alert('PDV::listaItensVendaRemover()');
        var control = this;
        if (control.itemVendaSelecionado) {
            var record = control.listaItensVenda.getSelectionModel().getStore().getById(control.itemVendaSelecionado);
            if (record) {
                if (record.get('situacao') !== 'DESATIVO') {
                    var doSucessoAutenticador = function () {
                        var sucesso = function (response) {
                            control.listaItensCancelados.getStore().add(record);
                            record.set('situacao', 'DESATIVO');
                            record.set('valor_desconto_acrescimo', 0);
                            record.commit();
                            var desconto = control.listaItensVenda.getSelectionModel().getStore().getById("D" + (control.itemVendaSelecionado));
                            if (desconto) {
                                desconto.set('situacao', 'DESATIVO');
                                desconto.commit();
                            }
                            var acrescimo = control.listaItensVenda.getSelectionModel().getStore().getById("A" + (control.itemVendaSelecionado));
                            if (acrescimo) {
                                acrescimo.set('situacao', 'DESATIVO');
                                acrescimo.commit();
                            }
                            control.listaItensVendaFocus();
                            control.janelaCancelarItemOcultar();
                        };
                        var falha = function (response) {
                            control.listaItensVendaFocus();
                            control.janelaCancelarItemOcultar();
                        };
                        var pdvImpressoraECF = control.verificaECF();
                        if (pdvImpressoraECF && pdvImpressoraECF.concomitante === true) { // impressora configurada
                            control.doCancelarItemCupom(control.itemVendaSelecionado, sucesso, falha);
                        } else {
                            sucesso();
                        }
                    };
                    var cenario = control.cenarioAtivo;
                    control.janelaAutenticadorExibir('cancelamento-item', doSucessoAutenticador, "Autorizou cancelamento do item na venda em andamento.\Item ID: " + control.itemVendaSelecionado + "\nConta ID: " + control.ultimaSessao.contaCaixa, false, cenario);
                } else {
                    control.MSG('Item já cancelado!', function () {
                        control.listaItensVendaFocus();
                    });
                }
            } else {
                control.MSG('Item não encontrado ou não selecionado!', function () {
                    control.listaItensVendaFocus();
                });
            }
        }
    },
    /*
     * Setar foco na lista e selecionando registro
     */
    setFocusLista: function (grid, indice) {
        //alert("Illi.controller.paf.Ecf::setFocusLista()");
        try {
            var control = this;
            indice = (indice !== undefined ? indice : 0);
            setTimeout(function () {
                grid.getView().focusRow(0);
                var row = grid.getStore().getAt(0);
                if (row) {
                    grid.getSelectionModel().select(row);
                }
            }, 300);
        } catch (e) {
            error(e);
        }
    },
    listaClienteSelecaoFocus: function () {
        //alert('PDV::listaClienteSelecaoFocus()');
        var control = this;
        control.setFocusLista(control.listaClienteSelecao, 0);
    },
    listaVendedorSelecaoFocus: function () {
        //alert('PDV::listaVendedorSelecaoFocus()');
        var control = this;
        control.setFocusLista(control.listaVendedorSelecao, 0);
    },
    listaFechamentoCaixaFocus: function () {
        //alert('PDV::listaFechamentoCaixaFocus()');
        var control = this;
        control.setFocusLista(control.listaFechamentoCaixa, 0);
    },
    listaPagamentoCondicaoFocus: function () {
        //alert('PDV::listaPagamentoCondicaoFocus()');
        var control = this;
        control.setFocusLista(control.listaPagamentoCondicao, 0);
    },
    listaPagamentoFormaFocus: function () {
        //alert('PDV::listaPagamentoFormaFocus()');
        var control = this;
        control.setFocusLista(control.listaPagamentoForma, 0);
    },
    listaProdutoSelecaoFocus: function () {
        //alert('PDV::listaProdutoSelecaoFocus()');
        var control = this;
        control.setFocusLista(control.listaProdutoSelecao, 0);
    },
    listaCancelamentoVendaFocus: function () {
        //alert('PDV::listaCancelamentoVendaFocus()');
        var control = this;
        control.setFocusLista(control.listaCancelamentoVenda, 0);
    },
    listaImpressaoFocus: function () {
        //alert('PDV::listaImpressaoFocus()');
        var control = this;
        control.setFocusLista(control.listaImpressao, 0);
    },
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    onAfterRender: function (me) {
        //alert('PDV::onAfterRender()', me);
        var control = this;
        control[me.getXType()] = me;
    },
    onKeyUp: function (me, e) {
        //alert('PDV::onKeyUp()', me, e);
        var control = this;
        switch (me.getXType()) {
            case 'campoDescontoPorcentagem':
                var valor_venda = control.janelaDescontoPorcentagem.valor;
                var valor_campo = me.getValue();
                var valor = (valor_campo > 0 ? valor_campo * valor_venda : 0);
                control.janelaDescontoPorcentagem.down('#pdvDescontoPorcentagemValor').update(Illi.app.Util.valorRenderer(valor, 2));
                break;
        }
    },
    onClick: function (me, e) {
        //alert('PDV::opcaoClick()', me, e);
        var control = this;
        if (me.action) {
            //alert(me.action);
            switch (me.action) {
                case 'processar-fechamento':
                    return control.doConferirCaixa(false);
                    break;
                case 'reducaoz':
                    return control.doReducaoZ();
                    break;
                case 'processar-fechamento-forcado':
                    return control.doConferirCaixa(true);
                    break;
                case 'imprimir-fechamento':
                    return control.janelaFechamentoCaixaImprimir();
                    break;
                case 'sangria-confirmar':
                    return control.janelaSangriaConfirmar();
                    break;
                case 'sangria-cancelar':
                    return control.janelaSangriaOcultar();
                    break;
                case 'configuracao-ecf-confirmar':
                    return control.janelaConfiguracaoECFConfirmar();
                    break;
                case 'configuracao-ecf-leiturax':
                    return control.janelaConfiguracaoECFEmitirLeituraX();
                    break;
                case 'ecf-preconfigurar':
                    return control.janelaConfiguracaoECFPreConfigurar();
                    break;
                case 'configuracao-ecf-cancelar':
                    return control.janelaConfiguracaoECFOcultar();
                    break;
                case 'configuracao-impressao-confirmar':
                    return control.janelaConfiguracaoImpressaoConfirmar();
                    break;
                case 'configuracao-impressao-testar':
                    return control.janelaConfiguracaoImpressaoTestarImpressao();
                    break;
                case 'configuracao-impressao-cancelar':
                    return control.janelaConfiguracaoImpressaoOcultar();
                    break;
                case 'teclas-atalho-fechar':
                    return control.janelaTeclasAtalhoOcultar();
                    break;
                case 'teclado-fechar':
                    return control.janelaTecladoOcultar();
                    break;
                case 'teclado-abrir':
                    return control.janelaTecladoExibir();
                    break;
                case 'suprimento-confirmar':
                    return control.janelaSuprimentoConfirmar();
                    break;
                case 'suprimento-cancelar':
                    return control.janelaSuprimentoOcultar();
                    break;
                case 'devolucao-adicionar':
                    return control.janelaDevolucaoEditar(true);
                    break;
                case 'devolucao-atualizar':
                    return control.janelaDevolucaoAtualizar();
                    break;
                case 'devolucao-cancelar':
                    return control.janelaDevolucaoCancelar();
                    break;
                case 'devolucao-imprimir':
                    return control.janelaDevolucaoImprimir(false, false, false);
                    break;
                case 'devolucao-fechar':
                    return control.janelaDevolucaoOcultar();
                    break;
                case 'devolucao-edicao-salvar':
                    return control.janelaDevolucaoEdicaoConfirmar(false);
                    break;
                case 'devolucao-edicao-imprimir':
                    return control.janelaDevolucaoEdicaoConfirmar(true);
                    break;
                case 'devolucao-edicao-cancelar':
                    return control.janelaDevolucaoEdicaoOcultar();
                    break;
                case 'devolucao-edicao-atualizar':
                    return control.janelaDevolucaoEdicaoAtualizar();
                    break;
                case 'devolucao-edicao-adicionar':
                    return control.janelaDevolucaoEdicaoEditar(true);
                    break;
            }
        }
    },
    onShow: function (me) {
        //alert('PDV::onShow()', me);
        var control = this;
        switch (me.getXType()) {
            case 'janelaVendaRapida':
                control.setMapaTeclado();
//                control.janelaTecladoExibir();
                control.doAbrirCaixa();
                break;
        }
    },
    onSelect: function (me, record, index) {
        //alert('PDV::onSelect()', me, record, index);
        var control = this;
        var xtype = me.view.ownerCt.xtype;
        if (xtype) {
            switch (xtype) {
                case 'listaClienteSelecao':
                    control.itemClienteSelecionado = record;
                    break;
                case 'listaVendedorSelecao':
                    control.itemVendedorSelecionado = record;
                    break;
                case 'listaTabelaPreco':
                    control.itemTabelaPreco = record;
                    break;
                case 'listaItensVenda':
                    control.itemVendaSelecionado = record.get('id');
                    break;
                case 'listaItensPagamento':
                    control.itemPagamentoSelecionado = record.get('id');
                    break;
                case 'listaImpressao':
                    control.itemImpressaoSelecionado = record;
                    break;
                case 'listaCancelamentoVenda':
                    control.itemCancelamentoVendaSelecionado = record;
                    break;
                case 'listaPagamentoCondicao':
                    control.itemPagamentoCondicaoSelecionado = record;
                    break;
                case 'listaPagamentoForma':
                    control.itemPagamentoFormaSelecionado = record;
                    break;
                case 'listaFechamentoCaixa':
                    control.itemFechamentoCaixaSelecionado = record;
                    break;
                case 'listaProdutoPesquisa':
                    control.itemProdutoPesquisaSelecionado = record;
                    break;
                case 'listaProdutoSelecao':
                    control.itemProdutoSelecionado = record;
                    break;
                case 'listaDevolucao':
                    control.itemDevolucaoSelecionado = record;
                    break;
            }
        }
    },
    onCellKeyDown: function (me, td, cellIndex, record, tr, rowIndex, e) {
        //alert('PDV::onCellKeyDown()', me, td, cellIndex, record, tr, rowIndex, e);
        var control = this;
        var cenario = control.cenarioAtivo;
        if (e.getKey() === e.ENTER) {
            switch (cenario) {
                case 'pagamento-condicao':
                    control.janelaPagamentoCondicaoConfirmar();
                    break;
                case 'pagamento-forma':
                    control.janelaPagamentoFormaConfirmar();
                    break;
                case 'impressao':
                    control.janelaImpressaoConfirmar(e.shiftKey);
                    break;
                case 'cancelamento-venda':
                    control.janelaCancelamentoVendaConfirmar();
                    break;
                case 'produto-pesquisa':
                    control.janelaProdutoPesquisaConfirmar();
                    break;
                case 'produto-selecao':
                    control.janelaProdutoSelecaoConfirmar();
                    break;
                case 'cliente-selecao':
                    control.janelaClienteSelecaoConfirmar();
                    break;
                case 'vendedor-selecao':
                    control.janelaVendedorSelecaoConfirmar();
                    break;
                case 'tabela-preco':
                    control.janelaTabelaPrecoVendaConfirmar();
                    break;
            }
        }
    },
    onItemDblClick: function (me, record, item, index, e) {
        //alert('PDV::onItemDblClick()', me, record, item, index, e);
        var control = this;
        var cenario = control.cenarioAtivo;
        switch (cenario) {
            case 'devolucao':
                control.janelaDevolucaoEditar(false);
                break;
        }
    },
    onFocus: function (me, e) {
        alert('PDV::onFocus()', me, e);
        var control = this;
        
    },
    setMapaTeclado: function () {
        //alert('PDV::setMapaTeclado()');
        var control = this;
        Ext.EventManager.on(window, 'keydown', function (e, t) {
            var stopEvent = true;
            var cenario = control.cenarioAtivo;
            console.log('Ext.EventManager.on', cenario, e.getKey(), (e.altKey ? "alt" : false), (e.ctrlKey ? "ctrl" : false), (e.shiftKey ? "shift" : false));
            if (e.ctrlKey && e.shiftKey && e.getKey() === e.R) {
                closepage = true;
                window.location.reload(true);
            } else {
                if (e.ctrlKey && e.shiftKey && e.getKey() === e.C) {
                    control.setCache();
                } else {
                    if (e.ctrlKey && e.getKey() === e.K) {
                        control.janelaTecladoExibir();
                    } else {
                        if (e.ctrlKey && e.getKey() === e.H) {
                            control.janelaTeclasAtalhoExibir();
                        } else {
                            switch (e.getKey()) {
                                case e.F1:
                                    switch (cenario) {
                                        case 'venda':
                                            control.janelaProdutoPesquisaExibir();
                                            break;
                                    }
                                    break;
                                case e.F2:
                                    switch (cenario) {
                                        case 'venda':
                                        case 'pagamento':
                                            control.janelaPagamentoFormaExibir('dinheiro', control.cenarioAtivo);
                                            break;
                                    }
                                    break;
                                case e.F3:
                                    switch (cenario) {
                                        case 'venda':
                                            if (control.getVendaIniciada(true)) {
                                                control.janelaPagamentoFormaExibir('cheque', control.cenarioAtivo);
                                            } else {
                                                control.janelaSangriaExibir();
                                            }
                                            break;
                                        case 'pagamento':
                                            control.janelaPagamentoFormaExibir('cheque', control.cenarioAtivo);
                                            break;
                                    }
                                    break;
                                case e.F4:
                                    switch (cenario) {
                                        case 'venda':
                                            if (control.getVendaIniciada(true)) {
                                                control.janelaPagamentoFormaExibir('cartao', control.cenarioAtivo);
                                            } else {
                                                control.janelaSuprimentoExibir();
                                            }
                                            break;
                                        case 'pagamento':
                                            control.janelaPagamentoFormaExibir('cartao', control.cenarioAtivo);
                                            break;
                                    }
                                    break;
                                case e.F5:
                                    switch (cenario) {
                                        case 'venda':
                                        case 'pagamento':
                                            control.janelaPagamentoFormaExibir('ticket', control.cenarioAtivo);
                                            break;
                                    }
                                    break;
                                case e.F6:
                                    switch (cenario) {
                                        case 'venda':
                                        case 'pagamento':
                                            control.janelaPagamentoFormaExibir('boleto', control.cenarioAtivo);
                                            break;
                                    }
                                    break;
                                case e.F7:
                                    switch (cenario) {
                                        case 'venda':
                                        case 'pagamento':
                                            control.janelaPagamentoFormaExibir('vale', control.cenarioAtivo);
                                            break;
                                    }
                                    break;
                                case e.F8:
                                    switch (cenario) {
                                        case 'venda':
                                        case 'pagamento':
                                            if (e.ctrlKey && cenario === 'venda') {
                                                control.janelaDevolucaoEdicaoExibir(false, true);
                                            } else {
                                                control.janelaPagamentoFormaExibir('troca', control.cenarioAtivo);
                                            }
                                            break;
                                    }
                                    break;
                                case e.F9:
                                    switch (cenario) {
                                        case 'venda':
                                            control.janelaVendaRapidaFechar();
                                            break;
                                    }
                                    break;
                                case e.F10:
                                    switch (cenario) {
                                        case 'pagamento':
                                            control.janelaPagamentoConfirmar(e.shiftKey);
                                            break;
                                    }
                                    break;
                                case e.F11:
                                    switch (cenario) {
                                        case 'venda':
                                        case 'abertura':
                                            if (e.shiftKey) {
                                                control.janelaConfiguracaoImpressaoExibir();
                                            } else {
                                                control.janelaConfiguracaoECFExibir();
                                            }
                                            break;
                                    }
                                    break;
                                case e.F12:
                                    switch (cenario) {
                                        case 'venda':
                                            if (e.ctrlKey) {
                                                control.janelaCancelamentoVendaExibir();
                                            } else {
                                                control.doCancelarVenda(function () {
                                                    control.doIniciarVenda();
                                                });
                                            }
                                            break;
                                    }
                                    break;
                                case e.DELETE:
                                    switch (cenario) {
                                        case 'venda':
                                            if (e.ctrlKey) {
                                                control.listaItensCanceladosToggle();
                                            } else {
                                                if (control.itemVendaSelecionado) {
                                                    control.listaItensVendaRemover();
                                                } else {
                                                    control.janelaCancelarItemExibir();
                                                }
                                            }
                                            break;
                                        case 'pagamento':
                                            control.listaItensPagamentoRemover();
                                            break;
                                        case 'pagamento-troca':
                                            control.janelaPagamentoTrocaLimpar();
                                            break;
                                        case 'pagamento-valor':
                                            control.janelaPagamentoValorLimpar();
                                            break;
                                        case 'desconto':
                                            control.janelaDescontoLimpar();
                                            break;
                                        case 'desconto-porcentagem':
                                            control.janelaDescontoPorcentagemLimpar();
                                            break;
                                        case 'autenticador':
                                            control.janelaAutenticadorLimpar();
                                            break;
                                        case 'conta-caixa':
                                            control.janelaContaCaixaLimpar();
                                            break;
                                        case 'cliente':
                                            control.janelaClienteLimpar();
                                            break;
                                        case 'vendedor':
                                            control.janelaVendedorLimpar();
                                            break;
                                        case 'documento':
                                            control.janelaDocumentoLimpar();
                                            break;
                                    }
                                    break;
                                case e.ESC:
                                    switch (cenario) {
                                        case 'fechamento':
                                            control.janelaFechamentoCaixaOcultar();
                                            break;
                                        case 'pagamento':
                                            control.janelaPagamentoOcultar();
                                            break;
                                        case 'pagamento-troca':
                                            control.janelaPagamentoTrocaOcultar();
                                            break;
                                        case 'pagamento-valor':
                                            control.janelaPagamentoValorOcultar();
                                            break;
                                        case 'pagamento-condicao':
                                            control.janelaPagamentoCondicaoOcultar(false, false);
                                            break;
                                        case 'pagamento-forma':
                                            control.janelaPagamentoFormaOcultar(false, false);
                                            break;
                                        case 'impressao':
                                            control.janelaImpressaoOcultar();
                                            break;
                                        case 'cancelamento-venda':
                                            control.janelaCancelamentoVendaOcultar();
                                            break;
                                        case 'desconto':
                                            control.janelaDescontoOcultar();
                                            break;
                                        case 'desconto-porcentagem':
                                            control.janelaDescontoPorcentagemOcultar();
                                            break;
                                        case 'autenticador':
                                            control.janelaAutenticadorOcultar(false, false, true);
                                            break;
                                        case 'produto-pesquisa':
                                            control.campoProdutoCodigo.setValue('');
                                            control.janelaProdutoPesquisaOcultar(function () {
                                                control.listaItensVendaFocus();
                                            });
                                            break;
                                        case 'produto-selecao':
                                            control.campoProdutoCodigo.setValue('');
                                            control.janelaProdutoSelecaoOcultar(function () {
                                                control.listaItensVendaFocus();
                                            });
                                            break;
                                        case 'cliente-selecao':
                                            control.janelaClienteSelecaoOcultar();
                                            break;
                                        case 'vendedor-selecao':
                                            control.janelaVendedorSelecaoOcultar();
                                            break;
                                        case 'tabela-preco':
                                            control.janelaTabelaPrecoVendaOcultar();
                                            break;
                                        case 'sangria':
                                            control.janelaSangriaOcultar();
                                            break;
                                        case 'configuracao-ecf':
                                            control.janelaConfiguracaoECFOcultar();
                                            break;
                                        case 'configuracao-impressao':
                                            control.janelaConfiguracaoImpressaoOcultar();
                                            break;
                                        case 'teclas-atalho':
                                            control.janelaTeclasAtalhoOcultar();
                                            break;
                                        case 'suprimento':
                                            control.janelaSuprimentoOcultar();
                                            break;
                                        case 'devolucao':
                                            control.janelaDevolucaoOcultar();
                                            break;
                                        case 'devolucao-edicao':
                                            control.janelaDevolucaoEdicaoOcultar();
                                            break;
                                        case 'cliente-cadastro':
                                            control.down("#janelaCadastroCliente").destroy();
                                            break;
                                        case 'troco':
                                            control.janelaTrocoOcultar();
                                            break;
                                        case 'cancela-item':
                                            control.janelaCancelarItemOcultar();
                                            break;
                                        case 'cliente':
                                            control.janelaClienteOcultar();
                                            break;
                                        case 'vendedor':
                                            control.janelaVendedorOcultar();
                                            break;
                                        case 'documento':
                                            control.janelaDocumentoOcultar();
                                            break;
                                    }
                                    break;
                                case e.ENTER:
                                    if (/(x-message-box|x-btn-button)/gi.test(t.className)) { // x-message-box
                                        stopEvent = false;
                                    } else {
                                        switch (cenario) {
                                            case 'pagamento-troca':
                                                control.janelaPagamentoTrocaConfirmar();
                                                break;
                                            case 'pagamento-valor':
                                                control.janelaPagamentoValorConfirmar();
                                                break;
                                            case 'pagamento-condicao':
                                                control.janelaPagamentoCondicaoConfirmar();
                                                break;
                                            case 'pagamento-forma':
                                                control.janelaPagamentoFormaConfirmar();
                                                break;
                                            case 'impressao':
                                                control.janelaImpressaoConfirmar(e.shiftKey);
                                                break;
                                            case 'cancelamento-venda':
                                                control.janelaCancelamentoVendaConfirmar();
                                                break;
                                            case 'desconto':
                                                control.janelaDescontoConfirmar();
                                                break;
                                            case 'desconto-porcentagem':
                                                control.janelaDescontoPorcentagemConfirmar();
                                                break;
                                            case 'autenticador':
                                                control.janelaAutenticadorConfirmar(false);
                                                break;
                                            case 'conta-caixa':
                                                control.janelaContaCaixaConfirmar();
                                                break;
                                            case 'cliente':
                                                control.janelaClienteConfirmar();
                                                break;
                                            case 'vendedor':
                                                control.janelaVendedorConfirmar();
                                                break;
                                            case 'documento':
                                                control.janelaDocumentoConfirmar();
                                                break;
                                            case 'tabela-preco':
                                                control.janelaTabelaPrecoVendaConfirmar();
                                                break;
                                            case 'sangria':
                                                control.janelaSangriaConfirmar();
                                                break;
                                            case 'configuracao-ecf':
                                                control.janelaConfiguracaoECFConfirmar();
                                                break;
                                            case 'configuracao-impressao':
                                                control.janelaConfiguracaoImpressaoConfirmar();
                                                break;
                                            case 'suprimento':
                                                control.janelaSuprimentoConfirmar();
                                                break;
                                            case 'troco':
                                                control.janelaTrocoOcultar();
                                                break;
                                            case 'cancela-item':
                                                control.janelaCancelarItemConfirmar();
                                                break;
                                            case 'venda':
                                                control.setProduto();
                                                break;
                                            case 'produto-pesquisa':
                                                control.janelaProdutoPesquisaConfirmar();
                                                break;
                                            case 'produto-selecao':
                                                control.janelaProdutoSelecaoConfirmar();
                                                break;
                                            case 'cliente-selecao':
                                                control.janelaClienteSelecaoConfirmar();
                                                break;
                                            case 'vendedor-selecao':
                                                control.janelaVendedorSelecaoConfirmar();
                                                break;
                                        }
                                    }
                                    break;
                                case e.TAB:
                                    switch (cenario) {
                                        case 'sangria':
                                        case 'suprimento':
                                        case 'configuracao-ecf':
                                        case 'configuracao-impressao':
                                        case 'cliente-cadastro':
                                        case 'devolucao-edicao':
                                            stopEvent = false;
                                            break;
                                    }
                                    break;
                                default:
                                    var isBackspace = false;
                                    if (e.getKey() === e.BACKSPACE) {
                                        isBackspace = true;
                                    }
                                    var isCharEnabled = false;
                                    switch (e.getKey()) {
                                        case e.END:
                                        case e.HOME:
                                        case e.LEFT :
                                        case e.UP:
                                        case e.RIGHT:
                                        case e.DOWN:
                                        case e.SPACE:
                                        case e.NUM_ZERO:
                                        case 186:
                                        case 188:
                                        case 190:
                                        case 191:
                                        case 194:
                                            isCharEnabled = true;
                                            break;
                                    }
                                    console.log("1", e.getKey());
                                    if (/\w+$/gi.test(String.fromCharCode(e.getKey())) || isBackspace || isCharEnabled) {
                                        switch (cenario) {
                                            case 'venda':
                                                if (e.ctrlKey) {
                                                    switch (e.getKey()) {
                                                        case e.C:
                                                            control.janelaClienteExibir();
                                                            break;
                                                        case e.V:
                                                            control.janelaVendedorExibir();
                                                            break;
                                                        case e.N:
                                                            control.janelaDocumentoExibir();
                                                            break;
                                                        case e.T:
                                                            control.janelaTabelaPrecoVendaExibir();
                                                            break;
                                                        case e.D:
                                                            if (control.getVendaIniciada(true)) {
                                                                if (e.shiftKey) {
                                                                    control.janelaDescontoPorcentagemExibir("desconto_item");
                                                                } else {
                                                                    control.janelaDescontoPorcentagemExibir("desconto_venda");
                                                                }
//                                                            control.janelaDescontoPorcentagemExibir();
                                                            } else {
                                                                control.janelaDevolucaoExibir();
                                                            }
                                                            break;
                                                        case e.A:
                                                            if (e.shiftKey) {
                                                                control.janelaDescontoPorcentagemExibir("acrescimo_item");
                                                            } else {
                                                                control.janelaDescontoPorcentagemExibir("acrescimo_venda");
                                                            }
                                                            break;
                                                        case e.M:
                                                            control.janelaVendaRapidaMinimizar();
                                                            break;
                                                        case e.I:
                                                            control.janelaImpressaoExibir();
                                                            break;
                                                    }
                                                } else {
                                                    console.log("1", e.getKey());
                                                    control.campoProdutoCodigo.focus();
                                                    stopEvent = false;
                                                }
                                                break;
                                            case 'pagamento-troca':
                                                if (!e.ctrlKey) {
                                                    control.campoPagamentoTroca.focus();
                                                    stopEvent = false;
                                                }
                                                break;
                                            case 'pagamento-valor':
                                                if (!e.ctrlKey) {
                                                    control.campoPagamentoValor.focus();
                                                    stopEvent = false;
                                                }
                                                break;
                                            case 'desconto':
                                                if (!e.ctrlKey) {
                                                    control.campoDesconto.focus();
                                                    stopEvent = false;
                                                }
                                                break;
                                            case 'desconto-porcentagem':
                                                if (!e.ctrlKey) {
                                                    control.campoDescontoPorcentagem.focus();
                                                    stopEvent = false;
                                                }
                                                break;
                                            case 'autenticador':
                                                if (!e.ctrlKey) {
                                                    control.campoAutenticador.focus();
                                                    stopEvent = false;
                                                }
                                                break;
                                            case 'conta-caixa':
                                                if (!e.ctrlKey) {
                                                    control.campoContaCaixa.focus();
                                                    stopEvent = false;
                                                }
                                                break;
                                            case 'cliente':
                                                if (!e.ctrlKey) {
                                                    control.campoCliente.focus();
                                                    stopEvent = false;
                                                }
                                                break;
                                            case 'vendedor':
                                                if (!e.ctrlKey) {
                                                    control.campoVendedor.focus();
                                                    stopEvent = false;
                                                }
                                                break;
                                            case 'documento':
                                                if (!e.ctrlKey) {
                                                    control.campoDocumento.focus();
                                                    stopEvent = false;
                                                }
                                                break;
                                            case 'cancela-item':
                                                if (!e.ctrlKey) {
                                                    control.campoCancelarItem.focus();
                                                    stopEvent = false;
                                                }
                                                break;
                                            case 'sangria':
                                            case 'suprimento':
                                            case 'fechamento':
                                            case 'configuracao-ecf':
                                            case 'configuracao-impressao':
                                            case 'devolucao-edicao':
                                            case 'cliente-cadastro':
                                                stopEvent = false;
                                                break;
                                            default:
                                                if (isBackspace) {
                                                    if (!((!/^input$/i.test(t.tagName) || t.disabled || t.readOnly) && (!/^textArea$/i.test(t.tagName) || t.disabled || t.readOnly))) {
                                                        isBackspace = true;
                                                    }
                                                }
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                }
            }
            if (stopEvent) {
                e.stopEvent();
            }
        });
    }
});
