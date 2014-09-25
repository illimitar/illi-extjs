Ext.define('Illi.view.natureza.Arvore', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.arvoreNatureza',
    itemId: 'arvoreNatureza',
    requires: [
        'Ext.tree.plugin.TreeViewDragDrop'
    ],
    rootVisible: false,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            storeNatureza: Ext.getStore("Naturezas"),
            store: Ext.create('Ext.data.TreeStore', {
                storeId: 'treeStoreNaturezaPai',
                remoteFilter: true,
                autoLoad: false,
                proxy: {
                    type: 'ajax',
                    url: '../fluxo/natureza_lancamento/ijson/combotree',
                    noCache: false,
                    actionMethods: {
                        read: 'POST'
                    }
                },
                listeners: {
                    load: function(proxy, operation) {
                        me.getSelectionModel().select(me.nodeSelected);
                    }
                }
            }),
            listeners: {
                itemclick: function(node, record, item, index, e, eOpts) {
                    var grid = me.up('container').down('grid');
                    var store = me.storeNatureza;
                    var text = (record.getData().children ? record.get('text') : record.parentNode.raw.text);
                    var selecao = [];
                    var id = (record.raw.nodeSelectable ? record.raw.id : record.parentNode.raw.id);
                    grid.store.clearFilter(true);
                    record.eachChild(function(n) {
                        n.cascadeBy(function(filho) {
                            selecao.push(filho.raw.id);
                        });
                    });
                    grid.id_natureza_lancamento = record.get('id');
                    filtro = {"property": "id", "value": selecao, "type": "list", "operator": "eq", "replace": true};
                    grid.filtroInicial = [filtro];
                    me.nodeSelected = index;
                    grid.store.filter([filtro]);
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
                        text: 'Expandir',
                        handler: function() {
                            me.expandAll();
                        }
                    },
                    {
                        iconCls: 'icon-recolher',
                        text: 'Recolher',
                        handler: function() {
                            me.collapseAll();
                        }
                    }
                ]
            },
            viewConfig: {
                plugins: [
                    {
                        ptype: 'treeviewdragdrop'
                    }
                ],
                stripeRows: true,
                listeners: {
                    drop: {
                        fn: function(node, data, overModel, dropPosition, eOpts) {
                            var id_pai = overModel.getData().id;
                            var id = data.records[0].getData().id;
                            me.salvarPosicao(id, id_pai, overModel.getData().leaf);

                        }
                    }
                }
            }
        });
        me.callParent(arguments);
    },
    salvarPosicao: function(id, id_pai, atualiza) {
        var url = this.storeNatureza.getProxy().api.update;
        Ext.Ajax.request({
            url: url,
            params: {
                classificar: true,
                id: id,
                id_pai: id_pai
            },
            success: function(response) {
                var retorno = Ext.JSON.decode(response.responseText);
                if (atualiza) {
                    Ext.getStore('treeStoreNaturezaPai').load();
                }
            },
            failure: function(response, ret) {
                Illi.app.Util.mensagemFalha();
            }
        });
    }
});