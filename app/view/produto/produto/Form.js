Ext.define('Illi.view.produto.produto.Form', {
    extend: 'Illi.view.AbstractForm',
    requires: [
        'Ext.ux.TextMaskPlugin',
        'Illi.view.ComboSituacao',
        'Illi.view.produto.unidade.Combo',
        'Illi.view.produto.grupo.Combo',
        'Illi.view.produto.categoria.Combo',
        'Illi.view.produto.produto.Combo',
        'Illi.view.produto.marca.Combo',
        'Illi.view.configuracao.situacao.Combo'
    ],
    alias: 'widget.produtoForm',
    itemId: 'formProduto',
    title: 'Produto',
    padding: 0,
    combineErrors: false,
    border: false,
    bodyBorder: false,
    msgTarget: 'side',
    defaultType: 'textfield',
    defaults: {
        width: 575,
        allowBlank: false
    },
    fieldDefaults: {
        anchor: '70%',
        labelAlign: 'right',
        labelWidth: "30%",
        allowBlank: false,
        combineErrors: false,
        msgTarget: 'side',
        labelClsExtra: 'texto-negrito'
    },
    items: [
        {
            name: 'g.id',
            type: 'integer',
            xtype: 'hiddenfield'
        },
        {
            name: 'u.id',
            type: 'integer',
            xtype: 'hiddenfield'
        },
        {
            fieldLabel: 'Código Interno',
            name: 'codigo',
            value: "",
            allowBlank: true
        },
        {
            fieldLabel: 'Referência',
            name: 'p.codigo',
            value: "",
            allowBlank: true
        },
        {
            fieldLabel: 'Desc. Resumida',
            name: 'p.nome',
            listeners: {
                blur: function(campo, record, index) {
                    var descricao = campo.up("form").down('[name=p.descricao]');
                    if (!descricao.getValue()) {
                        descricao.setValue(campo.getValue());
                    }
                }
            }
        },
        {
            fieldLabel: 'Descrição',
            name: 'p.descricao',
            xtype: 'textareafield',
            allowBlank: true
        },
        {
            fieldLabel: 'Tipo',
            xtype: 'combo',
            itemId: 'tipoProduto',
            name: 'p.tipo',
            value: 'Acabado',
            allowBlank: false,
            store: ['Acabado', 'Composiçao', 'Grade']
        },
        {
            fieldLabel: 'Unid. Venda',
            xtype: 'comboUnidade',
            name: 'u.nome',
            allowBlank: false
        },
        {
            fieldLabel: 'Grupo',
            xtype: 'comboGrupo',
            forceSelection: false,
            name: 'g.nome'
        },
        {
            fieldLabel: 'Categoria',
            xtype: 'comboCategoria',
            name: 'c.nome',
            allowBlank: true
        },
        {
            fieldLabel: 'Marca',
            xtype: 'comboMarca',
            name: 'm.nome'
        },
        {
            fieldLabel: 'Situação',
            xtype: 'comboConfiguracaoSituacao',
            tipo: 'PRODUTO',
            value: 'ATIVO',
            name: 'p.situacao'
        },
        {
            fieldLabel: 'Observação',
            xtype: 'textareafield',
            name: 'observacao',
            allowBlank: true
        },
        {
            name: 'id',
            itemId: "id_produto_grade",
            type: 'integer',
            xtype: 'hiddenfield'
        },
        {
            name: 'c.id',
            type: 'integer',
            xtype: 'hiddenfield'
        }
    ],
    tbar: {
        items: [
            //'->',
            {
                text: 'Salvar',
                action: 'salvar',
                iconCls: 'icon-salvar',
                itemId: 'salvar',
                tooltip: 'Atalho SHIFT + ENTER'
            }
        ]
    }

});
