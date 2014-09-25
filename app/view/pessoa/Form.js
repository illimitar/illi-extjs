Ext.define('Illi.view.pessoa.Form', {
    extend: 'Ext.window.Window',
    alias: 'widget.pessoaForm',
    title: 'Cadastro de Pessoa',
    layout: 'fit',
    maximizable: true,
    id_pessoa: false,
    requires: [
        'Ext.ux.TextMaskPlugin',
        'Illi.view.pessoa.endereco.ComboBairro',
        'Illi.view.pessoa.endereco.ComboCidade',
        'Illi.view.pessoa.tipo_pessoa.ListaTipoPessoa',
        'Illi.view.pessoa.grupo_pessoa.ComboGrupoPessoa',
        'Illi.view.pessoa.contato.ListaContato',
        'Illi.view.pessoa.contato.FormTipoContato',
        'Illi.view.pessoa.Combo',
        'Illi.view.pessoa.meta.ListaMeta',
        'Illi.view.ComboSituacao'
    ],
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            modal: true,
            height: 500,
            width: 700,
            title: 'Cadastro de Parceiro',
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start',
                frame: true,
                plain: true,
                border: false
            },
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 15,
                    itemId: 'pessoa',
                    defaultType: 'textfield',
                    flex: 1.9,
                    defaults: {
                        width: 525
                    },
                    items: [
                        {
                            name: 'id',
                            fieldLabel: 'ID',
                            hidden: true
                        },
                        {
                            fieldLabel: 'Nome',
                            allowBlank: false,
                            name: 'nome'
                        },
                        {
                            xtype: 'ComboGrupoPessoa',
                            forceSelection: true,
                            fieldLabel: 'Grupo Parceiro'
                        },
                        {
                            xtype: 'financeiroComboPessoa',
                            forceSelection: true,
                            trigger2Cls: false,
                            name: 'id_vendedor',
                            fieldLabel: 'Vendedor',
                            tipo: 'VENDEDOR'
                        },
                        {
                            fieldLabel: 'Tipo de Pessoa',
                            xtype: 'radiogroup',
                            columns: 2,
                            name: 'tipo',
                            items: [
                                {
                                    boxLabel: 'JURIDICA',
                                    itemId: 'RD_JURIDICA',
                                    name: 'tipo',
                                    inputValue: 'JURIDICA',
                                    checked: true
                                },
                                {
                                    boxLabel: 'FISICA',
                                    itemId: 'RD_FISICA',
                                    name: 'tipo',
                                    inputValue: 'FISICA'
                                }
                            ],
                            onChange: function () {
                                var campos = Ext.ComponentQuery.query('*[tipoPessoa]');
                                var tipo = this.getValue().tipo;
                                if (tipo === "JURIDICA") {
                                    me.down('[name=data_nascimento]').setFieldLabel("Abertura");
                                } else {
                                    me.down('[name=data_nascimento]').setFieldLabel("Nascimento");
                                }
                                Ext.Array.each(campos, function (campo) {
                                    campo.setVisible(tipo === campo.tipoPessoa);
                                    campo.setDisabled(tipo !== campo.tipoPessoa);
                                });
                            }
                        },
                        {
                            xtype: 'comboSituacao',
                            forceSelection: true,
                            fieldLabel: 'Situação'
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    flex: 3,
                    disabled: true,
                    activeTab: 0,
                    defaults: {
                        bodyPadding: 10
                    },
                    items: [
                        {
                            xtype: 'form',
                            title: 'Dados Pessoais',
                            itemId: 'dadosComplementares',
                            defaults: {
                                width: 525
                            },
                            defaultType: 'textfield',
                            items: [
                                {
                                    fieldLabel: 'Razão social',
                                    name: 'razao_social',
                                    tipoPessoa: 'JURIDICA'
                                },
                                {
                                    fieldLabel: 'Nome Fantasia',
                                    name: 'fantasia',
                                    tipoPessoa: 'JURIDICA'

                                }, {
                                    fieldLabel: 'CNPJ',
                                    name: 'cnpj',
                                    tipoPessoa: 'JURIDICA',
                                    xtype: 'textfield',
                                    plugins: 'textmask',
                                    mask: '99.999.999/9999-99',
                                    money: false
                                },
                                {
                                    fieldLabel: 'IE',
                                    name: 'ie',
                                    tipoPessoa: 'JURIDICA'
                                },
                                {
                                    fieldLabel: 'IM',
                                    name: 'im',
                                    tipoPessoa: 'JURIDICA'
                                },
                                {
                                    fieldLabel: 'CPF',
                                    name: 'cpf',
                                    tipoPessoa: 'FISICA',
                                    hidden: true,
                                    xtype: 'textfield',
                                    plugins: 'textmask',
                                    mask: '999.999.999-99',
                                    money: false
                                },
                                {
                                    fieldLabel: 'Identidade',
                                    name: 'identidade',
                                    tipoPessoa: 'FISICA',
                                    hidden: true
                                },
                                {
                                    fieldLabel: 'Abertura',
                                    name: 'data_nascimento',
                                    xtype: 'datefield',
                                    format: 'd/m/Y',
                                    allowBlank: true
                                }
                            ]
                        },
                        {
                            bodyPadding: 0,
                            title: 'Contato',
                            xtype: 'pessoaListaContato'

                        },
                        {
                            bodyPadding: 0,
                            title: 'Meta',
                            xtype: 'listaMeta'

                        },
                        {
                            bodyPadding: 0,
                            title: 'Tipo Pessoa',
                            xtype: 'pessoaListaTipoPessoa'

                        },
                        {
                            xtype: 'form',
                            title: 'Vendedor',
                            itemId: 'vendedor',
                            defaultType: 'textfield',
                            items: [
                                {
                                    fieldLabel: 'Taxa Comissão',
                                    name: 'comissao',
                                    xtype: 'numberfield',
                                    maxValue: 100,
                                    allowDecimals: true,
                                    decimalPrecion: 2,
                                    decimalSeparator: ','
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            title: 'Endereço',
                            itemId: 'endereco',
                            defaults: {
                                width: 525
                            },
                            defaultType: 'textfield',
                            items: [
                                {
                                    name: 'id_endereco',
                                    fieldLabel: 'id_endereco',
                                    hidden: true
                                }, {
                                    fieldLabel: 'Logradouro',
                                    name: 'logradouro'
                                }, {
                                    fieldLabel: 'Numero',
                                    name: 'numero'
                                }, {
                                    fieldLabel: 'Complemento',
                                    name: 'complemento'
                                }, {
                                    fieldLabel: 'Referencia',
                                    name: 'referencia'
                                },
                                {
                                    fieldLabel: 'Cep',
                                    name: 'cep',
                                    plugins: 'textmask',
                                    mask: '99999-999'
                                }
                                , {
                                    xtype: 'ComboCidade'
                                }
                                , {
                                    xtype: 'ComboBairro',
                                    disabled: true
                                }
                            ]
                        }





                    ]
                }],
            buttons: [{
                    text: 'Salvar',
                    action: 'salvar',
                    iconCls: 'icon-salvar'

                },
                {
                    text: 'Fechar',
                    scope: this,
                    iconCls: 'icon-cancelar',
                    handler: this.close
                }
            ]


        });
        me.callParent(arguments);
    }




});