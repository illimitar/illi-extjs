Ext.define('Illi.view.usuario.configuracao.JanelaGAuth', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaConfiguracaoGAuthUsuario',
    title: 'Configuração de Autenticação de Usuário', // + Illi.app.Local.get('usuario').nome,
    layout: 'fit',
    requires: [
        'Illi.view.usuario.configuracao.ImagemQRCode'
    ],
    modal: true,
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            scope: me,
            width: 600,
            height: 340,
            items: [
                {
                    border: false,
                    bodyStyle: 'background: transparent;',
                    padding: '5 5 5 5',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'imagemQrCode',
                            border: false,
                            url: me.url,
                            bodyStyle: 'background: transparent;',
                            width: 250
                        },
                        {
                            border: false,
                            bodyStyle: 'background: transparent;',
                            padding: '5 5 5 5',
                            flex: 1,
                            html: '<h1>Códigos de Segurança</h1><p>Os códigos abaixos foram gerados automaticamente para você usar caso necessário, salve-os em um lugar seguro.</p>' + me.codigos + '<p>Sua senha atual foi desativada por segurança.</p>'
                        }
                    ]
                }
            ],
            bbar: {
                items: [
                    '->',
                    {
                        iconCls: 'icon-confirmar',
                        text: 'Ok',
                        action: 'fechar'
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});