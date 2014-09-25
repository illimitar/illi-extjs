Ext.define('Illi.view.produto.importacao.Form', {
    extend: 'Illi.view.AbstractForm',
    requires: [
        'Ext.ux.TextMaskPlugin'
    ],
    alias: 'widget.formImportacaoProduto',
    itemId: 'formImportacaoProduto',
    title: false,
    combineErrors: false,
    msgTarget: 'side',
    defaultType: 'textfield',
    autoHeight: true,
    bodyPadding: 10,
    items: [
        {
            xtype: 'fieldset',
            title: 'Arquivo',
            defaults: {
                anchor: '100%',
                typeAhead: false,
                autoHeight: true,
                allowBlank: false,
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
                    xtype: 'filefield',
                    id: 'arquivo',
                    emptyText: 'Selecione o arquivo',
                    fieldLabel: 'Arquivo',
                    name: 'arquivo',
                    buttonText: 'Selecionar' // ,
//                    buttonConfig: {
//                        iconCls: 'icon-pesquisar'
//                    }
                },
                {
                    xtype: 'checkboxfield',
                    name: 'eliminar',
                    checked: false,
                    fieldLabel: 'Eliminar'
                },
                {
                    xtype: 'checkboxfield',
                    name: 'cabecalho',
                    checked: true,
                    fieldLabel: 'Com cabeçalho'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Informações',
            defaults: {
                cls: 'rodape',
                border: false,
                bodyBorder: false
            },
            items: [
                {
                    xtype: 'panel',
                    html: 'Selecione um arquivo no formato CSV, com colunas separados por ";" (ponto e vírgula).<br /><br />' +
                            '<b>Eliminar:</b> Elimina dados temporários importados anteriormente.<br />' + 
                            '<b>Com cabeçalho:</b> A primeira linha contem o cabeçalho das colunas a serem importados, caso contrário seguirá a ordem das colunas conforme o item "Colunas Permitidas" descrito abaixo.<br />' + 
                            '<b>Colunas Permitidas:</b> codigo, descricao, nome, unidade, custo, valor, valor2, grupo, categoria, marca, observacao, ncm, aliquota, cst_origem, cst_destino, ipi, codigo_ean, gradex, gradey.<br /><br />' + 
                            '<b>Observação: </b> Este procedimento pode levar vários minutos.'
                }
            ]
        }
    ]
});
