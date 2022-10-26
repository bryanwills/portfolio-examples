function introAnimation() {
    $(".main-navigation__item").removeClass("active"),
        $("#intro").addClass("active"),
        $("#main_bg").addClass("show_bg"),
        $("#title__bg").addClass("loaded"),
        $("#bold_title_1").addClass("visible"),
        $("#wrapper_1").addClass("loaded"),
        $("#bold_title_2").addClass("visible"),
        $("#wrapper_2").addClass("loaded"),
        $(".rotate_circle_container").removeClass("hidden").addClass("animated zoomIn"),
        $("#horn").removeClass("hidden").addClass("animated zoomIn"),
        setTimeout(function() {
            $(".horn_wrapper").addClass("animated pulse infinite")
        }, 1e3),
        setTimeout(function() {
            introAnimated = !0,
                scrollingInProgress = !1,
                restartWorks(),
                restartAbout(),
                $("body").removeClass("loader"),
                $("#preload").css("visibility", "hidden"),
                programmic = !1
        }, 2500)
}

function worksAnimation() {
    restartAbout(),
        $(".main-navigation__item").removeClass("active"),
        $("#works").addClass("active"),
        $("#titles").addClass("black"),
        $("#line").addClass("loaded"),
        $("#top_section").addClass("loaded"),
        $("#bottom_section").addClass("loaded"),
        $("#works_container").addClass("loaded"),
        $("#projects__list").addClass("loaded"),
        setTimeout(function() {
            worksAnimated = !0,
                scrollingInProgress = !1,
                restartIntro(),
                $("body").removeClass("loader"),
                $("#main_bg").removeClass("show_bg"),
                $("#projects__list").removeClass("blocked"),
                $("#preload").css("visibility", "hidden"),
                $("#works_container").addClass("done"),
                programmic = !1
        }, 2500)
}

function aboutAnimation() {
    $("#main_bg").removeClass("show_bg"),
        $("#bold_title_3").addClass("visible"),
        $("#wrapper_3").addClass("loaded"),
        $("#bold_title_4").addClass("visible"),
        $("#wrapper_4").addClass("loaded"),
        $("#about-starter").addClass("loaded"),
        setTimeout(function() {
            $("#about-starter").addClass("finished")
        }, 2e3),
        $("#section_4").addClass("loaded"),
        $("body").removeClass("loader"),
        programmic = !1,
        scrollingInProgress = !1,
        restartWorks()
}

function contactAnimation() {
    $("#main_bg").removeClass("show_bg"),
        $("#bold_title_3").addClass("visible"),
        $("#wrapper_3").addClass("loaded"),
        $("#wrapper_4").addClass("loaded"),
        $("#about-starter").addClass("loaded"),
        $("#bold_title_4").addClass("visible"),
        $("#about-starter").addClass("finished"),
        $("#section_4").addClass("loaded"),
        $("body").removeClass("loader"),
        $("#trigger_14").addClass("loaded"),
        $(".small_margin").addClass("loaded"),
        $(".big_margin").addClass("loaded"),
        $(".quate").addClass("loaded"),
        $(".few_brands").addClass("loaded"),
        $(".brand__list").addClass("loaded"),
        $(".bold__text").addClass("loaded"),
        $(".exp__title").addClass("loaded"),
        $(".exp__text").addClass("loaded"),
        programmic = !1,
        scrollingInProgress = !1
}

function bottomAnimation() {
    $("#bold_title_5").addClass("visible"),
        $("#wrapper_5").addClass("loaded"),
        $("#bold_title_6").addClass("visible"),
        $("#wrapper_6").addClass("loaded"),
        $(".scrollDown").hide(),
        $("#last__title-trigger").addClass("loaded")
}

function restartIntro() {
    animated = 0,
        introAnimated = !1,
        $("#main_bg").removeClass("show_bg"),
        $("#title__bg").removeClass("loaded"),
        $("#bold_title_1").removeClass("visible"),
        $("#wrapper_1").removeClass("loaded"),
        $("#bold_title_2").removeClass("visible"),
        $("#wrapper_2").removeClass("loaded"),
        $(".rotate_circle_container").addClass("hidden").removeClass("animated zoomIn delay-2s"),
        $("#horn").addClass("hidden").removeClass("animated zoomIn delay-2s")
}

function restartWorks() {
    worksAnimatedCount = 0,
        worksAnimated = !1,
        $("#titles").removeClass("black"),
        $("#line").removeClass("loaded"),
        $("#top_section").removeClass("loaded"),
        $("#bottom_section").removeClass("loaded"),
        $("#works_container").removeClass("loaded"),
        $("#works_container").removeClass("done"),
        $("#projects__list").removeClass("loaded")
}

function restartAbout() {
    $("#bold_title_3").removeClass("visible"),
        $("#wrapper_3").removeClass("loaded"),
        $("#bold_title_4").removeClass("visible"),
        $("#wrapper_4").removeClass("loaded"),
        $("#about-starter").removeClass("loaded"),
        $("#about-starter").removeClass("finished"),
        $("#section_4").removeClass("loaded"),
        $(".description").removeClass("loaded"),
        $(".few_brands").removeClass("loaded"),
        $(".quate").removeClass("loaded"),
        $(".small_margin").removeClass("loaded"),
        $(".brand__list").removeClass("loaded"),
        $(".small_margin .bold__text").removeClass("loaded"),
        $(".exp__title").removeClass("loaded"),
        $(".exp__text").removeClass("loaded"),
        $(".big_margin").removeClass("loaded"),
        $("#trigger_14 .bold__text").removeClass("loaded"),
        $("#trigger_14").removeClass("loaded"),
        $("#last__title-trigger").removeClass("loaded"),
        $("#bold_title_5").removeClass("visible"),
        $("#wrapper_5").removeClass("loaded"),
        $("#bold_title_6").removeClass("visible"),
        $("#wrapper_6").removeClass("loaded"),
        $("#about-starter").removeClass("finished"),
        $(".big_margin").removeClass("finished"),
        $(".quate").removeClass("finished"),
        $(".small_margin").removeClass("finished")
}

function scrollingMain() {
    var e = $(window).scrollTop();
    switch (direction = e > position ? !0 : !1,
        position = e, !0) {
        case 560 >= e:
            animateCircle(e),
                $("#titles").removeAttr("class"),
                $("#fixed_titles").removeAttr("class"),
                $("#home").removeClass("cursor__item"),
                $("#main_bg").removeClass("show_bg"),
                $("body").removeClass("loader"),
                $(".header").css("z-index", "99999"),
                $(".section-title").removeAttr("style");
            break;
        case e >= 560 && 800 > e:
            restartIntro(),
                animateText(e),
                $("#circle").removeAttr("class"),
                $("#circle").addClass("state_14"),
                $("#titles").removeAttr("class"),
                $("#fixed_titles").removeAttr("class"),
                $("#home").removeClass("cursor__item"),
                $("#main_bg").removeClass("show_bg"),
                $("body").removeClass("loader"),
                $(".header").css("z-index", "99999");
            break;
        case e >= 880 && e <= $("#section_2").offset().top:
            if ($("#titles").addClass("loaded"),
                $("#fixed_titles").addClass("loaded"),
                $("#home").addClass("cursor__item"),
                $(".header").css("z-index", "9999"),
                $(window).width() <= 1024 || animated > 0 || scrollingInProgress)
                return !1;
            direction && !introAnimated && (animated++,
                scrollingInProgress = !0,
                $("body").addClass("loader"),
                $("html, body").animate({
                    scrollTop: $("#section_2").offset().top
                }, {
                    duration: 1e3,
                    complete: function() {
                        introAnimation()
                    }
                }));
            break;
        case e > $("#section_2").offset().top && e < $("#section_3").offset().top:
            if ($(window).width() <= 1024 || worksAnimatedCount > 0 || scrollingInProgress)
                return !1;
            if (direction && !worksAnimated)
                return scrollingInProgress = !0,
                    worksAnimated++,
                    $("body").addClass("loader"),
                    $("html, body").animate({
                        scrollTop: $("#section_3").offset().top
                    }, {
                        duration: 1e3,
                        complete: function() {
                            worksAnimation()
                        }
                    }), !1;
            direction || (scrollingInProgress = !0,
                animated++,
                $("body").addClass("loader"),
                $("html, body").animate({
                    scrollTop: $("#section_2").offset().top
                }, {
                    duration: 1e3,
                    complete: function() {
                        introAnimation()
                    }
                }));
            break;
        case e >= $("#section_3").offset().top && e < $("#section_3").offset().top + $(window).height():
            if (scrollingInProgress || $(window).width() <= 1024)
                return !1;
            direction && (scrollingInProgress = !0,
                    $("body").addClass("loader"),
                    $("html, body").animate({
                        scrollTop: $("#section_4").offset().top
                    }, {
                        duration: 1e3,
                        complete: function() {
                            scrollingInProgress = !1,
                                aboutAnimation()
                        }
                    })),
                direction || (scrollingInProgress = !0,
                    $("#section_4").removeClass("loaded"),
                    worksAnimated++,
                    $("body").addClass("loader"),
                    $("html, body").animate({
                        scrollTop: $("#section_3").offset().top
                    }, {
                        duration: 1e3,
                        complete: function() {
                            worksAnimation()
                        }
                    }))
    }
    e > $("#section_2").offset().top && $(window).width() <= 1024 ? $(".mobile__scroll_button").addClass("hidden") : $(".mobile__scroll_button").removeClass("hidden"),
        $("#section_2").isInViewport() && ($(".main-navigation__item").removeClass("active"),
            $("#intro").addClass("active")),
        $("#section_3").isInViewport() && ($(".main-navigation__item").removeClass("active"),
            $("#works").addClass("active")),
        $(window).scrollTop() >= $("#mobile").offset().top && $("#mobile").isInViewport() && $(window).width() <= 1024 ? ($(".gamburger").removeClass("black"),
            $("#titles").addClass("black")) : ($("#titles").removeClass("black"),
            $(".gamburger").addClass("black")),
        $("#section_4").isInViewport() && ($(".main-navigation__item").removeClass("active"),
            $("#about").addClass("active")),
        ($(".few_brands").isInViewport() && $("#about-starter").hasClass("finished") || $(".few_brands").isInViewport() && $(window).width() <= 1024) && ($(".few_brands").addClass("loaded"),
            $("#section_4").addClass("loaded"),
            $(".brand__list").addClass("loaded")),
        $(".quate").isInViewport() && ($(".quate").addClass("loaded"),
            setTimeout(function() {
                $(".quate").addClass("finished")
            }, 500)),
        $(".small_margin").isInViewport() && $(".big_margin").hasClass("finished") && ($(".small_margin").addClass("loaded"),
            $(".small_margin .bold__text").addClass("loaded"),
            setTimeout(function() {
                $(".small_margin").addClass("finished")
            }, 500)),
        $("#trigger_13").isInViewport() && $(".quate").hasClass("finished") && ($(".exp__title").addClass("loaded"),
            $(".exp__text").addClass("loaded"),
            $(".big_margin").addClass("loaded"),
            setTimeout(function() {
                $(".big_margin").addClass("finished")
            }, 500)),
        ($("#trigger_14").isInViewport() && $(".quate").hasClass("finished") || programmic) && ($("#trigger_14 .bold__text").addClass("loaded"),
            $("#trigger_14").addClass("loaded")),
        $("#last__title").isInViewport() && ($("#trigger_14 .bold__text").addClass("loaded"),
            $(".main-navigation__item").removeClass("active"),
            $("#contacts").addClass("active")),
        $("#last__title-trigger").isInViewport() && !scrollingInProgress && (console.log("last__title-triggered"),
            console.log(scrollingInProgress),
            $("#last__title-trigger").addClass("loaded")),
        $("#last__title #bold_title_6").isInViewport() && !scrollingInProgress ? (console.log("hey ho"),
            console.log(scrollingInProgress),
            $("#bold_title_5").addClass("visible"),
            $("#wrapper_5").addClass("loaded"),
            $("#bold_title_6").addClass("visible"),
            $("#wrapper_6").addClass("loaded"),
            $(".scrollDown").hide()) : $(".scrollDown").show()
}

function moveto(e) {
    0 > e ? $("html, body").animate({}, 500) : $("html, body").animate({}, 500)
}

function animateText(e) {
    switch (!0) {
        case 560 > e:
            $(".section-title").css({
                fontSize: "7.2em"
            });
            break;
        case e >= 560 && 600 > e:
            $(".section-title").css({
                fontSize: "6.8em"
            });
            break;
        case e >= 600 && 640 > e:
            $(".section-title").css({
                fontSize: "6.3em"
            });
            break;
        case e >= 640 && 680 > e:
            $(".section-title").css({
                fontSize: "5.65em"
            });
            break;
        case e >= 680 && 720 > e:
            $(".section-title").css({
                fontSize: "5.2em"
            });
            break;
        case e >= 720 && 760 > e:
            $(".section-title").css({
                fontSize: "4.7em"
            });
            break;
        case e >= 760 && 800 > e:
            $(".section-title").css({
                fontSize: "4.3em"
            });
            break;
        case e >= 800 && 840 > e:
            $(".section-title").css({
                fontSize: "3.8em"
            });
            break;
        case e >= 840:
            $(".section-title").css({
                fontSize: "3.45em"
            });
            break;
        default:
            $(".section-title").css({
                fontSize: "3em"
            })
    }
}

function animateCircle(e) {
    switch (!0) {
        case 40 > e:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_1");
            break;
        case e >= 40 && 80 > e:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_2");
            break;
        case e >= 80 && 120 > e:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_3");
            break;
        case e >= 120 && 160 > e:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_4");
            break;
        case e >= 160 && 200 > e:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_5");
            break;
        case e >= 200 && 240 > e:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_6");
            break;
        case e >= 240 && 280 > e:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_7");
            break;
        case e >= 280 && 320 > e:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_8");
            break;
        case e >= 320 && 360 > e:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_9");
            break;
        case e >= 360 && 400 > e:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_10");
            break;
        case e >= 400 && 440 > e:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_11");
            break;
        case e >= 440 && 480 > e:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_12");
            break;
        case e >= 480 && 520 > e:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_13");
            break;
        case e >= 520:
            $("#circle").removeAttr("class"),
                $("#circle").addClass("state_14");
            break;
        default:
            $("#circle").removeAttr("class")
    }
}

function hideTitle(e) {
    switch (!0) {
        case e >= 880 && 920 > e:
            $("#titles").removeAttr("class"),
                $("#titles").addClass("state_1");
            break;
        case e >= 920 && 960 > e:
            $("#titles").removeAttr("class"),
                $("#titles").addClass("state_2");
            break;
        case e >= 960 && 1e3 > e:
            $("#titles").removeAttr("class"),
                $("#titles").addClass("state_3"),
                $("#fixed_titles").removeAttr("class");
            break;
        case e >= 1e3 && 1040 > e:
            $("#titles").removeAttr("class"),
                $("#titles").addClass("state_4"),
                $("#fixed_titles").removeAttr("class"),
                $("#fixed_titles").addClass("state_4");
            break;
        case e >= 1040 && 1080 > e:
            $("#titles").removeAttr("class"),
                $("#titles").addClass("state_5"),
                $("#fixed_titles").removeAttr("class"),
                $("#fixed_titles").addClass("state_5");
            break;
        case e >= 1080:
            $("#titles").removeAttr("class"),
                $("#titles").addClass("state_6"),
                $("#fixed_titles").removeAttr("class"),
                $("#fixed_titles").addClass("state_6");
            break;
        default:
            $("#titles").removeAttr("class"),
                $("#fixed_titles").removeAttr("class")
    }
}

function letsGo() {
    var e = $(window).width(),
        s = $(window).height(),
        a = '<canvas id="canvas" height="' + s + '" width="' + e + '">Get a better browser!</canvas>';
    $("#raphael").addClass("clicked"),
        $("#raphael").empty(),
        $("#raphael").append(a);
    var e = $("#canvas").width(),
        s = $("#canvas").height(),
        a = ctx = !1,
        o = .025,
        t = 1e3 * o,
        i = !1,
        l = {
            position: {
                x: e / 2,
                y: s
            },
            velocity: {
                x: 1,
                y: 30
            },
            mass: .1,
            radius: 13,
            restitution: -.7
        },
        r = [],
        d = .47,
        n = 1.22,
        c = Math.PI * l.radius * l.radius / 1e4,
        m = 9.81,
        _ = {
            x: 0,
            y: s,
            isDown: !1
        },
        v = function() {
            a = document.getElementById("canvas"),
                ctx = a.getContext("2d"),
                ctx.setTransform(1, 0, 0, 1, 0, 0),
                ctx.clearRect(0, 0, a.width, a.height);
            var o = [{
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 20,
                    y: 70
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_1"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 15,
                    y: 50
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_2"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 30,
                    y: 100
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_3"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 40,
                    y: 85
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_4"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 15,
                    y: 57
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_5"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 36,
                    y: 55
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_6"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 15,
                    y: 60
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_1"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 25,
                    y: 30
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_2"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 3,
                    y: 85
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_3"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 14,
                    y: 65
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_4"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 25,
                    y: 27
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_5"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 16,
                    y: 53
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_6"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 23,
                    y: 48
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_1"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 28,
                    y: 52
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_2"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 34,
                    y: 68
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_3"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 4,
                    y: 54
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_4"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 5,
                    y: 45
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_5"
            }, {
                position: {
                    x: 100,
                    y: s - 150
                },
                velocity: {
                    x: 6,
                    y: 63
                },
                mass: .1,
                radius: 23,
                restitution: -.7,
                url: "icon_6"
            }];
            ctx.fillStyle = "red",
                ctx.strokeStyle = "#000000",
                i = setInterval(function() {
                    ctx.clearRect(0, 0, e, s),
                        r = [];
                    for (var a = 0; a < o.length; a++) {
                        if (newAnimation) {
                            console.log("hello"),
                                o = [],
                                clearInterval(i),
                                newAnimation = !1,
                                letsGo();
                            break
                        }
                        C(o[a])
                    }
                }, t)
        },
        C = (Math.PI / 180,
            function(a) {
                if (!_.isDown) {
                    var t = -.5 * d * c * n * a.velocity.x * a.velocity.x * a.velocity.x / Math.abs(a.velocity.x),
                        i = -.5 * d * c * n * a.velocity.y * a.velocity.y * a.velocity.y / Math.abs(a.velocity.y);
                    t = isNaN(t) ? 0 : t,
                        i = isNaN(i) ? 0 : i;
                    var l = t / a.mass,
                        r = m + i / a.mass;
                    a.velocity.x += l * o,
                        a.velocity.y += r * o,
                        a.position.x += a.velocity.x * o * 100,
                        a.position.y += a.velocity.y * o * 100
                }
                a.position.y > s - a.radius && (a.velocity.y *= a.restitution,
                        a.position.y = s - a.radius),
                    a.position.x > e - a.radius && (a.velocity.x *= a.restitution,
                        a.position.x = e - a.radius),
                    a.position.x < a.radius && (a.velocity.x *= a.restitution,
                        a.position.x = a.radius),
                    console.log("ball.url " + a.url + "ball.position.x " + a.position.x),
                    ctx.drawImage(document.getElementById(a.url), a.position.x, a.position.y - a.radius, 46, 46)
            }
        );
    v()
}
$.fn.isInViewport = function() {
    var e = $(this).offset().top,
        s = e + $(this).outerHeight(),
        a = $(window).scrollTop(),
        o = a + $(window).height();
    return s > a && o > e
};
var scrolledToWorks = 0,
    scrolledToIntro = 0,
    programmic = !1,
    position = $(window).scrollTop(),
    direction, introAnimated = !1,
    animated = 0,
    worksAnimated = !1,
    worksAnimatedCount = 0,
    scrollingInProgress = !1,
    newAnimation = !1;
$(window).on("scroll", function(e) {
        scrollingMain(e)
    }),
    $(".projects__list_name").hover(function() {
        if ($("#works_container").hasClass("done")) {
            $("#projects__list").addClass("white__lines"),
                $(this).find(".project_link").addClass("show");
            var e = $(this).data("video");
            $("#" + e).addClass("play"),
                $("#works_container").addClass("video_played")
        }
    }, function() {
        $(".video_wrapper").removeClass("play"),
            $("#works_container").removeClass("video_played"),
            $("#projects__list").removeClass("white__lines"),
            $(".project_link").removeClass("show")
    }),
    $(document).ready(function() {
        function e(e) {
            e ? ($(".mobile__menu").addClass("open"),
                $(".mobile__menu .main-navigation__item").addClass("open"),
                $(".mobile__menu .mobile__social_item").addClass("open")) : ($(".mobile__menu .main-navigation__item").addClass("close"),
                $(".mobile__menu .mobile__social_item").addClass("close"),
                setTimeout(function() {
                    $(".mobile__menu").removeClass("open"),
                        $(".mobile__menu .main-navigation__item").removeClass("open").removeClass("close"),
                        $(".mobile__menu .mobile__social_item").removeClass("open").removeClass("close")
                }, 2e3))
        }
        var s = new Promise(function(e) {
            setTimeout(function() {
                0 !== $("html, body").scrollTop() ? (window.scrollTo(0, 0),
                    $("*").removeClass("visible"),
                    $("*").removeClass("loaded"),
                    $("#preload").addClass("hidden"),
                    $(".main-navigation__item").removeClass("active"),
                    $("#intro").addClass("active"),
                    e()) : ($("#preload").addClass("hidden"),
                    e())
            }, 1e3)
        });
        s.then(function() {
                $("#main").addClass("loaded"),
                    $("body").removeClass("loader"),
                    $("#preload").css("visibility", "hidden")
            }),
            $(".main-navigation__item").on("click", function(s) {
                s.preventDefault(),
                    scrollingInProgress = !0,
                    console.log("scrollingInProgress"),
                    console.log(scrollingInProgress);
                var a = $(s.target).attr("id");
                $(".main-navigation__item").removeClass("active"),
                    $("#main").removeClass("loaded"),
                    $("body").addClass("loader"),
                    setTimeout(function() {
                        $("#preload").removeAttr("style"),
                            $("#preload").removeClass("hidden"),
                            $("#main_bg").removeClass("show_bg")
                    }, 500),
                    setTimeout(function() {
                        $("#section_4").removeClass("loaded"),
                            e(!1),
                            $("html, body").animate({
                                scrollTop: $("#" + $(s.target).data("anchor")).offset().top
                            }, 1, function() {
                                $(window).scrollTop() > 800 ? (animateCircle($(window).scrollTop()),
                                        animateText($(window).scrollTop()),
                                        $("#titles").removeAttr("class"),
                                        $("#fixed_titles").removeAttr("class"),
                                        $("#main_bg").removeClass("show_bg"),
                                        $(".header").css("z-index", "99999"),
                                        $("#circle").removeAttr("class"),
                                        $("#circle").addClass("state_14"),
                                        $("#titles").addClass("loaded"),
                                        $("#fixed_titles").addClass("loaded"),
                                        $("#home").addClass("cursor__item"),
                                        restartIntro()) : "contacts" !== a && restartAbout(),
                                    scrollingMain(),
                                    setTimeout(function() {
                                        return e(!1),
                                            $("#preload").addClass("hidden"),
                                            $("#" + a).addClass("active"),
                                            $("#main").addClass("loaded"),
                                            $("#preload").css("visibility", "hidden"),
                                            programmic = !1,
                                            $(window).width() <= 1024 ? !1 : void setTimeout(function() {
                                                switch (a) {
                                                    case "works":
                                                        worksAnimation();
                                                        break;
                                                    case "about":
                                                        aboutAnimation();
                                                        break;
                                                    case "contacts":
                                                        contactAnimation(),
                                                            bottomAnimation();
                                                        break;
                                                    default:
                                                        return scrollingInProgress = !1,
                                                            $("body").removeClass("loader"), !1
                                                }
                                            }, 3e3)
                                    }, 1e3)
                            })
                    }, 1500)
            }),
            $(".scrollDown").on("click", function() {
                $("html, body").animate({
                    scrollTop: $(window).scrollTop() + 300
                }, 300)
            }),
            $(".gamburger").on("click", function() {
                e(!0)
            }),
            $(".close__menu").on("click", function() {
                e(!1)
            }),
            $("body").on("click", function(e) {
                $(e.target).hasClass("reload") && $("#intro").trigger("click")
            }),
            $(".popup_item").on("click", function(e) {
                e.preventDefault(),
                    $("#video-popup").css({
                        display: "flex"
                    }),
                    $("body").addClass("loader"),
                    $("body").addClass("video-loader"),
                    $("body").addClass("cross"),
                    $("#video-popup .modal_video").trigger("play")
            }),
            $(".popup_window").on("click", function() {
                $("#video-popup .modal_video").trigger("pause"),
                    $("#video-popup").hide(),
                    $("body").removeClass("loader"),
                    $("body").removeClass("video-loader"),
                    $("body").removeClass("cross")
            }),
            $(document).mousemove(function(e) {
                $(e.target).hasClass("cursor__item") ? $("#cursors").addClass("big") : $("#cursors").removeClass("big"),
                    $(e.target).hasClass("cross") ? $("#cursors").addClass("cross") : $("#cursors").removeClass("cross"),
                    $(".cursor").css({
                        position: "fixed",
                        left: e.clientX - 5,
                        top: e.clientY - 5
                    })
            }),
            $("#cursors").appendTo("body"),
            $(".horn_wrapper").on("click", function() {
                $("#raphael").hasClass("clicked") ? (newAnimation = !0,
                    smiles = [],
                    canvas = document.getElementById("canvas"),
                    ctx = canvas.getContext("2d"),
                    ctx.setTransform(1, 0, 0, 1, 0, 0),
                    ctx.clearRect(0, 0, canvas.width, canvas.height),
                    $("#raphael").empty()) : letsGo()
            })
    });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW50cm9BbmltYXRpb24iLCIkIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJpbnRyb0FuaW1hdGVkIiwic2Nyb2xsaW5nSW5Qcm9ncmVzcyIsInJlc3RhcnRXb3JrcyIsInJlc3RhcnRBYm91dCIsImNzcyIsInByb2dyYW1taWMiLCJ3b3Jrc0FuaW1hdGlvbiIsIndvcmtzQW5pbWF0ZWQiLCJyZXN0YXJ0SW50cm8iLCJhYm91dEFuaW1hdGlvbiIsImNvbnRhY3RBbmltYXRpb24iLCJib3R0b21BbmltYXRpb24iLCJoaWRlIiwiYW5pbWF0ZWQiLCJ3b3Jrc0FuaW1hdGVkQ291bnQiLCJzY3JvbGxpbmdNYWluIiwic2Nyb2xsZWQiLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJkaXJlY3Rpb24iLCJwb3NpdGlvbiIsImFuaW1hdGVDaXJjbGUiLCJyZW1vdmVBdHRyIiwiYW5pbWF0ZVRleHQiLCJvZmZzZXQiLCJ0b3AiLCJ3aWR0aCIsImFuaW1hdGUiLCJkdXJhdGlvbiIsImNvbXBsZXRlIiwiaGVpZ2h0IiwiaXNJblZpZXdwb3J0IiwiaGFzQ2xhc3MiLCJjb25zb2xlIiwibG9nIiwic2hvdyIsIm1vdmV0byIsImRlbHRhIiwiZm9udFNpemUiLCJoaWRlVGl0bGUiLCJsZXRzR28iLCJjYW52YXMiLCJlbXB0eSIsImFwcGVuZCIsImN0eCIsImZyYW1lUmF0ZSIsImZyYW1lRGVsYXkiLCJsb29wVGltZXIiLCJiYWxsIiwieCIsInkiLCJ2ZWxvY2l0eSIsIm1hc3MiLCJyYWRpdXMiLCJyZXN0aXR1dGlvbiIsImFuaW1hdGVkU21pbGVzIiwiQ2QiLCJyaG8iLCJBIiwiTWF0aCIsIlBJIiwiYWciLCJtb3VzZSIsImlzRG93biIsInNldHVwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJzZXRUcmFuc2Zvcm0iLCJjbGVhclJlY3QiLCJzbWlsZXMiLCJ1cmwiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsInNldEludGVydmFsIiwiaSIsImxlbmd0aCIsIm5ld0FuaW1hdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJsb29wIiwiRngiLCJhYnMiLCJGeSIsImlzTmFOIiwiYXgiLCJheSIsImRyYXdJbWFnZSIsImZuIiwiZWxlbWVudFRvcCIsInRoaXMiLCJlbGVtZW50Qm90dG9tIiwib3V0ZXJIZWlnaHQiLCJ2aWV3cG9ydFRvcCIsInZpZXdwb3J0Qm90dG9tIiwic2Nyb2xsZWRUb1dvcmtzIiwic2Nyb2xsZWRUb0ludHJvIiwib24iLCJldmVudCIsImhvdmVyIiwiZmluZCIsInZpZGVvSUQiLCJkYXRhIiwicmVhZHkiLCJ0b2dnbGVNZW51IiwiYm9vbCIsInByZWxvYWRlclByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNjcm9sbFRvIiwidGhlbiIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsInRhcmdldCIsImF0dHIiLCJ0cmlnZ2VyIiwiZGlzcGxheSIsIm1vdXNlbW92ZSIsImUiLCJsZWZ0IiwiY2xpZW50WCIsImNsaWVudFkiLCJhcHBlbmRUbyJdLCJtYXBwaW5ncyI6IkFBcUJBLFFBQVNBLGtCQUNQQyxFQUFFLDBCQUEwQkMsWUFBWSxVQUN4Q0QsRUFBRSxVQUFVRSxTQUFTLFVBQ3JCRixFQUFFLFlBQVlFLFNBQVMsV0FDdkJGLEVBQUUsY0FBY0UsU0FBUyxVQUN6QkYsRUFBRSxpQkFBaUJFLFNBQVMsV0FDNUJGLEVBQUUsY0FBY0UsU0FBUyxVQUN6QkYsRUFBRSxpQkFBaUJFLFNBQVMsV0FDNUJGLEVBQUUsY0FBY0UsU0FBUyxVQUN6QkYsRUFBRSw0QkFBNEJDLFlBQVksVUFBVUMsU0FBUyxtQkFDN0RGLEVBQUUsU0FBU0MsWUFBWSxVQUFVQyxTQUFTLG1CQUMxQ0MsV0FBVyxXQUNUSCxFQUFFLGlCQUFpQkUsU0FBUyw0QkFDM0IsS0FDSEMsV0FBVyxXQUNUQyxlQUFnQixFQUNoQkMscUJBQXNCLEVBQ3RCQyxlQUNBQyxlQUNBUCxFQUFFLFFBQVFDLFlBQVksVUFDdEJE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ZGlCLElBQUssV0FFTG5ELFVBQ0U2QixFQUFHLElBQ0hDLEVBQUdwQixFQUFTLEtBRWRxQixVQUNFRixFQUFHLEdBQ0hDLEVBQUcsSUFFTEUsS0FBTSxHQUVOQyxPQUFRLEdBRVJDLGFBQWMsR0FDZGlCLElBQUssV0FFTG5ELFVBQ0U2QixFQUFHLElBQ0hDLEVBQUdwQixFQUFTLEtBRWRxQixVQUNFRixFQUFHLEVBQ0hDLEVBQUcsSUFFTEUsS0FBTSxHQUVOQyxPQUFRLEdBRVJDLGFBQWMsR0FDZGlCLElBQUssV0FFTG5ELFVBQ0U2QixFQUFHLElBQ0hDLEVBQUdwQixFQUFTLEtBRWRxQixVQUNFRixFQUFHLEdBQ0hDLEVBQUcsSUFFTEUsS0FBTSxHQUVOQyxPQUFRLEdBRVJDLGFBQWMsR0FDZGlCLElBQUssV0FFTG5ELFVBQ0U2QixFQUFHLElBQ0hDLEVBQUdwQixFQUFTLEtBRWRxQixVQUNFRixFQUFHLEdBQ0hDLEVBQUcsSUFFTEUsS0FBTSxHQUVOQyxPQUFRLEdBRVJDLGFBQWMsR0FDZGlCLElBQUssV0FFTG5ELFVBQ0U2QixFQUFHLElBQ0hDLEVBQUdwQixFQUFTLEtBRWRxQixVQUNFRixFQUFHLEdBQ0hDLEVBQUcsSUFFTEUsS0FBTSxHQUVOQyxPQUFRLEdBRVJDLGFBQWMsR0FDZGlCLElBQUssV0FFTG5ELFVBQ0U2QixFQUFHLElBQ0hDLEVBQUdwQixFQUFTLEtBRWRxQixVQUNFRixFQUFHLEdBQ0hDLEVBQUcsSUFFTEUsS0FBTSxHQUVOQyxPQUFRLEdBRVJDLGFBQWMsR0FDZGlCLElBQUssV0FFTG5ELFVBQ0U2QixFQUFHLElBQ0hDLEVBQUdwQixFQUFTLEtBRWRxQixVQUNFRixFQUFHLEdBQ0hDLEVBQUcsSUFFTEUsS0FBTSxHQUVOQyxPQUFRLEdBRVJDLGFBQWMsR0FDZGlCLElBQUssV0FFTG5ELFVBQ0U2QixFQUFHLElBQ0hDLEVBQUdwQixFQUFTLEtBRWRxQixVQUNFRixFQUFHLEdBQ0hDLEVBQUcsSUFFTEUsS0FBTSxHQUVOQyxPQUFRLEdBRVJDLGFBQWMsR0FDZGlCLElBQUssV0FF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QkFDTmxILEVBQUUsZ0JBQWdCUSxLQUNoQitHLFFBQVcsU0FFYnZILEVBQUUsUUFBUUUsU0FBUyxVQUNuQkYsRUFBRSxRQUFRRSxTQUFTLGdCQUNuQkYsRUFBRSxRQUFRRSxTQUFTLFNBQ25CRixFQUFFLDZCQUE2QnNILFFBQVEsVUFFekN0SCxFQUFFLGlCQUFpQm9HLEdBQUcsUUFBUyxXQUM3QnBHLEVBQUUsNkJBQTZCc0gsUUFBUSxTQUN2Q3RILEVBQUUsZ0JBQWdCZ0IsT0FDbEJoQixFQUFFLFFBQVFDLFlBQVksVUFDdEJELEVBQUUsUUFBUUMsWUFBWSxnQkFDdEJELEVBQUUsUUFBUUMsWUFBWSxXQUV4QkQsRUFBRXFFLFVBQVVtRCxVQUFVLFNBQVVDLEdBQzFCekgsRUFBRXlILEVBQUVMLFFBQVFoRixTQUFTLGdCQUN2QnBDLEVBQUUsWUFBWUUsU0FBUyxPQUV2QkYsRUFBRSxZQUFZQyxZQUFZLE9BR3hCRCxFQUFFeUgsRUFBRUwsUUFBUWhGLFNBQVMsU0FDdkJwQyxFQUFFLFlBQVlFLFNBQVMsU0FFdkJGLEVBQUUsWUFBWUMsWUFBWSxTQUc1QkQsRUFBRSxXQUFXUSxLQUNYZ0IsU0FBWSxRQUNaa0csS0FBUUQsRUFBRUUsUUFBVSxFQUNwQjlGLElBQU80RixFQUFFRyxRQUFVLE1BR3ZCNUgsRUFBRSxZQUFZNkgsU0FBUyxRQUN2QjdILEVBQUUsaUJBQWlCb0csR0FBRyxRQUFTLFdBQ3hCcEcsRUFBRSxZQUFZb0MsU0FBUyxZQUcxQjZDLGNBQWUsRUFDZlAsVUFDQTdCLE9BQVN3QixTQUFTQyxlQUFlLFVBQ2pDdEIsSUFBTUgsT0FBTzBCLFdBQVcsTUFDeEJ2QixJQUFJd0IsYUFBYSxFQUFHLEVBQUcsRUFBRyxFQUFHLEVBQUcsR0FDaEN4QixJQUFJeUIsVUFBVSxFQUFHLEVBQUc1QixPQUFPZixNQUFPZSxPQUFPWCxRQUN6Q2xDLEVBQUUsWUFBWThDLFNBUmRGIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJcyB2aXNpYmxlXG4kLmZuLmlzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVsZW1lbnRUb3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgdmFyIGVsZW1lbnRCb3R0b20gPSBlbGVtZW50VG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xuICB2YXIgdmlld3BvcnRUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gIHZhciB2aWV3cG9ydEJvdHRvbSA9IHZpZXdwb3J0VG9wICsgJCh3aW5kb3cpLmhlaWdodCgpO1xuICByZXR1cm4gZWxlbWVudEJvdHRvbSA+IHZpZXdwb3J0VG9wICYmIGVsZW1lbnRUb3AgPCB2aWV3cG9ydEJvdHRvbTtcbn07XG5cbnZhciBzY3JvbGxlZFRvV29ya3MgPSAwO1xudmFyIHNjcm9sbGVkVG9JbnRybyA9IDA7XG52YXIgcHJvZ3JhbW1pYyA9IGZhbHNlO1xudmFyIHBvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xudmFyIGRpcmVjdGlvbjtcbnZhciBpbnRyb0FuaW1hdGVkID0gZmFsc2U7XG52YXIgYW5pbWF0ZWQgPSAwO1xudmFyIHdvcmtzQW5pbWF0ZWQgPSBmYWxzZTtcbnZhciB3b3Jrc0FuaW1hdGVkQ291bnQgPSAwO1xudmFyIHNjcm9sbGluZ0luUHJvZ3Jlc3MgPSBmYWxzZTtcbnZhciBuZXdBbmltYXRpb24gPSBmYWxzZTtcblxuZnVuY3Rpb24gaW50cm9BbmltYXRpb24oKSB7XG4gICQoJy5tYWluLW5hdmlnYXRpb25fX2l0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICQoJyNpbnRybycpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgJCgnI21haW5fYmcnKS5hZGRDbGFzcygnc2hvd19iZycpO1xuICAkKCcjdGl0bGVfX2JnJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcjYm9sZF90aXRsZV8xJykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgJCgnI3dyYXBwZXJfMScpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgJCgnI2JvbGRfdGl0bGVfMicpLmFkZENsYXNzKCd2aXNpYmxlJyk7XG4gICQoJyN3cmFwcGVyXzInKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICQoJy5yb3RhdGVfY2lyY2xlX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKS5hZGRDbGFzcygnYW5pbWF0ZWQgem9vbUluJyk7XG4gICQoJyNob3JuJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpLmFkZENsYXNzKCdhbmltYXRlZCB6b29tSW4nKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmhvcm5fd3JhcHBlcicpLmFkZENsYXNzKCdhbmltYXRlZCBwdWxzZSBpbmZpbml0ZScpO1xuICB9LCAxMDAwKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaW50cm9BbmltYXRlZCA9IHRydWU7XG4gICAgc2Nyb2xsaW5nSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgIHJlc3RhcnRXb3JrcygpO1xuICAgIHJlc3RhcnRBYm91dCgpO1xuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbG9hZGVyJyk7XG4gICAgJCgnI3ByZWxvYWQnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgcHJvZ3JhbW1pYyA9IGZhbHNlO1xuICB9LCAyNTAwKTtcbn1cblxuZnVuY3Rpb24gd29ya3NBbmltYXRpb24oKSB7XG4gIHJlc3RhcnRBYm91dCgpO1xuICAkKCcubWFpbi1uYXZpZ2F0aW9uX19pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAkKCcjd29ya3MnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICQoJyN0aXRsZXMnKS5hZGRDbGFzcygnYmxhY2snKTtcbiAgJCgnI2xpbmUnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICQoJyN0b3Bfc2VjdGlvbicpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgJCgnI2JvdHRvbV9zZWN0aW9uJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcjd29ya3NfY29udGFpbmVyJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcjcHJvamVjdHNfX2xpc3QnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHdvcmtzQW5pbWF0ZWQgPSB0cnVlO1xuICAgIHNjcm9sbGluZ0luUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICByZXN0YXJ0SW50cm8oKTtcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xvYWRlcicpO1xuICAgICQoJyNtYWluX2JnJykucmVtb3ZlQ2xhc3MoJ3Nob3dfYmcnKTtcbiAgICAkKCcjcHJvamVjdHNfX2xpc3QnKS5yZW1vdmVDbGFzcygnYmxvY2tlZCcpO1xuICAgICQoJyNwcmVsb2FkJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICQoJyN3b3Jrc19jb250YWluZXInKS5hZGRDbGFzcygnZG9uZScpO1xuICAgIHByb2dyYW1taWMgPSBmYWxzZTtcbiAgfSwgMjUwMCk7XG59XG5cbmZ1bmN0aW9uIGFib3V0QW5pbWF0aW9uKCkge1xuICAkKCcjbWFpbl9iZycpLnJlbW92ZUNsYXNzKCdzaG93X2JnJyk7XG4gICQoJyNib2xkX3RpdGxlXzMnKS5hZGRDbGFzcygndmlzaWJsZScpO1xuICAkKCcjd3JhcHBlcl8zJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcjYm9sZF90aXRsZV80JykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgJCgnI3dyYXBwZXJfNCcpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgJCgnI2Fib3V0LXN0YXJ0ZXInKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICQoJyNhYm91dC1zdGFydGVyJykuYWRkQ2xhc3MoJ2ZpbmlzaGVkJyk7XG4gIH0sIDIwMDApO1xuICAkKCcjc2VjdGlvbl80JykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xvYWRlcicpO1xuICBwcm9ncmFtbWljID0gZmFsc2U7XG4gIHNjcm9sbGluZ0luUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgcmVzdGFydFdvcmtzKCk7XG59XG5cbmZ1bmN0aW9uIGNvbnRhY3RBbmltYXRpb24oKSB7XG4gICQoJyNtYWluX2JnJykucmVtb3ZlQ2xhc3MoJ3Nob3dfYmcnKTtcbiAgJCgnI2JvbGRfdGl0bGVfMycpLmFkZENsYXNzKCd2aXNpYmxlJyk7XG4gICQoJyN3cmFwcGVyXzMnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICQoJyN3cmFwcGVyXzQnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICQoJyNhYm91dC1zdGFydGVyJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcjYm9sZF90aXRsZV80JykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgJCgnI2Fib3V0LXN0YXJ0ZXInKS5hZGRDbGFzcygnZmluaXNoZWQnKTtcbiAgJCgnI3NlY3Rpb25fNCcpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsb2FkZXInKTtcbiAgJCgnI3RyaWdnZXJfMTQnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICQoJy5zbWFsbF9tYXJnaW4nKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICQoJy5iaWdfbWFyZ2luJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcucXVhdGUnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICQoJy5mZXdfYnJhbmRzJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcuYnJhbmRfX2xpc3QnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICQoJy5ib2xkX190ZXh0JykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcuZXhwX190aXRsZScpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgJCgnLmV4cF9fdGV4dCcpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgcHJvZ3JhbW1pYyA9IGZhbHNlO1xuICBzY3JvbGxpbmdJblByb2dyZXNzID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGJvdHRvbUFuaW1hdGlvbigpIHtcbiAgJCgnI2JvbGRfdGl0bGVfNScpLmFkZENsYXNzKCd2aXNpYmxlJyk7XG4gICQoJyN3cmFwcGVyXzUnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICQoJyNib2xkX3RpdGxlXzYnKS5hZGRDbGFzcygndmlzaWJsZScpO1xuICAkKCcjd3JhcHBlcl82JykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcuc2Nyb2xsRG93bicpLmhpZGUoKTtcbiAgJCgnI2xhc3RfX3RpdGxlLXRyaWdnZXInKS5hZGRDbGFzcygnbG9hZGVkJyk7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRJbnRybygpIHtcbiAgYW5pbWF0ZWQgPSAwO1xuICBpbnRyb0FuaW1hdGVkID0gZmFsc2U7XG4gICQoJyNtYWluX2JnJykucmVtb3ZlQ2xhc3MoJ3Nob3dfYmcnKTtcbiAgJCgnI3RpdGxlX19iZycpLnJlbW92ZUNsYXNzKCdsb2FkZWQnKTtcbiAgJCgnI2JvbGRfdGl0bGVfMScpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gICQoJyN3cmFwcGVyXzEnKS5yZW1vdmVDbGFzcygnbG9hZGVkJyk7XG4gICQoJyNib2xkX3RpdGxlXzInKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xuICAkKCcjd3JhcHBlcl8yJykucmVtb3ZlQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcucm90YXRlX2NpcmNsZV9jb250YWluZXInKS5hZGRDbGFzcygnaGlkZGVuJykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIHpvb21JbiBkZWxheS0ycycpO1xuICAkKCcjaG9ybicpLmFkZENsYXNzKCdoaWRkZW4nKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgem9vbUluIGRlbGF5LTJzJyk7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRXb3JrcygpIHtcbiAgd29ya3NBbmltYXRlZENvdW50ID0gMDtcbiAgd29ya3NBbmltYXRlZCA9IGZhbHNlO1xuICAkKCcjdGl0bGVzJykucmVtb3ZlQ2xhc3MoJ2JsYWNrJyk7XG4gICQoJyNsaW5lJykucmVtb3ZlQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcjdG9wX3NlY3Rpb24nKS5yZW1vdmVDbGFzcygnbG9hZGVkJyk7XG4gICQoJyNib3R0b21fc2VjdGlvbicpLnJlbW92ZUNsYXNzKCdsb2FkZWQnKTtcbiAgJCgnI3dvcmtzX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdsb2FkZWQnKTtcbiAgJCgnI3dvcmtzX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdkb25lJyk7XG4gICQoJyNwcm9qZWN0c19fbGlzdCcpLnJlbW92ZUNsYXNzKCdsb2FkZWQnKTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydEFib3V0KCkge1xuICAkKCcjYm9sZF90aXRsZV8zJykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcbiAgJCgnI3dyYXBwZXJfMycpLnJlbW92ZUNsYXNzKCdsb2FkZWQnKTtcbiAgJCgnI2JvbGRfdGl0bGVfNCcpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gICQoJyN3cmFwcGVyXzQnKS5yZW1vdmVDbGFzcygnbG9hZGVkJyk7XG4gICQoJyNhYm91dC1zdGFydGVyJykucmVtb3ZlQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcjYWJvdXQtc3RhcnRlcicpLnJlbW92ZUNsYXNzKCdmaW5pc2hlZCcpO1xuICAkKCcjc2VjdGlvbl80JykucmVtb3ZlQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcuZGVzY3JpcHRpb24nKS5yZW1vdmVDbGFzcygnbG9hZGVkJyk7XG4gICQoJy5mZXdfYnJhbmRzJykucmVtb3ZlQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcucXVhdGUnKS5yZW1vdmVDbGFzcygnbG9hZGVkJyk7XG4gICQoJy5zbWFsbF9tYXJnaW4nKS5yZW1vdmVDbGFzcygnbG9hZGVkJyk7XG4gICQoJy5icmFuZF9fbGlzdCcpLnJlbW92ZUNsYXNzKCdsb2FkZWQnKTtcbiAgJCgnLnNtYWxsX21hcmdpbiAuYm9sZF9fdGV4dCcpLnJlbW92ZUNsYXNzKCdsb2FkZWQnKTtcbiAgJCgnLmV4cF9fdGl0bGUnKS5yZW1vdmVDbGFzcygnbG9hZGVkJyk7XG4gICQoJy5leHBfX3RleHQnKS5yZW1vdmVDbGFzcygnbG9hZGVkJyk7XG4gICQoJy5iaWdfbWFyZ2luJykucmVtb3ZlQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcjdHJpZ2dlcl8xNCAuYm9sZF9fdGV4dCcpLnJlbW92ZUNsYXNzKCdsb2FkZWQnKTtcbiAgJCgnI3RyaWdnZXJfMTQnKS5yZW1vdmVDbGFzcygnbG9hZGVkJyk7XG4gICQoJyNsYXN0X190aXRsZS10cmlnZ2VyJykucmVtb3ZlQ2xhc3MoJ2xvYWRlZCcpO1xuICAkKCcjYm9sZF90aXRsZV81JykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcbiAgJCgnI3dyYXBwZXJfNScpLnJlbW92ZUNsYXNzKCdsb2FkZWQnKTtcbiAgJCgnI2JvbGRfdGl0bGVfNicpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gICQoJyN3cmFwcGVyXzYnKS5yZW1vdmVDbGFzcygnbG9hZGVkJyk7XG4gICQoJyNhYm91dC1zdGFydGVyJykucmVtb3ZlQ2xhc3MoJ2ZpbmlzaGVkJyk7XG4gICQoJy5iaWdfbWFyZ2luJykucmVtb3ZlQ2xhc3MoJ2ZpbmlzaGVkJyk7XG4gICQoJy5xdWF0ZScpLnJlbW92ZUNsYXNzKCdmaW5pc2hlZCcpO1xuICAkKCcuc21hbGxfbWFyZ2luJykucmVtb3ZlQ2xhc3MoJ2ZpbmlzaGVkJyk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbGluZ01haW4oZXZlbnQpIHtcbiAgdmFyIHNjcm9sbGVkID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gIGlmIChzY3JvbGxlZCA+IHBvc2l0aW9uKSB7XG4gICAgZGlyZWN0aW9uID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBkaXJlY3Rpb24gPSBmYWxzZTtcbiAgfVxuXG4gIHBvc2l0aW9uID0gc2Nyb2xsZWQ7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBzY3JvbGxlZCA8PSA1NjA6XG4gICAgICBhbmltYXRlQ2lyY2xlKHNjcm9sbGVkKTtcbiAgICAgICQoJyN0aXRsZXMnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI2ZpeGVkX3RpdGxlcycpLnJlbW92ZUF0dHIoJ2NsYXNzJyk7XG4gICAgICAkKCcjaG9tZScpLnJlbW92ZUNsYXNzKCdjdXJzb3JfX2l0ZW0nKTtcbiAgICAgICQoJyNtYWluX2JnJykucmVtb3ZlQ2xhc3MoJ3Nob3dfYmcnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbG9hZGVyJyk7XG4gICAgICAkKCcuaGVhZGVyJykuY3NzKCd6LWluZGV4JywgJzk5OTk5Jyk7XG4gICAgICAkKCcuc2VjdGlvbi10aXRsZScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2Ugc2Nyb2xsZWQgPj0gNTYwICYmIHNjcm9sbGVkIDwgODAwOlxuICAgICAgcmVzdGFydEludHJvKCk7XG4gICAgICBhbmltYXRlVGV4dChzY3JvbGxlZCk7XG4gICAgICAkKCcjY2lyY2xlJykucmVtb3ZlQXR0cignY2xhc3MnKTtcbiAgICAgICQoJyNjaXJjbGUnKS5hZGRDbGFzcygnc3RhdGVfMTQnKTtcbiAgICAgICQoJyN0aXRsZXMnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI2ZpeGVkX3RpdGxlcycpLnJlbW92ZUF0dHIoJ2NsYXNzJyk7XG4gICAgICAkKCcjaG9tZScpLnJlbW92ZUNsYXNzKCdjdXJzb3JfX2l0ZW0nKTtcbiAgICAgICQoJyNtYWluX2JnJykucmVtb3ZlQ2xhc3MoJ3Nob3dfYmcnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbG9hZGVyJyk7XG4gICAgICAkKCcuaGVhZGVyJykuY3NzKCd6LWluZGV4JywgJzk5OTk5Jyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2Ugc2Nyb2xsZWQgPj0gODgwICYmIHNjcm9sbGVkIDw9ICQoJyNzZWN0aW9uXzInKS5vZmZzZXQoKS50b3A6XG4gICAgICAkKCcjdGl0bGVzJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAgICAgJCgnI2ZpeGVkX3RpdGxlcycpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgICAgICQoJyNob21lJykuYWRkQ2xhc3MoJ2N1cnNvcl9faXRlbScpO1xuICAgICAgJCgnLmhlYWRlcicpLmNzcygnei1pbmRleCcsICc5OTk5Jyk7XG5cbiAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0IHx8IGFuaW1hdGVkID4gMCB8fCBzY3JvbGxpbmdJblByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiAmJiAhaW50cm9BbmltYXRlZCkge1xuICAgICAgICBhbmltYXRlZCsrO1xuICAgICAgICBzY3JvbGxpbmdJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsb2FkZXInKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogJCgnI3NlY3Rpb25fMicpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGludHJvQW5pbWF0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHNjcm9sbGVkID4gJCgnI3NlY3Rpb25fMicpLm9mZnNldCgpLnRvcCAmJiBzY3JvbGxlZCA8ICQoJyNzZWN0aW9uXzMnKS5vZmZzZXQoKS50b3A6XG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCB8fCB3b3Jrc0FuaW1hdGVkQ291bnQgPiAwIHx8IHNjcm9sbGluZ0luUHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uICYmICF3b3Jrc0FuaW1hdGVkKSB7XG4gICAgICAgIHNjcm9sbGluZ0luUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICB3b3Jrc0FuaW1hdGVkKys7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbG9hZGVyJyk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoJyNzZWN0aW9uXzMnKS5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3b3Jrc0FuaW1hdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgc2Nyb2xsaW5nSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIGFuaW1hdGVkKys7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbG9hZGVyJyk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoJyNzZWN0aW9uXzInKS5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbnRyb0FuaW1hdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBzY3JvbGxlZCA+PSAkKCcjc2VjdGlvbl8zJykub2Zmc2V0KCkudG9wICYmIHNjcm9sbGVkIDwgJCgnI3NlY3Rpb25fMycpLm9mZnNldCgpLnRvcCArICQod2luZG93KS5oZWlnaHQoKTpcbiAgICAgIGlmIChzY3JvbGxpbmdJblByb2dyZXNzIHx8ICQod2luZG93KS53aWR0aCgpIDw9IDEwMjQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIHNjcm9sbGluZ0luUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xvYWRlcicpO1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKCcjc2VjdGlvbl80Jykub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2Nyb2xsaW5nSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgYWJvdXRBbmltYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgICBzY3JvbGxpbmdJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgJCgnI3NlY3Rpb25fNCcpLnJlbW92ZUNsYXNzKCdsb2FkZWQnKTtcbiAgICAgICAgd29ya3NBbmltYXRlZCsrO1xuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xvYWRlcicpO1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKCcjc2VjdGlvbl8zJykub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd29ya3NBbmltYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGlmIChzY3JvbGxlZCA+ICQoJyNzZWN0aW9uXzInKS5vZmZzZXQoKS50b3AgJiYgJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xuICAgICQoJy5tb2JpbGVfX3Njcm9sbF9idXR0b24nKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gIH0gZWxzZSB7XG4gICAgJCgnLm1vYmlsZV9fc2Nyb2xsX2J1dHRvbicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfVxuXG4gIGlmICgkKCcjc2VjdGlvbl8yJykuaXNJblZpZXdwb3J0KCkpIHtcbiAgICAkKCcubWFpbi1uYXZpZ2F0aW9uX19pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJyNpbnRybycpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfVxuXG4gIGlmICgkKCcjc2VjdGlvbl8zJykuaXNJblZpZXdwb3J0KCkpIHtcbiAgICAkKCcubWFpbi1uYXZpZ2F0aW9uX19pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJyN3b3JrcycpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfVxuXG4gIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gJCgnI21vYmlsZScpLm9mZnNldCgpLnRvcCAmJiAkKCcjbW9iaWxlJykuaXNJblZpZXdwb3J0KCkgJiYgJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xuICAgICQoJy5nYW1idXJnZXInKS5yZW1vdmVDbGFzcygnYmxhY2snKTtcbiAgICAkKCcjdGl0bGVzJykuYWRkQ2xhc3MoJ2JsYWNrJyk7XG4gIH0gZWxzZSB7XG4gICAgJCgnI3RpdGxlcycpLnJlbW92ZUNsYXNzKCdibGFjaycpO1xuICAgICQoJy5nYW1idXJnZXInKS5hZGRDbGFzcygnYmxhY2snKTtcbiAgfVxuXG4gIGlmICgkKCcjc2VjdGlvbl80JykuaXNJblZpZXdwb3J0KCkpIHtcbiAgICAkKCcubWFpbi1uYXZpZ2F0aW9uX19pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJyNhYm91dCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfVxuXG4gIGlmICgkKCcuZmV3X2JyYW5kcycpLmlzSW5WaWV3cG9ydCgpICYmICQoJyNhYm91dC1zdGFydGVyJykuaGFzQ2xhc3MoJ2ZpbmlzaGVkJykgfHwgJCgnLmZld19icmFuZHMnKS5pc0luVmlld3BvcnQoKSAmJiAkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0KSB7XG4gICAgJCgnLmZld19icmFuZHMnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICAgJCgnI3NlY3Rpb25fNCcpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgICAkKCcuYnJhbmRfX2xpc3QnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gIH1cblxuICBpZiAoJCgnLnF1YXRlJykuaXNJblZpZXdwb3J0KCkpIHtcbiAgICAkKCcucXVhdGUnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcucXVhdGUnKS5hZGRDbGFzcygnZmluaXNoZWQnKTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgaWYgKCQoJy5zbWFsbF9tYXJnaW4nKS5pc0luVmlld3BvcnQoKSAmJiAkKCcuYmlnX21hcmdpbicpLmhhc0NsYXNzKCdmaW5pc2hlZCcpKSB7XG4gICAgJCgnLnNtYWxsX21hcmdpbicpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgICAkKCcuc21hbGxfbWFyZ2luIC5ib2xkX190ZXh0JykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJCgnLnNtYWxsX21hcmdpbicpLmFkZENsYXNzKCdmaW5pc2hlZCcpO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICBpZiAoJCgnI3RyaWdnZXJfMTMnKS5pc0luVmlld3BvcnQoKSAmJiAkKCcucXVhdGUnKS5oYXNDbGFzcygnZmluaXNoZWQnKSkge1xuICAgICQoJy5leHBfX3RpdGxlJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAgICQoJy5leHBfX3RleHQnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICAgJCgnLmJpZ19tYXJnaW4nKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuYmlnX21hcmdpbicpLmFkZENsYXNzKCdmaW5pc2hlZCcpO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICBpZiAoJCgnI3RyaWdnZXJfMTQnKS5pc0luVmlld3BvcnQoKSAmJiAkKCcucXVhdGUnKS5oYXNDbGFzcygnZmluaXNoZWQnKSB8fCBwcm9ncmFtbWljKSB7XG4gICAgJCgnI3RyaWdnZXJfMTQgLmJvbGRfX3RleHQnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICAgJCgnI3RyaWdnZXJfMTQnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gIH1cblxuICBpZiAoJCgnI2xhc3RfX3RpdGxlJykuaXNJblZpZXdwb3J0KCkpIHtcbiAgICAkKCcjdHJpZ2dlcl8xNCAuYm9sZF9fdGV4dCcpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgICAkKCcubWFpbi1uYXZpZ2F0aW9uX19pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJyNjb250YWN0cycpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfVxuXG4gIGlmICgkKCcjbGFzdF9fdGl0bGUtdHJpZ2dlcicpLmlzSW5WaWV3cG9ydCgpICYmICFzY3JvbGxpbmdJblByb2dyZXNzKSB7XG4gICAgY29uc29sZS5sb2coJ2xhc3RfX3RpdGxlLXRyaWdnZXJlZCcpO1xuICAgIGNvbnNvbGUubG9nKHNjcm9sbGluZ0luUHJvZ3Jlc3MpO1xuICAgICQoJyNsYXN0X190aXRsZS10cmlnZ2VyJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICB9XG5cbiAgaWYgKCQoJyNsYXN0X190aXRsZSAjYm9sZF90aXRsZV82JykuaXNJblZpZXdwb3J0KCkgJiYgIXNjcm9sbGluZ0luUHJvZ3Jlc3MpIHtcbiAgICBjb25zb2xlLmxvZygnaGV5IGhvJyk7XG4gICAgY29uc29sZS5sb2coc2Nyb2xsaW5nSW5Qcm9ncmVzcyk7XG4gICAgJCgnI2JvbGRfdGl0bGVfNScpLmFkZENsYXNzKCd2aXNpYmxlJyk7XG4gICAgJCgnI3dyYXBwZXJfNScpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgICAkKCcjYm9sZF90aXRsZV82JykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAkKCcjd3JhcHBlcl82JykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAgICQoJy5zY3JvbGxEb3duJykuaGlkZSgpO1xuICB9IGVsc2Uge1xuICAgICQoJy5zY3JvbGxEb3duJykuc2hvdygpO1xuICB9XG59XG5cbiQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHNjcm9sbGluZ01haW4oZXZlbnQpO1xufSk7XG5cbmZ1bmN0aW9uIG1vdmV0byhkZWx0YSkge1xuICBpZiAoZGVsdGEgPCAwKSB7XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe30sIDUwMCk7XG4gIH0gZWxzZSB7XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe30sIDUwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYW5pbWF0ZVRleHQoc2Nyb2xsZWQpIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBzY3JvbGxlZCA8IDU2MDpcbiAgICAgICQoJy5zZWN0aW9uLXRpdGxlJykuY3NzKHtcbiAgICAgICAgZm9udFNpemU6ICc3LjJlbSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHNjcm9sbGVkID49IDU2MCAmJiBzY3JvbGxlZCA8IDYwMDpcbiAgICAgICQoJy5zZWN0aW9uLXRpdGxlJykuY3NzKHtcbiAgICAgICAgZm9udFNpemU6ICc2LjhlbSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHNjcm9sbGVkID49IDYwMCAmJiBzY3JvbGxlZCA8IDY0MDpcbiAgICAgICQoJy5zZWN0aW9uLXRpdGxlJykuY3NzKHtcbiAgICAgICAgZm9udFNpemU6ICc2LjNlbSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHNjcm9sbGVkID49IDY0MCAmJiBzY3JvbGxlZCA8IDY4MDpcbiAgICAgICQoJy5zZWN0aW9uLXRpdGxlJykuY3NzKHtcbiAgICAgICAgZm9udFNpemU6ICc1LjY1ZW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBzY3JvbGxlZCA+PSA2ODAgJiYgc2Nyb2xsZWQgPCA3MjA6XG4gICAgICAkKCcuc2VjdGlvbi10aXRsZScpLmNzcyh7XG4gICAgICAgIGZvbnRTaXplOiAnNS4yZW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBzY3JvbGxlZCA+PSA3MjAgJiYgc2Nyb2xsZWQgPCA3NjA6XG4gICAgICAkKCcuc2VjdGlvbi10aXRsZScpLmNzcyh7XG4gICAgICAgIGZvbnRTaXplOiAnNC43ZW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBzY3JvbGxlZCA+PSA3NjAgJiYgc2Nyb2xsZWQgPCA4MDA6XG4gICAgICAkKCcuc2VjdGlvbi10aXRsZScpLmNzcyh7XG4gICAgICAgIGZvbnRTaXplOiAnNC4zZW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBzY3JvbGxlZCA+PSA4MDAgJiYgc2Nyb2xsZWQgPCA4NDA6XG4gICAgICAkKCcuc2VjdGlvbi10aXRsZScpLmNzcyh7XG4gICAgICAgIGZvbnRTaXplOiAnMy44ZW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBzY3JvbGxlZCA+PSA4NDA6XG4gICAgICAkKCcuc2VjdGlvbi10aXRsZScpLmNzcyh7XG4gICAgICAgIGZvbnRTaXplOiAnMy40NWVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICAkKCcuc2VjdGlvbi10aXRsZScpLmNzcyh7XG4gICAgICAgIGZvbnRTaXplOiAnM2VtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBhbmltYXRlQ2lyY2xlKHNjcm9sbGVkKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2Ugc2Nyb2xsZWQgPCA0MDpcbiAgICAgICQoJyNjaXJjbGUnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI2NpcmNsZScpLmFkZENsYXNzKCdzdGF0ZV8xJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2Ugc2Nyb2xsZWQgPj0gNDAgJiYgc2Nyb2xsZWQgPCA4MDpcbiAgICAgICQoJyNjaXJjbGUnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI2NpcmNsZScpLmFkZENsYXNzKCdzdGF0ZV8yJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2Ugc2Nyb2xsZWQgPj0gODAgJiYgc2Nyb2xsZWQgPCAxMjA6XG4gICAgICAkKCcjY2lyY2xlJykucmVtb3ZlQXR0cignY2xhc3MnKTtcbiAgICAgICQoJyNjaXJjbGUnKS5hZGRDbGFzcygnc3RhdGVfMycpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHNjcm9sbGVkID49IDEyMCAmJiBzY3JvbGxlZCA8IDE2MDpcbiAgICAgICQoJyNjaXJjbGUnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI2NpcmNsZScpLmFkZENsYXNzKCdzdGF0ZV80Jyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2Ugc2Nyb2xsZWQgPj0gMTYwICYmIHNjcm9sbGVkIDwgMjAwOlxuICAgICAgJCgnI2NpcmNsZScpLnJlbW92ZUF0dHIoJ2NsYXNzJyk7XG4gICAgICAkKCcjY2lyY2xlJykuYWRkQ2xhc3MoJ3N0YXRlXzUnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBzY3JvbGxlZCA+PSAyMDAgJiYgc2Nyb2xsZWQgPCAyNDA6XG4gICAgICAkKCcjY2lyY2xlJykucmVtb3ZlQXR0cignY2xhc3MnKTtcbiAgICAgICQoJyNjaXJjbGUnKS5hZGRDbGFzcygnc3RhdGVfNicpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHNjcm9sbGVkID49IDI0MCAmJiBzY3JvbGxlZCA8IDI4MDpcbiAgICAgICQoJyNjaXJjbGUnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI2NpcmNsZScpLmFkZENsYXNzKCdzdGF0ZV83Jyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2Ugc2Nyb2xsZWQgPj0gMjgwICYmIHNjcm9sbGVkIDwgMzIwOlxuICAgICAgJCgnI2NpcmNsZScpLnJlbW92ZUF0dHIoJ2NsYXNzJyk7XG4gICAgICAkKCcjY2lyY2xlJykuYWRkQ2xhc3MoJ3N0YXRlXzgnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBzY3JvbGxlZCA+PSAzMjAgJiYgc2Nyb2xsZWQgPCAzNjA6XG4gICAgICAkKCcjY2lyY2xlJykucmVtb3ZlQXR0cignY2xhc3MnKTtcbiAgICAgICQoJyNjaXJjbGUnKS5hZGRDbGFzcygnc3RhdGVfOScpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHNjcm9sbGVkID49IDM2MCAmJiBzY3JvbGxlZCA8IDQwMDpcbiAgICAgICQoJyNjaXJjbGUnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI2NpcmNsZScpLmFkZENsYXNzKCdzdGF0ZV8xMCcpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHNjcm9sbGVkID49IDQwMCAmJiBzY3JvbGxlZCA8IDQ0MDpcbiAgICAgICQoJyNjaXJjbGUnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI2NpcmNsZScpLmFkZENsYXNzKCdzdGF0ZV8xMScpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHNjcm9sbGVkID49IDQ0MCAmJiBzY3JvbGxlZCA8IDQ4MDpcbiAgICAgICQoJyNjaXJjbGUnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI2NpcmNsZScpLmFkZENsYXNzKCdzdGF0ZV8xMicpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHNjcm9sbGVkID49IDQ4MCAmJiBzY3JvbGxlZCA8IDUyMDpcbiAgICAgICQoJyNjaXJjbGUnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI2NpcmNsZScpLmFkZENsYXNzKCdzdGF0ZV8xMycpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHNjcm9sbGVkID49IDUyMDpcbiAgICAgICQoJyNjaXJjbGUnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI2NpcmNsZScpLmFkZENsYXNzKCdzdGF0ZV8xNCcpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgJCgnI2NpcmNsZScpLnJlbW92ZUF0dHIoJ2NsYXNzJyk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWRlVGl0bGUoc2Nyb2xsZWQpIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBzY3JvbGxlZCA+PSA4ODAgJiYgc2Nyb2xsZWQgPCA5MjA6XG4gICAgICAkKCcjdGl0bGVzJykucmVtb3ZlQXR0cignY2xhc3MnKTtcbiAgICAgICQoJyN0aXRsZXMnKS5hZGRDbGFzcygnc3RhdGVfMScpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHNjcm9sbGVkID49IDkyMCAmJiBzY3JvbGxlZCA8IDk2MDpcbiAgICAgICQoJyN0aXRsZXMnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI3RpdGxlcycpLmFkZENsYXNzKCdzdGF0ZV8yJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2Ugc2Nyb2xsZWQgPj0gOTYwICYmIHNjcm9sbGVkIDwgMTAwMDpcbiAgICAgICQoJyN0aXRsZXMnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI3RpdGxlcycpLmFkZENsYXNzKCdzdGF0ZV8zJyk7XG4gICAgICAkKCcjZml4ZWRfdGl0bGVzJykucmVtb3ZlQXR0cignY2xhc3MnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBzY3JvbGxlZCA+PSAxMDAwICYmIHNjcm9sbGVkIDwgMTA0MDpcbiAgICAgICQoJyN0aXRsZXMnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI3RpdGxlcycpLmFkZENsYXNzKCdzdGF0ZV80Jyk7XG4gICAgICAkKCcjZml4ZWRfdGl0bGVzJykucmVtb3ZlQXR0cignY2xhc3MnKTtcbiAgICAgICQoJyNmaXhlZF90aXRsZXMnKS5hZGRDbGFzcygnc3RhdGVfNCcpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHNjcm9sbGVkID49IDEwNDAgJiYgc2Nyb2xsZWQgPCAxMDgwOlxuICAgICAgJCgnI3RpdGxlcycpLnJlbW92ZUF0dHIoJ2NsYXNzJyk7XG4gICAgICAkKCcjdGl0bGVzJykuYWRkQ2xhc3MoJ3N0YXRlXzUnKTtcbiAgICAgICQoJyNmaXhlZF90aXRsZXMnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI2ZpeGVkX3RpdGxlcycpLmFkZENsYXNzKCdzdGF0ZV81Jyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2Ugc2Nyb2xsZWQgPj0gMTA4MDpcbiAgICAgICQoJyN0aXRsZXMnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgJCgnI3RpdGxlcycpLmFkZENsYXNzKCdzdGF0ZV82Jyk7XG4gICAgICAkKCcjZml4ZWRfdGl0bGVzJykucmVtb3ZlQXR0cignY2xhc3MnKTtcbiAgICAgICQoJyNmaXhlZF90aXRsZXMnKS5hZGRDbGFzcygnc3RhdGVfNicpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgJCgnI3RpdGxlcycpLnJlbW92ZUF0dHIoJ2NsYXNzJyk7XG4gICAgICAkKCcjZml4ZWRfdGl0bGVzJykucmVtb3ZlQXR0cignY2xhc3MnKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbiQoXCIucHJvamVjdHNfX2xpc3RfbmFtZVwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gIGlmICgkKCcjd29ya3NfY29udGFpbmVyJykuaGFzQ2xhc3MoJ2RvbmUnKSkge1xuICAgICQoJyNwcm9qZWN0c19fbGlzdCcpLmFkZENsYXNzKCd3aGl0ZV9fbGluZXMnKTtcbiAgICAkKHRoaXMpLmZpbmQoJy5wcm9qZWN0X2xpbmsnKS5hZGRDbGFzcygnc2hvdycpO1xuICAgIHZhciB2aWRlb0lEID0gJCh0aGlzKS5kYXRhKCd2aWRlbycpO1xuICAgICQoJyMnICsgdmlkZW9JRCkuYWRkQ2xhc3MoJ3BsYXknKTtcbiAgICAkKCcjd29ya3NfY29udGFpbmVyJykuYWRkQ2xhc3MoJ3ZpZGVvX3BsYXllZCcpO1xuICB9XG59LCBmdW5jdGlvbiAoKSB7XG4gICQoJy52aWRlb193cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3BsYXknKTtcbiAgJCgnI3dvcmtzX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd2aWRlb19wbGF5ZWQnKTtcbiAgJCgnI3Byb2plY3RzX19saXN0JykucmVtb3ZlQ2xhc3MoJ3doaXRlX19saW5lcycpO1xuICAkKCcucHJvamVjdF9saW5rJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbn0pO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICB2YXIgcHJlbG9hZGVyUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG9wKCkgIT09IDApIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAkKCcqJykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgJCgnKicpLnJlbW92ZUNsYXNzKCdsb2FkZWQnKTtcbiAgICAgICAgJCgnI3ByZWxvYWQnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICQoJy5tYWluLW5hdmlnYXRpb25fX2l0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJyNpbnRybycpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI3ByZWxvYWQnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfSk7XG4gIHByZWxvYWRlclByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgJCgnI21haW4nKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsb2FkZXInKTtcbiAgICAkKCcjcHJlbG9hZCcpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgfSk7XG4gICQoJy5tYWluLW5hdmlnYXRpb25fX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNjcm9sbGluZ0luUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKCdzY3JvbGxpbmdJblByb2dyZXNzJyk7XG4gICAgY29uc29sZS5sb2coc2Nyb2xsaW5nSW5Qcm9ncmVzcyk7XG4gICAgdmFyIHR5cGUgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignaWQnKTsgLy8gaWYodHlwZSA9PT0gJ2NvbnRhY3RzJykge1xuICAgIC8vICAgICBjb250YWN0QW5pbWF0aW9uKClcbiAgICAvLyB9XG5cbiAgICAkKCcubWFpbi1uYXZpZ2F0aW9uX19pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJyNtYWluJykucmVtb3ZlQ2xhc3MoJ2xvYWRlZCcpO1xuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbG9hZGVyJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjcHJlbG9hZCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAkKCcjcHJlbG9hZCcpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICQoJyNtYWluX2JnJykucmVtb3ZlQ2xhc3MoJ3Nob3dfYmcnKTtcbiAgICB9LCA1MDApO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI3NlY3Rpb25fNCcpLnJlbW92ZUNsYXNzKCdsb2FkZWQnKTtcbiAgICAgIHRvZ2dsZU1lbnUoZmFsc2UpO1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICQoJyMnICsgJChldmVudC50YXJnZXQpLmRhdGEoJ2FuY2hvcicpKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDgwMCkge1xuICAgICAgICAgIGFuaW1hdGVDaXJjbGUoJCh3aW5kb3cpLnNjcm9sbFRvcCgpKTtcbiAgICAgICAgICBhbmltYXRlVGV4dCgkKHdpbmRvdykuc2Nyb2xsVG9wKCkpO1xuICAgICAgICAgICQoJyN0aXRsZXMnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgICAgICQoJyNmaXhlZF90aXRsZXMnKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xuICAgICAgICAgICQoJyNtYWluX2JnJykucmVtb3ZlQ2xhc3MoJ3Nob3dfYmcnKTtcbiAgICAgICAgICAkKCcuaGVhZGVyJykuY3NzKCd6LWluZGV4JywgJzk5OTk5Jyk7XG4gICAgICAgICAgJCgnI2NpcmNsZScpLnJlbW92ZUF0dHIoJ2NsYXNzJyk7XG4gICAgICAgICAgJCgnI2NpcmNsZScpLmFkZENsYXNzKCdzdGF0ZV8xNCcpO1xuICAgICAgICAgICQoJyN0aXRsZXMnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICAgICAgICAgJCgnI2ZpeGVkX3RpdGxlcycpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgICAgICAgICAkKCcjaG9tZScpLmFkZENsYXNzKCdjdXJzb3JfX2l0ZW0nKTtcbiAgICAgICAgICByZXN0YXJ0SW50cm8oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZSAhPT0gJ2NvbnRhY3RzJykge1xuICAgICAgICAgICAgcmVzdGFydEFib3V0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsaW5nTWFpbigpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0b2dnbGVNZW51KGZhbHNlKTtcbiAgICAgICAgICAkKCcjcHJlbG9hZCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAkKCcjJyArIHR5cGUpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAkKCcjbWFpbicpLmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgICAgICAgICAkKCcjcHJlbG9hZCcpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICBwcm9ncmFtbWljID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ3dvcmtzJzpcbiAgICAgICAgICAgICAgICB3b3Jrc0FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ2Fib3V0JzpcbiAgICAgICAgICAgICAgICBhYm91dEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ2NvbnRhY3RzJzpcbiAgICAgICAgICAgICAgICBjb250YWN0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgYm90dG9tQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmdJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsb2FkZXInKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSk7XG4gICAgfSwgMTUwMCk7XG4gIH0pO1xuICAkKCcuc2Nyb2xsRG93bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6ICQod2luZG93KS5zY3JvbGxUb3AoKSArIDMwMFxuICAgIH0sIDMwMCk7XG4gIH0pO1xuICAkKCcuZ2FtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHRvZ2dsZU1lbnUodHJ1ZSk7XG4gIH0pO1xuICAkKCcuY2xvc2VfX21lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdG9nZ2xlTWVudShmYWxzZSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoYm9vbCkge1xuICAgIGlmIChib29sKSB7XG4gICAgICAkKCcubW9iaWxlX19tZW51JykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICQoJy5tb2JpbGVfX21lbnUgLm1haW4tbmF2aWdhdGlvbl9faXRlbScpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAkKCcubW9iaWxlX19tZW51IC5tb2JpbGVfX3NvY2lhbF9pdGVtJykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1vYmlsZV9fbWVudSAubWFpbi1uYXZpZ2F0aW9uX19pdGVtJykuYWRkQ2xhc3MoJ2Nsb3NlJyk7XG4gICAgICAkKCcubW9iaWxlX19tZW51IC5tb2JpbGVfX3NvY2lhbF9pdGVtJykuYWRkQ2xhc3MoJ2Nsb3NlJyk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLm1vYmlsZV9fbWVudScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICQoJy5tb2JpbGVfX21lbnUgLm1haW4tbmF2aWdhdGlvbl9faXRlbScpLnJlbW92ZUNsYXNzKCdvcGVuJykucmVtb3ZlQ2xhc3MoJ2Nsb3NlJyk7XG4gICAgICAgICQoJy5tb2JpbGVfX21lbnUgLm1vYmlsZV9fc29jaWFsX2l0ZW0nKS5yZW1vdmVDbGFzcygnb3BlbicpLnJlbW92ZUNsYXNzKCdjbG9zZScpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICB9XG5cbiAgJCgnYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaGFzQ2xhc3MoJ3JlbG9hZCcpKSB7XG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgICQoJyNpbnRybycpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9KTtcbiAgJCgnLnBvcHVwX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJyN2aWRlby1wb3B1cCcpLmNzcyh7XG4gICAgICAnZGlzcGxheSc6ICdmbGV4J1xuICAgIH0pO1xuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbG9hZGVyJyk7XG4gICAgJCgnYm9keScpLmFkZENsYXNzKCd2aWRlby1sb2FkZXInKTtcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2Nyb3NzJyk7XG4gICAgJCgnI3ZpZGVvLXBvcHVwIC5tb2RhbF92aWRlbycpLnRyaWdnZXIoJ3BsYXknKTtcbiAgfSk7XG4gICQoJy5wb3B1cF93aW5kb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnI3ZpZGVvLXBvcHVwIC5tb2RhbF92aWRlbycpLnRyaWdnZXIoJ3BhdXNlJyk7XG4gICAgJCgnI3ZpZGVvLXBvcHVwJykuaGlkZSgpO1xuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbG9hZGVyJyk7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCd2aWRlby1sb2FkZXInKTtcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2Nyb3NzJyk7XG4gIH0pO1xuICAkKGRvY3VtZW50KS5tb3VzZW1vdmUoZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2N1cnNvcl9faXRlbScpKSB7XG4gICAgICAkKCcjY3Vyc29ycycpLmFkZENsYXNzKCdiaWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnI2N1cnNvcnMnKS5yZW1vdmVDbGFzcygnYmlnJyk7XG4gICAgfVxuXG4gICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdjcm9zcycpKSB7XG4gICAgICAkKCcjY3Vyc29ycycpLmFkZENsYXNzKCdjcm9zcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcjY3Vyc29ycycpLnJlbW92ZUNsYXNzKCdjcm9zcycpO1xuICAgIH1cblxuICAgICQoJy5jdXJzb3InKS5jc3Moe1xuICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcbiAgICAgICdsZWZ0JzogZS5jbGllbnRYIC0gNSxcbiAgICAgICd0b3AnOiBlLmNsaWVudFkgLSA1XG4gICAgfSk7XG4gIH0pO1xuICAkKCcjY3Vyc29ycycpLmFwcGVuZFRvKCdib2R5Jyk7XG4gICQoJy5ob3JuX3dyYXBwZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCEkKCcjcmFwaGFlbCcpLmhhc0NsYXNzKCdjbGlja2VkJykpIHtcbiAgICAgIGxldHNHbygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdBbmltYXRpb24gPSB0cnVlO1xuICAgICAgc21pbGVzID0gW107XG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgJCgnI3JhcGhhZWwnKS5lbXB0eSgpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gbGV0c0dvKCkge1xuICB2YXIgd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgdmFyIGhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgdmFyIGNhbnZhcyA9ICc8Y2FudmFzIGlkPVwiY2FudmFzXCIgaGVpZ2h0PVwiJyArIGhlaWdodCArICdcIiB3aWR0aD1cIicgKyB3aWR0aCArICdcIj5HZXQgYSBiZXR0ZXIgYnJvd3NlciE8L2NhbnZhcz4nO1xuICAkKCcjcmFwaGFlbCcpLmFkZENsYXNzKCdjbGlja2VkJyk7XG4gICQoJyNyYXBoYWVsJykuZW1wdHkoKTtcbiAgJCgnI3JhcGhhZWwnKS5hcHBlbmQoY2FudmFzKTtcbiAgdmFyIHdpZHRoID0gJCgnI2NhbnZhcycpLndpZHRoKCk7XG4gIHZhciBoZWlnaHQgPSAkKCcjY2FudmFzJykuaGVpZ2h0KCk7XG4gIHZhciBjYW52YXMgPSBjdHggPSBmYWxzZTtcbiAgdmFyIGZyYW1lUmF0ZSA9IDEgLyA0MDsgLy8gU2Vjb25kc1xuXG4gIHZhciBmcmFtZURlbGF5ID0gZnJhbWVSYXRlICogMTAwMDsgLy8gbXNcblxuICB2YXIgbG9vcFRpbWVyID0gZmFsc2U7XG4gIHZhciBhbmdsZSA9IDE7XG4gIC8qXHJcbiAgICogRXhwZXJpbWVudCB3aXRoIHZhbHVlcyBvZiBtYXNzLCByYWRpdXMsIHJlc3RpdHV0aW9uLFxyXG4gICAqIGdyYXZpdHkgKGFnKSwgYW5kIGRlbnNpdHkgKHJobykhXHJcbiAgICogXHJcbiAgICogQ2hhbmdpbmcgdGhlIGNvbnN0YW50cyBsaXRlcmFsbHkgY2hhbmdlcyB0aGUgZW52aXJvbm1lbnRcclxuICAgKiB0aGUgYmFsbCBpcyBpbi4gXHJcbiAgICogXHJcbiAgICogU29tZSBzZXR0aW5ncyB0byB0cnk6XHJcbiAgICogdGhlIG1vb246IGFnID0gMS42XHJcbiAgICogd2F0ZXI6IHJobyA9IDEwMDAsIG1hc3MgNVxyXG4gICAqIGJlYWNoIGJhbGw6IG1hc3MgMC4wNSwgcmFkaXVzIDMwXHJcbiAgICogbGVhZCBiYWxsOiBtYXNzIDEwLCByZXN0aXR1dGlvbiAtMC4wNVxyXG4gICAqL1xuXG4gIHZhciBiYWxsID0ge1xuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiB3aWR0aCAvIDIsXG4gICAgICB5OiBoZWlnaHRcbiAgICB9LFxuICAgIHZlbG9jaXR5OiB7XG4gICAgICB4OiAxLFxuICAgICAgeTogMzBcbiAgICB9LFxuICAgIG1hc3M6IDAuMSxcbiAgICAvL2tnXG4gICAgcmFkaXVzOiAxMyxcbiAgICAvLyAxcHggPSAxY21cbiAgICByZXN0aXR1dGlvbjogLTAuN1xuICB9O1xuICB2YXIgYW5pbWF0ZWRTbWlsZXMgPSBbXTtcbiAgdmFyIHNlY29uZCA9IGZhbHNlO1xuICB2YXIgQ2QgPSAwLjQ3OyAvLyBEaW1lbnNpb25sZXNzXG5cbiAgdmFyIHJobyA9IDEuMjI7IC8vIGtnIC8gbV4zXG5cbiAgdmFyIEEgPSBNYXRoLlBJICogYmFsbC5yYWRpdXMgKiBiYWxsLnJhZGl1cyAvIDEwMDAwOyAvLyBtXjJcblxuICB2YXIgYWcgPSA5LjgxOyAvLyBtIC8gc14yXG5cbiAgdmFyIG1vdXNlID0ge1xuICAgIHg6IDAsXG4gICAgeTogaGVpZ2h0LFxuICAgIGlzRG93bjogZmFsc2VcbiAgfTtcblxuICB2YXIgc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgLy8gY3R4LmNsZWFyUmVjdCgwLDAsd2lkdGgsaGVpZ2h0KTtcblxuICAgIHZhciBzbWlsZXMgPSBbe1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogMTAwLFxuICAgICAgICB5OiBoZWlnaHQgLSAxNTBcbiAgICAgIH0sXG4gICAgICB2ZWxvY2l0eToge1xuICAgICAgICB4OiAyMCxcbiAgICAgICAgeTogNzBcbiAgICAgIH0sXG4gICAgICBtYXNzOiAwLjEsXG4gICAgICAvL2tnXG4gICAgICByYWRpdXM6IDIzLFxuICAgICAgLy8gMXB4ID0gMWNtXG4gICAgICByZXN0aXR1dGlvbjogLTAuNyxcbiAgICAgIHVybDogXCJpY29uXzFcIlxuICAgIH0sIHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IDEwMCxcbiAgICAgICAgeTogaGVpZ2h0IC0gMTUwXG4gICAgICB9LFxuICAgICAgdmVsb2NpdHk6IHtcbiAgICAgICAgeDogMTUsXG4gICAgICAgIHk6IDUwXG4gICAgICB9LFxuICAgICAgbWFzczogMC4xLFxuICAgICAgLy9rZ1xuICAgICAgcmFkaXVzOiAyMyxcbiAgICAgIC8vIDFweCA9IDFjbVxuICAgICAgcmVzdGl0dXRpb246IC0wLjcsXG4gICAgICB1cmw6IFwiaWNvbl8yXCJcbiAgICB9LCB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiAxMDAsXG4gICAgICAgIHk6IGhlaWdodCAtIDE1MFxuICAgICAgfSxcbiAgICAgIHZlbG9jaXR5OiB7XG4gICAgICAgIHg6IDMwLFxuICAgICAgICB5OiAxMDBcbiAgICAgIH0sXG4gICAgICBtYXNzOiAwLjEsXG4gICAgICAvL2tnXG4gICAgICByYWRpdXM6IDIzLFxuICAgICAgLy8gMXB4ID0gMWNtXG4gICAgICByZXN0aXR1dGlvbjogLTAuNyxcbiAgICAgIHVybDogXCJpY29uXzNcIlxuICAgIH0sIHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IDEwMCxcbiAgICAgICAgeTogaGVpZ2h0IC0gMTUwXG4gICAgICB9LFxuICAgICAgdmVsb2NpdHk6IHtcbiAgICAgICAgeDogNDAsXG4gICAgICAgIHk6IDg1XG4gICAgICB9LFxuICAgICAgbWFzczogMC4xLFxuICAgICAgLy9rZ1xuICAgICAgcmFkaXVzOiAyMyxcbiAgICAgIC8vIDFweCA9IDFjbVxuICAgICAgcmVzdGl0dXRpb246IC0wLjcsXG4gICAgICB1cmw6IFwiaWNvbl80XCJcbiAgICB9LCB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiAxMDAsXG4gICAgICAgIHk6IGhlaWdodCAtIDE1MFxuICAgICAgfSxcbiAgICAgIHZlbG9jaXR5OiB7XG4gICAgICAgIHg6IDE1LFxuICAgICAgICB5OiA1N1xuICAgICAgfSxcbiAgICAgIG1hc3M6IDAuMSxcbiAgICAgIC8va2dcbiAgICAgIHJhZGl1czogMjMsXG4gICAgICAvLyAxcHggPSAxY21cbiAgICAgIHJlc3RpdHV0aW9uOiAtMC43LFxuICAgICAgdXJsOiBcImljb25fNVwiXG4gICAgfSwge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogMTAwLFxuICAgICAgICB5OiBoZWlnaHQgLSAxNTBcbiAgICAgIH0sXG4gICAgICB2ZWxvY2l0eToge1xuICAgICAgICB4OiAzNixcbiAgICAgICAgeTogNTVcbiAgICAgIH0sXG4gICAgICBtYXNzOiAwLjEsXG4gICAgICAvL2tnXG4gICAgICByYWRpdXM6IDIzLFxuICAgICAgLy8gMXB4ID0gMWNtXG4gICAgICByZXN0aXR1dGlvbjogLTAuNyxcbiAgICAgIHVybDogXCJpY29uXzZcIlxuICAgIH0sIHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IDEwMCxcbiAgICAgICAgeTogaGVpZ2h0IC0gMTUwXG4gICAgICB9LFxuICAgICAgdmVsb2NpdHk6IHtcbiAgICAgICAgeDogMTUsXG4gICAgICAgIHk6IDYwXG4gICAgICB9LFxuICAgICAgbWFzczogMC4xLFxuICAgICAgLy9rZ1xuICAgICAgcmFkaXVzOiAyMyxcbiAgICAgIC8vIDFweCA9IDFjbVxuICAgICAgcmVzdGl0dXRpb246IC0wLjcsXG4gICAgICB1cmw6IFwiaWNvbl8xXCJcbiAgICB9LCB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiAxMDAsXG4gICAgICAgIHk6IGhlaWdodCAtIDE1MFxuICAgICAgfSxcbiAgICAgIHZlbG9jaXR5OiB7XG4gICAgICAgIHg6IDI1LFxuICAgICAgICB5OiAzMFxuICAgICAgfSxcbiAgICAgIG1hc3M6IDAuMSxcbiAgICAgIC8va2dcbiAgICAgIHJhZGl1czogMjMsXG4gICAgICAvLyAxcHggPSAxY21cbiAgICAgIHJlc3RpdHV0aW9uOiAtMC43LFxuICAgICAgdXJsOiBcImljb25fMlwiXG4gICAgfSwge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogMTAwLFxuICAgICAgICB5OiBoZWlnaHQgLSAxNTBcbiAgICAgIH0sXG4gICAgICB2ZWxvY2l0eToge1xuICAgICAgICB4OiAzLFxuICAgICAgICB5OiA4NVxuICAgICAgfSxcbiAgICAgIG1hc3M6IDAuMSxcbiAgICAgIC8va2dcbiAgICAgIHJhZGl1czogMjMsXG4gICAgICAvLyAxcHggPSAxY21cbiAgICAgIHJlc3RpdHV0aW9uOiAtMC43LFxuICAgICAgdXJsOiBcImljb25fM1wiXG4gICAgfSwge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogMTAwLFxuICAgICAgICB5OiBoZWlnaHQgLSAxNTBcbiAgICAgIH0sXG4gICAgICB2ZWxvY2l0eToge1xuICAgICAgICB4OiAxNCxcbiAgICAgICAgeTogNjVcbiAgICAgIH0sXG4gICAgICBtYXNzOiAwLjEsXG4gICAgICAvL2tnXG4gICAgICByYWRpdXM6IDIzLFxuICAgICAgLy8gMXB4ID0gMWNtXG4gICAgICByZXN0aXR1dGlvbjogLTAuNyxcbiAgICAgIHVybDogXCJpY29uXzRcIlxuICAgIH0sIHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IDEwMCxcbiAgICAgICAgeTogaGVpZ2h0IC0gMTUwXG4gICAgICB9LFxuICAgICAgdmVsb2NpdHk6IHtcbiAgICAgICAgeDogMjUsXG4gICAgICAgIHk6IDI3XG4gICAgICB9LFxuICAgICAgbWFzczogMC4xLFxuICAgICAgLy9rZ1xuICAgICAgcmFkaXVzOiAyMyxcbiAgICAgIC8vIDFweCA9IDFjbVxuICAgICAgcmVzdGl0dXRpb246IC0wLjcsXG4gICAgICB1cmw6IFwiaWNvbl81XCJcbiAgICB9LCB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiAxMDAsXG4gICAgICAgIHk6IGhlaWdodCAtIDE1MFxuICAgICAgfSxcbiAgICAgIHZlbG9jaXR5OiB7XG4gICAgICAgIHg6IDE2LFxuICAgICAgICB5OiA1M1xuICAgICAgfSxcbiAgICAgIG1hc3M6IDAuMSxcbiAgICAgIC8va2dcbiAgICAgIHJhZGl1czogMjMsXG4gICAgICAvLyAxcHggPSAxY21cbiAgICAgIHJlc3RpdHV0aW9uOiAtMC43LFxuICAgICAgdXJsOiBcImljb25fNlwiXG4gICAgfSwge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogMTAwLFxuICAgICAgICB5OiBoZWlnaHQgLSAxNTBcbiAgICAgIH0sXG4gICAgICB2ZWxvY2l0eToge1xuICAgICAgICB4OiAyMyxcbiAgICAgICAgeTogNDhcbiAgICAgIH0sXG4gICAgICBtYXNzOiAwLjEsXG4gICAgICAvL2tnXG4gICAgICByYWRpdXM6IDIzLFxuICAgICAgLy8gMXB4ID0gMWNtXG4gICAgICByZXN0aXR1dGlvbjogLTAuNyxcbiAgICAgIHVybDogXCJpY29uXzFcIlxuICAgIH0sIHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IDEwMCxcbiAgICAgICAgeTogaGVpZ2h0IC0gMTUwXG4gICAgICB9LFxuICAgICAgdmVsb2NpdHk6IHtcbiAgICAgICAgeDogMjgsXG4gICAgICAgIHk6IDUyXG4gICAgICB9LFxuICAgICAgbWFzczogMC4xLFxuICAgICAgLy9rZ1xuICAgICAgcmFkaXVzOiAyMyxcbiAgICAgIC8vIDFweCA9IDFjbVxuICAgICAgcmVzdGl0dXRpb246IC0wLjcsXG4gICAgICB1cmw6IFwiaWNvbl8yXCJcbiAgICB9LCB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiAxMDAsXG4gICAgICAgIHk6IGhlaWdodCAtIDE1MFxuICAgICAgfSxcbiAgICAgIHZlbG9jaXR5OiB7XG4gICAgICAgIHg6IDM0LFxuICAgICAgICB5OiA2OFxuICAgICAgfSxcbiAgICAgIG1hc3M6IDAuMSxcbiAgICAgIC8va2dcbiAgICAgIHJhZGl1czogMjMsXG4gICAgICAvLyAxcHggPSAxY21cbiAgICAgIHJlc3RpdHV0aW9uOiAtMC43LFxuICAgICAgdXJsOiBcImljb25fM1wiXG4gICAgfSwge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogMTAwLFxuICAgICAgICB5OiBoZWlnaHQgLSAxNTBcbiAgICAgIH0sXG4gICAgICB2ZWxvY2l0eToge1xuICAgICAgICB4OiA0LFxuICAgICAgICB5OiA1NFxuICAgICAgfSxcbiAgICAgIG1hc3M6IDAuMSxcbiAgICAgIC8va2dcbiAgICAgIHJhZGl1czogMjMsXG4gICAgICAvLyAxcHggPSAxY21cbiAgICAgIHJlc3RpdHV0aW9uOiAtMC43LFxuICAgICAgdXJsOiBcImljb25fNFwiXG4gICAgfSwge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogMTAwLFxuICAgICAgICB5OiBoZWlnaHQgLSAxNTBcbiAgICAgIH0sXG4gICAgICB2ZWxvY2l0eToge1xuICAgICAgICB4OiA1LFxuICAgICAgICB5OiA0NVxuICAgICAgfSxcbiAgICAgIG1hc3M6IDAuMSxcbiAgICAgIC8va2dcbiAgICAgIHJhZGl1czogMjMsXG4gICAgICAvLyAxcHggPSAxY21cbiAgICAgIHJlc3RpdHV0aW9uOiAtMC43LFxuICAgICAgdXJsOiBcImljb25fNVwiXG4gICAgfSwge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogMTAwLFxuICAgICAgICB5OiBoZWlnaHQgLSAxNTBcbiAgICAgIH0sXG4gICAgICB2ZWxvY2l0eToge1xuICAgICAgICB4OiA2LFxuICAgICAgICB5OiA2M1xuICAgICAgfSxcbiAgICAgIG1hc3M6IDAuMSxcbiAgICAgIC8va2dcbiAgICAgIHJhZGl1czogMjMsXG4gICAgICAvLyAxcHggPSAxY21cbiAgICAgIHJlc3RpdHV0aW9uOiAtMC43LFxuICAgICAgdXJsOiBcImljb25fNlwiXG4gICAgfV07XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJztcbiAgICBsb29wVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgYW5pbWF0ZWRTbWlsZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbWlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5ld0FuaW1hdGlvbikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICAgICAgICAgIHNtaWxlcyA9IFtdO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwobG9vcFRpbWVyKTtcbiAgICAgICAgICBuZXdBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICBsZXRzR28oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxvb3Aoc21pbGVzW2ldKTtcbiAgICAgIH1cbiAgICB9LCBmcmFtZURlbGF5KTtcbiAgfTtcblxuICB2YXIgVE9fUkFESUFOUyA9IE1hdGguUEkgLyAxODA7XG5cbiAgZnVuY3Rpb24gcm90YXRlQW5kUGFpbnRJbWFnZShjb250ZXh0LCBpbWFnZSwgYW5nbGVJblJhZCwgcG9zaXRpb25YLCBwb3NpdGlvblksIGF4aXNYLCBheGlzWSkge1xuICAgIGNvbnRleHQudHJhbnNsYXRlKHBvc2l0aW9uWCwgcG9zaXRpb25ZKTtcbiAgICBjb250ZXh0LnJvdGF0ZShhbmdsZUluUmFkKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgYXhpc1gsIGF4aXNZKTtcbiAgICBjb250ZXh0LnJvdGF0ZSgtYW5nbGVJblJhZCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoLXBvc2l0aW9uWCwgLXBvc2l0aW9uWSk7XG4gIH1cblxuICB2YXIgbG9vcCA9IGZ1bmN0aW9uIChiYWxsKSB7XG4gICAgaWYgKCFtb3VzZS5pc0Rvd24pIHtcbiAgICAgIC8vIERvIHBoeXNpY3NcbiAgICAgIC8vIERyYWcgZm9yY2U6IEZkID0gLTEvMiAqIENkICogQSAqIHJobyAqIHYgKiB2XG4gICAgICB2YXIgRnggPSAtMC41ICogQ2QgKiBBICogcmhvICogYmFsbC52ZWxvY2l0eS54ICogYmFsbC52ZWxvY2l0eS54ICogYmFsbC52ZWxvY2l0eS54IC8gTWF0aC5hYnMoYmFsbC52ZWxvY2l0eS54KTtcbiAgICAgIHZhciBGeSA9IC0wLjUgKiBDZCAqIEEgKiByaG8gKiBiYWxsLnZlbG9jaXR5LnkgKiBiYWxsLnZlbG9jaXR5LnkgKiBiYWxsLnZlbG9jaXR5LnkgLyBNYXRoLmFicyhiYWxsLnZlbG9jaXR5LnkpO1xuICAgICAgRnggPSBpc05hTihGeCkgPyAwIDogRng7XG4gICAgICBGeSA9IGlzTmFOKEZ5KSA/IDAgOiBGeTsgLy8gQ2FsY3VsYXRlIGFjY2VsZXJhdGlvbiAoIEYgPSBtYSApXG5cbiAgICAgIHZhciBheCA9IEZ4IC8gYmFsbC5tYXNzO1xuICAgICAgdmFyIGF5ID0gYWcgKyBGeSAvIGJhbGwubWFzczsgLy8gSW50ZWdyYXRlIHRvIGdldCB2ZWxvY2l0eVxuXG4gICAgICBiYWxsLnZlbG9jaXR5LnggKz0gYXggKiBmcmFtZVJhdGU7XG4gICAgICBiYWxsLnZlbG9jaXR5LnkgKz0gYXkgKiBmcmFtZVJhdGU7IC8vIEludGVncmF0ZSB0byBnZXQgcG9zaXRpb25cblxuICAgICAgYmFsbC5wb3NpdGlvbi54ICs9IGJhbGwudmVsb2NpdHkueCAqIGZyYW1lUmF0ZSAqIDEwMDtcbiAgICAgIGJhbGwucG9zaXRpb24ueSArPSBiYWxsLnZlbG9jaXR5LnkgKiBmcmFtZVJhdGUgKiAxMDA7XG4gICAgfSAvLyBIYW5kbGUgY29sbGlzaW9uc1xuXG5cbiAgICBpZiAoYmFsbC5wb3NpdGlvbi55ID4gaGVpZ2h0IC0gYmFsbC5yYWRpdXMpIHtcbiAgICAgIGJhbGwudmVsb2NpdHkueSAqPSBiYWxsLnJlc3RpdHV0aW9uO1xuICAgICAgYmFsbC5wb3NpdGlvbi55ID0gaGVpZ2h0IC0gYmFsbC5yYWRpdXM7XG4gICAgfVxuXG4gICAgaWYgKGJhbGwucG9zaXRpb24ueCA+IHdpZHRoIC0gYmFsbC5yYWRpdXMpIHtcbiAgICAgIGJhbGwudmVsb2NpdHkueCAqPSBiYWxsLnJlc3RpdHV0aW9uO1xuICAgICAgYmFsbC5wb3NpdGlvbi54ID0gd2lkdGggLSBiYWxsLnJhZGl1cztcbiAgICB9XG5cbiAgICBpZiAoYmFsbC5wb3NpdGlvbi54IDwgYmFsbC5yYWRpdXMpIHtcbiAgICAgIGJhbGwudmVsb2NpdHkueCAqPSBiYWxsLnJlc3RpdHV0aW9uO1xuICAgICAgYmFsbC5wb3NpdGlvbi54ID0gYmFsbC5yYWRpdXM7XG4gICAgfSAvLyBEcmF3IHRoZSBiYWxsXG4gICAgLy8gY3R4LnNhdmUoKTtcbiAgICAvLyBhbmdsZSA9ICsrYW5nbGVcblxuXG4gICAgY29uc29sZS5sb2coJ2JhbGwudXJsICcgKyBiYWxsLnVybCArICdiYWxsLnBvc2l0aW9uLnggJyArIGJhbGwucG9zaXRpb24ueCk7XG4gICAgY3R4LmRyYXdJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYWxsLnVybCksIGJhbGwucG9zaXRpb24ueCwgYmFsbC5wb3NpdGlvbi55IC0gYmFsbC5yYWRpdXMsIDQ2LCA0Nik7IC8vIHJvdGF0ZUFuZFBhaW50SW1hZ2UoY3R4LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYWxsLnVybCksIGFuZ2xlLCBiYWxsLnBvc2l0aW9uLngsIGJhbGwucG9zaXRpb24ueSAtIGJhbGwucmFkaXVzLCAwLCAwKVxuICAgIC8vIGN0eC5yZXN0b3JlKCk7XG4gIH07XG5cbiAgc2V0dXAoKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=