$(function () {

    $.atp = {};
    $.atpfrm = {};
    $.atpfrm.xhr = false;
    $.atpfrm.request = function (_type, _url, _data, _beforeSend, _success) {
        if ($.atpfrm.xhr != false) {
            $.atpfrm.xhr.abort();
        }
        $.atpfrm.xhr = $.ajax({
            type: _type,
            url: _url,
            data: _data,
            beforeSend: function () {
                console.log('Processing...');
            },
            success: function (data) {
                $.atpfrm.xhr = false;
                _success(data);
            }
        });
    }

    var
        emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        checkEmailFormat = function (emalString) {
            return emailRegex.test(emalString);
        },
        subscribe = function (email, otherElements) {
            if (checkEmailFormat(email)) {
                /* provision for other form elements for serialization */
                var dataParam = {email: email};
                if(otherElements.length > 1){
                    dataParam = {email: email, formElements:otherElements};
                }
                /* provision for other form elements for serialization */
                $.ajax({
                    type: 'POST',
                    url: 'php/sendnewsreply.php',
                    data: dataParam,
                    success: function (data, textStatus, jqXHR) {
                        subscribeModal.modal('hide');
                        thankYouModal.modal('show');
                        console.log(data, textStatus);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        subscribeModal.modal('hide');
                        console.log(textStatus, errorThrown);
                        alert('Failed to subscribe.');
                    }
                });
            }
        }
        ;

    var
        btnNewsLetter = $('#btnSubscribe'),
        txtNewsLetterEmail = $('#txtNewsLetterEmail'),
        btnModalSignUp = $('#btnModalSignUp'),
        txtModalSignUp = $('#txtModalSignUp'),
        subscribeModal = $('#subscribe'),
        thankYouModal = $('#thankyou')
        ;

    btnNewsLetter.on('click', function () {
        subscribe(txtNewsLetterEmail.val(), '');
    });

    btnModalSignUp.on('click', function () {
        var tmpJson = $('#modalsignupfrm').serialize();
        subscribe(txtModalSignUp.val(), tmpJson);
    });

});