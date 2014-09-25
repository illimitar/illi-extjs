Ext.define('Illi.view.financeiro.ComboData', {
    extend: 'Ext.form.field.ComboBox',
    queryMode: 'local',
    alias: 'widget.comboData',
    name: 'data',
    itemId: 'comboData',
    value: 'data_emissao',
    store: [
        ['data_emissao', 'Emissão'],
        ['data_prebaixa', 'Pré Baixa'],
        ['data_baixa', 'Baixa'],
        ['data_vencimento', 'Vencimento'],
        ['data_cadastro', 'Cadastro']
    ],
    selectOnTab: true,
    lazyRender: true,
    listClass: 'x-combo-list-small',
    triggerAction: 'all',
    forceSelection: true,
    initComponent: function() {
        this.callParent(arguments);
    }
});
