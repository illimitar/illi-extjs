Ext.define('Illi.view.movimentacao.conferencia.pagamento.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaPagamentoConferenciaMovimentacao',
    itemId: 'listaPagamentoConferenciaMovimentacao',
    emptyText: "Nenhum registro Encontrado",
    totalPedido: false,
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            enableColumnHide: false,
            enableColumnMove: false,
            enableColumnResize: false,
            sortableColumns: false,
            autoScroll: true,
            store: Ext.create('Ext.data.JsonStore', {
                storeId: 'tabelaPagamentoConferencia',
                autoSync: true,
                fields: [
                    {name: 'id', type: 'int'},
                    {name: 'id_fluxo', type: 'int'},
                    {name: 'id_prazo', type: 'int'},
                    {name: 'descricao'},
                    {
                        name: 'data_vencimento',
                        type: 'date',
                        dateFormat: 'Y-m-d'

                    },
                    {name: 'valor', type: 'float'},
                    {name: 'valor_final', type: 'float'},
                    {name: 'situacao'},
                    {name: 'situacao_antigo'}
                ],
                proxy: {
                    type: 'memory',
                    reader: {
                        type: 'json'
                    }
                },
                listeners: {
//                    update: {
//                        element: this,
//                        fn: function(store, record, operation, modifiedFieldNames, eOpts) {
//                            if (operation === Ext.data.Model.EDIT) {
//                                var column = new String(modifiedFieldNames);
//                                column = column.valueOf();
//                                if (column === "situacao") {
//                                    var totalPagoField = me.up('#janelaPagamentoConferenciaMovimentacao').down('#id_total_pago');
//                                    var totalPago = me.down('#totalPago');
//                                    var valor = record.get("valor");
//                                    var total = totalPagoField.getValue();
//                                    switch (record.get("situacao")) {
//                                        case 'Aberto':
//                                        case 'Pré Baixa':
//                                        case 'Vencido':
//                                        case 'Vencendo':
//                                            total = total + valor;
//                                            break;
//                                        case 'Baixado':
//                                        case 'Cancelado':
//                                        case 'Arquivado':
//                                            total = total - valor;
//                                            break;
//                                    }
//                                    totalPago.setText('Total Pago: ' + Illi.app.Util.valorRenderer(total));
//                                    totalPagoField.setValue(total);
//                                }
//                            }
//                        }
//                    },
                    datachanged: {
                        element: this,
                        fn: function (store) {
                            var totalPagoField = me.up('#janelaPagamentoConferenciaMovimentacao').down('#id_total_pago');
                            var totalPedidoField = me.up('#janelaPagamentoConferenciaMovimentacao').down('#id_total_pedido');
                            var totalAPagarField = me.up('#janelaPagamentoConferenciaMovimentacao').down('#id_valor_pago');
                            var totalPago = me.down('#totalPago');
                            var valor = store.sum('valor_final');
                            var diferenca = totalPedidoField.getValue() - valor;
                            totalPago.setText('Total Pago: ' + Illi.app.Util.valorRenderer(valor));
                            totalPagoField.setValue(valor);
                            totalAPagarField.setValue(diferenca > 0 ? diferenca : 0);


//                            var storeCancelados = win.down('#pdvListaItensCancelados').getStore();
//                            var qtd = store.getCount() - storeCancelados.getCount();
//                            win.quantidadeVenda = qtd;
//                            win.totalVenda = store.sum('valor_total') - storeCancelados.sum('valor_total');
//                            win.totalDesconto = (win.totalVenda > 0 ? (win.totalDesconto || 0) : 0);
//                            win.down('#pdvVendaQuantidade').update(win.quantidadeVenda > 0 ? win.quantidadeVenda : '0');
//                            if (win.totalDesconto > 0) {
//                                win.down('#pdvVendaTotal').update((win.totalDesconto ? '(-' + Illi.app.Util.floatRenderer(win.totalDesconto) + ') = ' : '') + Illi.app.Util.valorRenderer(win.totalVenda - win.totalDesconto));
//                            } else {
//                                win.down('#pdvVendaTotal').update(Illi.app.Util.valorRenderer(win.totalVenda));
//                            }
//                            me.getView().focusRow(store.getCount() - 1);
//                            var row = store.getAt(store.getCount() - 1);
//                            if (row) {
//                                win.down('#pdvProdutoQtd').update(Illi.app.Util.floatRenderer(row.get('quantidade')) + ' x ');
//                                win.down('#pdvProdutoNome').update(row.get('descricao'));
//                                win.down('#pdvProdutoTotal').update(Illi.app.Util.valorRenderer(row.get('valor_total')));
//                            }
                        }
                    }
                }
            }),
            columns: {
                defaults: {
                    menuDisabled: true
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        hidden: true
                    },
                    {
                        header: 'Título',
                        dataIndex: 'id_fluxo'
                    },
                    {
                        header: 'ID PRAZO',
                        dataIndex: 'id_prazo',
                        hidden: true
                    },
                    {
                        header: 'Forma Pagamento',
                        flex: 1,
                        dataIndex: 'descricao'
                    },
                    {
                        header: 'Valor',
                        dataIndex: 'valor',
                        align: 'right',
                        renderer: Illi.app.Util.valorRenderer
                    },
                    {
                        header: 'Valor Final',
                        dataIndex: 'valor_final',
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        summaryRenderer: function (value) {
                            return '<span style="font-size:14px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        },
                        hidden: true
                    },
                    {
                        header: 'Data Vencimento',
                        dataIndex: 'data_vencimento',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y')
                    },
                    {
                        header: 'Situação',
                        dataIndex: 'situacao'
                    },
                    {
                        header: 'Situação Antiga',
                        dataIndex: 'situacao_antigo',
                        hidden: true
                    },
                    {
                        xtype: 'actioncolumn',
                        flex: false,
                        width: 30,
                        items: [
                            {
                                icon: Illi.app.Util.getPath("/resources/images/icones/acao/editar.png"),
                                tooltip: 'Cancelar / Restaurar',
                                handler: function (grid, rowIndex, colIndex, action) {
                                    var store = grid.getStore();
                                    var record = store.getAt(rowIndex);
                                    var doNovaSituacao = function (situacao, valor_final) {
                                        record.set("situacao_antigo", record.get("situacao"));
                                        record.set("situacao", situacao);
                                        record.set("valor_final", valor_final);
                                    };
                                    var doVoltarSituacaoAnterior = function () {
                                        record.set("situacao", record.get("situacao_antigo"));
                                        record.set("situacao_antigo", "");
                                        record.set("valor_final", record.get("valor"));
                                    };
                                    if (record.get("id_fluxo") !== 0) {
                                        if (record.get("situacao_antigo") !== "") {
                                            doVoltarSituacaoAnterior();
                                        } else {
                                            var situacao = record.get("situacao");
                                            switch (situacao) {
                                                case 'Aberto':
                                                case 'Pré Baixa':
                                                case 'Vencido':
                                                case 'Vencendo':
                                                case 'Baixado':
                                                    doNovaSituacao("Cancelado", 0.00);
                                                    break;
                                                case 'Cancelado':
                                                case 'Arquivado':
                                                    Ext.MessageBox.alert('Atenção', 'Este título já está cancelado ou arquivado, não pode ser restaurado!', Ext.emptyFn);
                                                    break;
                                            }
                                        }
                                    } else {
                                        store.removeAt(rowIndex);
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'filterbar': false,
                'rowediting': false
            }),
            viewConfig: {
                forceFit: true,
                showPreview: true,
                enableRowBody: true,
                getRowClass: function (record, index) {
                    var situacao = record.get('situacao');
                    switch (situacao) {
//                        case 'Aberto':
//                        case 'Pré Baixa':
//                        case 'Vencido':
//                        case 'Vencendo':
//                        case 'Baixado':
//                            doNovaSituacao("Cancelado", record.get("valor"));
//                            break;
                        case 'Cancelado':
                        case 'Arquivado':
                            return 'tituloDespesa';
                            break;
                    }
                }
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'btn-total',
                    border: false,
                    items: [
                        '->',
                        {
                            text: 'Total Pedido: ' + Illi.app.Util.valorRenderer(me.totalPedido),
                            itemId: 'totalPedido',
                            scale: 'large'
                        },
                        {
                            text: 'Total Pago: R$ 0,00',
                            itemId: 'totalPago',
                            scale: 'large'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function (grid) {
            var records = grid.retornoItens;
            var storeGrid = grid.getStore();
            var xCountGrid = 1;
            Ext.Array.each(records, function (item) {
                var valor_final = item.valor_titulo;
                var valor = valor_final;
                switch (item.situacao) {
                    case 'Baixado':
                        valor_final = item.valor_pago;
                        valor = valor_final;
                        break;
                    case 'Cancelado':
                    case 'Arquivado':
                        valor_final = 0.00;
                        break;
                }
                storeGrid.add({
                    'id': xCountGrid,
                    'id_fluxo': item.id_fluxo,
                    'id_prazo': item.id_prazo,
                    'descricao': item.descricao,
                    'data_vencimento': item.data_vencimento,
                    'valor': valor,
                    'valor_final': valor_final,
                    'situacao': item.situacao,
                    'situacao_antigo': ''
                });
                xCountGrid++;
            });
        }
    }
});
