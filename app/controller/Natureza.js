Ext.define('Illi.controller.Natureza', {
    extend: 'Illi.controller.AbstractController',
    stores: ['Naturezas'],
    models: ['Natureza'],
    views: [
        'natureza.Lista',
        'natureza.Container',
        'natureza.treeGrid'
    ],
    refs: [
        {
            ref: 'gridIlli',
            selector: 'listaNatureza'
        },
        {
            ref: 'listaNatureza',
            selector: 'listaNatureza'
        },
        {
            ref: 'treeGridNatureza',
            selector: 'treeGridNatureza'
        }
    ],
    init: function() {
        var me = this;
        me.control(
                {
                    'listaNatureza': {
                        itemdblclick: me.editar
                    },
                    'listaNatureza button[action=incluir]': {
                        click: me.incluir
                    },
                    'listaNatureza button[action=excluir]': {
                        click: me.excluir
                    },
                    'listaNatureza button[action=excel]': {
                        click: me.excel
                    },
                    'listaNatureza button[action=atualizar]': {
                        click: me.atualizar
                    },
                    'listaNatureza button[action=imprimir]': {
                        click: me.imprimir
                    },
                    'treeGridNatureza button[action=imprimir]': {
                        click: me.imprimir_tree
                    }

                }
        );
    },
    imprimir_tree: function(btn) {
        Ext.MessageBox.wait('Gerando Impressão', 'Aguarde...');

        var grid = this.getTreeGridNatureza();
        var store = grid.getStore();
        var gridView = grid.getView();
        var titulo = "\
                    \n\
                    <div><table style='width:100%;font-weight:bold;'>\n\
                    <tr>\n\
                        <td width='60px'>\n\
                        <img src='../resources/images/illi.png' style='margin-right:10px' onclick='window.print()'/>\n\
                        </td><td>\n\
                            <table>\n\
                            <tr><td> Natureza Lançamentos</td></tr>\n\
                            </table>\n\
                        </td>\n\
                        </tr>\n\
                    </table></div>";


        var header = "<!DOCTYPE HTML> <html> <head> <title>Illi</title> <link rel='stylesheet' href='../resources/css/ext-all-neptune.css'></head>";
        var html = header + titulo + "<body>" + gridView.getEl().dom.innerHTML + "</body></html>";

        var win = window.open('illi', 'fullscreen=yes');
        win.document.open();
        win.document.write(html);
        win.focus();
        win.print();
        Ext.MessageBox.hide();








    }




});