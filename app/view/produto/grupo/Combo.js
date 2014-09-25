Ext.define('Illi.view.produto.grupo.Combo', {
    extend: 'Illi.view.AbstractCombo',
    alias: 'widget.comboGrupo',
    name: 'id_grupo',
    store: Ext.create('Illi.store.produto.Grupos', {storeId: "comboGrupos"}),
    displayField: 'nome',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'nome',
    forcaSelecao: true,
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '   <tpl if="this.selecao(selecao)">',
            '       <div class="x-boundlist-item" style="color: #bbb;">',
            '           {nome} - {id}',
            '       </div>',
            '   <tpl else>',
            '       <div class="x-boundlist-item">',
            '           {nome} - {id}',
            '       </div>',
            '   </tpl>',
            '</tpl>',
            {
                disableFormats: true,
                selecao: function(selecao) {
                    return (selecao === 'NÃO');
                }
            }
    ),
    trigger2Cls: 'trigger-add',
    onTrigger2Click: function() {
        Ext.create('Illi.view.produto.grupo.Janela').show();
    },
    initComponent: function() {
        this.callParent(arguments);
        this.store.getProxy().extraParams = {"situacao": "ATIVO"};
        this.store.load();
    },
    listeners: {
        beforeselect: function(combo, record, index) {
            if (record.get('selecao') === 'NÃO' && this.forcaSelecao) {
                return false;
            }
        },
        blur: function(combo) {
            var selecao = combo.findRecord("id", combo.getValue());
            if (selecao) {
                if (selecao.get('selecao') === 'NÃO' && this.forcaSelecao) {
                    combo.setValue(null);
                }
            }
        }
    }
});
