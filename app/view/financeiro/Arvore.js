Ext.define('Illi.view.financeiro.Arvore', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.arvoreFinanceiro',
    itemId: 'arvoreFinanceiro',
    tipo: false,
    rootVisible: false,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            store: Ext.create('Ext.data.TreeStore', {
                storeId: 'treeStoreFinanceiroPai',
                remoteFilter: true,
                autoLoad: false,
                proxy: {
                    type: 'ajax',
                    extraParams: {
                        filter: Ext.JSON.encode([{"property": "tipo", "value": me.tipo, "type": "exact", "operator": "eq"}])
                    },
                    url: '../fluxo/natureza_lancamento/ijson/combotree',
                    noCache: false,
                    actionMethods: {
                        read: 'POST'
                    }
                },
                listeners: {
                    load: function(proxy, operation) {
                        // me.getSelectionModel().select(me.nodeSelected);
                    }
                }
            }),
            listeners: {
                itemclick: function(node, record, item, index, e, eOpts) {
                    var grid = me.up('#tabCenter').down('#listaContaApagar');
                    var text = record.get('text');
                    var selecao = [];
                    var id = (record.raw.nodeSelectable ? record.raw.id : record.parentNode.raw.id);
                    //grid.setMask(true);
                    grid.el.mask();
                    grid.store.clearFilter(true);
                    record.eachChild(function(n) {
                        n.cascadeBy(function(filho) {
                            selecao.push(filho.raw.id);
                        });
                    });
                    grid.id_financeiro_lancamento = (record.raw.selecao === 'SIM' ? record.get('id') : undefined);
                    selecao.push(record.get('id'));
                    grid.getFilterBar().fields.get('nl.id').setValue(selecao ? selecao : record.get('id'));
                    if (text === '..') {
                        grid.getFilterBar().fields.get('nl.id').setValue(undefined);
                    }
                    grid.setTitle(text);
                }
            },
            tbar: {
                items: [
                    {
                        text: 'Atualizar',
                        action: 'atualizar',
                        iconCls: 'icon-atualizar',
                        handler: function() {
                            me.store.load();
                        }
                    },
                    '->',
                    {
                        iconCls: 'icon-expandir',
                        tooltip: 'Expandir',
                        handler: function() {
                            me.expandAll();
                        }
                    },
                    {
                        iconCls: 'icon-recolher',
                        tooltip: 'Recolher',
                        handler: function() {
                            me.collapseAll();
                        }
                    }
                ]
            }
        });

        me.callParent(arguments);
    }
});