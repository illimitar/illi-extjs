Ext.define('Illi.view.arquivo.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.arquivoJanela',
    title: 'Cadastro de Parecer',
    id_fluxo: false,
    id_produto: false,
    layout: 'fit',
    modal: true,
    initComponent: function() {
        var me = this;


        Ext.apply(me, {
            scope: me,
            border: false,
            width: 600,
            title: 'Cadastro de Parecer',
            items: [{
                    scope: me,
                    xtype: 'form',
                    border: false,
                    defaults: {
                        anchor: '100%',
                        labelWidth: 150,
                        margin: 5

                    },
                    items: [
                        {
                            xtype: 'hidden',
                            name: 'id_fluxo',
                            value: me.id_fluxo
                        },
                        {
                            xtype: 'hidden',
                            name: 'id_produto',
                            value: me.id_produto
                        },
                        {
                            xtype: 'filefield',
                            name: 'anexo',
                            fieldLabel: 'Arquivo',
                            msgTarget: 'side',
                            allowBlank: false,
                            buttonText: 'Selecione o Arquivo'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'descricao',
                            allowBlank: false,
                            fieldLabel: 'Descrição'
                        }
                    ]

                }],
            buttons: [{
                    text: 'Enviar',
                    handler: function() {
                        var janela = this.up('window');

                        var form = janela.down('form').getForm();
                        if (form.isValid()) {
                            form.submit({
                                url: '../fluxo/parecer/iJson/enviar_arquivo',
                                waitMsg: 'Enviando Arquivo Aguarde...',
                                success: function(response, ret) {
                                    janela.close();
                                },
                                failure: function(response, ret) {
                                    Ext.Msg.alert('Atenção', ret.result.message.error);
                                }
                            });
                        }
                    }
                }],
            listeners: {
                beforehide: function() {
                    if (Ext.getStore('Pareceres')) {
                        Ext.getStore('Pareceres').load();
                    }
                }
            }
        });
        me.callParent(arguments);
    }



});