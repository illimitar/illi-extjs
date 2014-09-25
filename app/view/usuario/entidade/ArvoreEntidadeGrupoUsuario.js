Ext.define('Illi.view.usuario.entidade.ArvoreEntidadeGrupoUsuario', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.arvoreEntidadeGrupoUsuario',
    title: null,
    rootVisible: false,
    useArrows: true,
    id_entidade: null,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            store: Ext.create('Ext.data.TreeStore', {
                storeId: 'treeStoreEntidadeGrupoUsuario',
                remoteFilter: true,
                autoLoad: false,
                proxy: {
                    type: 'ajax',
                    url: '../usuario/entidade/iJson/arvore',
                    noCache: false,
                    extraParams: {
                        id_entidade: me.id_entidade
                    },
                    actionMethods: {
                        read: 'POST'
                    }
                }
            }),
            listeners: {
                checkchange: function(node, checked) {
                    node.parentNode.cascadeBy(function(n) {
                        if (node.internalId !== n.internalId) {
                            n.set('checked', false);
                        }
                    });
                    node.parentNode.set('checked', null);
                }
            },
            tbar: {
                items: [
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
            bbar: {
                items: [
                    {
                        text: 'Salvar',
                        action: 'salvar',
                        iconCls: 'icon-salvar',
                        itemId: 'salvar'
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});