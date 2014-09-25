Ext.define('Illi.view.pessoa.grupo_pessoa.ComboGrupoPessoa', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.ComboGrupoPessoa',
    name: 'id_grupo_pessoa',
    ref: 'id_grupo_pessoa',
    store: Ext.create('Illi.store.GrupoPessoas'),
    displayField: 'grupo',
    valueField: 'id',
    queryParam: 'grupo',
    minChars: 0,
    queryMode: 'remote'
});



