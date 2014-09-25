Ext.define('Illi.view.financeiro.parecer.ListaContatoAgenda', {
    extend: 'Illi.view.financeiro.parecer.Lista',
    alias: 'widget.listaContatoAgenda',
    tbar: false,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            store: Ext.create('Illi.store.Pareceres', {
                autoLoad: false,
                storeId: 'listaParecerAgenda',
                sortField: 'dataReferencia',
                sorters: [{
                        property: 'dataReferencia',
                        direction: 'ASC' // or 'ASC'
                    }]
            }),
            viewConfig: {
                forceFit: true,
                showPreview: true,
                getRowClass: function(record, index) {
                    if ((Ext.Date.format(record.get('dataReferencia'), 'Y-m-d')) === (Ext.Date.format(new Date(), 'Y-m-d'))) {
                        return 'vencido';
                    }
                }
            }

        });


        me.filtroInicial = false;
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function(grid) {
            grid.filtroInicial = [
               //{"property": "u.id", "value": Illi.app.Local.get('usuario').id, "type": "int", "operator": "eq"},
                {"property": "dataReferencia", "value": Ext.Date.format(new Date(), 'Y-m-d'), "type": "date", "operator": "gte"}
            ];
            grid.store.filter(grid.filtroInicial);
        }
    }
});