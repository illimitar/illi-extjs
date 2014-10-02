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
                var usuario_acesso_inicial = Illi.app.Local.get('usuario').usuario_acesso_inicial;
                viewport.add(Ext.create('Illi.view.usuario.Menu', {
                    region: 'north',
                    onClickButton: viewport.onClickButton
                }));
                viewport.add({
                    region: 'center',
                    layout: 'card',
                    activeItem: 0,
                    border: false,
                    items: {
                        xtype: 'tabpanel',
                        itemId: 'tabCenter',
                        flex: 1,
                        border: false,
                        bodyBorder: false,
                        autoScroll: false,
                        bodyPadding: 0,
                        items: []
                    }
                });
                if (usuario_acesso_inicial) {
                    var obj = viewport.down("#tbarButtonItem" + usuario_acesso_inicial);
                    obj.initial = true;
                    obj.fireHandler('click');
                } else {
                    if (/(CAIXA)/gi.test(grupo_usuario)) {
                        viewport.add(Ext.widget('janelaVendaRapida'));
                    } else {
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
                    }
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
    },
    onClickButton: function (obj, evt, tab) {
        var viewport = this;
        var tbar = Illi.app.viewCenter.down('#toolbarMenuPrincipal');
        var tabCenter = Illi.app.viewCenter.down('#tabCenter');
        var raw = obj.raw;
        if (raw.controllerName !== undefined) {
            switch (raw.componente) {
                case "WINDOW":
                    var widget = raw.xtypeClass;
                    var doCreateWidget = function () {
                        tbar.janelaAberta[widget] = Ext.widget(widget, Illi.app.Local.get(raw.xtypeClass));
                        doOpenWidget();
                    };
                    var doOpenWidget = function () {
                        if (tbar.janelaAberta[widget].isHidden()) {
                            tbar.janelaAberta[widget].show();
                        }
                    };
                    if (tbar.janelaAberta[widget] !== undefined) {
                        if (tbar.janelaAberta[widget].isDestroyed) {
                            doCreateWidget();
                        } else {
                            doOpenWidget();
                        }
                    } else {
                        doCreateWidget();
                    }
                    break;
                case "TAB":
                    var abaAberta = tabCenter.items.findBy(function (aba) {
                        return aba.title === raw.text;
                    });
                    if (!abaAberta) {
                        var widget = raw.xtypeClass;
                        var abrir = Ext.widget(widget, Illi.app.Local.get(raw.xtypeClass));
                        if (obj.initial) {
                            Illi.app.permissao = raw.permissao;
                        }
                        tabCenter.add({
                            title: raw.text || 'Tela do sistema',
                            iconCls: raw.iconCls,
                            layout: 'fit',
                            itemId: raw.id_acesso,
                            border: false,
                            closable: (obj.initial ? false : true),
                            closeAction: 'hide',
                            items: abrir,
                            permissao: raw.permissao,
                            listeners: {
                                beforeactivate: function (tab, opt) {
//                                    console.log("tabCenterItem beforeactivate", tab, opt);
                                    Illi.app.permissao = raw.permissao;
                                },
                                afterlayout: function (tab, layout, opt) {
//                                    console.log("tabCenterItem afterlayout", tab, layout, opt);
                                },
                                afterrender: function (tab, opt) {
//                                    console.log("tabCenterItem afterrender", tab, opt);
                                    var abaAberta = tabCenter.items.findBy(function (aba) {
                                        return aba.title === raw.text;
                                    });
                                    if (obj.initial) {
                                        tabCenter.setActiveTab(abaAberta);
                                    }
                                }
                            }
                        }).show();
                        delete widget;
                        delete abrir;
                        var tabOpened = tabCenter.down('#' + raw.id_acesso);
                        if (tabOpened) {
                            var grid = tabOpened.down('grid');
                            if (grid) {
                                grid.getView().el.focus();
                            }
                            delete grid;
                        }
                        delete tabOpened;
                    } else {
                        tabCenter.setActiveTab(abaAberta);
                    }
                    break;
            }
            if (tab === undefined && (raw.tbarButtonId !== undefined && raw.tbarButtonId)) {
                var tbarButton = obj.up("#" + raw.tbarButtonId);
                tbarButton.hideMenu();
            }
        }
        return false;
    }
});
