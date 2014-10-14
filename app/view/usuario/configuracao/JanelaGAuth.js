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
            width: 195,
            height: 260,
            items: [
                {
                    border: false,
                    bodyStyle: 'background: transparent;',
                    padding: '0 0 5 5',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'imagemQrCode',
                            border: false,
                            url: me.url,
                            bodyStyle: 'background: transparent;',
                            flex: 1
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