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
    $('.header_branding__burger').on('click', function () {
       $('html').toggleClass('open_menu_js');
    });
});