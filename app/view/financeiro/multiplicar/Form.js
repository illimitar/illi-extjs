Ext.define('Illi.view.financeiro.multiplicar.Form', {
    extend: 'Ext.window.Window',
    alias: 'widget.multiplicarForm',
    layout: 'fit',
    id_fluxo: '',
    id_store: '',
    data_inicial: '',
    modal: true,
    initComponent: function() {
        var me = this;
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';

        Ext.apply(me, {
            scope: me,
            border: false,
            width: 300,
            height: 200,
            title: 'Multiplicar Titulo',
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start',
                frame: true,
                plain: true,
                border: false
            },
            items: [{
                    scope: me,
                    xtype: 'form',
                    bodyPadding: 10,
                    defaultType: 'textfield',
                    flex: 0.8,
                    border: false,
                    fieldDefaults: {
                        msgTarget: 'side',
                        labelWidth: 150,
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            fieldLabel: 'A partir De ',
                            afterLabelTextTpl: required,
                            value: me.data_inicial,
                            name: 'data_inicial',
                            submitFormat: 'Y-m-d',
                            allowBlank: false
                        },
                        {
                            xtype: 'numberfield',
                            name: 'repetir',
                            afterLabelTextTpl: required,
                            fieldLabel: 'Numero de Metas',
                            value: 2,
                            maxValue: 120,
                            minValue: 2
                        },
                        {
                            xtype: 'checkboxfield',
                            fieldLabel: 'Dia de Vencimento Fixo',
                            name: 'vencimento_fixo',
                            allowBlank: false,
                            checked: true,
                            handler: function() {
                                this.up('multiplicarForm').down('#intervaloDias').setVisible(!this.getValue());
                            }
                        },
                        {
                            xtype: 'numberfield',
                            itemId: 'intervaloDias',
                            name: 'intervalo_dia',
                            fieldLabel: 'Intervalo em Dias',
                            maxValue: 31,
                            minValue: 1,
                            hidden: true
                        },
                        {
                            xtype: 'hidden',
                            name: 'id_fluxo',
                            value: me.id_fluxo
                        }

                    ]

                }],
            buttons: [{
                    text: 'Gerar',
                    handler: function() {

                        var win = this.up('window');
                        var form = win.down('form');

                        Ext.MessageBox.wait('Salvando', 'Aguarde');
                        Ext.Ajax.request({
                            url: '../fluxo/fluxo/iJson/multiplicar',
                            params: {
                                data: Ext.JSON.encode(form.getValues())
                            },
                            success: function(response) {
                                try {
                                    var retorno = Ext.JSON.decode(response.responseText);
                                    Ext.MessageBox.hide();
                                    if (retorno) {
                                        Ext.getStore(me.id_store).load();

                                        var tipo = 'error';
                                        if (retorno.success) {
                                            tipo = 'success';
                                        }
                                        Ext.ux.Msg.flash({
                                            msg: retorno.message,
                                            type: tipo
                                        });
                                        win.close();
                                    }

                                } catch (e) {
                                    error(e);
                                }
                            }
                        });
                    },
                    iconCls: 'icon-salvar'
                }
            ]
        });
        me.callParent(arguments);
    }



});