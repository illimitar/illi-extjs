Ext.define('Illi.view.atendimento.Lista', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaAtendimento',
    itemId: 'listaAtendimento',
    title: null,
    emptyText: "Nenhum registro encontrado",
    requires: [
    ],
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            store: "atendimento.Atendimentos",
            edicao: false,
            selModel: {
                mode: 'MULTI'
            },
            tbar: {
                items: [
                    {
                        text: "Incluir",
                        action: 'incluir',
                        tooltip: '<b>Incluir</b> Movimento de Atendimento',
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'
                    },
                    {
                        text: 'Parecer',
                        iconCls: 'icon-parecer',
                        action: 'listarParecer',
                        itemId: 'listarParecer'
                    },
                    {
                        text: 'Cancelar',
                        iconCls: 'icon-cancelar',
                        action: 'cancelar'
                    }

                ]
            },
            columns: {
                defaults: {
                    filter: true,
                    editor: true
                },
                items: [
                    {
                        xtype: 'actioncolumn',
                        menuDisabled: true,
                        sortable: false,
                        filter: false,
                        width: 25,
                        items: [{
                                icon: '../resources/images/icones/acao/visualizar.png',
                                tooltip: 'Imprimir ou Visualizar'
                            }]
                    },
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        editor: false,
                        filter: {
                            'type': 'int'
                        }
                    },
                    {
                        header: 'Tipo',
                        dataIndex: 'tipo'
                    },
                    {
                        header: 'Titulo',
                        dataIndex: 'titulo',
                        flex: 1
                    },
                    {
                        header: 'Descrição',
                        dataIndex: 'descricao',
                        hidden: true,
                        flex: 1
                    },
                    {
                        header: 'Parceiro',
                        dataIndex: 'p.nome'
                    },
                    {
                        header: 'Responsável',
                        dataIndex: 'r.nome'
                    },
                    {
                        header: 'Data',
                        dataIndex: 'data',
                        hidden: true,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        width: 100
                    },
                    {
                        header: 'Abertura',
                        dataIndex: 'abertura',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        width: 100
                    },
                    {
                        header: 'Atendimento',
                        dataIndex: 'atendimento',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        width: 100
                    },
                    {
                        header: 'Finalizado',
                        dataIndex: 'finalizado',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        width: 100
                    },
                    {
                        header: 'Cancelado',
                        dataIndex: 'cancelado',
                        hidden: true,
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        width: 100
                    },
                    {
                        header: 'Situação',
                        dataIndex: 'situacao',
                        width: 80
                    }
                ]
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: Ext.getStore("atendimento.Atendimentos"),
                    dock: 'bottom',
                    displayInfo: true
                }
            ]
        });
        me.callParent(arguments);
    },
    onRender: function () {
        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange', this.selecionar, this);
        // this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
    },
    selecionar: function (selModel, selections) {
        try {
            alert(selections[0].getData());
//            if (selections[0].get('situacao') === "Confirmado") {
//                this.down('#confirmar').setText('Estornar');
//                this.down('#confirmar').action = 'estornar';
//                this.down('#confirmar').setDisabled(this.ativarBotao('estornar'));
//            } else {
//                this.down('#confirmar').setText('Confirmar');
//                this.down('#confirmar').action = 'confirmar';
//            }
        } catch (err) {
            error(err);
        }

    }
});
