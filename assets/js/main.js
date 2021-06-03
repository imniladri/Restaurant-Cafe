/*
-----------------------------------------------------------------------
Restora - Restaurant & Cafe
-----------------------------------------------------------------------
*/

(function($) {

    "use strict";

    var bodySelector = $("body"),
        htmlAndBody = $("html, body"),
        windowSelector = $(window);
    $.fn.hasAttr = function(attr) {
        if (typeof attr !== typeof undefined && attr !== false && attr !== undefined) {
            return true;
        }
        return false;
    };

    /*-------------------------------------------------*/
    /* BACKGROUND IMAGE
    /*-------------------------------------------------*/
    var background_image = function() {
        $("[data-bg-img]").each(function() {
            var attr = $(this).attr('data-bg-img');
            if (typeof attr !== typeof undefined && attr !== false && attr !== "") {
                $(this).css('background-image', 'url(' + attr + ')');
            }
        });
    };

    /*-------------------------------------------------*/
    /* PRELOADER
    /*-------------------------------------------------*/
    var preloader = function() {
        var pageLoader = $('#preloader');
        if (pageLoader.length) {
            pageLoader.children().fadeOut();
            pageLoader.delay(150).fadeOut('slow');
            bodySelector.delay(150).removeClass('preloader-active');
        }
    };

    /*-------------------------------------------------*/
    /* NAVBAR TOGGLE
    /*-------------------------------------------------*/
    $(document).ready(function(){
        $(".hamburger").click(function(){
            $(".hamburger--emphatic").toggleClass("is-active");
        });
    });

    /*-------------------------------------------------*/
    /* MAGNIFIC POPUP
    /*-------------------------------------------------*/
    var magnific_popup = function() {
        $('.img-lightbox').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            }

        });
        $('.iframe-lightbox').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            iframe: {
                patterns: {
                    youtube: {
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1' /* URL that will be set as a source for iframe. */
                    },
                    vimeo: {
                        src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: 'https://maps.google.'
                    }
                }
            }
        });
    };

    /*-------------------------------------------------*/
    /* HEADER NAVBAR
    /*-------------------------------------------------*/
    var navbar = function() {
        var navbarCollapse = $(".navbar-collapse"),
            navbarHeader = $(".navbar-header");
        windowSelector.on('resize', function() {
            navbarCollapse.css({ maxHeight: $(window).height() - navbarHeader.height() + "px" });
        });
        navbarCollapse.find('a.page-scroll').on('click', function() {
            $('.navbar-toggle:visible').click();
        });
        $('a.page-scroll').on('click', function(event) {
            var $anchor = $(this);
            htmlAndBody.stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 70
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        $(".navbar-bars").on("click", function() {
            $(this).toggleClass("is-active");
        });
    };
    var scroll_spy = function() {
        bodySelector.scrollspy({
            target: '.navbar-default',
            offset: 100
        });
    };

    /*-------------------------------------------------*/
    /* OWL CAROUSEL
    /*-------------------------------------------------*/
    var owlCarousel = function() {
        $('.owl-carousel').each(function() {
            var carousel = $(this),
                autoplay_hover_pause = carousel.data('autoplay-hover-pause'),
                loop = carousel.data('loop'),
                items_general = carousel.data('items'),
                margin = carousel.data('margin'),
                autoplay = carousel.data('autoplay'),
                autoplayTimeout = carousel.data('autoplay-timeout'),
                smartSpeed = carousel.data('smart-speed'),
                nav_general = carousel.data('nav'),
                navSpeed = carousel.data('nav-speed'),
                xxs_items = carousel.data('xxs-items'),
                xxs_nav = carousel.data('xxs-nav'),
                xs_items = carousel.data('xs-items'),
                xs_nav = carousel.data('xs-nav'),
                sm_items = carousel.data('sm-items'),
                sm_nav = carousel.data('sm-nav'),
                md_items = carousel.data('md-items'),
                md_nav = carousel.data('md-nav'),
                lg_items = carousel.data('lg-items'),
                lg_nav = carousel.data('lg-nav'),
                center = carousel.data('center'),
                dots_global = carousel.data('dots'),
                xxs_dots = carousel.data('xxs-dots'),
                xs_dots = carousel.data('xs-dots'),
                sm_dots = carousel.data('sm-dots'),
                md_dots = carousel.data('md-dots'),
                lg_dots = carousel.data('lg-dots');
            if ($('.owl-carousel').children().length > 1) {
                carousel.owlCarousel({
                    autoplayHoverPause: autoplay_hover_pause,
                    loop: (loop ? loop : false),
                    items: (items_general ? items_general : 1),
                    lazyLoad: true,
                    margin: (margin ? margin : 0),
                    autoplay: (autoplay ? autoplay : false),
                    autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
                    smartSpeed: (smartSpeed ? smartSpeed : 250),
                    dots: (dots_global ? dots_global : false),
                    nav: (nav_general ? nav_general : false),
                    navText: [
                        "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>",
                        "<i class='fa fa-long-arrow-right' aria-hidden='true'></i>"
                    ],
                    navSpeed: (navSpeed ? navSpeed : false),
                    center: (center ? center : false),
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: (xxs_items ? xxs_items : (items_general ? items_general : 1)),
                            nav: (xxs_nav ? xxs_nav : (nav_general ? nav_general : false)),
                            dots: (xxs_dots ? xxs_dots : (dots_global ? dots_global : false))
                        },
                        480: {
                            items: (xs_items ? xs_items : (items_general ? items_general : 1)),
                            nav: (xs_nav ? xs_nav : (nav_general ? nav_general : false)),
                            dots: (xs_dots ? xs_dots : (dots_global ? dots_global : false))
                        },
                        768: {
                            items: (sm_items ? sm_items : (items_general ? items_general : 1)),
                            nav: (sm_nav ? sm_nav : (nav_general ? nav_general : false)),
                            dots: (sm_dots ? sm_dots : (dots_global ? dots_global : false))
                        },
                        992: {
                            items: (md_items ? md_items : (items_general ? items_general : 1)),
                            nav: (md_nav ? md_nav : (nav_general ? nav_general : false)),
                            dots: (md_dots ? md_dots : (dots_global ? dots_global : false))
                        },
                        1199: {
                            items: (lg_items ? lg_items : (items_general ? items_general : 1)),
                            nav: (lg_nav ? lg_nav : (nav_general ? nav_general : false)),
                            dots: (lg_dots ? lg_dots : (dots_global ? dots_global : false))
                        }
                    }
                });
            }

        });
    };

    /*-------------------------------------------------*/
    /* GOOGLE MAP
    /*-------------------------------------------------*/
    var gmap = function() {
        if ($('.gmap').length) {
            var i = 0;
            $('.gmap').each(function() {
                i++;
                var self = $(this).attr("id", "gmap" + i),
                    mapDiv = "#gmap" + i,
                    mapLat = self.data('lat'),
                    mapLng = self.data('lng'),
                    mapZoom = self.data('zoom'),
                    map = new GMaps({
                        div: mapDiv,
                        lat: mapLat,
                        lng: mapLng,
                        zoom: mapZoom,
                        enableNewStyle: true,
                        scrollwheel: false
                    });
                map.addMarker({
                    lat: map.getCenter().lat(),
                    lng: map.getCenter().lng(),
                    title: 'Our Location',
                    infoWindow: {
                        content: '<h4>Our Location</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>'
                    }
                });
            });
        }
    };

    /*-------------------------------------------------*/
    /* CONTACT FORM JS
    /*-------------------------------------------------*/
    var validateEmail = function(email) {
        var patt = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if (patt.test(email) === true) {
            return true;
        }
        return false;
    };
    var bootstrapAlert = function(type, text) {
        var alert = '<div class="alert alert-' + type + ' alert-dismissable">';
        alert += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
        alert += text;
        alert += '</div>';
        return alert;
    };
    var contactResponse = function(responseNode, type, response) {
        if (response !== '') {
            responseNode.html(bootstrapAlert(type, response));
        } else {
            responseNode.html(bootstrapAlert('danger', 'Oops! An error occured.'));
        }
        bootstrapAlert();
    };
    var contactForm = function() {
        var contactForm = $("#contactForm");
        var responseNode = $('#contactResponse');
        contactForm.on("submit", function(e) {
            e.preventDefault();

            var self = $(this);
            var valid_form = true;
            var name = contactForm.find($("input[name='contactName']"));
            var email = contactForm.find($("input[name='contactEmail']"));
            var phone = contactForm.find($("input[name='contactPhone']"));
            var message = contactForm.find($("textarea[name='contactMessage']"));
            var formFields = [name, message, phone];

            formFields.forEach(function(input) {
                if (input.val() === '') {
                    input.addClass('input-error');
                    valid_form = false;
                }
            });

            if (email.val() === '' || validateEmail(email.val()) !== true) {
                email.addClass('input-error');
                valid_form = false;
            }

            self.find('input, textarea, select').on('change', function() {
                $(this).removeClass('input-error');
            });

            if (valid_form === true) {
                $.ajax({
                        type: "POST",
                        url: contactForm.attr('action'),
                        data: self.serialize()
                    })
                    .done(function(response) {
                        self[0].reset();
                        console.log(response);
                        contactResponse(responseNode, "success", response);
                    })
                    .fail(function(data) {
                        contactResponse(responseNode, "danger", data.responseText);
                    });
            }

        });
    };

    /*-------------------------------------------------*/
    /* RESERVATION FORM JS
    /*-------------------------------------------------*/
    var reservationForm = function() {
        var reservationForm = $("#reservationForm");
        var responseNode = $('#reservationResponse');
        reservationForm.on("submit", function(e) {
            e.preventDefault();

            var self = $(this);
            var valid_form = true;
            var name = reservationForm.find($("input[name='reservationName']"));
            var phone = reservationForm.find($("input[name='reservationPhone']"));
            var email = reservationForm.find($("input[name='reservationEmail']"));
            var date = reservationForm.find($("input[name='reservationDate']"));
            var time = reservationForm.find($("input[name='reservationTime']"));
            var guests = reservationForm.find($("input[name='reservationGuests']"));
            var formFields = [name, phone, email, date, time, guests];

            formFields.forEach(function(input) {
                if (input.val() === '') {
                    input.addClass('input-error');
                    valid_form = false;
                }
            });

            if (email.val() === '') {
                email.addClass('input-error');
                valid_form = false;
            }

            self.find('input, textarea, select').on('change', function() {
                $(this).removeClass('input-error');
            });

            if (valid_form === true) {
                $.ajax({
                        type: "POST",
                        url: contactForm.attr('action'),
                        data: self.serialize()
                    })
                    .done(function(response) {
                        self[0].reset();
                        console.log(response);
                        contactResponse(responseNode, "success", response);
                    })
                    .fail(function(data) {
                        contactResponse(responseNode, "danger", data.responseText);
                    });
            }

        });
    };

    var funFact = function() {
        $('.counter').counterUp({
            delay: 5,
            time: 3000
        });
    }


    $(document).on('ready', function() {
        preloader();
        background_image();
        navbar();
        owlCarousel();
        contactForm();
        reservationForm();
        magnific_popup();
        funFact();
        gmap();
    });

    windowSelector.on('load', function() {
        preloader();
    });

})(jQuery);