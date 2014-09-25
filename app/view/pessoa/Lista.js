Ext.define('Illi.view.pessoa.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.pessoaLista',
    itemId: 'pessoaLista',
    emptyText: "Nenhum registro encontrado",
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            edicao: false,
            store: Ext.create('Illi.store.Pessoas', {storeId: 'listaGridPessoa'}),
            stateful: true,
            stateId: 'pessoaLista',
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        iconCls: 'icon-adicionar',
                        action: 'incluir',
                        itemId: 'incluir'
                    },
                    {
                        text: 'Alterar',
                        action: 'alterar',
                        iconCls: 'icon-editar',
                        itemId: 'alterar'
                    },
                    {
                        text: 'Atualizar',
                        action: 'atualizar',
                        iconCls: 'icon-atualizar',
                        itemId: 'atualizar'
                    },
                    {
                        text: 'Imprimir Grade',
                        iconCls: 'icon-imprimir',
                        action: 'imprimir',
                        itemId: 'imprimir'
                    }
                ]
            },
            columns: {
                defaults: {
                    filter: true,
                    editor: false
                },
                items: [
                    {
                        xtype: 'rownumberer',
                        width: 30,
                        filter: false
                    },
                    {
                        header: 'ID',
                        dataIndex: 'id'
                    },
                    {
                        header: 'Nome',
                        dataIndex: 'nome',
                        flex: 1
                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'tipo'
                    },
                    {
                        header: 'Grupo',
                        dataIndex: 'gp.grupo',
                        flex: 0.3

                    },
                    {
                        header: 'Cidade',
                        dataIndex: 'c.cidade',
                        flex: 0.3,
                        hidden: true

                    },
                    {
                        header: 'Bairro',
                        dataIndex: 'b.bairro',
                        flex: 0.3,
                        hidden: true
                    },
                    {
                        header: 'UF',
                        dataIndex: 'c.uf',
                        flex: 0.3,
                        hidden: true
                    },
//                    {
//                        header: 'Nascimento / Criação',
//                        dataIndex: 'data_nascimento',
//                        flex: 0.3,
//                        renderer: Ext.util.Format.dateRenderer('d/m')
//                    },
                    {
                        filter: {
                            type: 'list',
                            store: [
                                [1, 'Janeiro'],
                                [2, 'Fevereiro'],
                                [3, 'Março'],
                                [4, 'Abril'],
                                [5, 'Maio'],
                                [6, 'Junho'],
                                [7, 'Julho'],
                                [8, 'Agosto'],
                                [9, 'Setembro'],
                                [10, 'Outubro'],
                                [11, 'Novembro'],
                                [12, 'Dezembro']
                            ]
                        },
                        dataIndex: 'mes_nascimento',
                        header: 'Mês Aniversário',
                        renderer: Ext.util.Format.dateRenderer('F')
                    },
                    {
                        header: 'CPF',
                        dataIndex: 'f.cpf',
                        width: 120,
                        renderer: function (value, metaData, record) {
                            if (record.get('tipo') === 'FISICA') {
                                if (value) {
                                    value = Ext.util.Format.TextMask.setMask('999.999.999-99').mask(value);
                                    return value;
                                }
                            }
                        }
                    },
                    {
                        header: 'CNPJ',
                        dataIndex: 'j.cnpj',
                        width: 150,
                        renderer: function (value, metaData, record) {
                            if (record.get('tipo') === 'JURIDICA') {
                                if (value) {
                                    value = Ext.util.Format.TextMask.setMask('99.999.999/9999-99').mask(value);
                                    return value;
                                }
                            }
                        }
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore('listaGridPessoa'),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function (grid) {
            grid.store.filter(grid.filtroInicial);
        }
    }
});