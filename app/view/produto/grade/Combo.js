Ext.define('Illi.view.produto.grade.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboGrade',
    name: 'id_grade',
    displayField: 'nome',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'nome',
    tipo: null,
    setTipo: function(tipo) {
        this.tipo = tipo;
    },
    getTipo: function(tipo) {
        return this.tipo;
    },
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<div class="x-boundlist-item">',
            ' {nome} - {id}',
            '</div>',
            '</tpl>'
            ),
    trigger2Cls: 'trigger-add',
    onTrigger2Click: function() {
//        var controller = Illi.app.getController('produto.Grade');
//        if (!controller.carregado) {
//            controller.carregado = true;
//            controller.init();
//        }
        Ext.create('Illi.view.produto.grade.Janela').show();
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.produto.Grades', {storeId: "comboGrades" + me.getTipo()})
        });
        this.callParent(arguments);
        this.store.getProxy().extraParams = {
            tipo: this.getTipo(),
            situacao: 'ATIVO'
        };
        this.store.load();
    }
});
