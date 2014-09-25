Ext.define('Illi.view.financeiro.parecer.Form', {
    extend: 'Ext.window.Window',
    alias: 'widget.parecerForm',
    title: 'Cadastro de Parecer',
    layout: 'fit',
    id_fluxo: false,
    id_produto: false,
    id_atendimento: false,
    multiplo: false,
    modal: true,
    initComponent: function () {
        var me = this;


        Ext.apply(me, {
            scope: me,
            border: false,
            width: "95%",
            height: "98%",
            title: 'Cadastro de Parecer',
            items: [{
                    scope: me,
                    xtype: 'form',
                    border: false,
                    //itemId:'formParecer',
                    bodyPadding: 0,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'htmleditor',
                            name: 'descricao',
                            fieldLabel: null,
                            height: 200,
                            anchor: '100%'
                        },
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
                            xtype: 'hidden',
                            name: 'id_atendimento',
                            value: me.id_atendimento
                        }

                    ]

                }],
            dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            text: 'Salvar Parecer',
                            handler: function () {

                                var win = this.up('window');
                                var form = win.down('form');

                                Ext.MessageBox.wait('Salvando', 'Aguarde');
                                Ext.Ajax.request({
                                    url: '../fluxo/parecer/iJson/alterar',
                                    params: {
                                        data: Ext.JSON.encode(form.getValues()),
                                        multiplo: win.multiplo
                                    }
                                    ,
                                    success: function (response) {
                                        var retorno = Ext.JSON.decode(response.responseText);
                                        Ext.MessageBox.hide();
                                        if (retorno) {
                                            //Ext.getStore('Bairros').load();

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

                        },
                        {
                            text: 'Anexar Arquivo',
                            iconCls: 'icon-anexar',
                            handler: function () {
                                var anexarArquivo = Ext.create('Illi.view.arquivo.Janela', {
                                    id_fluxo: me.id_fluxo,
                                    id_produto: me.id_produto
                                });
                                anexarArquivo.show();
                            }
                        }
                    ]
                }],
            listeners: {
                beforehide: function () {
                    if (!this.multiplo) {
                        Ext.getStore('Pareceres').load();
                    }
                }
            }
        });
        me.callParent(arguments);
    }



});