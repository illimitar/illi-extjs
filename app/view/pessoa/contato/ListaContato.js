Ext.define('Illi.view.pessoa.contato.ListaContato', {
    extend: 'Illi.view.AbstractList',
    requires: [
        'Illi.view.pessoa.contato.ComboTipoContato'
    ],
    alias: 'widget.pessoaListaContato',
    title: null,
    emptyText: "Nenhum registro Encontrado",
    tbar: {
        items: [
            {
                text: 'Incluir',
                action: 'incluirContato',
                iconCls: 'icon-adicionar',
                itemId: 'incluir'

            }
            ,
            {
                text: 'Atualizar',
                handler: function() {
                    me.store.load();
                },
                iconCls: 'icon-atualizar',
                itemId: 'atualizar'
            }
        ]
    },
    initComponent: function() {

        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.Contatos'),
            plugins: Illi.app.Util.setPlugins({
                'rowediting': {
                    ptype: 'rowediting',
                    errorSummary: false,
                    listeners: {
                        validateedit: function(editor, e, opt) {
                            e.record.commit();
                        },
                        afterEdit: function(editor, grid, opt) {
                            var store = editor.grid.store;
                            if (store.getModifiedRecords()[0]) {
                                grid.grid.el.mask('Salvando...');
                            }
                            store.sync({
                                callback: function() {
                                    editor.grid.el.unmask();
                                    editor.grid.store.sort('id', 'DESC');
                                }
                            });
                        },
                        beforeEdit: function(editor, grid, opt) {
                            if (editor.grid.store.isGrouped()) {
                                Ext.MessageBox.show({
                                    title: 'Alerta',
                                    msg: 'Desagrupe antes de Editar!',
                                    icon: Ext.MessageBox.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                                return false;
                            }
                        }
                    }
                }
            }),
            columns: {
                defaults: {
                    flex: 1,
                    editor: true
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        width: 25,
                        hidden: true
                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'tp.tipo',
                        editor: {
                            xtype: 'ComboTipoContato',
                            name: 'tp.tipo',
                            fieldLabel: null,
                            allowBlank: false
                        }
                    },
                    {
                        header: 'Valor',
                        dataIndex: 'valor'
                    },
                    {
                        header: 'Contato',
                        dataIndex: 'contato'
                    },
                    {
                        header: 'Ativo',
                        dataIndex: 'situacao',
                        value: 'S',
                        editor: Ext.create('Ext.form.field.ComboBox', {
                            name: 'situacao',
                            store: ['ATIVO', 'DESATIVO'],
                            selectOnTab: true,
                            lazyRender: true,
                            forceSelection: true
                        })
                    }
                ]
            }
        });
        me.callParent(arguments);
    },
    listeners: {
        beforerender: function(grid) {
            grid.store.filter({"property": "p.id", "value": this.up('window').id_pessoa, "type": "int", "operator": "eq"});
        }
    }



});