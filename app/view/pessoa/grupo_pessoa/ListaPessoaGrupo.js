Ext.define('Illi.view.pessoa.grupo_pessoa.ListaPessoaGrupo', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaPessoaGrupo',
    title: null,
    emptyText: "Nenhum registro Encontrado",
    requires: [
        'Illi.view.pessoa.grupo_pessoa.ComboGrupoPessoa',
        'Illi.view.ComboSituacao',
        'Illi.view.pessoa.Combo'
    ],
    idGrupo: null,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.Pessoas'),
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'
                    },
                    {
                        text: 'Atualizar',
                        action: 'atualizar',
                        iconCls: 'icon-atualizar',
                        itemId: 'atualizar'
                    }
                ]
            },
            columns: {
                defaults: {
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        width: 25,
                        filter: true
                    },
                    {
                        header: 'Parceiro',
                        dataIndex: 'id',
                        flex: 1,
                        editor: {
                            xtype: 'financeiroComboPessoa',
                            fieldLabel: null
                        },
                        renderer: function(value, metaData, record) {
                            return record.get('nome');
                        }
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
    ,
    onRender: function() {
        this.store.load();
        this.callParent(arguments);
        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
    },
    listeners: {
        beforerender: function(grid) {
            grid.store.filter({"property": "gp.id", "value": this.idGrupo, "type": "int", "operator": "eq"});
        }
    }
});