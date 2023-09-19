$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._ani_').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });

    $('.btn_ham').on('click', function () {
        $('.gnb').toggleClass('on');
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this)
                .next()
                .stop()
                .slideToggle()
                .parent()
                .siblings()
                .find('.sub')
                .stop()
                .slideUp();
        }
    });

    const MainSlide = new Swiper('.main_slide', {
        loop: true,
        parallax: true,
        effect: "fade",
        speed: 1600,
        pagination: "true",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.main_vi .dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }
    });

    $('.main_vi .dots li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        MainSlide.slideTo(idx);
    });

    $('.main_vi .arrows .left').on('click', function () {
        MainSlide.slidePrev();
    });
    $('.main_vi .arrows .right').on('click', function () {
        MainSlide.slideNext();
    });

    const BrandSlide = new Swiper('.brand_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
        pagination: "true",
        on: {
            slideChangeTransitionStart: function () {
                $('.main_br .dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }
    });

    $('.main_br .dots li').on('click', function () {
        const bidx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        BrandSlide.slideTo(bidx);
    });

    $('.main_br .arrows .left').on('click', function () {
        BrandSlide.slidePrev();
    });
    $('.main_br .arrows .right').on('click', function () {
        BrandSlide.slideNext();
    });

    $('.tab_list li').on('click', function (event) {
        event.preventDefault();

        let idx = $(this).index();
        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.pro_con .con').eq(idx).addClass('on')
            .siblings().removeClass('on');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.to_top').fadeIn(50);
        } else {
            $('.to_top').fadeOut(50);
        }
    });

    $('.compani_site span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.sub').removeAttr('style');
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });

    $('.header_wrap').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });

    $('.btn_ham').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });
});