Ext.define('Illi.controller.Pessoa', {
    extend: 'Illi.controller.AbstractController',
    stores: ['Pessoas'],
    models: ['Pessoa'],
    views: [
        'pessoa.Form',
        'pessoa.endereco.FormCidade',
        'pessoa.endereco.FormBairro',
        'pessoa.contato.FormTipoContato',
        'pessoa.contato.ListaContato',
        'pessoa.Lista',
        'pessoa.tipo_pessoa.ListaTipoPessoa',
        'pessoa.meta.ListaMeta'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'pessoaLista'
        },
        {
            ref: 'pessoaLista',
            selector: 'pessoaLista'
        },
        {
            ref: 'cidadeForm',
            selector: 'cidadeForm'
        },
        {
            ref: 'bairroForm',
            selector: 'bairroForm'
        },
        {
            ref: 'pessoaForm',
            selector: 'pessoaForm'
        },
        {
            ref: 'tipoContatoForm',
            selector: 'tipoContatoForm'
        },
        {
            ref: 'pessoaListaContato',
            selector: 'pessoaListaContato'
        },
        {
            ref: 'pessoaListaTipoPessoa',
            selector: 'pessoaListaTipoPessoa'
        },
        {
            ref: 'listaMeta',
            selector: 'listaMeta'
        }
    ],
    init: function () {
        var me = this;
        me.control({
            'pessoaLista': {
                itemdblclick: me.editar
            },
            'pessoaLista button[action=alterar]': {
                click: me.editar
            },
            'pessoaLista button[action=incluir]': {
                click: me.incluir
            },
            'pessoaLista button[action=excluir]': {
                click: me.excluir
            },
            'pessoaLista button[action=atualizar]': {
                click: me.atualizar
            },
            'listaMeta button[action=incluir]': {
                click: me.incluirMeta
            },
            'listaMeta button[action=atualizar]': {
                click: me.atualizarMeta
            },
            'listaMeta button[action=multiplicar]': {
                click: me.multiplicar
            },
            'pessoaForm button[action=salvar]': {
                click: me.salvar
            },
            'pessoaForm button[action=adicionarContato]': {
                click: me.adicionarContato
            },
            'pessoaForm button[action=incluirContato]': {
                click: me.incluirContato
            },
            'pessoaForm #comboCidade': {
                select: me.carregarBairro
            },
            'cidadeForm button[action=salvar]': {
                click: me.cadastrarCidade
            },
            'tipoContatoForm button[action=salvar]': {
                click: me.cadastrarTipoContato
            },
            'pessoaListaTipoPessoa button[action=incluirTipoPessoa]': {
                click: me.incluirTipoPessoa
            },
            'pessoaListaTipoPessoa button[action=excluir]': {
                click: me.excluir
            },
            'bairroForm button[action=salvar]': {
                click: me.cadastrarBairro
            },
            'pessoaLista button[action=imprimir]': {
                click: me.imprimir
            }
        });
    },
    excluir: function (btn) {
        var me = this;
        var tipo_pessoa = me.getPessoaListaTipoPessoa().getSelectionModel().getSelection()[0].getData();
        Ext.Ajax.request({
            url: '../pessoa/tipo_pessoa/iJson/excluir',
            params: {
                id_tipo_pessoa: tipo_pessoa.id,
                id_pessoa: btn.up('window').id_pessoa
            },
            success: function (response) {
                var retorno = Ext.JSON.decode(response.responseText);

                if (retorno) {
                    //Ext.getStore('Bairros').load();

                    var tipo = 'error';
                    if (retorno.success) {
                        tipo = 'success';
                        //Ext.getStore('listaTipoPessoa').load();
                        me.getPessoaListaTipoPessoa().store.load();
                    }
                    Ext.ux.Msg.flash({
                        msg: retorno.message,
                        type: tipo
                    });
                }
            }
        });
    },
    editar: function () {
        var store = this.getPessoaLista().getStore();
        var pessoa = this.getPessoaLista().getSelectionModel().getSelection()[0].getData();
        if (pessoa.id) {
            var tipoPessoa = "#RD_JURIDICA";
            if (pessoa.tipo) {
                tipoPessoa = "#RD_" + pessoa.tipo;
            }
            var campos = Ext.ComponentQuery.query('*[tipoPessoa]');
            Ext.Array.each(campos, function (campo) {
                campo.setVisible(pessoa.tipo === campo.tipoPessoa);
                campo.setDisabled(pessoa.tipo !== campo.tipoPessoa);
            });
            var win = Ext.create('Illi.view.pessoa.Form', {
                id_pessoa: pessoa.id,
                listeners: {
                    beforehide: function () {
                        store.load();
                    }
                }
            });
            win.down('tabpanel').enable();
            var formPessoa = win.down('#pessoa');
            var formEndereco = win.down('#endereco');
            var formComplemento = win.down('#dadosComplementares');
            var formVendedor = win.down('#vendedor');
            formPessoa.getForm().loadRecord(this.getPessoaLista().getSelectionModel().getSelection()[0]);
            formPessoa.down('radiogroup[name=tipo]').setValue({tipo: pessoa.tipo});
            formPessoa.down('combo[name=id_grupo_pessoa]').setValue(pessoa.id_grupo_pessoa);
            formPessoa.down('combo[name=id_vendedor]').setValue(pessoa.id_vendedor);
            formComplemento.down('[name=data_nascimento]').setValue(pessoa.data_nascimento);
            if (pessoa.tipo === "JURIDICA") {
                formComplemento.down('[name=data_nascimento]').setFieldLabel("Abertura");
            } else {
                formComplemento.down('[name=data_nascimento]').setFieldLabel("Nascimento");
            }
            win.show();
            if (pessoa.endereco) {
                pessoa.endereco.id_endereco = pessoa.endereco.id;
                pessoa.endereco.id_bairro = pessoa.endereco.bairro.id;
                pessoa.endereco.id_cidade = pessoa.endereco.bairro.cidade.id;
                formEndereco.getForm().setValues(pessoa.endereco);
                formEndereco.down('textfield[name=id_bairro]').setValue(pessoa.endereco.id_bairro).setDisabled(false);
                formEndereco.down('textfield[name=id_cidade]').setValue(pessoa.endereco.id_cidade);
            }
            if (pessoa.tipo === 'FISICA') {
                formComplemento.getForm().setValues(pessoa.fisica);
            }
            if (pessoa.tipo === 'JURIDICA') {
                formComplemento.getForm().setValues(pessoa.juridica);
            }
            if (pessoa.vendedor) {
                pessoa.vendedor.id_pessoa = pessoa.vendedor.id_pessoa.toString();
                formVendedor.getForm().setValues(pessoa.vendedor);
            }
        }
    },
    incluirContato: function (btn, evt, opt) {
        var win = btn.up('window');
        var form = win.down('form');
        var idPessoa = form.getValues().id;
        var grid = this.getPessoaListaContato();
        var store = grid.store;
        var contatoModel = Ext.create('Illi.model.Contato', {
            'p.id': idPessoa,
            situacao: 'ATIVO'
        });
        store.insert(0, contatoModel);
        grid.editingPlugin.startEdit(0, 0);
    },
    incluirTipoPessoa: function (btn, evt, opt) {
        var win = btn.up('window');
        var form = win.down('form');
        var idPessoa = form.getValues().id;
        var grid = this.getPessoaListaTipoPessoa();
        var store = grid.store;
        var tipoPessoaModel = Ext.create('Illi.model.TipoPessoa', {
            'p.id': idPessoa
        });
        store.insert(0, tipoPessoaModel);
        grid.editingPlugin.startEdit(0, 0);

    },
    incluirMeta: function (btn, evt, opt) {
        alert('incluirMeta');
        var win = btn.up('window');
        var form = win.down('form');
        var idPessoa = form.getValues().id;
        var grid = this.getListaMeta();
        var store = grid.store;
        var tipoPessoaModel = Ext.create('Illi.model.Meta', {
            'p.id': idPessoa
        });
        store.insert(0, tipoPessoaModel);
        grid.editingPlugin.startEdit(0, 0);

    },
    multiplicar: function (btn, evt, opt) {
        var grid = this.getListaMeta();
        var records = grid.getSelectionModel().getSelection();
        alert(records);
        Ext.create('Illi.view.pessoa.meta.Form', {
            meta: records[0].data
        }).show();
    },
    atualizarMeta: function (btn) {
        var grid = this.getListaMeta();
        grid.store.load();
    },
    adicionarContato: function (btn) {
        var win = btn.up('window');
        var form = win.down('#contato');
        var formPessoa = win.down('form');
        var validou = form.getForm().isValid();

        if (validou) {
            var json = Ext.JSON.encode(form.getValues());
            var jsonPessoa = Ext.JSON.encode(formPessoa.getValues());
            Ext.Ajax.request({
                url: '../pessoa/contato/iJson/alterar',
                params: {
                    data: json,
                    pessoa: jsonPessoa
                },
                success: function (response) {
                    var retorno = Ext.JSON.decode(response.responseText);

                    if (retorno) {
                        //Ext.getStore('Bairros').load();

                        var tipo = 'error';
                        if (retorno.success) {
                            tipo = 'success';
                        }
                        Ext.ux.Msg.flash({
                            msg: retorno.message,
                            type: tipo
                        });
                    }
                }
            });
        }
    },
    cadastrarCidade: function (btn) {
        var win = btn.up('window');
        var form = win.down('form');
        var validou = form.getForm().isValid();

        if (validou) {
            var json = Ext.JSON.encode(form.getValues());
            Ext.Ajax.request({
                url: '../pessoa/cidade/iJson/alterar',
                params: {
                    data: json
                },
                success: function (response) {
                    var retorno = Ext.JSON.decode(response.responseText);

                    if (retorno) {
                        win.close();
                        Ext.getStore('Cidades').load();


                        var tipo = 'error';
                        if (retorno.success) {
                            tipo = 'success';
                        }
                        Ext.ux.Msg.flash({
                            msg: retorno.message,
                            type: tipo
                        });
                    }
                }
            });

        }
    },
    cadastrarTipoContato: function (btn) {
        var win = btn.up('window');
        var form = win.down('form');
        var validou = form.getForm().isValid();

        if (validou) {
            var json = Ext.JSON.encode(form.getValues());
            Ext.Ajax.request({
                url: '../pessoa/tipo_contato/iJson/alterar',
                params: {
                    data: json
                },
                success: function (response) {
                    var retorno = Ext.JSON.decode(response.responseText);

                    if (retorno) {
                        Ext.getStore('TipoContatos').load();

                        var tipo = 'error';
                        if (retorno.success) {
                            tipo = 'success';
                        }
                        Ext.ux.Msg.flash({
                            msg: retorno.message,
                            type: tipo
                        });

                        win.close();
                    }
                }
            });

        }
    },
    cadastrarBairro: function (btn) {
        var win = btn.up('window');
        var form = win.down('form');
        var validou = form.getForm().isValid();

        if (validou) {
            var json = Ext.JSON.encode(form.getValues());
            Ext.Ajax.request({
                url: '../pessoa/bairro/iJson/alterar',
                params: {
                    data: json
                },
                success: function (response) {
                    var retorno = Ext.JSON.decode(response.responseText);

                    if (retorno) {
                        win.close();
                        Ext.getStore('Bairros').load();

                        var tipo = 'error';
                        if (retorno.success) {
                            tipo = 'success';
                        }
                        Ext.ux.Msg.flash({
                            msg: retorno.message,
                            type: tipo
                        });
                    }
                }
            });
        }
    },
    carregarBairro: function (combo, records) {
        var comboBairro = Ext.ComponentQuery.query('pessoaForm #comboBairro')[0];

        comboBairro.setDisabled();
        comboBairro.setValue('');
        comboBairro.store.removeAll();

        comboBairro.store.getProxy().extraParams = {
            cidade: combo.getValue()
        };
        comboBairro.enable();
        comboBairro.setDisabled(false);
        comboBairro.store.load();
    },
    salvar: function (btn) {
        var grid = this.getPessoaLista();
        var win = btn.up('window');
        var form = win.down('form');
        var tab = win.down('tabpanel');
        var validou = form.getForm().isValid();
        if (validou) {
            btn.setText('Salvando Aguarde...');
            btn.setDisabled(true);
            var basico = form.getForm().getFieldValues();
            var complementos = win.down('#dadosComplementares').getForm().getFieldValues();
            var formEndereco = win.down('#endereco');
            var formVendedor = win.down('#vendedor');
            
            basico.data_nascimento = complementos.data_nascimento;
            
            var pessoa = Ext.JSON.encode(basico);
            var complemento = Ext.JSON.encode(complementos);
            var endereco = Ext.JSON.encode(formEndereco.getValues());
            var vendedor = Ext.JSON.encode(formVendedor.getForm().getFieldValues());

            var values = form.getValues();
            Ext.Ajax.request({
                url: '../pessoa/pessoa/iJson/alterar',
                params: {
                    data: pessoa,
                    complemento: complemento,
                    endereco: endereco,
                    vendedor: vendedor
                },
                success: function (response) {
                    var retorno = Ext.JSON.decode(response.responseText);
                    if (retorno) {
                        if (retorno.data.id) {
                            win.id_pessoa = retorno.data.id;
                        }
                        var tipo = 'error';
                        if (retorno.message.pessoa) {
                            tipo = 'error';
                            if (retorno.message.pessoa.sucesso) {
                                tipo = 'success';
                            }
                            Ext.ux.Msg.flash({
                                msg: retorno.message.pessoa.msg,
                                type: tipo
                            });
                        }
                        if (retorno.message.complemento) {
                            tipo = 'error';
                            if (retorno.message.complemento.sucesso) {
                                tipo = 'success';
                            }

                            Ext.ux.Msg.flash({
                                msg: "Dados Pessoais: " + retorno.message.complemento.msg,
                                type: tipo
                            });
                        }
                        if (retorno.message.endereco) {
                            tipo = 'error';
                            if (retorno.message.endereco.sucesso) {
                                tipo = 'success';
                            }
                            Ext.ux.Msg.flash({
                                msg: "Endereco: " + retorno.message.endereco.msg,
                                type: tipo
                            });
                        }
                        tab.enable();
                        form.getForm().setValues(retorno.data);
                        btn.setText('Salvar');
                        btn.setDisabled(false);
                        if (grid) {
                            grid.getSelectionModel().deselectAll();
                        }
                    }
                }
            });
        }
    },
    edit: function (editor, e) {
        var store = this.getPessoaLista().store;
        this.getPessoaLista().store.sync();
    },
    incluir: function () {
        var store = this.getPessoaLista().store;
        var form = Ext.create('Illi.view.pessoa.Form', {
            listeners: {
                beforehide: function () {
                    store.load();
                }
            }
        });
        form.show();
    },
    atualizar: function () {
        this.getPessoaLista().store.load();
    }
});