Ext.define('Illi.view.banco.conta.FormExtratoFilter', {
    extend: 'Ext.toolbar.Toolbar',
    requires: ['Illi.view.banco.conta.Combo'],
    alias: 'widget.formExtratoFilter',
    itemId: 'formExtratoFilter',
    width: 550,
    border: false,
    layout: {
        type: 'column'
    },
    frame: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [
                {
                    xtype: 'fieldcontainer',
                    combineErrors: true,
                    msgTarget: 'side',
                    hideLabel: true,
                    frame: true,
                    itemId: 'vencimento',
                    layout: 'hbox',
                    defaults: {
                        flex: 1,
                        labelAlign: 'right',
                        labelWidth: 30,
                        width: 200,
                        margin: '0 5 0 0'
                    },
                    items: [
                        Ext.create('Ext.form.field.ComboBox', {
                            name: 'tipo',
                            fieldLabel: 'Data',
                            flex: 1,
                            labelAlign: 'right',
                            value: ['data_lancamento'],
                            labelWidth: 30,
                            store: [
                                ['data_lancamento', 'Lançamento'],
                                ['data', 'Cadastro']
                            ],
                            selectOnTab: true,
                            lazyRender: true,
                            listClass: 'x-combo-list-small',
                            triggerAction: 'all',
                            forceSelection: true
                        }),
                        {
                            xtype: 'datefield',
                            fieldLabel: 'De',
                            name: 'data_inicio',
                            value: Ext.Date.format(new Date(new Date().getFullYear(), new Date().getMonth() - 1, 0), 'd/m/Y'),
                            format: 'd/m/Y',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Até',
                            format: 'd/m/Y',
                            submitFormat: 'Y-m-d',
                            value: Ext.Date.format(new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0), 'd/m/Y'),
                            name: 'data_fim',
                            listeners: {
                                specialkey: function(field, e) {
                                    if (e.getKey() === e.ENTER) {
                                        var filtrar = this.up('toolbar').down('#filtrarFluxo');
                                        filtrar.handler();
                                    }
                                }
                            }
                        },
                        {
                            text: 'Filtrar',
                            itemId: 'filtrarFluxo',
                            xtype: 'button',
                            iconCls: 'icon-pesquisar',
                            width: 90,
                            handler: function() {

                                var campo = this.up('toolbar').down('[name=tipo]').getValue();
                                var data_inicio = this.up('toolbar').down('[name=data_inicio]').getValue();
                                var data_fim = this.up('toolbar').down('[name=data_fim]').getValue();

                                var grid = this.up('grid');

                                grid.filters.createFilters();
                                grid.store.clearFilter();

                                var data_filtro = grid.filters.getFilter(campo);
                                data_filtro.destroy();


                                data_filtro.init({dataIndex: campo, active: true});
                                data_filtro.setValue({'before': data_fim}, true);
                                data_filtro.setValue({'after': data_inicio}, true);

                                grid.store.filter();

                            }
                        }
                    ]
                }


            ]


        });
        me.callParent(arguments);
    }




});