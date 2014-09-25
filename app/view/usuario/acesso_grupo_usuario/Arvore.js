Ext.define('Illi.view.usuario.acesso_grupo_usuario.Arvore', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.acessoGrupoUsuarioArvore',
    title: null,
    rootVisible: false,
    useArrows: true,
    id_grupo_usuario: null,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            store: Ext.create('Ext.data.TreeStore', {
                storeId: 'treStoreAcessoGrupoUsuario',
                remoteFilter: true,
                autoLoad: false,
                proxy: {
                    type: 'ajax',
                    url: '../usuario/acesso_grupo_usuario/iJson/arvore',
                    noCache: false,
                    extraParams: {
                        id_grupo_usuario: me.id_grupo_usuario
                    },
                    actionMethods: {
                        read: 'POST'
                    }
                }
            }),
            listeners: {
                checkchange: function(node, checked) {
                    node.cascadeBy(function(n) {
                        n.set('checked', checked);
                    });
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