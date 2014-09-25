Ext.define('Illi.view.relatorio.listaPessoa', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaPessoa',
    title: null,
    itemId: 'listaPessoaRelatorio',
    idStorePessoa: 'pessoasRelatorio',
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.pessoa.grupo_pessoa.ComboGrupoPessoa'
    ],
    initComponent: function() {
        var me = this;
        me.store = Ext.create('Ext.data.Store', {
            model: 'Illi.model.Pessoa',
            autoSync: true,
            autoDestroy: true,
            storeId: me.idStorePessoa,
            proxy: {
                type: 'memory'
            }
        }),
        Ext.apply(me, {
            plugins: [{
                    ptype: 'rowediting',
                    clicksToEdit: 0,
                    errorSummary: false
                }],
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
                        iconCls: 'icon-adicionar',
                        handler: function(btn) {
                            var grid = btn.up('grid');
                            var store = grid.store;
                            store.insert(0, 0);
                            grid.editingPlugin.startEdit(0, 0);
                        }
                    },
                    {
                        text: 'Limpar',
                        scope: this,
                        iconCls: 'icon-cancelar',
                        handler: function(btn) {
                            btn.up('grid').store.removeAll();
                        }
                    }
                ]
            },
            columns: {
                defaults: {
                    filter: false,
                    editor: false
                },
                items: [
                    {
                        header: 'Parceiro',
                        dataIndex: 'id',
                        flex: 1,
                        editor: {
                            xtype: 'financeiroComboPessoa',
                            fieldLabel: null,
                            trigger2Cls: null,
                            valueField: 'nome'
                        }
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
//    onSelectChange: function(selModel, selections) {
//    },
//    onRender: function() {
//        this.store.load();
//        this.callParent(arguments);
//    }
});