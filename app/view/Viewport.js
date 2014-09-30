Ext.define('Illi.view.Viewport', {
    extend: 'Ext.container.Viewport',
    renderTo: Ext.getBody(),
    requires: ['Illi.view.financeiro.parecer.ListaContatoAgenda'],
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            title: 'illi',
            layout: 'border',
            border: false
        });
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function (viewport) {
            Illi.app.viewCenter = viewport;
            var falha = function () {
                closepage = true;
                window.location = "http://" + window.document.location.host;
            };
            viewport.xhrUsuarioSessao(function (response) {
                Ext.fly('appLoadingBackground').destroy();
                Illi.app.Local.set('usuario', response);
                // ini1: verifica qual grupo de usuario e determina se abrirá o pdv ou o painel principal
                var grupo_usuario = Illi.app.Local.get('usuario').grupo_usuario.nome;
                if (/(CAIXA)/gi.test(grupo_usuario)) {
//                    viewport.add(Ext.create('Illi.view.financeiro.pdv.JanelaVendaRapida'));
                    viewport.add(Ext.widget('janelaVendaRapida'));
                } else {
                    viewport.add(Ext.create('Illi.view.usuario.Menu', {
                        region: 'north'
                    }));
                    viewport.add({
                        region: 'center',
                        layout: 'card',
                        activeItem: 0,
                        border: false,
                        items: {
                            xtype: 'tabpanel',
                            itemId: 'tabCenter',
                            activeItem: 0,
                            flex: 1,
                            border: false,
                            activeTab: 0,
                            bodyBorder: false,
                            autoScroll: false,
                            bodyPadding: 0,
                            items: []
                        }
                    });
                    if (/(ADMINISTRADOR|MASTER)/gi.test(grupo_usuario)) {
                        viewport.down("#tabCenter").add(Ext.create('Illi.view.financeiro.grafico.Container', {
                            title: 'Início',
                            border: true
                        }));
                    } else {
                        viewport.down("#tabCenter").add(Ext.create('Illi.view.financeiro.parecer.ListaContatoAgenda', {
                            title: 'Início',
                            border: true
                        }));
                    }
//                    viewport.down("#tabCenter").add(Ext.widget('janelaVendaRapida'));
                }
                // fim1
                viewport.setVerificadorSessao();
            }, falha);
        }
    },
    setVerificadorSessao: function () {
        var viewport = this;
        var taskSessao = new Ext.util.TaskRunner();
        var ctrlSessao = taskSessao.newTask({
            run: function () {
                viewport.xhrUsuarioSessao(false, function () {
                    closepage = true;
                    window.location = "http://" + window.document.location.host + (pdv ? "/illi/inicial" : "");
                });
            },
            interval: 300000
        });
        ctrlSessao.start();
    },
    xhrUsuarioSessao: function (sucesso, falha) {
        //alert('Illi.view.Viewport::xhrUsuarioSessao()', sucesso, falha);
        var viewport = this;
        try {
            Ext.Ajax.request({
                url: '../usuario/usuario/iJson/sessao',
                success: function (response) {
                    var response = Ext.JSON.decode(response.responseText);
                    if (response.id !== undefined) {
                        if (sucesso) {
                            sucesso(response);
                        }
                    } else {
                        error(response);
                        Ext.MessageBox.alert('Atenção', 'Sua sessão expirou!', falha);

                    }
                },
                failure: function (response) {
                    Illi.app.Util.mensagemFalha();
                }
            });
        } catch (e) {
            error(e);
            Ext.MessageBox.alert('Atenção', 'Comunicação com o servidor falhou, tente novamente!', falha);
        }
    }
});
