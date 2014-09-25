Ext.define('Illi.view.financeiro.vendedor_comissao.Form', {
    extend: 'Ext.window.Window',
    requires: [
        'Illi.view.financeiro.prazo.Combo',
        'Illi.view.usuario.entidade.Combo',
        'Illi.view.natureza.Combo',
        'Ext.ux.TextMaskPlugin'
    ],
    alias: 'widget.fecharComissao',
    title: 'Cadastro de Parecer',
    layout: 'fit',
    valor_titulo: null,
    modal: true,
    initComponent: function() {
        var me = this;
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
        Ext.apply(me, {
            scope: me,
            border: false,
            width: 400,
            height: 200,
            title: 'Fechar Comissão',
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
                            fieldLabel: 'Data Vencimento ',
                            afterLabelTextTpl: required,
                            value: new Date(),
                            name: 'data_vencimento',
                            submitFormat: 'Y-m-d',
                            allowBlank: false
                        },
                        {
                            xtype: 'comboNatureza',
                            fieldLabel: 'Natureza',
                            anchor: '100%',
                            tipo: 'DESPESA',
                            name: 'id_natureza_lancamento',
                            allowBlank: false,
                            afterLabelTextTpl: required
                        },
                        {
                            xtype: 'comboPrazo',
                            fieldLabel: 'Pagamento',
                            anchor: '100%',
                            name: 'id_prazo',
                            allowBlank: false,
                            afterLabelTextTpl: required,
                            trigger2Cls: null


                        },
                        {
                            xtype: 'comboEntidade',
                            fieldLabel: 'Empresa',
                            anchor: '100%',
                            name: 'id_entidade',
                            afterLabelTextTpl: required,
                            allowBlank: false,
                            trigger2Cls: null


                        },
                        {
                            plugins: 'textmask',
                            mask: 'R$ #9.999.990,00',
                            money: true,
                            name: 'valor_titulo',
                            fieldLabel: 'Valor Titulo',
                            value: me.valor_titulo,
                            hidden: true


                        }
                    ]

                }],
            buttons: [{
                    text: 'Fechar Comissão',
                    action: 'fecharComissao',
                    iconCls: 'icon-salvar'
                }
            ]
        });
        me.callParent(arguments);
    }



});