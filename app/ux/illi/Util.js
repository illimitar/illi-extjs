Ext.define('Ext.ux.illi.Util', {
    extend: 'Ext.util.MixedCollection',
    alias: 'illiUtil',
    dump: false,
    defaultPlugins: {
        'filterbar': {
            ptype: 'filterbar',
            pluginId: 'filtroBarra',
            forceCreateExtraColumn: true,
            showClearAllButton: true
        },
        'rowediting': {
            ptype: 'rowediting',
            //pluginId: 'editorGrid',
            clicksToEdit: 0,
            errorSummary: false,
            listeners: {
                validateedit: function (editor, e, opt) {
                    e.record.commit();
                },
                afterEdit: function (editor, grid, opt) {
                    var store = editor.grid.store;
                    if (store.getModifiedRecords()[0]) {
                        editor.grid.el.mask('Salvando...');
                    }
                    store.sync({
                        callback: function () {
                            editor.grid.el.unmask();
                            editor.grid.store.sort('id', 'DESC');
                        }
                    });
                },
                beforeEdit: function (editor, grid, opt) {
                    if (editor.grid.store.isGrouped()) {
                        Ext.MessageBox.show({
                            title: 'Alerta',
                            msg: 'Desagrupe antes de Editar!',
                            icon: Ext.MessageBox.ERROR,
                            buttons: Ext.Msg.OK
                        });
                        return false;
                    }
                    if (!editor.grid.edicao) {
                        return false;
                    }
                },
                canceledit: function (editor, grid, opt) {
                    grid.store.load();
                }
            }
        }

    },
    defaultFeatures: {
        'groupingsummary': {
            ftype: 'groupingsummary',
            groupByText: 'Agrupar por esta coluna',
            showGroupsText: 'Desagrupar',
            groupHeaderTpl: 'Agrupado Por: {columnName} = {name} '
        }
    },
    idxPlugins: [],
    idxFeatures: [],
    /** @private */
    constructor: function (config) {
        var me = this;
        me.desabilitaBackspace();
        me.desabilitaBotaoDireito();
        Ext.tip.Tip.prototype.bodyStyle = "background-color: #157FCC;color:white;";
        Ext.tip.ToolTip.prototype.showDelay = 0;

        /*
         * Override da Funcao alert
         */
        (function () {
            try {
                window.alert = function () {
                    if (this.dump === true) {
                        var string = 'console.info(';
                        for (var i = 0; i < arguments.length; i++) {
                            string += (i > 0 ? ', ' : '') + 'arguments[' + i + ']';
                        }
                        string += ');';
                        eval(string);
                    }
                };
            } catch (err) {
                return false;
            }
        })();

        /*
         * Override da Funcao error
         */
        (function () {
            try {
                window.error = function () {
                    var first = arguments[0];
                    if (first.stack !== undefined) {
                        //console.error(first.stack); esta mostrando muito erros no financeiro verificar essa parte
                    } else {
                        var string = 'console.error(';
                        for (var i = 0; i < arguments.length; i++) {
                            string += (i > 0 ? ', ' : '') + 'arguments[' + i + ']';
                        }
                        string += ');';
                        eval(string);
                    }
                };
            } catch (err) {
                return false;
            }
        })();

    },
    init: function (me) {
    },
    /*
     * Desabilita Backspace
     */

    desabilitaBackspace: function () {
        Ext.EventManager.on(window, 'keydown', function (e, t) {
            // detecta se não é um campo
            if ((!/^input$/i.test(t.tagName) || t.disabled || t.readOnly) && (!/^textArea$/i.test(t.tagName) || t.disabled || t.readOnly)) {
                if (e.getKey() === e.BACKSPACE) {
                    e.stopEvent();
                }
            } else {
                if (e.getKey() === e.DELETE) {
                    t.value = '';
                }
            }
        });
    },
    /*
     * Desabilita Botão Direito
     */
    desabilitaBotaoDireito: function () {
        if (this.dump === true) {
            Ext.EventManager.on(window, 'contextmenu', function (e, t) {
                e.preventDefault();
                return false;
            });
        }
    },
    mergeOptions: function (object, replace, idx) {
        var me = this;
        var result = [];
        //return false;
        Ext.Object.each(object, function (key, value, myself) {
            var replaced = key;
            try {
                if (me[idx] !== undefined) {
                    var main = me[idx];
                    if (main[key]) {
                        replaced = main[key];
                    }
                }
                result[replaced] = value;
            } catch (err) {
                console.error(err.message);
                return false;
            }
        });
        object = result;
        Ext.Object.each(replace, function (key, value, myself) {
            if (object[key] === undefined) {
                replace[key] = false;
            }
        });
        Ext.Object.merge(object, replace);
        return object;
    },
    objectToArray: function (object, idx) {
        var result = [];
        var pointer = [];
        var count = 0;
        Ext.Object.each(object, function (key, value, myself) {
            if (value) {
                pointer[count] = key;
                result.push(value);
                count++;
            }
        });
        //Illi[idx] = pointer;
        return result;
    },
    mergeOptions2: function (object, replace) {
        Ext.Object.each(replace, function (key, value, myself) {
            if (object[key] === undefined) {
                replace[key] = false;
            }
        });
        return Ext.Object.merge(object, replace);
    },
    objectToArray2: function (object) {
        var result = [];
        var pointer = [];
        var count = 0;
        Ext.Object.each(object, function (key, value, myself) {
            if (value) {
                pointer[count] = key;
                result.push(value);
                count++;
            }
        });
        return result;
    },
    setPlugins: function (plugins, newer) {
        if (newer !== undefined) {
            return this.objectToArray2(this.mergeOptions2(plugins, newer));
        }
        return this.objectToArray2(this.mergeOptions2(Ext.clone(this.defaultPlugins), plugins));
    },
    setFeatures: function (features, newer) {
        if (newer !== undefined) {
            return this.objectToArray2(this.mergeOptions2(features, newer));
        }
        return this.objectToArray2(this.mergeOptions2(Ext.clone(this.defaultFeatures), features));
    },
    verStore: function (id_store) {
        try {
            var store = Ext.getStore(id_store);
            if (store) {
                console.table(store.proxy.reader.rawData.rows);
            }
        } catch (e) {
            console.error(e);
        }
    },
    mensagemFalha: function (texto) {
        Ext.MessageBox.show({
            title: 'Aviso Importante',
            msg: (texto ? texto : 'Ocorreu algum erro </br> Verifique Sua conexão e tente Novamente!</br> Se o Problema Persistir entre em Contato com o Suporte! '),
            buttons: Ext.MessageBox.OK
        });
    },
    campoMoedaMask: function (nome, texto, classe, config) {
        var campo = {
            xtype: 'textfield',
            name: nome,
            itemId: 'id_' + nome,
            plugins: 'textmask',
            mask: 'R$ #9.999.990,00',
            money: true,
            labelStyle: (classe ? (classe === 'entrada' ? 'color:blue' : 'color:red') : false),
            fieldCls: (classe ? classe : false),
            fieldLabel: (texto ? texto : false),
            allowBlank: false
        };
        var retorno = Ext.Object.merge(campo, (config ? config : {}));
        return retorno;
    },
    campoMoeda: function (nome, texto, classe, config) {
        var campo = {
            xtype: 'numberfield',
            name: nome,
            itemId: 'id_' + nome,
            minValue: 0.01,
            allowDecimals: true,
            decimalPrecion: 2,
            decimalSeparator: ',',
            labelStyle: (classe ? (classe === 'entrada' ? 'color:blue' : 'color:red') : false),
            fieldCls: (classe ? classe : false),
            fieldLabel: (texto ? texto : false),
            allowBlank: false
        };
        var retorno = Ext.Object.merge(campo, (config ? config : {}));
        return retorno;
    },
    valorRenderer: function (v) {
        try {
            return 'R$ ' + Illi.app.Util.numberFormat(v, 2, ",", ".");
            //return 'R$ ' + this.numberFormat(v, 2, ",", ".");
            return v;

        } catch (err) {
            console.error(err);
            return false;
        }

    },
    floatRenderer: function (v) {
        return Illi.app.Util.numberFormat(v, 2, ",", ".");
    },
//
    numberFormat: function (number, decimals, dec_point, thousands_sep) {
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                s = '',
                toFixedFix = function (n, prec) {
                    var k = Math.pow(10, prec);
                    return '' + Math.round(n * k) / k;
                };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    },
    numberRound: function (number, decimals) {
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = (typeof thousands_sep === 'undefined') ? '' : thousands_sep,
                dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                s = '',
                toFixedFix = function (n, prec) {
                    var k = Math.pow(10, prec);
                    return '' + Math.round(n * k) / k;
                };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return parseFloat(s.join(dec));
    },
    stringToFloat: function (value, input, digits) {
        if (input !== undefined && input === true) {
            value = value.replace(/\./g, "");
        }
        value = value.replace(/\,/g, ".");
        value = Illi.app.Util.numberFormat(value, (digits !== undefined ? digits : 5), ".", "");
        value = parseFloat(value);
        return value;
    },
    strPad: function (input, pad_length, pad_string, pad_type) {
        // http://kevin.vanzonneveld.net
        // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // + namespaced by: Michael White (http://getsprink.com)
        // +      input by: Marco van Oort
        // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
        // *     example 1: str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT');
        // *     returns 1: '-=-=-=-=-=-Kevin van Zonneveld'
        // *     example 2: str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH');
        // *     returns 2: '------Kevin van Zonneveld-----'
        var half = '',
                pad_to_go;

        var str_pad_repeater = function (s, len) {
            var collect = '',
                    i;

            while (collect.length < len) {
                collect += s;
            }
            collect = collect.substr(0, len);

            return collect;
        };

        input += '';
        pad_string = pad_string !== undefined ? pad_string : ' ';

        if (pad_type !== 'STR_PAD_LEFT' && pad_type !== 'STR_PAD_RIGHT' && pad_type !== 'STR_PAD_BOTH') {
            pad_type = 'STR_PAD_RIGHT';
        }
        if ((pad_to_go = pad_length - input.length) > 0) {
            if (pad_type === 'STR_PAD_LEFT') {
                input = str_pad_repeater(pad_string, pad_to_go) + input;
            } else if (pad_type === 'STR_PAD_RIGHT') {
                input = input + str_pad_repeater(pad_string, pad_to_go);
            } else if (pad_type === 'STR_PAD_BOTH') {
                half = str_pad_repeater(pad_string, Math.ceil(pad_to_go / 2));
                input = half + input + half;
                input = input.substr(0, pad_length);
            }
        }
        return input;
    },
    getPath: function (url) {
        if (frontend) {
            return "../" + frontend + "/" + url;
        } else {
            return url;
        }
    },
    BotaoTeclado: function (texto, acao) {
        var evento = false;
        eval(" evento = Ext.EventObject." + acao + ";");
        var me = this;
        var botao = {
            xtype: 'button',
            text: texto,
            scale: 'large',
            border: false,
            bodyBorder: false,
            margin: '0 5 5 5',
            handler: function (btn) {
                me.fireKey(evento);
            }
        };
        return botao;
    },
    fireKey: function (k) {
        var oEvent = document.createEvent('KeyboardEvent');

        if(eventObj.initEvent){
            eventObj.initEvent("keydown", true, true);
        }

        eventObj.keyCode = keyCode;
        
        if (ctrlKey) {
            eventObj.ctrlKey = true;
        }
        if (altKey) {
            eventObj.altKey = true;
        }
        if (shiftKey) {
            eventObj.shiftKey = true;
        }

        eventObj.which = keyCode;

        el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj); 
        
//        var oEvent = document.createEvent('KeyboardEvent');
//        var modifiersListArg = [];
//
//        // Chromium Hack
//        Object.defineProperty(oEvent, 'keyCode', {
//            get: function () {
//                return this.keyCodeVal;
//            }
//        });
//        Object.defineProperty(oEvent, 'which', {
//            get: function () {
//                return this.keyCodeVal;
//            }
//        });
//
//        // teclas modificadoas
//        alt = (alt !== undefined ? alt : false);
//        if (alt) {
//            modifiersListArg.push("Alt");
//        }
//        
//        ctrl = (ctrl !== undefined ? ctrl : false);
//        if (ctrl) {
//            modifiersListArg.push("Control");
//        }
//        
//        shift = (shift !== undefined ? shift : false);
//        if (shift) {
//            modifiersListArg.push("Shift");
//        }
//        
//        modifiersListArg = (modifiersListArg.length > 0 ? modifiersListArg.join(" ") : false);
//        console.log("fireKey()", ctrl, alt, shift, modifiersListArg);
//        if (oEvent.initKeyboardEvent) {
//            //eventType, canBubble, cancelable, viewArg, keyArg, locationArg, modifiersListArg, repeat, locale
//            oEvent.initKeyboardEvent("keydown", true, true, document.defaultView, false, false, modifiersListArg, false, k, k);
//        } else {
//            //eventName, bubbles, cancelable, view, ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode
//            oEvent.initKeyEvent("keydown", true, true, document.defaultView, ctrl, alt, shift, false, k, 0);
//        }
//
//        oEvent.keyCodeVal = k;
//
//        if (oEvent.keyCode !== k) {
//            alert("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
//        }
//
//        document.dispatchEvent(oEvent);
    },
    getOperacao: function (id_grupo_operacao) {
        Ext.MessageBox.wait('Aguarde', 'Carregando Operação');
        var operacao = false;
        try {
            Ext.Ajax.request({
                url: '../configuracao/operacao/ijson/get_operacao',
                async: false,
                params: {
                    grupo_operacao: id_grupo_operacao
                },
                failure: function () {
                    Illi.app.Util.mensagemFalha();
                },
                success: function (response) {
                    var retorno = false;
                    try {
                        operacao = Ext.JSON.decode(response.responseText);
                        Ext.MessageBox.hide();
                    } catch (e) {
                        error(e);
                        Illi.app.Util.mensagemFalha();
                        operacao = false;
                    }
                }
            });
        } catch (err) {
            error(err);
            return false;
        }
        return operacao;
    },
    getGravatar: function (email, tamanho) {
        try {
            tamanho = (tamanho ? tamanho : 32);
            var url = "http://www.gravatar.com/avatar/";
            var md5 = this.md5(email ? email : "suporte@illi.com.br");
            url = url + md5 + "?s=" + tamanho + "&d=mm&r=g";
            return url;
        } catch (err) {
            console.error(err);
            return false;
        }
    },
    md5: function (s, raw, hexcase, chrsz) {
        raw = raw || false;
        hexcase = hexcase || false;
        chrsz = chrsz || 8;

        function safe_add(x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        }
        function bit_rol(num, cnt) {
            return (num << cnt) | (num >>> (32 - cnt));
        }
        function md5_cmn(q, a, b, x, s, t) {
            return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
        }
        function md5_ff(a, b, c, d, x, s, t) {
            return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
        }
        function md5_gg(a, b, c, d, x, s, t) {
            return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
        }
        function md5_hh(a, b, c, d, x, s, t) {
            return md5_cmn(b ^ c ^ d, a, b, x, s, t);
        }
        function md5_ii(a, b, c, d, x, s, t) {
            return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
        }

        function core_md5(x, len) {
            x[len >> 5] |= 0x80 << ((len) % 32);
            x[(((len + 64) >>> 9) << 4) + 14] = len;
            var a = 1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d = 271733878;
            for (var i = 0; i < x.length; i += 16) {
                var olda = a;
                var oldb = b;
                var oldc = c;
                var oldd = d;
                a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
                d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
                c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
                b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
                a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
                d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
                c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
                b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
                a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
                d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
                c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
                b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
                a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
                d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
                c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
                b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
                a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
                d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
                c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
                b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
                a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
                d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
                c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
                b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
                a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
                d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
                c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
                b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
                a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
                d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
                c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
                b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
                a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
                d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
                c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
                b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
                a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
                d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
                c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
                b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
                a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
                d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
                c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
                b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
                a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
                d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
                c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
                b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
                a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
                d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
                c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
                b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
                a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
                d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
                c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
                b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
                a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
                d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
                c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
                b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
                a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
                d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
                c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
                b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
                a = safe_add(a, olda);
                b = safe_add(b, oldb);
                c = safe_add(c, oldc);
                d = safe_add(d, oldd);
            }
            return [a, b, c, d];
        }
        function str2binl(str) {
            var bin = [];
            var mask = (1 << chrsz) - 1;
            for (var i = 0; i < str.length * chrsz; i += chrsz) {
                bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
            }
            return bin;
        }
        function binl2str(bin) {
            var str = "";
            var mask = (1 << chrsz) - 1;
            for (var i = 0; i < bin.length * 32; i += chrsz) {
                str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
            }
            return str;
        }

        function binl2hex(binarray) {
            var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var str = "";
            for (var i = 0; i < binarray.length * 4; i++) {
                str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
            }
            return str;
        }
        return (raw ? binl2str(core_md5(str2binl(s), s.length * chrsz)) : binl2hex(core_md5(str2binl(s), s.length * chrsz)));
    }
});
