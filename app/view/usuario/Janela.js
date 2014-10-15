Ext.define('Illi.view.usuario.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaUsuario',
    title: 'Alteração de Usuário', // + Illi.app.Local.get('usuario').nome,
    layout: 'fit',
    iconCache: "icon-homem",
    requires: [
        'Illi.view.banco.conta.Combo',
        'Illi.view.natureza.Combo',
        'Ext.ux.TextMaskPlugin'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            width: 700,
            height: 240,
            items: [
                {
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
                            xtype: 'textfield',
                            name: 'nome',
                            value: Illi.app.Local.get('usuario').nome,
                            allowBlank: false,
                            fieldLabel: 'Nome'
                        },
                        {
                            xtype: 'textfield',
                            name: 'email',
                            value: Illi.app.Local.get('usuario').email,
                            allowBlank: true,
                            fieldLabel: 'E-mail'
                        },
                        {
                            xtype: 'textfield',
                            name: 'senha',
                            inputType: 'password',
                            emptyText: 'Sem alteração',
                            allowBlank: true,
                            fieldLabel: 'Senha'
                        },
                        {
                            xtype: 'textfield',
                            name: 'suporte',
                            value: Illi.app.Local.get('suporte'),
                            allowBlank: true,
                            fieldLabel: 'Suporte',
                            listeners: {
                                change: function(me, b) {
                                    Illi.app.Local.set("suporte", me.getValue());
                                }
                            }
                        }
                    ]
                }
            ],
            bbar: {
                items: [
                    {
                        iconCls: 'icon-usuario',
                        tooltip: 'Avatar',
                        action: 'gravatar'
                    },
                    {
                        iconCls: 'icon-atualizar',
                        tooltip: 'Limpar Perfil',
                        action: 'redefinir'
                    },
                    {
                        iconCls: 'icon-dispositivo',
                        tooltip: 'Dispositivo',
                        action: 'dispositivo'
                    },
                    {
                        iconCls: me.iconCache,
                        tooltip: 'Cache',
                        handler: function(btn) {
                            btn.setDisabled(true);
                            Ext.Ajax.request({
                                url: '../illi/definir_cache/',
                                success: function(response) {
                                    closepage = true;
                                    window.location.reload(true);
                                }
                            });
                        }
                    },
                    {
                        iconCls: 'icon-dispositivo',
                        tooltip: 'Dispositivo',
                        action: 'dispositivo'
                    },
                    (me.segredo ? {
                        iconCls: 'icon-gauthdesativo',
                        text: 'Desativar GAuth',
                        action: 'gauth-desativar'
                    } : {
                        iconCls: 'icon-gauthativo',
                        text: 'Ativar GAuth',
                        action: 'gauth-ativar'
                    }),
                    '->',
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
        });
        me.callParent(arguments);
    }
});