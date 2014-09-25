Ext.define('Illi.view.financeiro.pdv.ListaFechamentoCaixa', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaFechamentoCaixa',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            emptyText: "Nenhum registro encontrado!",
            //
            border: false,
            bodyBorder: false,
            //
            enableColumnHide: false,
            enableColumnMove: false,
            enableColumnResize: false,
            sortableColumns: false,
            autoScroll: true,
            //
            store: Ext.create('Ext.data.ArrayStore', {
                fields: [
                    {name: 'id'},
                    {name: 'descricao'},
                    {name: 'valor', type: 'float'}
                ],
                autoSync: true,
                storeId: 'storeFechamentoCaixa',
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
                    menuDisabled: true
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id', // nome do campo no model
                        hidden: true,
                        editor: false
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        editor: false,
                        flex: 1
                    },
                    {
                        header: 'Valor',
                        renderer: Illi.app.Util.valorRenderer,
                        dataIndex: 'valor',
                        align: 'right',
                        editor: Illi.app.Util.campoMoeda('valor'),
                        flex: 0.7
                    }
                ]
            },
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 2
                })
            ]
        });
        me.callParent(arguments);
    }
});
