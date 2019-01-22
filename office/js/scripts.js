$().ready(function () {
    $('.invest_package_info span').on('click', function (e) {
        if ($(this).hasClass('opened')){
            $(this).next('ul').slideUp('slow');
            $(this).removeClass('opened');
        } else {
            $('.invest_package_info span').removeClass('opened');
            $('.invest_package_info ul').slideUp(1000, 'linear');
            $(this).next('ul').slideDown(200);
            $(this).addClass('opened');
        }
    });

    $('.header_branding__user').on('click', function () {
        $('html').toggleClass('open_user_js');
        $('html').removeClass('open_menu_js');
    });
    $('.header_branding__burger').on('click', function () {
       $('html').toggleClass('open_menu_js');
        $('html').removeClass('open_user_js');

    });
    $('._overlay').on('click', function (e) {
        $('html').removeClass('open_menu_js');
        $('html').removeClass('open_user_js');
    });
    $(window).on('scroll', function () {
        $('html').removeClass('open_menu_js');
        $('html').removeClass('open_user_js');
    });

    $('.pay_system').on('click', function () {
        $('.pay_system').removeClass('pay_system__chosen');
        $(this).addClass('pay_system__chosen');
    })
});