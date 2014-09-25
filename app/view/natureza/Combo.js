Ext.define('Illi.view.natureza.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.comboNatureza',
    name: 'id_natureza_lancamento',
    ref: 'id_natureza',
    displayField: 'descricao',
    valueField: 'id',
    forcaSelecao: true,
    minChars: 0,
    queryMode: 'remote',
    queryParam: 'descricao',
    forceSelection: true,
    tipo: null,
    storeName: 'comboNaturezas',
    setTipo: function(tipo) {
        this.tipo = tipo;
    },
    getTipo: function(tipo) {
        return this.tipo;
    },
    setStoreName: function(storeName) {
        this.storeName = storeName;
    },
    getStoreName: function(storeName) {
        return this.storeName;
    },
    tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '<tpl if="this.selecao(selecao)">',
            '<div class="x-boundlist-item" style="color: #bbb;" >{classificacao} -- {descricao}</div>',
            '<tpl else>',
            '<div class="x-boundlist-item">{classificacao} - {descricao}</div>',
            '</tpl>',
            '</tpl>',
            {
                disableFormats: true,
                selecao: function(selecao) {
                    return (selecao === 'NÃO');
                }
            }
    ),
    initComponent: function() {
        var me = this;
        me.store = Ext.create('Illi.store.Naturezas', {storeId: me.getStoreName()});
        me.store.getProxy().extraParams = {
            tipo: me.getTipo(),
            situacao: 'ATIVO'
        };
        me.callParent(arguments);
    },
    listeners: {
        beforeselect: function(combo, record, index) {
            if (record.get('selecao') === 'NÃO' && this.forcaSelecao) {
                return false;
            }
        },
        blur: function(combo, record, index) {
            var selecao = combo.findRecord("id", combo.getValue());
            if (selecao) {
                if (selecao.get('selecao') === 'NÃO' && this.forcaSelecao) {
                    combo.setValue(null);
                }
            } else {
                combo.setValue(null);
            }
        }
    }


});


