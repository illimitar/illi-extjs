Ext.define('Illi.store.AbstractStore', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    remoteSort: true,
    remoteGroup: false,
    remoteFilter: true,
    pageSize: 150,
    baseUrl: '',
    storeId: '',
    illiRead: 'lista',
    illiCreate: 'alterar',
    illiUpdate: 'alterar',
    illiDestroy: 'excluir',
    constructor: function(config) {
        var me = this;

        me.proxy = {
            simpleSortMode: true,
            type: 'ajax',
            api: {
                read: me.baseUrl + me.illiRead,
                create: me.baseUrl + me.illiCreate,
                update: me.baseUrl + me.illiUpdate,
                destroy: me.baseUrl + me.illiDestroy
            },
            actionMethods: {
                read: 'POST',
                create: 'POST',
                update: 'POST',
                destroy: 'POST'
            },
            writer: {
                type: 'json',
                writeAllFields: true,
                encode: true,
                root: 'data'
            },
            reader: {
                type: 'json',
                root: 'rows',
                successProperty: 'succes',
                totalProperty: 'total'
            },
            listeners: {
                exception: function(proxy, response, operation) {
                    try {
                        var obj = Ext.decode(response.responseText);
                        if (obj.message === 'Sessão Expirou') {
                            Ext.MessageBox.show({
                                title: 'Alerta',
                                msg: 'Sua Sessão Expirou',
                                icon: Ext.MessageBox.ERROR,
                                buttons: Ext.Msg.OK,
                                fn: function(btn, ev) {
                                    if (btn === 'ok') {
                                        var redirect = "http://" + window.document.location.host;
                                        window.location = redirect;
                                    }
                                }
                            });

                        } else {
                            Ext.MessageBox.show({
                                title: 'Erro de conexão',
                                msg: operation.getError(),
                                icon: Ext.MessageBox.ERROR,
                                buttons: Ext.Msg.OK
                            });
                        }
                    } catch (e) {
                        error(e);
//                        Ext.create('Ext.window.Window', {
//                            title: 'Erro de conexão 2',
//                            //height: "90%",
//                            autoShow: true,
//                            autoScroll: true,
//                            modal: true,
//                           // width: "90%",
//                            layout: 'fit',
//                            html: "Ocorreu um Erro ao Conectar com o Servidor!<br><b>Confira se sua informação foi salva! </b><br/> <b>Mensagem do suporte:</b>" + e.message
//                        });
                        return false;
                    }


                }
            }

        };

        this.callParent([config]);

    },
    listeners: {
        write: function(proxy, operation) {

            try {
                var obj = Ext.decode(operation.response.responseText);

                if (obj.success) {
                    Ext.ux.Msg.flash({
                        msg: obj.message,
                        type: 'success'
                    });
                } else {
                    Ext.ux.Msg.flash({
                        msg: obj.message,
                        type: 'error'
                    });
                    return false;
                }
            } catch (e) {
                error(e);
                Ext.MessageBox.show({
                    title: 'Erro de conexão',
                    msg: "Ocorreu um Erro ao Conectar com o Servidor!<br><b>Confira se sua informação foi salva! </b><br/><b>Mensagem do suporte:</b>" + e.message,
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
                return false;
            }


        }
    }
});