Ext.define('Illi.view.usuario.Menu', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.usuarioMenu',
    itemId: 'toolbarMenuPrincipal',
    requires: [
        'Illi.view.usuario.entidade.Combo',
        'Illi.view.usuario.ComboArvore',
        'Illi.view.financeiro.parecer.Lista'
    ],
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            tabCenter: false,
            localUsuario: Illi.app.Local.get('usuario'),
            janelaAberta: {}
        });
        me.doDefinirSmallScreen(me);
        me.callParent(arguments);
    },
    listeners: {
        afterrender: function (tbar) {
            var nome_usuario = tbar.localUsuario.nome;
            var grupo_usuario = tbar.localUsuario.grupo_usuario.nome;
            var caching = tbar.localUsuario.cache;
            var menu = tbar.localUsuario.menu;
            tbar.add({
                xtype: 'image',
                src: Illi.app.Util.getPath("/resources/images/illi.png"), //Illi.path + '/resources/images/illi.png',
                tooltip: 'ILLI Software',
                width: 32,
                height: 32,
                margin: '0 10px 0 0',
                listeners: {
                    click: {
                        element: 'el', //bind to the underlying el property on the panel
                        fn: function () {
                            Ext.Ajax.request({
                                url: '../illi/redefinir_sessao/',
                                success: function (response) {
                                    closepage = true;
                                    window.location.reload(true);
                                }
                            });
                        }
                    }
                }
            });

            var gravatar = Illi.app.Util.getGravatar(Illi.app.Local.get("usuario").email);
            var iconCache = (caching ? 'icon-cache' : 'icon-homem');

            tbar.add(
                    {
                        tooltip: "Perfil: " + nome_usuario,
                        iconCls: 'large',
                        scale: 'large',
                        style: {
                            "background-image": "url('" + gravatar + "') !important;",
                            "background-repeat": "no-repeat",
                            "background-size": "100% 100%"
                        },
                        handler: function () {
                            Ext.create('Illi.view.usuario.Janela', {iconCache: iconCache}).show();
                        }
                    }
            );
            tbar.add({
                xtype: 'button',
                tooltip: "Suporte",
                iconCls: 'icon-suporte large', // (tbar.smallScreen ? 'icon-anotacao medium' : 'icon-anotacao large')
                scale: 'large', // (tbar.smallScreen ? 'medium' : 'large')
                handler: function () {
                    try {
                        Ext.MessageBox.show({
                            title: 'Atenção',
                            msg: "<h3>Carregando acesso remoto</h3>",
                            waitConfig: {interval: 0}
                        });
                        var url = Illi.app.Local.get('suporte');
                        Ext.Ajax.request({
                            method: 'POST',
                            url: (url ? url : "http://127.0.0.1:12000/suporte"),
                            success: function (response) {

                                try {
                                    var retorno = Ext.JSON.decode(response.responseText);
                                    if (retorno.finalizado === true) {

                                    } else {
                                        window.open("http://app.illi.com.br/Remoto.exe", "illi");
                                    }
                                } catch (err) {
                                    window.open("http://app.illi.com.br/Remoto.exe", "illi");
                                }
                                Ext.MessageBox.hide();
                            },
                            failure: function () {
                                Ext.MessageBox.hide();
                                window.open("http://app.illi.com.br/Remoto.exe", "illi");
                            }
                        });
                    } catch (err) {
                        console.log(err);
                        window.open("http://app.illi.com.br/Remoto.exe", "illi");
                        Ext.MessageBox.hide();
                    }
                }
            });

            if (menu.length > 0) {
                eval("menu = " + menu + ";");
                tbar.add(menu);
            }
            tbar.doExibirBarraFlutuante();
        }
    },
    doExibirBarraFlutuante: function () {
        var tbar = this;
        var id_entidade = tbar.localUsuario.entidade.id;
        var barraFlutuante = Ext.widget({
            xtype: 'toolbar',
            border: true,
            rtl: false,
            floating: true,
            fixed: true,
            preventFocusOnActivate: true,
            items: [
                {
                    xtype: 'comboEntidade',
                    fieldLabel: false,
                    labelWidth: 75,
                    value: id_entidade,
                    listeners: {
                        select: function (combo) {
                            var id = combo.getValue();
                            if (id !== id_entidade) {
                                combo.setDisabled(true);
                                Ext.Ajax.request({
                                    url: '../illi/definir_entidade/',
                                    method: 'POST',
                                    params: {
                                        entidade: id
                                    },
                                    success: function (response) {
                                        if (response.responseText !== undefined) {
                                            var response = Ext.JSON.decode(response.responseText);
                                            if (response.controle) {
                                                Illi.app.Local.set('controle', response.controle);
                                            }
                                        }
                                        var redirect = '/illi/principal';
                                        closepage = true;
                                        window.location = redirect;
                                    }
                                });
                            }
                        }
                    }
                },
                '-',
                {
                    xtype: 'comboArvoreAcesso',
                    emptyText: 'Acesso Rápido',
                    handlerActionButton: tbar.onClickButton
                },
                {
                    tooltip: "Sair: ",
                    iconCls: 'small icon-sair',
                    scale: 'small',
                    handler: function () {
                        closepage = true;
                        window.location = "http://" + window.document.location.host + (pdv ? "/illi/inicial" : "");
                    }
                }
            ],
            listeners: {
                afterlayout: function (flyBar) {
                    tbar.tbarAlign(barraFlutuante);
                    tbar.doDefinirSmallScreen(tbar);
                    Ext.EventManager.onWindowResize(function () {
                        var oldSmallScreen = tbar.smallScreen;
                        tbar.tbarAlign(flyBar);
                        tbar.doDefinirSmallScreen(tbar);
                        tbar.tbarRedimecionarIcone(tbar.items.items, oldSmallScreen);
                    });
                }
            }
        });
        barraFlutuante.show();
    },
    doDefinirSmallScreen: function (tbar) {
        tbar.smallScreen = (Ext.getBody().getViewSize().width < 1488 ? true : false);

    },
    tbarAlign: function (obj) {
        obj.alignTo(document.body, 'tr-tr', [(Ext.getScrollbarSize().width + 4) * (Ext.rootHierarchyState.rtl ? 1 : -1), -(document.body.scrollTop || document.documentElement.scrollTop) + 10]);
    },
    tbarRedimecionarIcone: function (items, small_antigo) {
        var tbar = this;
        var resolucao = Ext.getBody().getViewSize().width;
        //if ((small_antigo !== tbar.smallScreen) || (resolucao < 1000)) {
        Ext.Array.each(items, function (item) {
            if (item.texto !== undefined) {
                item.setText((tbar.smallScreen ? false : item.texto));
                item.setVisible(resolucao > 1025);
            }
        });
        // }
    },
    onClickButton: function (obj, evt, tab) {
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
                        tabCenter.add({
                            title: raw.text || 'Tela do sistema',
                            iconCls: raw.iconCls,
                            layout: 'fit',
                            itemId: raw.id_acesso,
                            border: false,
                            closable: true,
                            closeAction: 'hide',
                            items: abrir,
                            listeners: {
                                beforeactivate: function (tab, opt) {
                                    Illi.app.permissao = raw.permissao;
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
