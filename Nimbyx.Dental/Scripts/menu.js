$(function () {

    console.log('Last update: 12-31-2015');

    var
        white_container = $('#white_container'),
        logo_holder = white_container.find('#logo_holder'),
        hamburger = white_container.find('#hamburger'),
        menuModal = $('#menuModal')
        ;

    var
        checkScrollPosition = function () {
            if ($(window).scrollTop() < 50) {
                white_container.addClass('scroll_top');
            } else {
                white_container.removeClass('scroll_top');
            }
        }
        ;

    hamburger.on('click', function () {
        $(this).toggleClass('open');
    });

    menuModal.on('show.bs.modal', function () {
        logo_holder.removeClass('show_blue');
        white_container.addClass('top_most');
    });

    menuModal.on('hide.bs.modal', function () {
        logo_holder.addClass('show_blue');
        white_container.removeClass('top_most');
        hamburger.removeClass('open');
    });

    $(window).scroll(function () {
        checkScrollPosition();
    });

    checkScrollPosition();

});