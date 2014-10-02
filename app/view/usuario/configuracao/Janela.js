Ext.define('Illi.view.usuario.configuracao.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaConfiguracaoUsuario',
    title: 'Configuração de Usuário', // + Illi.app.Local.get('usuario').nome,
    layout: 'fit',
    requires: [
        'Illi.view.usuario.configuracao.Form',
        'Ext.ux.TextMaskPlugin'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            width: 700,
            height: 285,
            items: [
                {
                    xtype: 'form',
                    padding: '5 5 0 5',
//                    bodyPadding: 10,
                    border: false,
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'start',
                        frame: true,
                        plain: true,
                        border: false
                    },
                    items: [
                        {
                            xtype: 'formConfiguracaoUsuario'
                        }
                    ]
                }
            ],
            bbar: {
                items: [
                    {
                        iconCls: 'icon-atualizar',
                        text: 'Gerar novo PIN',
                        action: 'gerar'
                    },
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