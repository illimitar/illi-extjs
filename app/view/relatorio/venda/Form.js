Ext.define('Illi.view.relatorio.venda.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formRelatorioVenda',
    itemId: "formRelatorioVenda",
    autoScroll: true,
    border: false,
    boderBody: false,
    height: '98%',
    requires: [
        "Illi.view.relatorio.produto.listaProduto",
        "Illi.view.pessoa.Combo"
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
                                    itemId: 'modeloRelatorioVenda',
                                    plugins: ['clearbutton'],
                                    name: 'modelo',
                                    tipo: 'VENDA',
                                    allowBlank: true
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
                            xtype: 'financeiroComboPessoa',
                            tipo: "VENDEDOR",
                            fieldLabel: 'Vendedor',
                            anchor: '100%',
                            name: 'movimentacao__texto__id_vendedor[]',
                            multiSelect: true,
                            typeAhead: false,
                            forceSelection: false,
                            trigger2Cls: null
                        },
                        {
                            xtype: 'financeiroComboPessoa',
                            tipo: "CLIENTE",
                            fieldLabel: 'Cliente',
                            anchor: '100%',
                            name: 'movimentacao__texto__id_pessoa[]',
                            multiSelect: true,
                            typeAhead: false,
                            forceSelection: false,
                            trigger2Cls: null
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