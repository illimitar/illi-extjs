Ext.define('Illi.view.relatorio.ComboApagarAgrupar', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.comboApagarAgrupar',
    name: 'order_agrupar',
    queryMode: 'local',
    fieldLabel: 'Agrupar Por',
    store: [
        ['nome', 'Parceiro'],
        ['data_baixa', 'Data Baixa'],
        ['mes_data_baixa', 'Mensal data Baixa'],
        ['data_vencimento', 'Data Vencimento'],
        ['mes_data_vencimento', 'Mensal data Vencimento'],
        ['data_emissao', 'Data emissao'],
        ['mes_data_emissao', 'Mensal data Emissão'],
        ['grupo', 'Grupo Parceiro'],
        ['pagamento', 'Pagamento'],
        ['empresa', 'Empresa'],
        ['natureza', 'Natureza'],
        ['situacao', 'Situacao']
    ],
    value: 'mes_data_vencimento',
    selectOnTab: true,
    lazyRender: true,
    listClass: 'x-combo-list-small',
    triggerAction: 'all',
    forceSelection: true,
    initComponent: function() {
        this.callParent(arguments);
    }
});
