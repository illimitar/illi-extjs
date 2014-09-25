Ext.define('Illi.view.configuracao.Form', {
    extend: 'Illi.view.AbstractForm',
    requires: [
        'Ext.ux.TextMaskPlugin',
        'Illi.view.usuario.grupo_usuario.Combo',
        'Illi.view.usuario.Combo',
        'Illi.view.natureza.Combo',
        'Illi.view.produto.preco.Combo',
        'Illi.view.pessoa.Combo',
        'Illi.view.estoque.local.Combo',
        'Illi.view.produto.grade.grupo_grade.Combo',
        'Illi.view.financeiro.tipo_titulo.Combo',
        'Illi.view.relatorio.Combo',
        'Illi.view.financeiro.prazo.Combo',
        'Illi.view.configuracao.operacao.Combo'
    ],
    alias: 'widget.formConfiguracao',
    itemId: 'formConfiguracao',
    title: false,
    combineErrors: false,
    msgTarget: 'side',
    defaultType: 'textfield',
    autoHeight: true,
    bodyPadding: 10,
    items: [
        {
            xtype: 'fieldset',
            title: 'Relatórios',
            defaults: {
                anchor: '100%',
                typeAhead: false,
                autoHeight: true,
                allowBlank: true,
                plugins: ['clearbutton'],
                layout: {
                    type: 'hbox',
                    anchor: '60%',
                    bodyPadding: 10,
                    defaultMargins: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                        left: 0
                    }
                }
            },
            items: [
                {
                    fieldLabel: 'Servidor',
                    xtype: 'textfield',
                    name: 'illi_relatorio_servidor'
                },
                {
                    fieldLabel: 'Usuário',
                    xtype: 'textfield',
                    name: 'illi_relatorio_usuario'
                },
                {
                    fieldLabel: 'Senha',
                    xtype: 'textfield',
                    inputType: 'password',
                    name: 'illi_relatorio_senha'
                }

            ]
        },
        {
            xtype: 'fieldset',
            title: 'Boleto',
            defaults: {
                anchor: '100%',
                typeAhead: false,
                autoHeight: true,
                allowBlank: true,
                plugins: ['clearbutton'],
                layout: {
                    type: 'hbox',
                    anchor: '60%',
                    bodyPadding: 10,
                    defaultMargins: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                        left: 0
                    }
                }
            },
            items: [
                {
                    fieldLabel: 'Valida Remessa',
                    xtype: 'combobox',
                    forceSelection: true,
                    store: [
                        ['0', 'NÃO'],
                        [1, 'SIM']
                    ],
                    name: 'valida_remessa',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Valida Remessa',
                            html: '<p>Permitir alterar boleto depois que gerar a remessa para o banco.</p>'
                        }).show();
                    }
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Email',
            defaults: {
                anchor: '100%',
                typeAhead: false,
                autoHeight: true,
                allowBlank: true,
                plugins: ['clearbutton'],
                layout: {
                    type: 'hbox',
                    anchor: '60%',
                    bodyPadding: 10,
                    defaultMargins: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                        left: 0
                    }
                }
            },
            items: [
                {
                    fieldLabel: 'Email',
                    xtype: 'textfield',
                    name: 'illi_email_usuario'
                },
                {
                    fieldLabel: 'Senha',
                    xtype: 'textfield',
                    inputType: 'password',
                    name: 'illi_email_senha'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Produto',
            defaults: {
                anchor: '100%',
                typeAhead: false,
                autoHeight: true,
                allowBlank: true,
                plugins: ['clearbutton'],
                layout: {
                    type: 'hbox',
                    anchor: '60%',
                    bodyPadding: 10,
                    defaultMargins: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                        left: 0
                    }
                }
            },
            items: [
                {
                    fieldLabel: 'Grupo Grade Padrão Horizontal',
                    xtype: 'comboGrupoGrade',
                    forceSelection: true,
                    name: 'produto_grupox_padrao',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Grade Padrão',
                            html: '<p>Grade padrão para ser usada no cadastro de Produto.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Grupo Grade Padrão Vertical',
                    xtype: 'comboGrupoGrade',
                    name: 'produto_grupoy_padrao',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Grade Padrão',
                            html: '<p>Grade padrão para ser usada no cadastro de Produto.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Preço Venda Padrão',
                    xtype: 'comboPreco',
                    forceSelection: true,
                    tipo: 'VENDA',
                    store: Ext.create('Illi.store.produto.Precos', {storeId: "comboVendaPrecos"}),
                    name: 'produto_venda_padrao',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Preço Padrão',
                            html: '<p>Preço padrão para ser usada no cadastro de Produto.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Preço Custo Padrão',
                    xtype: 'comboPreco',
                    tipo: 'CUSTO',
                    store: Ext.create('Illi.store.produto.Precos', {storeId: "comboCustoPrecos"}),
                    forceSelection: true,
                    name: 'produto_custo_padrao',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Preço Padrão',
                            html: '<p>Preço padrão para ser usada no cadastro de Produto.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Preço Único',
                    xtype: 'combobox',
                    forceSelection: true,
                    store: [
                        'EMPRESA',
                        'GRADE',
                        'EMPRESA|GRADE'
                    ],
                    name: 'preco_unico',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Preço Único',
                            html: '<p>EMPRESA : Altera o preço para todas as Empresas.</p><br/> GRADE: Altera o preço para toda a Grade.</br> EMPRESA|GRADE : Altera o preço para a grade e a empresa.'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Código de Exibição',
                    xtype: 'combobox',
                    forceSelection: true,
                    store: [
                        ['0', 'ID'],
//                        [1, 'Identificação do Código de Barra'],
                        [2, 'Código de Barra'],
                        [3, 'Código Interno']
                    ],
                    name: 'produto_codigo_exibicao',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Código de Exibição',
                            html: '<p>Determina qual o método de pesquisa será utilizado para localizar o produto.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Parâmetro de Pesquisa',
                    xtype: 'combobox',
                    forceSelection: true,
                    store: [
                        ['0', 'ID'],
                        [1, 'Referência'],
                        [2, 'Código de Barra'],
                        [3, 'Código Interno']
                    ],
                    multiSelect: true,
                    name: 'produto_codigo_pesquisa',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Pesquisa',
                            html: '<p>Determina qual o método de pesquisa será utilizado para localizar o produto.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Complementar com Zeros',
                    xtype: 'combobox',
                    forceSelection: true,
                    store: [
                        ['0', '0'],
                        [1, '1'],
                        [2, '2'],
                        [3, '3'],
                        [4, '4'],
                        [5, '5'],
                        [6, '6'],
                        [7, '7'],
                        [8, '8'],
                        [9, '9'],
                        [10, '10'],
                        [11, '11'],
                        [12, '12'],
                        [13, '13'],
                        [14, '14'],
                        [15, '15']
                    ],
                    name: 'produto_codigo_digitos',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Complementar com Zeros',
                            html: '<p>Insere uma determinada quantidade de zeros para efetuar de forma exata quando o código é antecedido de zeros.<br />Funcional somente para "Código Intero" e "Código de Barra".</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Estoque Negativo',
                    xtype: 'combobox',
                    forceSelection: true,
                    store: [
                        ['0', 'NÃO'],
                        [1, 'SIM']
                    ],
                    name: 'produto_estoque_negativo',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Estoque Negativo',
                            html: '<p>Permite movimetar estoque abaixo de 0 .</p>'
                        });
                    }
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Estoque',
            defaults: {
                anchor: '100%',
                typeAhead: false,
                autoHeight: true,
                allowBlank: true,
                plugins: ['clearbutton'],
                layout: {
                    type: 'hbox',
                    anchor: '60%',
                    bodyPadding: 10,
                    defaultMargins: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                        left: 0
                    }
                }
            },
            items: [
                {
                    fieldLabel: 'Local Padrão',
                    xtype: 'comboLocalEstoque',
                    forceSelection: true,
                    store: Ext.create('Illi.store.estoque.Locais', {storeId: "comboLocaisEstoque"}),
                    tipo: 'CLIENTE', // ALTERAR PARA 
                    name: 'estoque_local_padrao',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Local Padrão',
                            html: '<p>Determina o local padrão ao dar entrada no estoque sem especificar o local de armazenamento.</p>'
                        }).show();
                    }
                },
                {
                    xtype: 'comboRelatorio',
                    plugins: ['clearbutton'],
                    name: 'modelo_movimentacao',
                    fieldLabel: 'Modelo Relatório de Movimento',
                    tipo: 'MOVIMENTACAO',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function () {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Modelo Relatório de Movimento',
                            html: '<p>Seleciona o modelo Padrão para visualizar a movimentação de estoque.</p>'
                        }).show();
                    }
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Lançamento de Venda Rápida',
            defaults: {
                anchor: '100%',
                typeAhead: false,
                autoHeight: true,
                allowBlank: true,
                plugins: ['clearbutton'],
                layout: {
                    type: 'hbox',
                    anchor: '60%',
                    bodyPadding: 10,
                    defaultMargins: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                        left: 0
                    }
                }
            },
            items: [
                {
                    fieldLabel: 'Grupo de Vendedores',
                    xtype: 'comboGrupoUsuario',
                    name: 'codigo_vendedor',
                    forceSelection: true,
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function () {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Grupo de Vendedores',
                            html: '<p>Grupo de Usuário, que será tratado como Vendedores, para controle de acesso aos clientes e financeiro</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Tipo de Operação',
                    xtype: 'comboConfiguracaoOperacao',
                    tipo: 'venda',
                    forceSelection: true,
                    name: 'venda_tipo_operacao',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function () {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Tipo de Operação',
                            html: '<p>Determina o padrão de ações ao realizar uma venda.</p>'
                        }).show();
                    }
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'PDV',
            defaults: {
                anchor: '100%',
                typeAhead: false,
                autoHeight: true,
                allowBlank: true,
                plugins: ['clearbutton'],
                layout: {
                    type: 'hbox',
                    anchor: '60%',
                    bodyPadding: 10,
                    defaultMargins: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                        left: 0
                    }
                }
            },
            items: [
                {
                    fieldLabel: 'Cliente Padrão',
                    xtype: 'financeiroComboPessoa',
                    forceSelection: true,
                    store: Ext.create('Illi.store.Pessoas', {storeId: "comboPessoaCliente"}),
                    tipo: 'CLIENTE', // ALTERAR PARA 
                    name: 'pdv_vendarapida_id_cliente',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Cliente Padrão',
                            html: '<p>Especifica qual o cliente que será definido caso não seja especificado nenhum cliente na venda.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Tipo de Operação para Venda',
                    xtype: 'comboConfiguracaoOperacao',
                    tipo: 'venda',
                    forceSelection: true,
                    name: 'pdv_tipo_operacao_venda',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function () {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Tipo de Operação de Venda',
                            html: '<p>Determina o padrão de ações ao realizar uma venda.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Tipo de Operação para Devolução',
                    xtype: 'comboConfiguracaoOperacao',
                    tipo: 'devolucao_compra',
                    forceSelection: true,
                    name: 'pdv_tipo_operacao_devolucao',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function () {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Tipo de Operação para Devolução',
                            html: '<p>Determina o padrão de ações ao realizar uma troca.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Pagamento Padrão para Devolução',
                    xtype: 'comboPrazo',
                    forceSelection: true,
                    name: 'pdv_prazo_devolucao',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function () {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Pagamento Padrão para Devolução',
                            html: '<p>Determina a forma de pagamento que será utilizada caso seja gerado fluxo para devolução.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Tipo Título',
                    xtype: 'comboTipoTitulo',
                    forceSelection: true,
                    store: Ext.create('Illi.store.TipoTitulos', {storeId: "comboTipoTitulos"}),
                    name: 'pdv_vendarapida_id_tipo_titulo',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Tipo Título',
                            html: '<p>Especifica qual o tipo do título será armazenado ao efetuar uma venda.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Natureza da Sangria',
                    xtype: 'comboNatureza',
                    tipo: 'TRANSFERENCIA',
                    storeName: 'storeNaturezaSangria',
                    forceSelection: true,
                    name: 'pdv_vendarapida_id_natureza_sangria',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function () {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Natureza da Sangria',
                            html: '<p>Natureza padrão para o lançamento da Sangria.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Natureza do Suprimento',
                    xtype: 'comboNatureza',
                    tipo: 'TRANSFERENCIA',
                    storeName: 'storeNaturezaSuprimento',
                    forceSelection: true,
                    name: 'pdv_vendarapida_id_natureza_suprimento',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function () {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Natureza do Suprimento',
                            html: '<p>Natureza padrão para o lançamento do Suprimento.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Solicitar Fiscal',
                    xtype: 'combobox',
                    forceSelection: true,
                    store: [
                        ['0', 'Fechamento de Caixa'],
                        [5, 'Configuração'],
                        [7, 'Configuração de Impressão ECF'],
                        [8, 'Configuração de Impressão não-ECF'],
                        [1, 'Sangria'],
                        [2, 'Suprimento'],
                        [3, 'Desconto Item'],
                        [13, 'Acréscimo Item'],
                        [14, 'Desconto Venda'],
                        [15, 'Acréscimo Venda'],
                        [6, 'Troca / Devolução'],
                        [12, 'Cancelamento de Item'],
                        [9, 'Cancelamento de Venda'],
                        [10, 'Cancelamento de Devolução'],
                        [4, 'Impressão Segunda Via'],
                        [11, 'Impressão do Resumo de Fechamento de Caixa']
                    ],
                    multiSelect: true,
                    name: 'pdv_vendarapida_autenticador',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Solicitar Fiscal / Autenticador',
                            html: '<p>Determina qual ação do usuário solicitará autenticação do fiscal.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Sangria Automática',
                    xtype: 'combobox',
                    forceSelection: true,
                    store: [
                        ['0', 'NÃO'],
                        [1, 'SIM']
                    ],
                    name: 'pdv_vendarapida_sangria_automatica',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Sangria Automática',
                            html: '<p>Efetua a sangria sempre no fechamento de caixa, porém é necessário especificar a "Conta Destino" no campo abaixo.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Conta Destino (Sangria)',
                    xtype: 'comboUsuario',
                    forceSelection: true,
                    store: Ext.create('Illi.store.Contas', {storeId: "comboContaSangria"}),
                    name: 'pdv_vendarapida_sangria_conta',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Conta Destino (Sangria)',
                            html: '<p>Caso o campo "Sangria Automática" esteja ativo, é necessário especificar a conta para onde será transferido o valor.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Solicitar Vendedor',
                    xtype: 'combobox',
                    forceSelection: true,
                    store: [
                        ['0', 'NÃO'],
                        [1, 'SIM']
                    ],
                    name: 'pdv_vendarapida_vendedor_obrigatorio',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Solicitar Vendedor',
                            html: '<p>Caso ativo, será obrigatória a solicitação do vendedor ao finalizar a venda.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Permitir Pesquisa Vendedor',
                    xtype: 'combobox',
                    forceSelection: true,
                    store: [
                        ['0', 'NÃO'],
                        [1, 'SIM']
                    ],
                    name: 'pdv_vendarapida_pesquisa_vendedor',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Permitir Pesquisa Vendedor',
                            html: '<p>Habilita ao caixa fazer a pesquisa do vendedor.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Solicitar Documento',
                    xtype: 'combobox',
                    forceSelection: true,
                    store: [
                        ['0', 'NÃO'],
                        [1, 'SIM']
                    ],
                    name: 'pdv_vendarapida_solicitar_documento',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Solicitar Documento',
                            html: '<p>Salva um número de documento no cabeçalho da venda sempre.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Forçar Conferência Cega',
                    xtype: 'combobox',
                    forceSelection: false,
                    store: [
                        ['0', 'NÃO'],
                        [1, 'SIM']
                    ],
                    name: 'pdv_vendarapida_conferencia_cega',
                    trigger2Cls: 'trigger-ajuda',
                    onTrigger2Click: function (a, b, c) {
                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                            title: 'Forçar Conferência Cega',
                            html: '<p>Força o operador do caixa a efetuar a conferência cega ao finalizar caixa.</p>'
                        }).show();
                    }
                },
                {
                    fieldLabel: 'Mensagem de Cabeçalho do Romaneiro de Venda',
                    xtype: 'textareafield',
                    fieldStyle: {
                        'fontFamily': 'Courier New, Courier, monospace',
                        'fontSize': '12px'
                    },
                    name: 'pdv_vendarapida_cabecalho'
                },
                {
                    fieldLabel: 'Mensagem de Rodapé do Romaneiro de Venda',
                    xtype: 'textareafield',
                    fieldStyle: {
                        'fontFamily': 'Courier New, Courier, monospace',
                        'fontSize': '12px'
                    },
                    name: 'pdv_vendarapida_mensagem'
                }
            ]
        }

    ]
});
