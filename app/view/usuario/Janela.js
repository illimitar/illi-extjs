Ext.define('Illi.view.usuario.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaUsuario',
    title: 'Alteração de Usuário', // + Illi.app.Local.get('usuario').nome,
    layout: 'fit',
    iconCache: "icon-homem",
    requires: [
        'Illi.view.AbstractForm',
        'Illi.view.banco.conta.Combo',
        'Illi.view.natureza.Combo',
        'Illi.view.usuario.acesso.Combo',
        'Ext.ux.TextMaskPlugin'
    ],
    modal: true,
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            scope: me,
            width: 700,
            height: 310,
            items: [
                {
                    xtype: 'abstractform',
                    padding: '5 5 0 5',
                    combineErrors: false,
                    msgTarget: 'side',
                    defaultType: 'textfield',
                    autoHeight: true,
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Básico',
                            defaults: {
                                anchor: '100%',
                                typeAhead: false,
                                autoHeight: true,
                                allowBlank: true,
                                plugins: ['clearbutton'],
                                layout: {
                                    type: 'hbox',
                                    anchor: '60%',
                                    bodyPadding: 10,
                                    defaultMargins: {
                                        top: 0,
                                        right: 5,
                                        bottom: 0,
                                        left: 0
                                    }
                                }
                            },
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
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Avançado',
                            defaults: {
                                anchor: '100%',
                                typeAhead: false,
                                autoHeight: true,
                                allowBlank: true,
                                plugins: ['clearbutton'],
                                layout: {
                                    type: 'hbox',
                                    anchor: '60%',
                                    bodyPadding: 10,
                                    defaultMargins: {
                                        top: 0,
                                        right: 5,
                                        bottom: 0,
                                        left: 0
                                    }
                                }
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'suporte',
                                    value: Illi.app.Local.get('suporte'),
                                    allowBlank: true,
                                    fieldLabel: 'Suporte',
                                    listeners: {
                                        change: function (me, b) {
                                            Illi.app.Local.set("suporte", me.getValue());
                                        }
                                    }
                                },
                                {
                                    fieldLabel: 'Abertura do Sistema',
                                    xtype: 'comboAcesso',
                                    store: Ext.create('Illi.store.usuario.Acessos', {storeId: "comboUsuarioAcessos"}),
                                    forceSelection: true,
                                    multiSelect: true,
                                    value: Illi.app.Local.get('usuario').usuario_acesso_inicial,
                                    name: 'usuario_acesso_inicial',
                                    trigger2Cls: 'trigger-ajuda',
                                    onTrigger2Click: function () {
                                        Ext.create('Illi.view.configuracao.JanelaAjuda', {
                                            title: 'Abertura do Sistema',
                                            html: '<p>Determina qual módulo será iniciado quando o sistema é aberto.</p>'
                                        }).show();
                                    }
                                }
                            ]
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
                        handler: function (btn) {
                            btn.setDisabled(true);
                            Ext.Ajax.request({
                                url: '../illi/definir_cache/',
                                success: function (response) {
                                    Illi.app.Util.MSG('Atualizando Sistema...');
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