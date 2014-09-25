Ext.define('Illi.view.produto.etiqueta.Janela', {
    extend: 'Ext.form.Panel',
    alias: 'widget.janelaEtiqueta',
    itemId: 'janelaEtiqueta',
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start',
        frame: true,
        plain: true,
        border: false
    },
    requires: [
        'Illi.view.produto.etiqueta.Lista',
        'Illi.view.produto.etiqueta.Form',
        'Illi.view.relatorio.Combo'
    ],
    modal: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            xtype: 'form',
            bodyPadding: 0,
            maximizable: true,
            items: [
                {
                    xtype: 'etiquetaForm'
                },
                {
                    xtype: 'listaProdutoEtiqueta',
                    flex: 1
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    border: false,
                    items: [
                        {
                            iconCls: 'icon-configuracao',
                            text: 'Configurar',
                            action: 'configurar-impressora',
                            itemId: 'configurar-impressora'
                        },
                        {
                            iconCls: 'icon-remover',
                            text: 'Limpar',
                            action: 'limpar',
                            itemId: 'limpar'
                        },
                        '->',
                        {
                            xtype: 'comboRelatorio',
                            name: 'modelo',
                            tipo: "ETIQUETA",
                            itemId: "modeloEtiqueta",
                            value: (Illi.app.Local.get('cfgEtiquetadora') ? Illi.app.Local.get('cfgEtiquetadora').modelo : undefined),
                            allowBlank: true,
                            fieldLabel: 'Modelo'
                        },
                        {
                            iconCls: 'icon-imprimir',
                            text: 'Imprimir',
                            action: 'imprimir',
                            itemId: 'imprimir'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});