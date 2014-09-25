Ext.define('Illi.view.financeiro.pdv.JanelaTeclasAtalho', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaTeclasAtalho',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            scope: me,
            //
            title: false,
            header: false,
            autoShow: false,
            autoScroll: true,
            closable: false,
            shadow: 'frame',
            shadowOffset: 30,
            border: 10,
            style: {
                borderColor: '#C0C0C0',
                borderStyle: 'solid'
            },
            cls: 'pdv vendarapida',
            floating: true,
            constrain: true,
            modal: true,
            width: '40%',
            height: "93%",
            bodyBorder: false,
            layout: 'card',
            //
            html: ''
                    + '<style type="text/css">'
                    + '.teclas-atalho {'
                    + 'padding: 10px;'
                    + '}'
                    + '.teclas-atalho .titulo {'
                    + 'font-size: 32px;'
                    + 'font-weight: bold;'
                    + 'color: #003399;'
                    + '}'
                    + '.teclas-atalho .atalho {'
                    + 'color: #006600;'
                    + 'font-weight: bold;'
//                    + 'width: 100px;'
//                    + 'display: inline-block;'
                    + '}'
                    + '</style>'
                    + '<div class="teclas-atalho">'
                    + '<div class="titulo">Geral</div>'
                    + '<div class="linha"><span class="atalho">F11</span> - Configurações</div>'
                    + '<div class="linha"><span class="atalho">ESC</span> - Cancelar ou Fechar</div>'
                    + '<div class="linha"><span class="atalho">ENTER</span> - Confirmar</div>'
                    + '<div class="linha"><span class="atalho">DELETE</span> - Limpar ou Remover</div>'
                    + '<div class="linha">&nbsp</div>'
                    //
                    + '<div class="titulo">Venda Fechada</div>'
                    + '<div class="linha"><span class="atalho">F1</span> - Pesquisa de Produtos</div>'
                    + '<div class="linha"><span class="atalho">F3</span> - Sangria</div>'
                    + '<div class="linha"><span class="atalho">F4</span> - Suprimento</div>'
                    + '<div class="linha"><span class="atalho">F9</span> - Encerrar Caixa e Sair</div>'
                    + '<div class="linha"><span class="atalho">CTRL + C</span> - Definir Cliente</div>'
                    + '<div class="linha"><span class="atalho">CTRL + D</span> - Devolução</div>'
                    + '<div class="linha"><span class="atalho">CTRL + I</span> - Imprimir Segunda Via de Venda</div>'
                    + '<div class="linha"><span class="atalho">CTRL + M</span> - Sair sem encerrar caixa</div>'
                    + '<div class="linha"><span class="atalho">CTRL + N</span> - Informar documento relacionado</div>'
//                    + '<div class="linha"><span class="atalho">CTRL + S</span> - Encerrar Caixa e Sair</div>'
                    + '<div class="linha"><span class="atalho">CTRL + T</span> - Tabela de Preço</div>'
                    + '<div class="linha"><span class="atalho">CTRL + V</span> - Definir Vendedor</div>'
                    + '<div class="linha"><span class="atalho">CTRL + F8</span> - Cadastro de Devolução (modo rápido)</div>'
                    + '<div class="linha"><span class="atalho">CTRL + F12</span> - Cancelamento de Venda</div>'
                    + '<div class="linha"><span class="atalho">CTRL + SHIFT + C</span> - Ativa/Desativa Cache</div>'
                    + '<div class="linha"><span class="atalho">CTRL + SHIFT + R</span> - Reinicia Caixa</div>'
                    + '<div class="linha">&nbsp</div>'
                    //
                    + '<div class="titulo">Venda em Andamento</div>'
                    + '<div class="linha"><span class="atalho">F1</span> - Pesquisa de Produtos</div>'
                    + '<div class="linha"><span class="atalho">F2</span> - Dinheiro</div>'
                    + '<div class="linha"><span class="atalho">F3</span> - Cheque</div>'
                    + '<div class="linha"><span class="atalho">F4</span> - Cartão</div>'
                    + '<div class="linha"><span class="atalho">F5</span> - Ticket</div>'
                    + '<div class="linha"><span class="atalho">F6</span> - Crediário</div>'
                    + '<div class="linha"><span class="atalho">F7</span> - Vale</div>'
                    + '<div class="linha"><span class="atalho">F8</span> - Troca</div>'
                    + '<div class="linha"><span class="atalho">F10</span> - Finalizar Venda</div>'
                    + '<div class="linha"><span class="atalho">F12</span> - Cancelar Venda</div>'
                    + '<div class="linha"><span class="atalho">DELETE</span> - Cancelar Item</div>'
                    + '<div class="linha"><span class="atalho">CTRL + A</span> - Conceder Acréscimo</div>'
                    + '<div class="linha"><span class="atalho">CTRL + C</span> - Definir Cliente</div>'
                    + '<div class="linha"><span class="atalho">CTRL + D</span> - Conceder Desconto</div>'
                    + '<div class="linha"><span class="atalho">CTRL + I</span> - Imprimir Segunda Via de Venda</div>'
                    + '<div class="linha"><span class="atalho">CTRL + N</span> - Informar documento relacionado</div>'
                    + '<div class="linha"><span class="atalho">CTRL + V</span> - Definir Vendedor</div>'
                    + '<div class="linha"><span class="atalho">CTRL + DELETE</span> - Exibir Itens Cancelados</div>'
                    + '<div class="linha"><span class="atalho">CTRL + F8</span> - Cadastro de Devolução (modo rápido)</div>'
                    + '<div class="linha"><span class="atalho">CTRL + F12</span> - Cancelamento de Venda</div>'
                    + '<div class="linha"><span class="atalho">CTRL + SHIFT - A</span> - Conceder Acréscimo ao Último Item</div>'
                    + '<div class="linha"><span class="atalho">CTRL + SHIFT - D</span> - Conceder Desconto ao Último Item</div>'
                    + '<div class="linha">&nbsp</div>'
                    //
                    + '<div class="titulo">Formas de Pagamento</div>'
                    + '<div class="linha"><span class="atalho">F2</span> - Dinheiro</div>'
                    + '<div class="linha"><span class="atalho">F3</span> - Cheque</div>'
                    + '<div class="linha"><span class="atalho">F4</span> - Cartão</div>'
                    + '<div class="linha"><span class="atalho">F5</span> - Ticket</div>'
                    + '<div class="linha"><span class="atalho">F6</span> - Crediário</div>'
                    + '<div class="linha"><span class="atalho">F7</span> - Vale</div>'
                    + '<div class="linha"><span class="atalho">F8</span> - Troca</div>'
                    + '<div class="linha">&nbsp</div>'
                    + '</div>'
            ,
//            items: [],
            tbar: {
                items: [
                    {
                        xtype: 'tbtext',
                        text: 'Ajuda',
                        style: {
                            color: '#157fcc',
                            'font-weight': 'bold'
                        }

                    }
                ]
            },
            bbar: {
                items: [
                    {
                        text: 'Fechar',
                        scope: this,
                        iconCls: 'icon-cancelar',
                        action: 'teclas-atalho-fechar'
                    }
                ]
            }
        });
        me.callParent(arguments);
    }
});
