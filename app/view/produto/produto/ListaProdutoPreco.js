Ext.define('Illi.view.produto.produto.ListaProdutoPreco', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaProdutoPreco',
    title: null,
    itemId: 'listaProdutoPreco',
    tipo: null,
    border: false,
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.ComboSituacao'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            selModel: {
                selType: 'cellmodel',
                mode: 'SIMPLE'
            },
            tbar: {
                items: [
                    {
                        text: 'Salvar Preço',
                        action: 'salvarPreco',
                        iconCls: 'icon-salvar',
                        itemId: 'salvarPreco'
                    },
                    {
                        text: 'Alterar Grupo',
                        action: 'alterarPrecoGrupo',
                        iconCls: 'icon-salvar',
                        itemId: 'alterarPrecoGrupo'
                    },
                    {
                        text: 'Atualizar',
                        action: 'gerarGradePreco',
                        iconCls: 'icon-salvar',
                        itemId: 'gerarGradePreco'
                    }
                ]
            },
            //store: Ext.create('Illi.store.produto.ProdutoPrecos'),
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 2//,
//                    listeners: {
//                        edit: function(editor, e, opt) {
//                            var store = Ext.getStore((e.grid.storeNome !== undefined ? e.grid.storeNome : 'listaPrecoProdutoGrade'));
//                            if (store.preco_unico === true) {
//                                var pv = e.record.get('1');
//                                var pc = e.record.get('2');
//                                store.each(function(rec) {
//                                    rec.set('1', pv);
//                                    rec.set('2', pc);
//                                    rec.commit();
//                                });
//                            }
//                        }
//                    }
                })
            ],
            columns: {
                defaults: {
                    filter: false,
                    flex: 1,
                    editor: Illi.app.Util.campoMoeda('valor'),
                    renderer: function(valor) {
                        if (valor > 0) {
                            return Illi.app.Util.valorRenderer(valor);
                        } else {
                            return valor;
                        }
                    }
                },
                items: []
            }
        });
        me.callParent(arguments);
    }
});
