Ext.define('Illi.view.financeiro.pdv.ListaTabelaPreco', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaTabelaPreco',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            border: false,
            bodyBorder: false,
            enableColumnHide: false,
            enableColumnMove: false,
            enableColumnResize: false,
            sortableColumns: false,
            autoScroll: true,
            store: Ext.create("Illi.store.produto.Precos"),
            columns: {
                defaults: {
                    menuDisabled: true
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id', // nome do campo no model
                        hidden: true
                    },
                    {
                        header: 'Código',
                        dataIndex: 'j.cnpj',
                        renderer: function(valor, b, record) {
                            if (valor) {
                                valor = Ext.util.Format.TextMask.setMask('99.999.999/9999-99').mask(valor);
                            } else {
                                valor = record.get('f.cpf');
                                if (valor) {
                                    valor = Ext.util.Format.TextMask.setMask('999.999.999-99').mask(valor);
                                } else {
                                    valor = record.get('id');
                                }
                            }
                            return valor;
                        },
                        align: 'right',
                        flex: 0.5
                    },
                    {
                        header: 'Nome',
                        dataIndex: 'nome',
                        flex: 1
                    }
                ]
            },
            plugins: Illi.app.Util.setPlugins({
                'rowediting': false
            })
        });
        me.callParent(arguments);
        me.store.proxy.extraParams = {
            'tipo': "VENDA"
        };
        me.store.load();
    }
});