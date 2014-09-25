Ext.define('Ext.ux.serverProvider', {
    extend: 'Ext.state.Provider',
    alias: 'state.serverProvider',
    config: {
        data: [],
        baseUrl: '../usuario/perfil/',
        illiRead: 'lista',
        illiCreate: 'alterar',
        illiUpdate: 'alterar',
        illiDestroy: 'excluir',
        timeout: 30000
    },
    constructor: function(config) {
        this.initConfig(config);
        var me = this;
        me.callParent(arguments);
    },
    set: function(name, value) {
        var me = this;
        if (typeof value === "undefined" || value === null) {
            me.clear(name);
            return;
        }
        me.persist(name, value);
        me.callParent(arguments);
    },
    clear: function(name) {
        this.clearKey(name);
        this.callParent(arguments);
    },
    request: function(url, chave, valor) {
        var retorno;
        try {
            var data = {};
//            console.log(this);
            data.chave = chave;
            if (valor) {
                data.valor = valor;
            }
            Ext.Ajax.request({
                url: url,
                disableCaching: false,
                params: {
                    data: Ext.JSON.encode(data)
                },
                callback: function(retorno) {
                    return retorno.responseText;
                },
                failure: function() {
                    console.error('failed', arguments);
                    return false;
                }
            });
        }
        catch (err) {
            txt = " Ocorreu Um erro!</br>";
            txt += " Tente Novamente se o Problema Pesistir entre em contato com o Suporte!.</br>";
            txt += " Descrição do Erro: " + err.message + "</br>";
            Ext.MessageBox.show({
                title: 'Aviso Importante',
                msg: txt,
                autoScroll: true,
                icon: Ext.MessageBox.ERROR,
                buttons: Ext.MessageBox.OK
            });
            return false;
        }

    },
    restoreState: function() {
        var retorno = Ext.Ajax.request({
            url: this.getBaseUrl() + 'iJson/' + this.getIlliRead(),
            disableCaching: false,
            params: {
                data: Ext.JSON.encode(this.getData())
            },
            async: false,
            callback: function(retorno) {
                return retorno.responseText;
            },
            scope: this
        });
        this.setData(retorno.responseText);
        var result = this.getData();
        this.state = Ext.JSON.decode(result);
//        for (var i in result) {
//            console.log(this.decodeValue(result[i]));
//            this.state[i] = this.decodeValue(result[i]);
//        }

//
    },
    persist: function(chave, valor) {
        var me = this;
        var url = this.getBaseUrl() + this.getIlliUpdate();
        me.request(url, chave, valor);
    },
    clearKey: function(chave) {
        var me = this;
        me.request(this.getBaseUrl() + this.getIlliDestroy, chave);
    }
});

