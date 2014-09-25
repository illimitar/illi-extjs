Ext.define('Illi.view.banco.conta.FormTransferencia', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaTransferencia',
    title: 'Transferencia',
    layout: 'fit',
    requires: [
        'Illi.view.banco.conta.Combo',
        'Illi.view.natureza.Combo',
        'Ext.ux.TextMaskPlugin'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            width: 500,
            height: 320,
            scope: me,
            items: [{
                    xtype: 'form',
                    padding: '5 5 0 5',
                    bodyPadding: 10,
                    border: false,
                    fieldDefaults: {
                        anchor: '100%',
                        labelAlign: 'left',
                        labelWidth: 150,
                        allowBlank: false,
                        combineErrors: false,
                        msgTarget: 'side'
                    },
                    defaultType: 'textfield',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'start',
                        frame: true,
                        plain: true,
                        border: false
                    },
                    itemId: 'formTransferencia',
                    items: [
                        {
                            fieldLabel: 'Data',
                            name: 'data_lancamento',
                            xtype: 'datefield',
                            format: 'd/m/Y',
                            allowBlank: false
                        },
                        {
                            xtype: 'comboConta',
                            name: 'conta_origem',
                            fieldLabel: 'Conta Origem',
                            tooltip: 'Conta que <b>SAI</b> o Dinheiro',
                            fieldCls: 'saida',
                            displayField: 'nome'
                        },
                        {
                            xtype: 'comboConta',
                            name: 'conta_destino',
                            fieldCls: 'entrada',
                            tooltip: 'Conta que <b>ENTRA</b> o Dinheiro',
                            fieldLabel: 'Conta Destino',
                            displayField: 'nome'
                        },
                        {
                            xtype: 'comboNatureza',
                            name: 'id_natureza_lancamento',
                            fieldLabel: 'Tipo',
                            allowBlank: false,
                            tipo: 'TRANSFERENCIA',
                            store: Ext.create('Illi.store.Naturezas', {storeId: 'comboNaturezasTransferencia'})
                        },
                        {
                            plugins: 'textmask',
                            mask: 'R$ #9.999.990,00',
                            money: true,
                            itemId: 'valor',
                            name: 'valor',
                            minValue: 0.01,
                            fieldLabel: 'Valor '
                        },
                        {
                            xtype: 'textareafield',
                            name: 'observacao',
                            allowBlank: true,
                            fieldLabel: 'Observação'
                        }
                    ]
                }],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            iconCls: 'icon-salvar',
                            text: 'Salvar',
                            action: 'salvar'
                        },
                        {
                            text: 'Cancelar',
                            scope: this,
                            iconCls: 'icon-cancelar',
                            handler: this.close
                        }

                    ]
                }

            ]
        });
        me.callParent(arguments);
    }



});