Ext.define('Illi.store.UsuarioContas', {
    extend: 'Illi.store.AbstractStore',
    model: 'Illi.model.UsuarioConta',
    baseUrl: '../banco/conta/iJson/',
    illiRead: 'lista_usuario_conta',
    illiCreate: 'alterar_usuario_conta',
    illiUpdate: 'alterar_usuario_conta',
    illiDestroy: 'excluir_usuario_conta',
    storeId: 'UsuarioContas'
});