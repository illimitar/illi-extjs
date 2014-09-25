Ext.define('Illi.controller.AcessoGrupoUsuario', {
    extend: 'Illi.controller.AbstractController',
    stores: ['AcessoGrupoUsuarios'],
    models: ['AcessoGrupoUsuario'],
    views: [
        'usuario.acesso_grupo_usuario.Arvore'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'acessoGrupoUsuarioArvore'
        },
        {
            ref: 'acessoGrupoUsuarioArvore',
            selector: 'acessoGrupoUsuarioArvore'
        }
    ],
    init: function() {
        var me = this;
        me.control({
//            'acessoGrupoUsuarioArvore': {
//                itemdblclick: me.salvar
//            },
//            'acessoGrupoUsuarioArvore button[action=incluir]': {
//                click: me.incluir
//            },
//            'acessoGrupoUsuarioArvore button[action=excluir]': {
//                click: me.excluir
//            },
            'acessoGrupoUsuarioArvore button[action=salvar]': {
                click: me.salvar
            }
        });
    },
    salvar: function(btn) {
        var tree = btn.up('treepanel');
        var window = btn.up('window');
        var records = tree.getView().getChecked();
        var records_array = [];
        Ext.Array.each(records, function(rec) {
            records_array.push({
//                id_grupo_usuario: tree.id_grupo_usuario,
                id_acesso: rec.raw.id_acesso,
                id_funcao: rec.raw.id_funcao
            });
        });
        var records_json = Ext.JSON.encode(records_array);
        Ext.MessageBox.wait('Aguarde, salvando...', window.title);
        Ext.Ajax.request({
            url: '../usuario/acesso_grupo_usuario/iJson/alterar',
            params: {
                data: records_json,
                id_grupo_usuario: tree.id_grupo_usuario
            },
            success: function(response) {
                Ext.MessageBox.hide();
                if (response.responseText !== undefined) {
                    var response = Ext.JSON.decode(response.responseText);
                    if (response.success) {
                        window.close();
                        Ext.ux.Msg.flash({
                            type: 'success',
                            msg: response.message
                        });
                        return true;
                    }
                    action = response.message;
                }
                Ext.Msg.show({
                    title: window.title,
                    msg: "Problemas!<br /><i>" + action + "</i>",
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR,
                    scope: this
                });
            },
            failure: function() {
                Illi.app.Util.mensagemFalha();
            }
        });
    }

});