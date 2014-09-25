Ext.define('Illi.view.boleto.GerarBoleto', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.gerarBoleto',
    title: null,
    itemId: 'gerarBoleto',
    emptyText: "Nenhum registro encontrado",
    border: false,
    requires: [
        'Ext.toolbar.Toolbar',
        'Illi.view.usuario.entidade.Combo',
        'Illi.view.pessoa.Combo',
        'Illi.view.financeiro.prazo.Combo'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: 'BoletoFinanceiros',
            tbar: {
                items: [{
                        iconCls: 'icon-boleto',
                        text: 'Gerar Boletos',
                        action: 'gerarBoletos'
                    }]
            },
            columns: {
                defaults: {
                    filter: true,
                    editor: false
                },
                item: [
                    {
                        header: 'Numero',
                        dataIndex: 'numero'
                    },
                    {
                        header: 'Empresa',
                        dataIndex: 'e.nome',
                        filter: {
                            type: 'list',
                            labelField: 'nome',
                            store: Ext.create('Illi.store.Entidades')
                        }
                    },
                    {
                        header: 'Parceiro',
                        dataIndex: 'id_pessoa',
                        renderer: function(value, metaData, record) {
                            if (record.get('parceiro')) {
                                return record.get('parceiro');
                            } else {
                                return value;
                            }
                        }
                    },
                    {
                        header: 'Dt. Emissão Titulo',
                        dataIndex: 'data_emissao',
                        xtype: 'datecolumn',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        filter: {
                            type: 'date',
                            format: 'd/m/Y',
                            afterText: 'Após',
                            beforeText: 'Antes',
                            onText: 'Igual'
                        }
                    },
                    {
                        header: 'Dt. Venc. Titulo',
                        dataIndex: 'data_vencimento',
                        xtype: 'datecolumn',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                        filter: {
                            type: 'date',
                            format: 'd/m/Y',
                            afterText: 'Após',
                            beforeText: 'Antes',
                            onText: 'Igual'
                        }
                    },
                    {
                        header: 'Dt. Emissão Boleto',
                        dataIndex: 'data_documento',
                        xtype: 'datecolumn',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s'),
                        filter: {
                            type: 'date',
                            format: 'd/m/Y',
                            afterText: 'Após',
                            beforeText: 'Antes',
                            onText: 'Igual'
                        }
                    },
                    {
                        header: 'Vl. Titulo',
                        renderer: Illi.app.Util.valorRenderer,
                        summaryType: 'sum',
                        dataIndex: 'valor_titulo',
                        align: 'right',
                        summaryRenderer: function(value) {
                            return '<span style="font-size:10px;font-weight:bold;">' + Illi.app.Util.valorRenderer(value) + '</span>';
                        }
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});