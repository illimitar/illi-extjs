Ext.define('Illi.view.financeiro.EditValor', {
    extend: 'Ext.window.Window',
    requires: ['Ext.ux.TextMaskPlugin'],
    alias: 'widget.editValor',
    title: 'Alterar Valor Pago!',
    layout: 'fit',
    valorTitulo: null,
    closable: false,
    autoShow: true,
    calcular: true,
    modal: true,
    calculaValor: function() {
        var form = this.down('form').getForm();
        var valores = form.getFieldValues();

        if (this.calcular) {
            valores.valor_pago = this.valorTitulo;
            valores.valor_pago = parseFloat(parseFloat(this.valorTitulo) + parseFloat(valores.valor_multa) + parseFloat(valores.valor_juros) + parseFloat(valores.valor_acrescimo) - parseFloat(valores.valor_desconto)).toFixed(2);
        } else {
            this.calcular = true;
        }
        form.setValues(valores);
        this.mostraDesconto();
    },
    valorPago: function() {
        var form = this.down('form').getForm();
        var valores = form.getFieldValues();

        if (this.calcular) {

            valores.valor_multa = 0;
            valores.valor_desconto = 0;
            valores.valor_acrescimo = 0;
            valores.valor_juros = 0;
            valores.valor_multa = 0;


        }

        var diferenca = parseFloat(this.valorTitulo) - parseFloat(valores.valor_pago).toFixed(2);

        if (diferenca > 0) {
            valores.valor_desconto = diferenca;
        } else {
            valores.valor_acrescimo = -diferenca;
        }

        form.setValues(valores);

        this.calcular = false;
        this.calculaValor();


    },
    mostraDataVencimento: function(mostrar) {
        Ext.ComponentQuery.query('#dataVencimento')[0].setVisible(mostrar);
    },
    mostraDesconto: function() {
        var form = this.down('form').getForm();
        var valores = form.getFieldValues();
        Ext.ComponentQuery.query('#containerRestoIlli')[0].setVisible(parseBoolean(parseFloat(this.valorTitulo) - parseFloat(valores.valor_pago)));
        Ext.ComponentQuery.query('#dataVencimento')[0].setVisible(parseBoolean(parseFloat(this.valorTitulo) - parseFloat(valores.valor_pago)));


        function parseBoolean(valor) {
            if (valor > 0) {
                return true;
            } else {
                return false;
            }
        }
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            items: [{
                    xtype: 'form',
                    itemId: 'formEditValor',
                    padding: '5 5 0 5',
                    border: false,
                    defaultType: 'textfield',
                    defaults: {
                        anchor: '100%',
                        labelAlign: 'left',
                        labelWidth: 150,
                        allowZero: true,
                        listeners: {
                            blur: function(obj, the, opt) {
                                me.calculaValor();
                            }
                        }
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'id',
                            fieldLabel: 'id',
                            hidden: true
                        },
                        {
                            plugins: 'textmask',
                            mask: 'R$ #9.999.990,00',
                            money: true,
                            name: 'valor_titulo',
                            fieldLabel: 'Valor Titulo',
                            disabled: true,
                            fieldCls: 'filtro',
                            disabledCls: false


                        },
                        {
                            plugins: 'textmask',
                            mask: 'R$ #9.999.990,00',
                            money: true,
                            itemId: 'valorPago',
                            name: 'valor_pago',
                            minValue: 0,
                            fieldCls: 'filtro',
                            fieldLabel: 'Valor Pago',
                            listeners: {
                                blur: function(obj, the, opt) {
                                    me.valorPago();
                                }
                            }

                        },
                        {
                            plugins: 'textmask',
                            mask: 'R$ #9.999.990,00',
                            money: true,
                            name: 'valor_multa',
                            labelStyle: 'color:blue',
                            fieldCls: 'entrada',
                            fieldLabel: 'Valor Multa'

                        },
                        {
                            plugins: 'textmask',
                            mask: 'R$ #9.999.990,00',
                            money: true,
                            name: 'valor_juros',
                            labelStyle: 'color:blue',
                            fieldCls: 'entrada',
                            fieldLabel: 'Valor Juros'


                        },
                        {
                            plugins: 'textmask',
                            mask: 'R$ #9.999.990,00',
                            money: true,
                            name: 'valor_acrescimo',
                            labelStyle: 'color:blue',
                            fieldCls: 'entrada',
                            fieldLabel: 'Valor Acréscimo'


                        },
                        {
                            plugins: 'textmask',
                            mask: 'R$ #9.999.990,00',
                            money: true,
                            labelStyle: 'color:red',
                            fieldCls: 'saida',
                            itemId: 'valorDesconto',
                            name: 'valor_desconto',
                            fieldLabel: 'Valor Saldo '

                        },
                        {
                            xtype: 'fieldcontainer',
                            fieldLabel: 'Saldo Restante',
                            hidden: true,
                            itemId: 'containerRestoIlli',
                            items: [
                                {
                                    boxLabel: 'Considerar Desconto',
                                    xtype: 'radiofield',
                                    name: 'resto',
                                    inputValue: 'D'
                                },
                                {
                                    xtype: 'radiofield',
                                    boxLabel: 'Gerar Novo Titulo',
                                    name: 'resto',
                                    checked: true,
                                    inputValue: 'T',
                                    handler: function(a, b, c) {
                                        me.mostraDataVencimento(b);
                                    }
                                }
                            ]

                        },
                        {
                            xtype: 'datefield',
                            itemId: 'dataVencimento',
                            name: 'data_vencimento',
                            ref: 'data_vencimento',
                            fieldLabel: 'Data Vencimento',
                            minValue: new Date(),
                            format: 'd/m/Y',
                            submitFormat: 'Y-m-d',
                            allowBlank: false,
                            hidden: true
                        }

                    ]
                }
            ],
            buttons: [{
                    text: 'Salvar',
                    iconCls: 'icon-salvar',
                    handler: function() {
                        var form = me.down('form').getForm();
                        var values = form.getFieldValues();
                        values.data_vencimento = Ext.Date.format(values.data_vencimento, 'Y-m-d 00:00:00');
                        if (values) {
                            Ext.Ajax.request({
                                url: '../fluxo/fluxo/iJson/negociar',
                                method: 'POST',
                                params: {
                                    data: Ext.JSON.encode(values)
                                }
                                ,
                                success: function(arquivo) {
                                    var retorno = Ext.JSON.decode(arquivo.responseText);
                                    if (retorno.situacao) {
                                        Ext.ux.Msg.flash({
                                            msg: retorno.msg,
                                            type: 'success'
                                        });
                                        me.close();
                                    } else {
                                        Ext.ux.Msg.flash({
                                            msg: 'Ocorreu algum erro tente novamente',
                                            type: 'error'
                                        });
                                    }
                                }
                            });
                        }
                    }


                },
                {
                    text: 'Cancelar',
                    scope: this,
                    iconCls: 'icon-cancelar',
                    handler: this.close
                }]
        });
        me.callParent(arguments);
    }
});