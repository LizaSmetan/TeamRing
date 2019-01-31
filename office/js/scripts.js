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
    $('.header_menu nav > ul > li').on('click', function () {
        $(this).toggleClass('opened_mobile');
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
    });

    $('select').select2({
        dropdownParent: $('#token_dropdown_js')
    });

    $('#token_select_js').on('change', function (e) {
        $('#token_value_js').text(($('#token_wallet_js').text() * $(this).val()).toFixed(2));
    });
    function copy(input){
        input.focus();
        input.setSelectionRange(0, 999999999);
        document.execCommand('copy');
    }
    $('.referal_links li a').on('touchmove touchend touchstart click', function (e) {
        var input = ($(this).prev('input'))[0];
        var tooltip = $(this).find('.referal_links__tooltip');
        try{
            copy(input);
            tooltip.text("Ссылка скопирована");
            tooltip.addClass("_show_tooltip");
            setTimeout(function(){
                tooltip.removeClass("_show_tooltip");
            }, 1500);
        }catch(e){
            tooltip.text("Ошибка копирования ссылки");
            tooltip.addClass("_show_tooltip");
            setTimeout(function(){
                tooltip.removeClass("_show_tooltip");
            }, 1500);
        }
    });
    $('.referal_links li a').on('mouseout', function () {
        $(this).find('.referal_links__tooltip').removeClass("_show_tooltip");
    });
    $('.scrollbar-inner').scrollbar();
});