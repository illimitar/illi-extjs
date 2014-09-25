Ext.define('Illi.view.relatorio.APagar', {
    extend: 'Ext.form.Panel',
    alias: 'widget.aPagar',
    titulo: 'Relatório de Contas a Pagar.',
    tipo: 'DESPESA',
    idStorePessoa: 'filtroPessoaApagar',
    id_fluxo: '',
    autoScroll: true,
    border: false,
    boderBody: false,
    height: '98%',
    requires: [
        'Illi.view.relatorio.ComboApagarAgrupar', // Ok
        'Illi.view.relatorio.ComboVendedor', // Ok
        'Illi.view.relatorio.Combo', // Ok
        'Illi.view.relatorio.listaPessoa', // Ok
        'Illi.view.pessoa.Combo',
        'Illi.view.pessoa.grupo_pessoa.ComboGrupoPessoa',
        'Illi.view.financeiro.Combo',
        'Illi.view.financeiro.prazo.Combo',
        'Illi.view.usuario.grupo_entidade.Combo',
        'Illi.view.usuario.entidade.Combo',
        'Illi.view.financeiro.tipo_titulo.Combo'
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
                        handler: function() {
                            var form = this.up('form').getForm();
                            if (form.isValid()) {
                                try {
                                    var pessoasRelatorio = Ext.getStore(me.idStorePessoa);
                                    var texto__nome = [];
                                    pessoasRelatorio.each(function(rec) {
                                        texto__nome.push(rec.getData().id);
                                    });
                                    var filtro = form.getValues();
                                    filtro.texto__nome = texto__nome;
                                    var values = Ext.JSON.encode(filtro);
                                    Ext.MessageBox.wait('Gerando Relatório', 'Aguarde...');
                                    Ext.Ajax.request({
                                        url: '../relatorios/abs_relatorio/contas_apagar',
                                        timeout: 1200000,
                                        params: {
                                            illi: 'true',
                                            filtro: values,
                                            titulo: me.titulo,
                                            tipo: me.tipo,
                                            url: 'relatorios/abs_relatorio/contas_apagar'
                                        },
                                        success: function(arquivo) {
                                            arquivo = (arquivo.responseText);
                                            Ext.MessageBox.hide();
                                            Ext.create('Ext.Window', {
                                                title: 'Visualizar',
                                                width: "95%",
                                                height: "98%",
                                                plain: true,
                                                modal: true,
                                                win: this,
                                                autoScroll: true,
                                                frame: false,
                                                html: arquivo
                                            }).show();
                                        },
                                        failure: function() {
                                            Illi.app.Util.mensagemFalha();
                                        }
                                    });
                                } catch (e) {
                                    error(e);
                                    txt = " Ocorreu Um erro!</br>";
                                    txt += " Tente Novamente se o Problema Pesistir entre em contato com o Suporte!.</br>";
                                    txt += " Descrição do Erro: " + e.message + "</br>";
                                    Ext.MessageBox.show({
                                        title: 'Aviso Importante',
                                        msg: txt,
                                        autoScroll: true,
                                        icon: Ext.MessageBox.ERROR,
                                        buttons: Ext.MessageBox.OK
                                    });
                                }
                            }
                        }
                    },
                    {
                        iconCls: 'icon-remover',
                        text: 'Limpar Filtros',
                        handler: function() {
                            this.up('form').getForm().reset();
                            var pessoasRelatorio = Ext.getStore(me.idStorePessoa);
                            pessoasRelatorio.removeAll();
                        }
                    },
                    '->',
                    {
                        iconCls: 'icon-remover',
                        text: 'Configurar Relátorio',
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
                                    itemId: 'modeloRelatorioFluxo',
                                    plugins: ['clearbutton'],
                                    name: 'modelo',
                                    tipo: 'FLUXO',
                                    listeners: {
                                        'change': function(combo, b) {
                                            var agrupar = combo.up('form').down('#agrupar');
                                            agrupar.setVisible(!combo.getValue());
                                        }

                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    anchor: '60%',
                    title: 'Data Vencimento',
                    itemId: 'dataVencimento',
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
                            itemId: 'vencimento',
                            defaults: {
                                flex: 1,
                                hideLabel: true,
                                plugins: ['clearbutton']
                            },
                            items: [
                                {
                                    xtype: 'datefield',
                                    name: 'data__vencimento__ini',
                                    margin: '0 5 0 0'
                                },
                                {
                                    xtype: 'datefield',
                                    name: 'data__vencimento__fim'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    anchor: '60%',
                    title: 'Data Baixa',
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
                            itemId: 'baixa',
                            defaults: {
                                flex: 1,
                                hideLabel: true,
                                plugins: ['clearbutton']
                            },
                            items: [
                                {
                                    xtype: 'datefield',
                                    name: 'data__baixa__ini',
                                    margin: '0 5 0 0'
                                },
                                {
                                    xtype: 'datefield',
                                    name: 'data__baixa__fim'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Data Emissão',
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
                            xtype: 'fieldcontainer',
                            fieldLabel: 'Entre Datas',
                            combineErrors: true,
                            msgTarget: 'side',
                            layout: 'hbox',
                            defaults: {
                                flex: 1,
                                hideLabel: true
                            },
                            items: [
                                {
                                    xtype: 'datefield',
                                    name: 'data__emissao__ini',
                                    margin: '0 5 0 0'
                                },
                                {
                                    xtype: 'datefield',
                                    name: 'data__emissao__fim'
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
                            xtype: 'fieldcontainer',
                            fieldLabel: 'Situação',
                            combineErrors: true,
                            msgTarget: 'side',
                            layout: 'hbox',
                            defaults: {
                                flex: 1,
                                hideLabel: true
                            },
                            items: [
                                {
                                    xtype: 'combo',
                                    plugins: ['clearbutton'],
                                    name: 'texto__situacao',
                                    value: ['Aberto', 'Vencido', 'Vencendo', 'Pré Baixa'],
                                    multiSelect: true,
                                    typeAhead: false,
                                    store: ['Aberto', 'Vencido', 'Vencendo', 'Pré Baixa', 'Baixado', 'Cancelado', 'Arquivado']

                                }
                            ]
                        },
                        {
                            xtype: 'ComboGrupoPessoa',
                            plugins: ['clearbutton'],
                            fieldLabel: 'Grupo Parceiro',
                            anchor: '100%',
                            valueField: 'grupo',
                            name: 'texto__grupo',
                            multiSelect: true,
                            typeAhead: false,
                            trigger2Cls: null
                        },
                        {
                            xtype: 'financeiroCombo',
                            plugins: ['clearbutton'],
                            fieldLabel: 'Natureza',
                            anchor: '100%',
                            valueField: 'descricao',
                            name: 'texto__natureza',
                            multiSelect: true,
                            typeAhead: false
                        },
                        {
                            xtype: 'comboPrazo',
                            plugins: ['clearbutton'],
                            fieldLabel: 'Pagamento',
                            anchor: '100%',
                            name: 'texto__pagamento',
                            valueField: 'descricao',
                            multiSelect: true,
                            typeAhead: false,
                            forceSelection: false,
                            trigger2Cls: null
                        },
                        {
                            xtype: 'comboGrupoEntidade',
                            plugins: ['clearbutton'],
                            fieldLabel: 'Grupo Empresa',
                            anchor: '100%',
                            name: 'texto__id_grupo_entidade',
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
                            name: 'texto__id_empresa',
                            //valueField: 'nome',
                            multiSelect: true,
                            typeAhead: false,
                            forceSelection: false,
                            trigger2Cls: null
                        },
                        {
                            fieldLabel: 'Previsão',
                            plugins: ['clearbutton'],
                            xtype: 'combo',
                            name: 'texto__provisao',
                            value: ['N', 'S'],
                            multiSelect: true,
                            typeAhead: false,
                            store: [
                                ['S', 'Sim'],
                                ['N', 'Não']
                            ]
                        },
                        {
                            fieldLabel: 'Tipo de Titulo',
                            plugins: ['clearbutton'],
                            anchor: '100%',
                            xtype: 'comboTipoTitulo',
                            name: 'texto__id_tipo_titulo',
                            multiSelect: true,
                            typeAhead: false
                        },
                        {
                            xtype: 'ComboVendedor',
                            plugins: ['clearbutton'],
                            fieldLabel: 'Vendedor',
                            anchor: '100%',
                            name: 'texto__id_vendedor',
                            valueField: 'vendedor',
                            multiSelect: true,
                            typeAhead: false,
                            forceSelection: false,
                            trigger2Cls: null,
                            hidden: (me.tipo === "RECEITA" ? false : true)
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Agrupar',
                    itemId: 'agrupar',
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
                            xtype: 'fieldcontainer',
                            fieldLabel: 'Agrupar Por',
                            combineErrors: true,
                            msgTarget: 'side',
                            layout: 'hbox',
                            defaults: {
                                flex: 1,
                                hideLabel: true
                            },
                            items: [
                                {
                                    xtype: 'comboApagarAgrupar'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Parceiro(s)',
                    anchor: '60%',
//                    collapsible: true,
//                    checkboxToggle: true,
//                    collapsed: true,
                    defaults: {
                        flex: 1,
                        hideLabel: true
                    },
                    items: [
                        {
                            xtype: 'listaPessoa',
                            border: false,
                            boderBody: false,
                            idStorePessoa: me.idStorePessoa,
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
            me.down('textfield[name=data__vencimento__ini]').focus(true, 400);
        }
    }
});