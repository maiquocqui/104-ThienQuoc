$(document).ready(function() {
    // header script
    if ($(window).width() < 1200) {
        $('.header-tool').insertAfter('.menu-wrap');
        $('.search').insertAfter('.menu');
    }

    $('.btn-showmenu').click(function() {
        $('.menu').toggleClass('open');
        $('.overlay').fadeToggle(500);
    });
    $('.overlay').click(function() {
        $('.menu').removeClass('open');
        $(this).fadeOut(500);
    });

    // header scroll event
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });

    // banner
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000
    });

    // product slick
    $('.product-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.product-slick-wide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    // news slick
    $('.news-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        speed: 1000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    // store slick
    $('.store-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false,
        centerPadding: '200px',
        infinite: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    centerPadding: '150px',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '70px',
                }
            }
        ]
    });

    // project slide
    var $status = $('.slide-pagination');

    $('.project-slide').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $('.project-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.project-nav',
    });

    $('.project-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.project-slide',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }
        ]
    });

    // project slick
    $('.project-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    // product slide
    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.product-nav',
    });

    $('.product-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        vertical: true,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Responsive tabs
    $('#responsivetabs').responsiveTabs({
        startCollapsed: 'accordion',
        animation: 'slide'
    });

    // career script
    $('.job .job-title').click(function() {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active')
            $(this).parent().find('.job-content').slideUp(500);
        } else {
            $('.job').removeClass('active');
            $('.job').find('.job-content').slideUp(500);
            $(this).parent().addClass('active')
            $(this).parent().find('.job-content').slideDown(500);
        }
    });

});