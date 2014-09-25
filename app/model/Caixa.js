Ext.define('Illi.model.Caixa', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'data_abertura', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data_abertura.date'},
        {name: 'data_fechamento', type: 'date', dateFormat: 'Y-m-d H:i:s', mapping: 'data_fechamento.date'},
        {name: 'saldo_abertura', type: 'float'},
        {name: 'saldo_fechamento', type: 'float'},
        {name: 'u.id', type: 'int', mapping: 'usuario.id'},
        {name: 'u.nome', mapping: 'usuario.nome'},
        {name: 'cc.id', type: 'int', mapping: 'conta.id'},
        {name: 'cc.nome', mapping: 'conta.nome'},
        {name: 'cc.saldo', mapping: 'conta.saldo'},
        {name: 'acc.id', type: 'int', mapping: 'conta.agencia.id'},
        {name: 'acc.nome', mapping: 'conta.agencia.nome'},
        {name: 'bacc.id', type: 'int', mapping: 'conta.agencia.banco.id'},
        {name: 'bacc.nome', mapping: 'conta.agencia.banco.nome'}
    ]
});