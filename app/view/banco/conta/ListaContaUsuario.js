Ext.define('Illi.view.banco.conta.ListaContaUsuario', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaContaUsuario',
    itemId: 'listaContaUsuario',
    emptyText: "Nenhum registro encontrado",
    requeries: ['Illi.view.usuario.Combo'],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.UsuarioContas'),
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'

                    },
                    {
                        text: 'Excluir',
                        action: 'excluir',
                        iconCls: 'icon-remover',
                        itemId: 'excluir'

                    },
                    {
                        text: 'Atualizar',
                        action: 'atualizar',
                        iconCls: 'icon-atualizar',
                        handler: function() {
                            Ext.getStore('UsuarioContas').load();
                        }
                    }
                ]
            },
            columns: {
                defaults: {
                    filter: true
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id', // nome do campo no model
                        editor: false, // permite edição
                        hidden: true,
                        filter: {
                            'type': 'int'
                        }
                    },
                    {
                        header: 'Nome',
                        dataIndex: 'nome',
                        editor: {
                            xtype: 'comboUsuario'
                        },
                        flex: 1.5
                    }
                ]
            }
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            if (grid.id_conta) {
                grid.store.getProxy().extraParams = {'id_conta': grid.id_conta};
                grid.store.load();
            }
        }
    }
});