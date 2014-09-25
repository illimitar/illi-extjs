Ext.define('Illi.view.produto.produto.ListaProdutoGrade', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaProdutoGrade',
    title: null,
    itemId: 'listaProdutoGrade',
    tipo: null,
    border: false,
    bodyBorder: false,
    emptyText: "Nenhum registro encontrado",
    requires: [
        'Illi.view.ComboSituacao',
        'Illi.view.produto.grade.Combo',
        'Illi.view.produto.grade.grupo_grade.Combo'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            verificarProduto: function() {
                var id_produto = me.up('#produtoJanela').id_produto;
                if (id_produto) {
                    me.down('#gerarGrade').setDisabled(false);
                    me.down('#selecionarTodos').setDisabled(false);
                    me.down('#salvarGrade').setText("Salvar Grade");
                    me.down('#salvarGrade').action = "salvarGrade";
                } else {
                    me.down('#salvarGrade').setText("Salvar");
                    me.down('#salvarGrade').action = "salvar";
                    me.down('#gerarGrade').setDisabled(true);
                    me.down('#selecionarTodos').setDisabled(true);
                }
            },
            selModel: {
                selType: 'cellmodel',
                mode: 'SIMPLE'
            },
            bbar: {
                items: [
                    '->',
                    {
                        text: 'Preço (Grade)',
                        action: 'precoGrade',
                        grade: true,
                        iconCls: 'icon-preco',
                        itemId: 'janelaPrecoGrade'
                    },
                    {
                        text: 'Marcar/Desmarcar (Todos)',
                        action: 'selecionarTodos',
                        iconCls: 'icon-preco',
                        itemId: 'selecionarTodos'
                    }
                ]
            },
            tbar: {
                items: [
                    {
                        xtype: 'comboGrupoGrade',
                        itemId: 'comboGradex',
                        name: 'gradex',
                        padding: '5 5 0 5',
                        labelWidth: 70,
                        width: '30%',
                        fieldLabel: 'Horizontal',
                        tipo: 'X'
                    },
                    {
                        xtype: 'comboGrupoGrade',
                        itemId: 'comboGradey',
                        padding: '5 5 0 5',
                        labelWidth: 70,
                        width: '30%',
                        name: 'gradey',
                        fieldLabel: 'Vertical',
                        tipo: 'Y'
                    },
                    {
                        text: 'Gerar Grade',
                        action: 'gerarGrade',
                        iconCls: 'icon-grupo',
                        itemId: 'gerarGrade'
                    },
                    {
                        text: 'Salvar Grade',
                        action: 'salvarGrade',
                        iconCls: 'icon-salvar',
                        itemId: 'salvarGrade'
                    },
                    '->',
                    {
                        text: 'Complemento (F12)',
                        action: 'complementoGrade',
                        iconCls: 'icon-salvar',
                        itemId: 'complementoGrade',
                        disabled: true
                    }
                ]
            },
            store: Ext.create('Illi.store.produto.ProdutoGrades'),
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 2
                })
            ],
            columns: {
                defaults: {
                    filter: false,
                    flex: 1,
                    editor: {
                        allowBlank: false
                    }
                },
                items: []
            }
//,
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            grid.verificarProduto();
            // grid.store.proxy.extraParams = {'id_produto': grid.id_produto};
            //  var store = Ext.getStore(grid.id_produto + 'listaCodigo');
            // store.proxy.extraParams = {'id_produto': grid.id_produto};
            //grid.store.load();
            //store.load();
            grid.getEl().addKeyMap({
                binding: [
                    {
                        key: Ext.EventObject.F12,
                        fn: function(keyCode, e) {
                            grid.down('#complementoGrade').fireHandler();
                        }, scope: grid, defaultEventAction: 'preventDefault'
                    }
                ]
            });
        },
        selectionchange: function(sm, selections) {
            var pos = sm.getCurrentPosition();
            if (selections.length === 1) {
                this.down('#complementoGrade').setDisabled(false);
            } else {
                this.down('#complementoGrade').setDisabled(true);
            }

            if (pos) {
                var janela = this.up('#produtoJanela');
                var descricao = janela.down('#formProduto').down('textfield[name=p.nome]').getValue() + ' ' + pos.columnHeader.text + ' ' + sm.getStore().getAt(pos.row).get('vertical');
                var gradex = sm.getStore().getAt(pos.row).get('id');
                var gradey = pos.columnHeader.gradey;
                var id_produto = janela.id_produto;
                var id_produto_grade = null;

                if (janela.produto['p.tipo'] === 'Grade') {
                    try {
                        janela.id_produto_grade = this.tabela[gradex][gradey];
                        this.down('#complementoGrade').setDisabled(false);
                    } catch (e) {
                        error(e);
                        this.down('#complementoGrade').setDisabled(true);
                    }
                }
                id_produto_grade = janela.id_produto_grade;

                janela.gradex = gradex;
                janela.gradey = gradey;
                janela.descricao = descricao.toUpperCase();
                var store = Ext.getStore(janela.id_produto + 'listaCodigo');
                if (store) {
                    var filtro = {
                        'gradex': gradex,
                        'gradey': gradey,
                        'id_produto': id_produto,
                        'id_produto_grade': id_produto_grade,
                        'tipo': janela.produto['p.tipo']
                    };
                    store.proxy.extraParams = filtro;
                    store.load();
                }
            }
        }
    }
});
