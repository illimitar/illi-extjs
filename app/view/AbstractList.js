Ext.define('Illi.view.AbstractList', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.*',
        'Ext.window.Window',
        'Ext.container.Viewport',
        'Ext.layout.container.Border',
        'Ext.data.*',
        'Ext.state.*',
        'Ext.toolbar.Paging',
        'Ext.ux.ajax.*',
        'Ext.ux.form.field.ClearButton',
        'Ext.ux.form.field.OperatorButton',
        'Ext.ux.grid.column.ActionPro',
        'Ext.ux.grid.FilterBar',
        'Ext.ux.grid.AutoResizer'
    ],
    alias: 'widget.abstractlist',
    modulo: null,
    setIdColuna: function(nome) {
        if (this.stateId) {
            var id = this.stateId + nome;
            return id;
        }
    },
    viewConfig: {
        forceFit: true,
        showPreview: true,
        enableRowBody: true,
        getRowClass: function(record, index) {
            var situacao = record.get('situacao');
            var tipo = record.get('tipo');
            if (situacao === 'DESATIVO') {
                return 'cancelado';
            }
        }
    },
    title: null,
    border: false,
    bodyBorder: false,
    columnLines: true,
    config: {
        edicao: true,
        plugins: false,
        features: false,
        ocultarFiltro: false
    },
    constructor: function(config) {
        var me = this;
        me.initConfig(config);
        me.callParent(arguments);
    },
    initComponent: function(grid) {
        var me = this;
        var id = me.id;
        if (me.itemId !== undefined) {
            id = me.itemId;
        }
        if (!me.getPlugins()) {
            me.setPlugins(Illi.app.Util.setPlugins({
                filterbar: {
                    renderHidden: me.getOcultarFiltro()
                },
                rowediting: {
                    pluginId: 'editorGrid-' + id
                }
            }));
        }
        if (!me.getFeatures()) {
            me.setFeatures(Illi.app.Util.setFeatures());
        }
        if (!me.getEdicao()) {
            me.setPlugins(Illi.app.Util.setPlugins(me.getPlugins(), {
                rowediting: false
            }));
        }
        me.callParent(arguments);
    },
    ativarBotao: function(botao, id_entidade) {
        try {
            var permissao = Illi.app.permissao;
            if (botao && permissao) {
                if (permissao[id_entidade] !== undefined) {
                    return (permissao[id_entidade][botao] !== undefined ? true : false);
                } else {
                    return (permissao[Illi.app.Local.get('usuario').entidade.id][botao] !== undefined ? true : false);
                }
            } else {
                throw "Permissao ou Botão nao Definido!" + botao + permissao;
            }
        } catch (err) {
            console.error(err);
            return false;
        }

    },
    selecionar: function(selModel, selections) {
        if (selections[0]) {
            this.down('#incluir').setDisabled(!this.ativarBotao('incluir'), selections[0].get('e.id'));
            this.down('#atualizar').setDisabled(!this.ativarBotao('atualizar'), selections[0].get('e.id'));
            if (this.down('#excel')) {
                this.down('#excel').setDisabled(!this.ativarBotao('excel'), selections[0].get('e.id'));
            }
            if (this.down('#imprimir')) {
                this.down('#imprimir').setDisabled(!this.ativarBotao('imprimir'), selections[0].get('e.id'));
            }
        }
    }

});
