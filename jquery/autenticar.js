$(function () {

    if (!dump) {
        $(this).bind("contextmenu", function (e) {
            e.preventDefault();
        });
    }
    $("#appLoadingBackground").fadeTo('fast', 0);
    $.setRetorno = function (mensagem, tipo) {
        $("#mensagem-retorno").removeClass("alert-danger");
        $("#mensagem-retorno").removeClass("alert-warning");
        $("#mensagem-retorno").removeClass("alert-info");
        switch (tipo) {
            case 'erro':
                $("#mensagem-retorno").addClass("alert-danger");
                break;
            default:
                $("#mensagem-retorno").addClass("alert-warning");
                break;
        }
        $("#mensagem-retorno-texto").html(mensagem);
        $("#mensagem-retorno").removeClass("hide");
        $("#painel-login").fadeTo('fast', 1);
    };
    $.setGAuth = function () {
        $("#mensagem-retorno").removeClass("alert-danger");
        $("#mensagem-retorno").removeClass("alert-warning");
        $("#mensagem-retorno").removeClass("alert-info");
        $("#mensagem-retorno").addClass("alert-warning");
        $("#mensagem-retorno-texto").html("É necessário entrar com o código GAuth gerado pelo aplicativo!");
        $("#gauth-cancelar").removeClass("hide");
        $("#mensagem-retorno").removeClass("hide");
        $("#box-input-usuario").addClass("hide");
        $("#painel-login").fadeTo('fast', 1);
    };
    $("#gauth-cancelar").click(function () {
        $("#painel-login").fadeTo('fast', 0, function () {
            $("#gauth-cancelar").addClass("hide");
            $("#mensagem-retorno").addClass("hide");
            $("#box-input-usuario").removeClass("hide");
            $("#painel-login").fadeTo('fast', 1);
        });
    });
    $("#form-login").submit(function () {
        $("#painel-login").fadeTo('fast', 0, function () {
            $("#appLoadingBackground").fadeTo('fast', 1, function () {
                try {
                    if (pdv) {
                        $("#form-login").append("<input type='hidden' name='pdv' value='1' />");
                    }
                    setTimeout(function () {
                        $.ajax({
                            type: "POST",
                            url: window.location.origin + '/illi/autenticar',
                            data: $("#form-login").serialize(),
                            success: function (data, textStatus, jqXHR) {
                                if (data.success === true) {
                                    var caminho = window.location.pathname;
                                    if (caminho !== "/illi/inicial" && caminho !== "/illi/principal") {
                                        window.location = 'illi/principal';
                                    }
                                    var url = (caminho === "/illi/inicial" ? '../../illi/principal' : 'illi/principal');
                                    var redirect = url + (dump ? '?dump' : '');
                                    window.location = redirect;
                                } else {
                                    if (data.errors.reason === "notauth") {
                                        $.setGAuth();
                                    } else {
                                        $.setRetorno(data.errors.reason, 'atencao');
                                    }
                                }
                            },
                            error: function (xhr, error) {
                                console.error(xhr);
                                $.setRetorno("Ocorreu um erro interno! </br> entre em contato com o suporte!", 'erro');
                            },
                            dataType: 'json'
                        });
                    }, 200);
                } catch (e) {
                    console.error(e);
                    $.setRetorno('Problemas durante comunicação com o servidor.', 'erro');
                }
            });
        });
        return false;
    });
    $("input").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        increaseArea: '20%' // optional
    });
    $(".dark input").iCheck({
        checkboxClass: 'icheckbox_polaris',
        increaseArea: '20%' // optional
    });
    $(".form-control").focus(function () {
        $(this).closest(".textbox-wrap").addClass("focused");
    }).blur(function () {
        $(this).closest(".textbox-wrap").removeClass("focused");
    });
    //On Scroll Animations
    if ($(window).width() >= 968 && !Modernizr.touch && Modernizr.cssanimations) {
        $("body").addClass("scroll-animations-activated");
        $('[data-animation-delay]').each(function () {
            var animationDelay = $(this).data("animation-delay");
            $(this).css({
                "-webkit-animation-delay": animationDelay,
                "-moz-animation-delay": animationDelay,
                "-o-animation-delay": animationDelay,
                "-ms-animation-delay": animationDelay,
                "animation-delay": animationDelay
            });
        });
        $('[data-animation]').waypoint(function (direction) {
            if (direction == "down") {
                $(this).addClass("animated " + $(this).data("animation"));

            }
        }, {
            offset: '100%'
        }).waypoint(function (direction) {
            if (direction == "up") {
                $(this).removeClass("animated " + $(this).data("animation"));
            }
        }, {
            offset: $(window).height() + 1
        });
    }
    $("#login").focus();
    //End On Scroll Animations
//    $(".main-nav a[href]").click(function() {
//        var scrollElm = $(this).attr("href");
//        $("html,body").animate({scrollTop: $(scrollElm).offset().top}, 500);
//        $(".main-nav a[href]").removeClass("active");
//        $(this).addClass("active");
//    });
//    if ($(window).width() > 1000 && !Modernizr.touch) {
//        var options = {
//            $menu: ".main-nav",
//            menuSelector: 'a',
//            panelSelector: 'section',
//            namespace: '.panelSnap',
//            onSnapStart: function() {
//            },
//            onSnapFinish: function($target) {
//                $target.find('input:first').focus();
//            },
//            directionThreshold: 50,
//            slideSpeed: 200
//        };
//        $('body').panelSnap(options);
//    }
//    $(".colorBg a[href]").click(function() {
//        var scrollElm = $(this).attr("href");
//        $("html,body").animate({scrollTop: $(scrollElm).offset().top}, 500);
//        return false;
//    });
});