Ext.define('Illi.view.financeiro.pdv.ListaDevolucao', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaDevolucao',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            border: false,
            bodyBorder: false,
//            bodyStyle: 'background: transparent;',
//            layout: {
//                type: 'anchor',
//                reserveScrollbar: true // There will be a gap even when there's no scrollbar
//            },
            //
            enableColumnHide: false,
            enableColumnMove: false,
            enableColumnResize: false,
            sortableColumns: false,
            autoScroll: true,
            //
            store: Ext.create('Illi.store.movimentacao.Movimentacaos', {
                storeId: "storePdvDevolucaos",
                autoLoad: false,
                listeners: {
                    load: function(store, records, successful, eOpts) {
                        me.focus();
                        setTimeout(function() {
                            me.getView().focusRow(0);
                            var row = store.getAt(0);
                            if (row) {
                                me.getSelectionModel().select(row);
                            }
                        }, 300);
                    }
                }
            }),
            columns: {
                defaults: {
                    filter: true,
                    menuDisabled: true
                },
                items: [
                    {
                        header: 'Código',
                        dataIndex: 'id',
                        flex: 0.4
                    },
                    {
                        header: 'C.O.',
                        dataIndex: 'numero',
                        flex: 0.4
                    },
                    {
                        header: 'Data',
                        dataIndex: 'data_emissao',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        flex: 0.5
                    },
                    {
                        header: 'Cliente',
                        dataIndex: 'p.nome',
                        renderer: function(value, metaData, record) {
                            return value + ' (' + record.get('p.id') + ')';
                        },
                        hideable: false,
                        filter: 'string',
                        flex: 1
                    },
                    {
                        header: 'Valor',
                        dataIndex: 'valor_venda',
                        filter: {
                            'type': 'float'
                        },
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        },
                        flex: 0.4
                    },
                    {
                        header: 'Situação',
                        dataIndex: 'situacao',
                        flex: 0.3
                    }
                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'rowediting': false
            }),
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("storePdvDevolucaos"),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.store.proxy.extraParams = {
            'pdv': true
        };
        me.store.load();
        me.callParent(arguments);
    }
});