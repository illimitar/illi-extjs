Ext.define('Illi.view.produto.grade.grupo_grade.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboGrupoGrade',
    name: 'id_grupo_grade',
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
        Ext.create('Illi.view.produto.grade.grupo_grade.Janela').show();
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.produto.GrupoGrades', {storeId: "comboGrupoGrades" + me.getTipo()})
        });
        this.callParent(arguments);
        this.store.getProxy().extraParams = {
            //tipo: this.getTipo(),
            situacao: 'ATIVO'
        };
        this.store.load();
    }
});
