Ext.define('Illi.store.CondicaoPagamentos', {
    extend: 'Illi.store.AbstractStore',
    require: 'Illi.store.AbstractStore',
    model: 'Illi.model.Prazo',
    baseUrl: '../fluxo/prazo/iJson/',
    illiRead: 'lista_condicao_pagamento',
    illiCreate: 'alterar_condicao_pagamento',
    illiUpdate: 'alterar_condicao_pagamento',
    storeId: 'CondicaoPagamentos'
});
