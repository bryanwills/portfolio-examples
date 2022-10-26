// Is visible
$.fn.isInViewport = function) {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;


r scrolledToWorks = 0;
r scrolledToIntro = 0;
r programmic = false;
r position = $(window).scrollTop();
r direction;
r introAnimated = false;
r animated = 0;
r worksAnimated = false;
r worksAnimatedCount = 0;
r scrollingInProgress = false;
r newAnimation = false;

nction introAnimation() {
    $('.main-navigation__item').removeClass('active');
    $('#intro').addClass('active');
    $('#main_bg').addClass('show_bg');
    $('#title__bg').addClass('loaded');
    $('#bold_title_1').addClass('visible');
    $('#wrapper_1').addClass('loaded');
    $('#bold_title_2').addClass('visible');
    $('#wrapper_2').addClass('loaded');
    $('.rotate_circle_container').removeClass('hidden').addClass('animated zoomIn');
    $('#horn').removeClass('hidden').addClass('animated zoomIn');
    setTimeout(function) {
          $('.horn_wrapper').addClass('animated pulse infinite');
    }, 1000);
    setTimeout(function) {
          introAnimated = true;
          scrollingInProgress = false;
          restartWorks();
          restartAbout();
          $('body').removeClass('loader');
          $('#preload').css('visibility', 'hidden');
          programmic = false;
    }, 2500);


nction worksAnimation() {
    restartAbout();
    $('.main-navigation__item').removeClass('active');
    $('#works').addClass('active');
    $('#titles').addClass('black');
    $('#line').addClass('loaded');
    $('#top_section').addClass('loaded');
    $('#bottom_section').addClass('loaded');
    $('#works_container').addClass('loaded');
    $('#projects__list').addClass('loaded');
    setTimeout(function) {
          worksAnimated = true;
          scrollingInProgress = false;
          restartIntro();
          $('body').removeClass('loader');
          $('#main_bg').removeClass('show_bg');
          $('#projects__list').removeClass('blocked');
          $('#preload').css('visibility', 'hidden');
          $('#works_container').addClass('done');
          programmic = false;
    }, 2500);


nction aboutAnimation() {
    $('#main_bg').removeClass('show_bg');
    $('#bold_title_3').addClass('visible');
    $('#wrapper_3').addClass('loaded');
    $('#bold_title_4').addClass('visible');
    $('#wrapper_4').addClass('loaded');
    $('#about-starter').addClass('loaded');
    setTimeout(function) {
          $('#about-starter').addClass('finished');
    }, 2000);
    $('#section_4').addClass('loaded');
    $('body').removeClass('loader');
    programmic = false;
    scrollingInProgress = false;
    restartWorks();


nction contactAnimation() {
    $('#main_bg').removeClass('show_bg');
    $('#bold_title_3').addClass('visible');
    $('#wrapper_3').addClass('loaded');
    $('#wrapper_4').addClass('loaded');
    $('#about-starter').addClass('loaded');
    $('#bold_title_4').addClass('visible');
    $('#about-starter').addClass('finished');
    $('#section_4').addClass('loaded');
    $('body').removeClass('loader');
    $('#trigger_14').addClass('loaded');
    $('.small_margin').addClass('loaded');
    $('.big_margin').addClass('loaded');
    $('.quate').addClass('loaded');
    $('.few_brands').addClass('loaded');
    $('.brand__list').addClass('loaded');
    $('.bold__text').addClass('loaded');
    $('.exp__title').addClass('loaded');
    $('.exp__text').addClass('loaded');
    programmic = false;
    scrollingInProgress = false;


nction bottomAnimation() {
    $('#bold_title_5').addClass('visible');
    $('#wrapper_5').addClass('loaded');
    $('#bold_title_6').addClass('visible');
    $('#wrapper_6').addClass('loaded');
    $('.scrollDown').hide();
    $('#last__title-trigger').addClass('loaded');


nction restartIntro() {
    animated = 0;
    introAnimated = false;
    $('#main_bg').removeClass('show_bg');
    $('#title__bg').removeClass('loaded');
    $('#bold_title_1').removeClass('visible');
    $('#wrapper_1').removeClass('loaded');
    $('#bold_title_2').removeClass('visible');
    $('#wrapper_2').removeClass('loaded');
    $('.rotate_circle_container').addClass('hidden').removeClass('animated zoomIn delay-2s');
    $('#horn').addClass('hidden').removeClass('animated zoomIn delay-2s');


nction restartWorks() {
    worksAnimatedCount = 0;
    worksAnimated = false;
    $('#titles').removeClass('black');
    $('#line').removeClass('loaded');
    $('#top_section').removeClass('loaded');
    $('#bottom_section').removeClass('loaded');
    $('#works_container').removeClass('loaded');
    $('#works_container').removeClass('done');
    $('#projects__list').removeClass('loaded');


nction restartAbout() {
    $('#bold_title_3').removeClass('visible');
    $('#wrapper_3').removeClass('loaded');
    $('#bold_title_4').removeClass('visible');
    $('#wrapper_4').removeClass('loaded');
    $('#about-starter').removeClass('loaded');
    $('#about-starter').removeClass('finished');
    $('#section_4').removeClass('loaded');
    $('.description').removeClass('loaded');
    $('.few_brands').removeClass('loaded');
    $('.quate').removeClass('loaded');
    $('.small_margin').removeClass('loaded');
    $('.brand__list').removeClass('loaded');
    $('.small_margin .bold__text').removeClass('loaded');
    $('.exp__title').removeClass('loaded');
    $('.exp__text').removeClass('loaded');
    $('.big_margin').removeClass('loaded');
    $('#trigger_14 .bold__text').removeClass('loaded');
    $('#trigger_14').removeClass('loaded');
    $('#last__title-trigger').removeClass('loaded');
    $('#bold_title_5').removeClass('visible');
    $('#wrapper_5').removeClass('loaded');
    $('#bold_title_6').removeClass('visible');
    $('#wrapper_6').removeClass('loaded');
    $('#about-starter').removeClass('finished');
    $('.big_margin').removeClass('finished');
    $('.quate').removeClass('finished');
    $('.small_margin').removeClass('finished');


nction scrollingMain(event) {
    var scrolled = $(window).scrollTop();

    if (scrolled > position) {
          direction = true;
    } else {
          direction = false;
    }

    position = scrolled;

    switch (true) {
          case scrolled <= 560:
                animateCircle(scrolled);
                $('#titles').removeAttr('class');
                $('#fixed_titles').removeAttr('class');
                $('#home').removeClass('cursor__item');
                $('#main_bg').removeClass('show_bg');
                $('body').removeClass('loader');
                $('.header').css('z-index', '99999');
                $('.section-title').removeAttr('style');
                break;

          case scrolled >= 560 && scrolled < 800:
                restartIntro();
                animateText(scrolled);
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_14');
                $('#titles').removeAttr('class');
                $('#fixed_titles').removeAttr('class');
                $('#home').removeClass('cursor__item');
                $('#main_bg').removeClass('show_bg');
                $('body').removeClass('loader');
                $('.header').css('z-index', '99999');
                break;

          case scrolled >= 880 && scrolled <= $('#section_2').offset().top:
                $('#titles').addClass('loaded');
                $('#fixed_titles').addClass('loaded');
                $('#home').addClass('cursor__item');
                $('.header').css('z-index', '9999');

                if ($(window).width() <= 1024 || animated > 0 || scrollingInProgress) {
                      return false;
                }

                if (direction && !introAnimated) {
                      animated++;
                      scrollingInProgress = true;
                      $('body').addClass('loader');
                      $('html, body').animate({
                            scrollTop: $('#section_2').offset().top
                      }, {
                            duration: 1000,
                            complete: unction() {
                                  introAnimation();
                            }
                      });
                }

                break;

          case scrolled > $('#section_2').offset().top && scrolled < $('#section_3').offset().top:
                if ($(window).width() <= 1024 || worksAnimatedCount > 0 || scrollingInProgress) {
                      return false;
                }

                if (direction && !worksAnimated) {
                      scrollingInProgress = true;
                      worksAnimated++;
                      $('body').addClass('loader');
                      $('html, body').animate({
                            scrollTop: $('#section_3').offset().top
                      }, {
                            duration: 1000,
                            complete: unction() {
                                  worksAnimation();
                            }
                      });
                      return false;
                }

                if (!direction) {
                      scrollingInProgress = true;
                      animated++;
                      $('body').addClass('loader');
                      $('html, body').animate({
                            scrollTop: $('#section_2').offset().top
                      }, {
                            duration: 1000,
                            complete: unction() {
                                  introAnimation();
                            }
                      });
                }

                break;

          case scrolled >= $('#section_3').offset().top && scrolled < $('#section_3').offset().top + $(window).height():
                if (scrollingInProgress || $(window).width() <= 1024) {
                      return false;
                }

                if (direction) {
                      scrollingInProgress = true;
                      $('body').addClass('loader');
                      $('html, body').animate({
                            scrollTop: $('#section_4').offset().top
                      }, {
                            duration: 1000,
                            complete: unction() {
                                  scrollingInProgress = false;
                                  aboutAnimation();
                            }
                      });
                }

                if (!direction) {
                      scrollingInProgress = true;
                      $('#section_4').removeClass('loaded');
                      worksAnimated++;
                      $('body').addClass('loader');
                      $('html, body').animate({
                            scrollTop: $('#section_3').offset().top
                      }, {
                            duration: 1000,
                            complete: unction() {
                                  worksAnimation();
                            }
                      });
                }

                break;

          default:
                break;
    }

    if (scrolled > $('#section_2').offset().top && $(window).width() <= 1024) {
          $('.mobile__scroll_button').addClass('hidden');
    } else {
          $('.mobile__scroll_button').removeClass('hidden');
    }

    if ($('#section_2').isInViewport()) {
          $('.main-navigation__item').removeClass('active');
          $('#intro').addClass('active');
    }

    if ($('#section_3').isInViewport()) {
          $('.main-navigation__item').removeClass('active');
          $('#works').addClass('active');
    }

    if ($(window).scrollTop() >= $('#mobile').offset().top && $('#mobile').isInViewport() && $(window).width() <= 1024) {
          $('.gamburger').removeClass('black');
          $('#titles').addClass('black');
    } else {
          $('#titles').removeClass('black');
          $('.gamburger').addClass('black');
    }

    if ($('#section_4').isInViewport()) {
          $('.main-navigation__item').removeClass('active');
          $('#about').addClass('active');
    }

    if ($('.few_brands').isInViewport() && $('#about-starter').hasClass('finished') || $('.few_brands').isInViewport() && $(window).width() <= 1024) {
          $('.few_brands').addClass('loaded');
          $('#section_4').addClass('loaded');
          $('.brand__list').addClass('loaded');
    }

    if ($('.quate').isInViewport()) {
          $('.quate').addClass('loaded');
          setTimeout(functin() {
                $('.quate').addClass('finished');
          }, 500);
    }

    if ($('.small_margin').isInViewport() && $('.big_margin').hasClass('finished')) {
          $('.small_margin').addClass('loaded');
          $('.small_margin .bold__text').addClass('loaded');
          setTimeout(functin() {
                $('.small_margin').addClass('finished');
          }, 500);
    }

    if ($('#trigger_13').isInViewport() && $('.quate').hasClass('finished')) {
          $('.exp__title').addClass('loaded');
          $('.exp__text').addClass('loaded');
          $('.big_margin').addClass('loaded');
          setTimeout(functin() {
                $('.big_margin').addClass('finished');
          }, 500);
    }

    if ($('#trigger_14').isInViewport() && $('.quate').hasClass('finished') || programmic) {
          $('#trigger_14 .bold__text').addClass('loaded');
          $('#trigger_14').addClass('loaded');
    }

    if ($('#last__title').isInViewport()) {
          $('#trigger_14 .bold__text').addClass('loaded');
          $('.main-navigation__item').removeClass('active');
          $('#contacts').addClass('active');
    }

    if ($('#last__title-trigger').isInViewport() && !scrollingInProgress) {
          console.log('last__title-triggered');
          console.log(scrollingInProgress);
          $('#last__title-trigger').addClass('loaded');
    }

    if ($('#last__title #bold_title_6').isInViewport() && !scrollingInProgress) {
          console.log('hey ho');
          console.log(scrollingInProgress);
          $('#bold_title_5').addClass('visible');
          $('#wrapper_5').addClass('loaded');
          $('#bold_title_6').addClass('visible');
          $('#wrapper_6').addClass('loaded');
          $('.scrollDown').hide();
    } else {
          $('.scrollDown').show();
    }


window).on('scroll', function(eent) {
    scrollingMain(event);
;

nction moveto(delta) {
    if (delta < 0) {
          $('html, body').animate({}, 500);
    } else {
          $('html, body').animate({}, 500);
    }


nction animateText(scrolled) {
    switch (true) {
          case scrolled < 560:
                $('.section-title').css({
                      fontSize: '7.2em'
                });
                break;

          case scrolled >= 560 && scrolled < 600:
                $('.section-title').css({
                      fontSize: '6.8em'
                });
                break;

          case scrolled >= 600 && scrolled < 640:
                $('.section-title').css({
                      fontSize: '6.3em'
                });
                break;

          case scrolled >= 640 && scrolled < 680:
                $('.section-title').css({
                      fontSize: '5.65em'
                });
                break;

          case scrolled >= 680 && scrolled < 720:
                $('.section-title').css({
                      fontSize: '5.2em'
                });
                break;

          case scrolled >= 720 && scrolled < 760:
                $('.section-title').css({
                      fontSize: '4.7em'
                });
                break;

          case scrolled >= 760 && scrolled < 800:
                $('.section-title').css({
                      fontSize: '4.3em'
                });
                break;

          case scrolled >= 800 && scrolled < 840:
                $('.section-title').css({
                      fontSize: '3.8em'
                });
                break;

          case scrolled >= 840:
                $('.section-title').css({
                      fontSize: '3.45em'
                });
                break;

          default:
                $('.section-title').css({
                      fontSize: '3em'
                });
                break;
    }


nction animateCircle(scrolled) {
    switch (true) {
          case scrolled < 40:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_1');
                break;

          case scrolled >= 40 && scrolled < 80:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_2');
                break;

          case scrolled >= 80 && scrolled < 120:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_3');
                break;

          case scrolled >= 120 && scrolled < 160:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_4');
                break;

          case scrolled >= 160 && scrolled < 200:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_5');
                break;

          case scrolled >= 200 && scrolled < 240:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_6');
                break;

          case scrolled >= 240 && scrolled < 280:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_7');
                break;

          case scrolled >= 280 && scrolled < 320:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_8');
                break;

          case scrolled >= 320 && scrolled < 360:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_9');
                break;

          case scrolled >= 360 && scrolled < 400:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_10');
                break;

          case scrolled >= 400 && scrolled < 440:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_11');
                break;

          case scrolled >= 440 && scrolled < 480:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_12');
                break;

          case scrolled >= 480 && scrolled < 520:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_13');
                break;

          case scrolled >= 520:
                $('#circle').removeAttr('class');
                $('#circle').addClass('state_14');
                break;

          default:
                $('#circle').removeAttr('class');
                break;
    }


nction hideTitle(scrolled) {
    switch (true) {
          case scrolled >= 880 && scrolled < 920:
                $('#titles').removeAttr('class');
                $('#titles').addClass('state_1');
                break;

          case scrolled >= 920 && scrolled < 960:
                $('#titles').removeAttr('class');
                $('#titles').addClass('state_2');
                break;

          case scrolled >= 960 && scrolled < 1000:
                $('#titles').removeAttr('class');
                $('#titles').addClass('state_3');
                $('#fixed_titles').removeAttr('class');
                break;

          case scrolled >= 1000 && scrolled < 1040:
                $('#titles').removeAttr('class');
                $('#titles').addClass('state_4');
                $('#fixed_titles').removeAttr('class');
                $('#fixed_titles').addClass('state_4');
                break;

          case scrolled >= 1040 && scrolled < 1080:
                $('#titles').removeAttr('class');
                $('#titles').addClass('state_5');
                $('#fixed_titles').removeAttr('class');
                $('#fixed_titles').addClass('state_5');
                break;

          case scrolled >= 1080:
                $('#titles').removeAttr('class');
                $('#titles').addClass('state_6');
                $('#fixed_titles').removeAttr('class');
                $('#fixed_titles').addClass('state_6');
                break;

          default:
                $('#titles').removeAttr('class');
                $('#fixed_titles').removeAttr('class');
                break;
    }


".projects__list_name").hover(function(){
    if ($('#works_container').hasClass('done')) {
          $('#projects__list').addClass('white__lines');
          $(this).find('.project_link').addClass('show');
          var videoID = $(this).data('video');
          $('#' + videoID).addClass('play');
          $('#works_container').addClass('video_played');
    }
 function(){
    $('.video_wrapper').removeClass('play');
    $('#works_container').removeClass('video_played');
    $('#projects__list').removeClass('white__lines');
    $('.project_link').removeClass('show');
;
document).ready(function(){
    var preloaderPromise = new Promise(functionresolve, reject) {
          setTimeout(functin() {
                if ($('html, body').scrollTop() !== 0) {
                      window.scrollTo(0, 0);
                      $('*').removeClass('visible');
                      $('*').removeClass('loaded');
                      $('#preload').addClass('hidden');
                      $('.main-navigation__item').removeClass('active');
                      $('#intro').addClass('active');
                      resolve();
                } else {
                      $('#preload').addClass('hidden');
                      resolve();
                }
          }, 1000);
    });
    preloaderPromise.then(function) {
          $('#main').addClass('loaded');
          $('body').removeClass('loader');
          $('#preload').css('visibility', 'hidden');
    });
    $('.main-navigation__item').on('click', functionevent) {
          event.preventDefault();
          scrollingInProgress = true;
          console.log('scrollingInProgress');
          console.log(scrollingInProgress);
          var type = $(event.target).attr('id'); // if(type === 'contacts') {
          //     contactAnimation()
          // }

          $('.main-navigation__item').removeClass('active');
          $('#main').removeClass('loaded');
          $('body').addClass('loader');
          setTimeout(functin() {
                $('#preload').removeAttr('style');
                $('#preload').removeClass('hidden');
                $('#main_bg').removeClass('show_bg');
          }, 500);
          setTimeout(functin() {
                $('#section_4').removeClass('loaded');
                toggleMenu(false);
                $('html, body').animate({
                      scrollTop: $('#' + $(event.target).data('anchor')).offset().top
                }, 1, funcion() {
                      if ($(window).scrollTop() > 800) {
                            animateCircle($(window).scrollTop());
                            animateText($(window).scrollTop());
                            $('#titles').removeAttr('class');
                            $('#fixed_titles').removeAttr('class');
                            $('#main_bg').removeClass('show_bg');
                            $('.header').css('z-index', '99999');
                            $('#circle').removeAttr('class');
                            $('#circle').addClass('state_14');
                            $('#titles').addClass('loaded');
                            $('#fixed_titles').addClass('loaded');
                            $('#home').addClass('cursor__item');
                            restartIntro();
                      } else {
                            if (type !== 'contacts') {
                                  restartAbout();
                            }
                      }

                      scrollingMain();
                      setTimeout(fuction() {
                            toggleMenu(false);
                            $('#preload').addClass('hidden');
                            $('#' + type).addClass('active');
                            $('#main').addClass('loaded');
                            $('#preload').css('visibility', 'hidden');
                            programmic = false;

                            if ($(window).width() <= 1024) {
                                  return false;
                            }

                            setTimeout(unction() {
                                  switch (type) {
                                        case 'works':
                                              worksAnimation();
                                              break;

                                        case 'about':
                                              aboutAnimation();
                                              break;

                                        case 'contacts':
                                              contactAnimation();
                                              bottomAnimation();
                                              break;

                                        default:
                                              scrollingInProgress = false;
                                              $('body').removeClass('loader');
                                              return false;
                                  }
                            }, 3000);
                      }, 1000);
                });
          }, 1500);
    });
    $('.scrollDown').on('click', function) {
          $('html, body').animate({
                scrollTop: $(window).scrollTop() + 300
          }, 300);
    });
    $('.gamburger').on('click', function) {
          toggleMenu(true);
    });
    $('.close__menu').on('click', function) {
          toggleMenu(false);
    });

    function toggleMenu(bool) {
          if (bool) {
                $('.mobile__menu').addClass('open');
                $('.mobile__menu .main-navigation__item').addClass('open');
                $('.mobile__menu .mobile__social_item').addClass('open');
          } else {
                $('.mobile__menu .main-navigation__item').addClass('close');
                $('.mobile__menu .mobile__social_item').addClass('close');
                setTimeout(funcion() {
                      $('.mobile__menu').removeClass('open');
                      $('.mobile__menu .main-navigation__item').removeClass('open').removeClass('close');
                      $('.mobile__menu .mobile__social_item').removeClass('open').removeClass('close');
                }, 2000);
          }
    }

    $('body').on('click', functionevent) {
          if ($(event.target).hasClass('reload')) {
                // window.location.reload()
                $('#intro').trigger('click');
          }
    });
    $('.popup_item').on('click', functionevent) {
          event.preventDefault();
          $('#video-popup').css({
                'display': 'flex'
          });
          $('body').addClass('loader');
          $('body').addClass('video-loader');
          $('body').addClass('cross');
          $('#video-popup .modal_video').trigger('play');
    });
    $('.popup_window').on('click', function) {
          $('#video-popup .modal_video').trigger('pause');
          $('#video-popup').hide();
          $('body').removeClass('loader');
          $('body').removeClass('video-loader');
          $('body').removeClass('cross');
    });
    $(document).mousemove(functione) {
          if ($(e.target).hasClass('cursor__item')) {
                $('#cursors').addClass('big');
          } else {
                $('#cursors').removeClass('big');
          }

          if ($(e.target).hasClass('cross')) {
                $('#cursors').addClass('cross');
          } else {
                $('#cursors').removeClass('cross');
          }

          $('.cursor').css({
                'position': 'fixed',
                'left': e.clientX - 5,
                'top': e.clientY - 5
          });
    });
    $('#cursors').appendTo('body');
    $('.horn_wrapper').on('click', function) {
          if (!$('#raphael').hasClass('clicked')) {
                letsGo();
          } else {
                newAnimation = true;
                smiles = [];
                canvas = document.getElementById("canvas");
                ctx = canvas.getContext("2d");
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                $('#raphael').empty();
          }
    });
;

nction letsGo() {
    var width = $(window).width();
    var height = $(window).height();
    var canvas = '<canvas id="canvas" height="' + height + '" width="' + width + '">Get a better browser!</canvas>';
    $('#raphael').addClass('clicked');
    $('#raphael').empty();
    $('#raphael').append(canvas);
    var width = $('#canvas').width();
    var height = $('#canvas').height();
    var canvas = ctx = false;
    var frameRate = 1 / 40; // Seconds

    var frameDelay = frameRate * 1000; // ms

    var loopTimer = false;
    var angle = 1;
    /*
     * Experiment with values of mass, radius, restitution,
     * gravity (ag), and density (rho)!
     *
     * Changing the constants literally changes the environment
     * the ball is in.
     *
     * Some settings to try:
     * the moon: ag = 1.6
     * water: rho = 1000, mass 5
     * beach ball: mass 0.05, radius 30
     * lead ball: mass 10, restitution -0.05
     */

    var ball = {
          position: {
                x: width / 2,
                y: height
          },
          velocity: {
                x: 1,
                y: 30
          },
          mass: 0.1,
          //kg
          radius: 13,
          // 1px = 1cm
          restitution: -0.7
    };
    var animatedSmiles = [];
    var second = false;
    var Cd = 0.47; // Dimensionless

    var rho = 1.22; // kg / m^3

    var A = Math.PI * ball.radius * ball.radius / 10000; // m^2

    var ag = 9.81; // m / s^2

    var mouse = {
          x: 0,
          y: height,
          isDown: false
    };

    var setup = function) {
          canvas = document.getElementById("canvas");
          ctx = canvas.getContext("2d");
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.clearRect(0, 0, canvas.width, canvas.height); // ctx.clearRect(0,0,width,height);

          var smiles = [{
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 20,
                      y: 70
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_1"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 15,
                      y: 50
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_2"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 30,
                      y: 100
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_3"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 40,
                      y: 85
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_4"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 15,
                      y: 57
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_5"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 36,
                      y: 55
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_6"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 15,
                      y: 60
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_1"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 25,
                      y: 30
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_2"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 3,
                      y: 85
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_3"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 14,
                      y: 65
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_4"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 25,
                      y: 27
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_5"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 16,
                      y: 53
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_6"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 23,
                      y: 48
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_1"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 28,
                      y: 52
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_2"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 34,
                      y: 68
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_3"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 4,
                      y: 54
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_4"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 5,
                      y: 45
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_5"
          }, {
                position: {
                      x: 100,
                      y: height - 150
                },
                velocity: {
                      x: 6,
                      y: 63
                },
                mass: 0.1,
                //kg
                radius: 23,
                // 1px = 1cm
                restitution: -0.7,
                url: "icon_6"
          }];
          ctx.fillStyle = 'red';
          ctx.strokeStyle = '#000000';
          loopTimer = setInterval(functin() {
                ctx.clearRect(0, 0, width, height);
                animatedSmiles = [];

                for (var i = 0; i < smiles.length; i++) {
                      if (newAnimation) {
                            console.log('hello');
                            smiles = [];
                            clearInterval(loopTimer);
                            newAnimation = false;
                            letsGo();
                            break;
                      }

                      loop(smiles[i]);
                }
          }, frameDelay);
    };

    var TO_RADIANS = Math.PI / 180;

    function rotateAndPaintImage(context, image, angleInRad, positionX, positionY, axisX, axisY) {
          context.translate(positionX, positionY);
          context.rotate(angleInRad);
          context.drawImage(image, axisX, axisY);
          context.rotate(-angleInRad);
          context.translate(-positionX, -positionY);
    }

    var loop = functionball) {
          if (!mouse.isDown) {
                // Do physics
                // Drag force: Fd = -1/2 * Cd * A * rho * v * v
                var Fx = -0.5 * Cd * A * rho * ball.velocity.x * ball.velocity.x * ball.velocity.x / Math.abs(ball.velocity.x);
                var Fy = -0.5 * Cd * A * rho * ball.velocity.y * ball.velocity.y * ball.velocity.y / Math.abs(ball.velocity.y);
                Fx = isNaN(Fx) ? 0 : Fx;
                Fy = isNaN(Fy) ? 0 : Fy; // Calculate acceleration ( F = ma )

                var ax = Fx / ball.mass;
                var ay = ag + Fy / ball.mass; // Integrate to get velocity

                ball.velocity.x += ax * frameRate;
                ball.velocity.y += ay * frameRate; // Integrate to get position

                ball.position.x += ball.velocity.x * frameRate * 100;
                ball.position.y += ball.velocity.y * frameRate * 100;
          } // Handle collisions


          if (ball.position.y > height - ball.radius) {
                ball.velocity.y *= ball.restitution;
                ball.position.y = height - ball.radius;
          }

          if (ball.position.x > width - ball.radius) {
                ball.velocity.x *= ball.restitution;
                ball.position.x = width - ball.radius;
          }

          if (ball.position.x < ball.radius) {
                ball.velocity.x *= ball.restitution;
                ball.position.x = ball.radius;
          } // Draw the ball
          // ctx.save();
          // angle = ++angle


          console.log('ball.url ' + ball.url + 'ball.position.x ' + ball.position.x);
          ctx.drawImage(document.getElementById(ball.url), ball.position.x, ball.position.y - ball.radius, 46, 46); // rotateAndPaintImage(ctx, document.getElementById(ball.url), angle, ball.position.x, ball.position.y - ball.radius, 0, 0)
          // ctx.restore();
    };

    setup();
