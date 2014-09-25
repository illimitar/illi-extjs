
Ext.define('Illi.view.pessoa.grupo_pessoa.ListaGrupoPessoa', {
    extend: 'Illi.view.AbstractList',
    alias: 'widget.listaGrupoPessoa',
    title: null,
    emptyText: "Nenhum registro Encontrado",
    requires: [
        'Illi.view.pessoa.grupo_pessoa.ComboGrupoPessoa',
        'Illi.view.ComboSituacao'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Illi.store.GrupoPessoas'),
            tbar: {
                items: [
                    {
                        text: 'Incluir',
                        action: 'incluir',
                        iconCls: 'icon-adicionar',
                        itemId: 'incluir'

                    }
                    ,
                    {
                        text: 'Adicionar Parceiros',
                        action: 'pessoasGrupo',
                        iconCls: 'icon-grupousuario',
                        itemId: 'pessoasGrupo'
                    },
                    {
                        text: 'Atualizar',
                        action: 'atualizar',
                        iconCls: 'icon-atualizar',
                        itemId: 'atualizar'
                    }



                ]


            },
            // store: 'Financeiros',
            columns: {
                defaults: {
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        width: 25
                                //hidden:true
                    },
                    {
                        header: 'Grupo',
                        dataIndex: 'grupo',
                        editor: {
                            xtype: 'textfield',
                            allowBlank: false

                        },
                        filter: {
                            type: 'string'
                        },
                        width: 350
                    },
                    {
                        header: 'Situação',
                        dataIndex: 'situacao',
                        editor: {
                            xtype: 'comboSituacao',
                            allowBlank: false

                        },
                        filter: {
                            xtype: 'comboSituacao'
                        },
                        width: 350
                    },
                    {
                        header: 'Grupo Principal',
                        dataIndex: 'gp.grupo',
                        editor: {
                            xtype: 'ComboGrupoPessoa',
                            fieldLabel: null
                        },
                        filter: true,
                        width: 350
                    }




                ]
            }
        });

        me.callParent(arguments);

        //Illi.callLog(me.up('window').down('pessoaForm textfield[name=id]'));


        //var idPessoa = Illi.app.Local.get('idPessoa');   
        //        me.store.getProxy().extraParams = {
        //            filter:	Ext.JSON.encode([{
        //                "type":"list",
        //                "value":idPessoa,
        //                "field":"id_pessoa"
        //                                
        //            }])
        //        };

        me.getSelectionModel().on('selectionchange', me.onSelectChange, me);

    }
    ,
    onRender: function() {



        this.store.load();
        this.callParent(arguments);


        this.down('#incluir').setDisabled(!this.ativarBotao('incluir'));
    },
    onSelectChange: function(selModel, selections) {


    }




});