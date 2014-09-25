Ext.define('Illi.view.financeiro.pdv.ListaPagamentoCondicao', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaPagamentoCondicao',
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
            store: Ext.create('Illi.store.CondicaoPagamentos', {
                storeId: "storePagamentoCondicao",
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
                        hidden: true
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        flex: 1
                    }
                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'rowediting': false
            })
        });
        me.store.proxy.extraParams = {
            'filter': Ext.JSON.encode([
                {"property": "situacao", "value": "ATIVO", "type": "string", "operator": "eq"}
            ]),
            'forceOrder': '1'
        };
        me.store.load({
            callback: function(records, options, success) {
                //Illi.callLog('control.storePagamentoCondicao.load.callback()', records, options, success);
                var win = me.up(); // 'panel'
                if (win.callShow !== undefined) {
                    if (this.getCount() < 1) {
                        win.callOnlyRecord(false);
                    } else {
                        if (this.getCount() > 1) {
                            win.callShow();
                        } else {
                            win.callOnlyRecord(records[0]);
                        }
                    }
                } else {
                    win.show();
                }
            }
        });
        me.callParent(arguments);
    }
});