Ext.define('Illi.view.relatorio.produto.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formRelatorioProduto',
    itemId: "formRelatorioProduto",
    autoScroll: true,
    border: false,
    boderBody: false,
    height: '98%',
    requires: [
        "Illi.view.produto.marca.Combo",
        "Illi.view.produto.grupo.Combo",
        'Illi.view.configuracao.operacao.Combo',
        "Illi.view.relatorio.produto.listaProduto"
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            tbar: {
                items: [
                    {
                        iconCls: 'icon-relatorio',
                        text: 'Gerar Relatório',
                        action: 'gerar'
                    },
                    {
                        iconCls: 'icon-remover',
                        text: 'Limpar Filtros',
                        handler: function() {
                            this.up('form').getForm().reset();
                        }
                    },
                    '->',
                    {
                        iconCls: 'icon-remover',
                        text: 'Configurar Relátorio',
                        action: 'configurar',
                        disabled: true
                    }
                ]
            },
            autoHeight: true,
            bodyPadding: 10,
            defaults: {
                anchor: '100%',
                labelWidth: 350
            },
            items: [
                {
                    xtype: 'fieldset',
                    anchor: '60%',
                    title: 'Modelo do Relatório',
                    collapsible: true,
                    defaults: {
                        layout: {
                            type: 'hbox',
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
                            xtype: 'fieldcontainer',
                            fieldLabel: 'Modelo',
                            combineErrors: true,
                            msgTarget: 'side',
                            layout: 'hbox',
                            defaults: {
                                flex: 1,
                                hideLabel: true
                            },
                            items: [
                                {
                                    xtype: 'comboRelatorio',
                                    itemId: 'modeloRelatorioProduto',
                                    plugins: ['clearbutton'],
                                    name: 'modelo',
                                    tipo: 'PRODUTO',
                                    allowBlank: false
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    anchor: '60%',
                    title: 'Data ',
                    collapsible: true,
                    defaults: {
                        layout: {
                            type: 'hbox',
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
                            xtype: 'fieldcontainer',
                            fieldLabel: 'Entre Datas',
                            combineErrors: true,
                            msgTarget: 'side',
                            defaults: {
                                flex: 1,
                                hideLabel: true,
                                plugins: ['clearbutton']
                            },
                            items: [
                                {
                                    xtype: 'datefield',
                                    name: 'movimentacao__data__data_emissao[]',
                                    submitFormat: 'Y-m-d',
                                    margin: '0 5 0 0',
                                    listeners: {
                                        render: function(datefield) {
                                            datefield.setValue(new Date());
                                        }
                                    }
                                },
                                {
                                    xtype: 'datefield',
                                    name: 'movimentacao__data__data_emissao[]',
                                    submitFormat: 'Y-m-d',
                                    listeners: {
                                        render: function(datefield) {
                                            datefield.setValue(new Date());
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Outros Filtros',
                    anchor: '60%',
                    collapsible: true,
                    defaults: {
                        layout: {
                            type: 'hbox',
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
                            xtype: 'comboGrupoEntidade',
                            plugins: ['clearbutton'],
                            fieldLabel: 'Grupo Empresa',
                            anchor: '100%',
                            name: 'id_grupo_entidade',
//                            valueField: 'id',
                            multiSelect: true,
                            typeAhead: false,
                            forceSelection: false,
                            trigger2Cls: null,
                            listeners: {
                                'blur': function(obj, e) {
                                    var fieldset = obj.up('fieldset');
                                    var entidades = fieldset.down('comboEntidade');
                                    var listagemEntidade = [];
                                    Ext.Object.each(obj.valueModels, function(key, value, myself) {
                                        if (value.raw.entidades) {
                                            Ext.Object.each(value.raw.entidades, function(key, value, myself) {
                                                listagemEntidade.push(value);
                                            });
                                        }
                                    });
                                    entidades.setValue(listagemEntidade);
                                }
                            }
                        },
                        {
                            xtype: 'comboEntidade',
                            plugins: ['clearbutton'],
                            fieldLabel: 'Empresa',
                            anchor: '100%',
                            tipo_pessoa: "LOJA",
                            name: 'movimentacao__texto__id_entidade[]',
                            multiSelect: true,
                            typeAhead: false,
                            forceSelection: false,
                            trigger2Cls: null
                        },
                        {
                            xtype: 'comboMarca',
                            plugins: ['clearbutton'],
                            fieldLabel: 'Marca',
                            anchor: '100%',
                            name: 'produto__texto__id_marca[]',
                            multiSelect: true,
                            typeAhead: false,
                            forceSelection: false,
                            trigger2Cls: null
                        },
                        {
                            xtype: 'comboGrupo',
                            plugins: ['clearbutton'],
                            fieldLabel: 'Grupo',
                            anchor: '100%',
                            name: 'produto__texto__id_grupo[]',
                            displayField: 'nome',
                            multiSelect: true,
                            typeAhead: false,
                            forceSelection: false,
                            trigger2Cls: null,
                            listeners: {}
                        },
                        {
                            xtype: 'comboConfiguracaoOperacao',
                            plugins: ['clearbutton'],
                            fieldLabel: 'Tipo de Operação',
                            anchor: '100%',
                            name: 'produto__texto__id_grupo_operacao[]',
                            displayField: 'nome',
                            multiSelect: true,
                            typeAhead: false,
                            forceSelection: false,
                            trigger2Cls: null
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Movimentacao',
                    anchor: '60%',
                    defaults: {
                        flex: 1,
                        hideLabel: true
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            plugins: ['clearbutton'],
                            fieldLabel: 'Situacao Movimentação',
                            value: ['Confirmado', 'Finalizado'],
                            store: [
                                'Aberto',
                                'Pendente',
                                'Confirmado',
                                'Finalizado'
                            ],
                            anchor: '100%',
                            name: 'movimentacao__texto__situacao[]',
                            multiSelect: true,
                            typeAhead: false,
                            forceSelection: false
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Produtos',
                    anchor: '60%',
                    defaults: {
                        flex: 1,
                        hideLabel: true
                    },
                    items: [
                        {
                            xtype: 'relatorioListaProduto',
                            border: false,
                            boderBody: false,
                            height: 250
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    },
    listeners: {
        afterRender: function(me) {
            me.down('textfield[name=modelo]').focus(true, 400);
        }
    }
});