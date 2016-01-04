$.atp = {};
$.atpfrm = {};
$.atpfrm.xhr = false;
$.atpfrm.request = function ( _type, _url, _data, _beforeSend, _success ) {
    if ( $.atpfrm.xhr != false ) {
        $.atpfrm.xhr.abort();
    }
    $.atpfrm.xhr = $.ajax( {
        type: _type,
        url: _url,
        data: _data,
        beforeSend: function(){},
        success: function ( data ) {
            $.atpfrm.xhr = false;
            _success( data );
        }
    });
}
function validatebottom(e){
    var email = document.getElementById('email').value;
    var emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailtest.test(email);
}
function validatemodal(e){
    var email = document.getElementById('modalemail').value;
    var emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailtest.test(email);
}

$(document).ready( function () {
    $('.modal-backdrop, #nav-modal, .mainnav_hamburger').click(function(){
        if ( $('.mainnav_hamburger').hasClass("nav-open") ) {
            $('.mainnav_hamburger').removeClass('nav-open');
            $('.mainnav_br-logo > img').attr("src", "images/logo-nimbyx.png");
            $('.mainnav').css('background', 'rgba(255,255,255,' + 0.8 + ')');
        }else{
            $('.mainnav_hamburger').addClass('nav-open');
            $('.mainnav_br-logo > img').attr("src", "images/logo-nimbyx-white.png");
            $('.mainnav').css('background', 'rgba(255,255,255,' + 0 + ')');
        }
    });
    var scroll_transparency = false;
    $(window).scroll(function() {
        if ($(window).scrollTop() == 0) {
            scroll_transparency = false;
            // $('.mainnav').fadeTo( "fast", 1 );
            $('.mainnav').css('background', 'rgba(255,255,255,' + 0 + ')');
        }else{
            if (scroll_transparency == false){
                // $('.mainnav').fadeTo( "fast", .5 );
                $('.mainnav').css('background', 'rgba(255,255,255,' + 0.8 + ')');
                scroll_transparency = true;
            }
        }
    });

    $('#email').val = "";

    $('#open-form').click(function(){
        $('.modal').css('z-index', 9999);
        $('#subscribe').modal('show');
    });
    $('#subscribe').on('hidden.bs.modal', function () {
        $('.mainnav_hamburger').removeClass('nav-open');
        $('.mainnav_br-logo > img').attr("src", "images/logo-nimbyx.png");
        $('.mainnav').css('background', 'rgba(255,255,255,' + 0.8 + ')');
    });
    $('#subscribe').on('shown.bs.modal', function () {
        $('.mainnav').css('background', 'rgba(255,255,255,' + 0 + ')');
    });
    $('#thankyou').on('hidden.bs.modal', function () {
        $('.mainnav_hamburger').removeClass('nav-open');
        $('.mainnav_br-logo > img').attr("src", "images/logo-nimbyx.png");
        $('.mainnav').css('background', 'rgba(255,255,255,' + 0.8 + ')');
    });
    $('#thankyou').on('shown.bs.modal', function () {
        $('.mainnav').css('background', 'rgba(255,255,255,' + 0 + ')');
        $('.modal').css('z-index', 9999);
    });

    $('#btn-subscribemodal').click(function(){
        if(validatemodal()){
            $.atpfrm.request(
            'POST',
            'php/sendnewsreply.php',
            $('#subscribemodal').serialize(),
            function () { console.log('processing');},
            function (retval) {
                $('.modal').modal('hide');
                $('#thankyou').modal('show');
                $('#open-form').hide();
                $('#subscribebottom').hide();
            });
        }
    });
    $('#btn-subscribebottom').click(function(){
        if(validatebottom()){
            $.atpfrm.request(
            'POST',
            'php/sendnewsreply.php',
            $('#subscribebottom').serialize(),
            function () { console.log('processing');},
            function (retval) {
                $('#thankyou').modal('show');
                $('#subscribebottom').hide();
                $('#open-form').hide();
            });
        }
    });
});
 