Ext.define('Illi.view.pessoa.tipo_pessoa.ListaTipoPessoa', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.pessoaListaTipoPessoa',
    title: null,
    emptyText: "Nenhum registro Encontrado",
    requires: [
        'Illi.view.pessoa.tipo_pessoa.ComboTipoPessoa'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.TipoPessoas', {storeId: 'listaTipoPessoa'}),
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluirTipoPessoa',
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'

                    }
                    ,
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
                        itemId: 'atualizar'
                    }
                ]
            },
            // store: 'Financeiros',
            columns: {
                defaults: {
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
                        dataIndex: 'id',
                        renderer: function(value, metaData, record) {
                            return record.get('tipo');
                        },
                        editor: {
                            xtype: 'ComboTipoPessoa',
                            fieldLabel: null,
                            allowBlank: false
                        },
                        flex: 1
                    }
                ]
            }
        });
        me.callParent(arguments);
        me.getSelectionModel().on('selectionchange', me.onSelectChange, me);
    },
    onRender: function() {
        this.callParent(arguments);
        this.down('#excluir').setDisabled(true);
        //this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
    },
    onSelectChange: function(selModel, selections) {
        if (this.ativarBotao('excluir')) {
            this.down('#excluir').setDisabled(selections.length !== 1);
        }
    },
    listeners: {
        beforerender: function(grid) {
            grid.store.filter({"property": "p.id", "value": this.up('window').id_pessoa, "type": "int", "operator": "eq"});
        }
    }
});