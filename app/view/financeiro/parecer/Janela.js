Ext.define('Illi.view.financeiro.parecer.Janela', {
    extend: 'Ext.window.Window',
    alias: 'widget.parecerJanela',
    title: 'Cadastro de Parecer',
    layout: 'fit',
    id_fluxo: null,
    id_produto: null,
    id_pessoa: null,
    id_atendimento: null,
    nome: null,
    requires: [
        'Illi.view.financeiro.parecer.Form',
        'Illi.view.financeiro.parecer.Lista',
        'Illi.view.financeiro.parecer.Cabecalho',
        'Illi.view.pessoa.contato.ListaContato'
    ],
    modal: true,
    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            width: "95%",
            height: "98%",
            scope: me,
            title: 'Lista Parecer(es)',
            xtype: 'form',
            bodyPadding: 0,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start',
                frame: true,
                plain: true,
                border: false
            },
            items: [
                {
                    xtype: 'parecerLista',
                    id_fluxo: me.id_fluxo,
                    id_produto: me.id_produto,
                    id_atendimento: me.id_atendimento,
                    flex: 2
                },
                {
                    xtype: 'pessoaListaContato',
                    tbar: false,
                    hidden: (me.id_produto ? true : false),
                    title: 'Contatos do Parceiro: ' + me.nome,
                    plugins: false,
                    flex: 0.8
                }


            ]
        });
        me.callParent(arguments);
    }



});