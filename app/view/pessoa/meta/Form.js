Ext.define('Illi.view.pessoa.meta.Form', {
    extend: 'Ext.window.Window',
    alias: 'widget.formMeta',
    layout: 'fit',
    meta: false,
    modal: true,
    initComponent: function() {
        var me = this;
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';

        Ext.apply(me, {
            scope: me,
            border: false,
            width: 300,
            height: 200,
            title: 'Multiplicar Meta',
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
                            value: me.meta.data_inicio,
                            name: 'data_inicial',
                            submitFormat: 'Y-m-d',
                            allowBlank: false
                        },
                        {
                            xtype: 'numberfield',
                            name: 'repetir',
                            afterLabelTextTpl: required,
                            fieldLabel: 'Numero de Titulos',
                            value: 2,
                            maxValue: 120,
                            minValue: 2
                        },
                        {
                            xtype: 'checkboxfield',
                            fieldLabel: 'Mensal',
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
                            url: '../pessoa/meta/iJson/multiplicar',
                            params: {
                                data: Ext.JSON.encode(form.getValues()),
                                meta: Ext.JSON.encode(me.meta)
                            },
                            success: function(response) {
                                var retorno = Ext.JSON.decode(response.responseText);
                                Ext.MessageBox.hide();
                                if (retorno) {
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