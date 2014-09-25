Ext.define('Illi.view.pessoa.endereco.ComboEstado', {
    extend: 'Ext.form.field.ComboBox',
    queryMode: 'local',
    alias: 'widget.comboEstado',
    fieldLabel: 'Estado',
    name : 'uf',
    store: [
    ["AC","Acre"],
            ["AL","Alagoas"],
            ["AP","Amapá"],
            ["AM","Amazonas"],
            ["BA","Bahia"],
            ["CE","Ceará"],
            ["DF","Distrito Federal"],
            ["ES","Espírito Santo"],
            ["GO","Goiás"],
            ["MA","Maranhão"],
            ["MT","Mato Grosso"],
            ["MS","Mato Grosso do Sul"],
            ["MG","Minas Gerais"],
            ["PA","Pará"],
            ["PB","Paraíba"],
            ["PR","Paraná"],
            ["PE","Pernambuco"],
            ["PI","Piauí"],
            ["RJ","Rio de Janeiro"],
            ["RN","Rio Grande do Norte"],
            ["RS","Rio Grande do Sul"],
            ["RO","Rondônia"],
            ["RR","Roraima"],
            ["SC","Santa Catarina"],
            ["SP","São Paulo"],
            ["SE","Sergipe"],
            ["TO","Tocantins"]
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
   
 