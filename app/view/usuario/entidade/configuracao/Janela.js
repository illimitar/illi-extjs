Ext.define('Illi.view.usuario.entidade.configuracao.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.janelaConfiguracaoEntidade',
    title: 'Configuração da Entidade', // + Illi.app.Local.get('usuario').nome,
    layout: 'fit',
    requires: [
        'Illi.view.configuracao.Form',
        'Ext.ux.TextMaskPlugin'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            width: "80%",
            height: "75%",
            items: [
                {
                    xtype: 'form',
                    autoScroll: true,
//                    padding: '5 5 0 5',
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
                            xtype: 'formConfiguracao'
                        }
                    ]
                }
            ],
            bbar: {
                items: [
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