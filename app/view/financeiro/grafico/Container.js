Ext.define('Illi.view.financeiro.grafico.Container', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Illi.view.financeiro.grafico.fluxoCaixa',
        'Illi.view.financeiro.grafico.receitaXdespesa',
        'Illi.view.financeiro.grafico.zoom',
        'Illi.view.usuario.entidade.Combo'
    ],
    alias: 'widget.graficoContainer',
    itemId: 'containerInicio',
    layout: 'border',
    margin: 10,
    defaults: {
        collapsible: true,
        split: true
    },
    border: false,
    bodyBorder: false,
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            items: [
                {
                    title: 'Detalhamento',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'start'
                    },
                    height: '70%',
                    region: 'center',
                    collapsible: false,
                    itemId: 'quadroGraficoFluxo',
                    items: [
                        {
                            xtype: 'graficoFluxoCaixa',
                            border: false,
                            janela: me,
                            width: 300,
                            flex: 2
                        }
                    ]
                },
                {
                    title: "Fluxo de Caixa",
                    layout: 'fit',
                    region: 'north',
                    height: '40%',
                    border: false,
                    bodyBorder: false,
                    items: [
                        {
                            xtype: 'tabpanel',
                            activeTab: 1,
                            border: false,
                            tabPosition: 'left',
                            bodyBorder: false,
                            defaults: {
                                bodyPadding: 10
                            },
                            items: [
                                {
                                    xtype: 'graficoReceitaXdespesa',
                                    border: false,
                                    bodyBorder: false,
                                    title: "Mensal"
                                },
                                {
                                    xtype: 'graficoZoom',
                                    border: false,
                                    bodyBorder: false,
                                    title: "Detalhado"
                                }
                            ]
                        }

                    ]
                },
                {
                    xtype: 'toolbar',
                    region: 'south',
                    items: [
                        {
                            xtype: 'comboEntidade',
                            fieldLabel: 'Empresa',
                            flex: 3,
                            name: 'id_entidade',
                            itemId: 'entidadeGrafico',
                            valueField: 'id_entidade',
                            multiSelect: true,
                            typeAhead: false,
                            forceSelection: false,
                            trigger2Cls: null,
                            plugins: ['clearbutton']
                        },
                        {
                            xtype: 'combo',
                            flex: 2,
                            fieldLabel: 'Situação',
                            itemId: 'situacaoGrafico',
                            allowBlank: false,
                            plugins: ['clearbutton'],
                            store: ['Aberto', 'Baixado']
                        },
                        {
                            xtype: 'combobox',
                            name: 'mes',
                            itemId: 'mesGrafico',
                            labelAlign: 'right',
                            fieldLabel: 'Mês',
                            plugins: ['clearbutton'],
                            value: [new Date().getMonth() + 1],
                            store: [
                                [1, 'Janeiro'],
                                [2, 'Fevereiro'],
                                [3, 'Março'],
                                [4, 'Abril'],
                                [5, 'Maio'],
                                [6, 'Junho'],
                                [7, 'Julho'],
                                [8, 'Agosto'],
                                [9, 'Setembro'],
                                [10, 'Outubro'],
                                [11, 'Novembro'],
                                [12, 'Dezembro']
                            ]
                        },
                        {
                            xtype: 'numberfield',
                            name: 'ano',
                            itemId: 'anoGrafico',
                            labelAlign: 'right',
                            fieldLabel: 'Ano',
                            value: new Date().getFullYear()
                        },
                        {
                            xtype: 'button',
                            tooltip: 'Pesquisar',
                            itemId: 'filtrarFluxo',
                            text: false,
                            iconCls: 'icon-pesquisar',
                            handler: function(btn) {
                                var painel = btn.up('#containerInicio');
                                var mes = btn.up('toolbar').down('#mesGrafico').getValue();
                                var ano = btn.up('toolbar').down('#anoGrafico').getValue();
                                var id_entidade = btn.up('toolbar').down('#entidadeGrafico').getValue();
                                var situacao = btn.up('toolbar').down('#situacaoGrafico').getValue();
                                var store = Ext.getStore('GraficoNatureza');
                                var store2 = Ext.getStore('GraficoReceitaDespesa');
                                id_entidade = Ext.JSON.encode(id_entidade);
                                var filtro = {
                                    mes: mes,
                                    ano: ano,
                                    id_entidade: id_entidade,
                                    situacao: situacao
                                };
                                Illi.app.Local.set('filtroGrafico', filtro);
                                Illi.app.Hgrafico.options.recarregar(false);
                                store.getProxy().extraParams = filtro;
                                store2.removeAll();
                                store2.getProxy().extraParams = filtro;
                                painel.mask('Carregando!');
                                store.load({
                                    callback: function(records) {
                                        painel.unmask();
                                    }
                                });
                                store2.load({
                                    callback: function(records) {
                                        painel.unmask();
                                    }
                                });
                            }},
                        {
                            xtype: 'button',
                            tooltip: 'Recarregar',
                            text: false,
                            iconCls: 'icon-atualizar',
                            handler: function(btn) {
                                var painel = btn.up('#containerInicio');
                                var store = Ext.getStore('GraficoNatureza');
                                var store2 = Ext.getStore('GraficoReceitaDespesa');
                                store2.load();
                                Illi.app.Local.set('filtroGrafico', {});
                                Illi.app.Hgrafico.options.recarregar(true);
                                painel.mask('Carregando!');
                                store.getProxy().extraParams = {};
                                store.load({
                                    callback: function(records) {
                                        painel.unmask();
                                        var tbar = btn.up('toolbar');
                                        tbar.down('#mesGrafico').setValue(new Date().getMonth() + 1);
                                        tbar.down('#entidadeGrafico').setValue(undefined);
                                        tbar.down('#situacaoGrafico').setValue(undefined);
                                    }
                                });
                            }

                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});