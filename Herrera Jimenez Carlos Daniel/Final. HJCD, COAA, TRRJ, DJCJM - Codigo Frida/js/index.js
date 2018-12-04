$(document).ready(function () {
    $.getScript('js/session.js', function() {
        checkCurrentSession(function(response) {
            // If response.data is not null, that means that there
            // is an ongoing session, so redirect to the course.html page
            if (response.data !== null)
                window.open('course.html', '_self');
        });
    });

    // Materialize select initialization
    $('select').formSelect();

    // Materialize modal initialization
    $('.modal').modal({
        dismissible: false,
        startingTop: '30%',
        endingTop: '30%'
    });

    // Hides all login / registration form-divs
    $('.hide-on-load').hide();
});

// -TODO-: Finish this
// Logs in user account and redirects to course.html
function login() {
    let email = $('#sign-in-email').val().trim();
    let password = $('#sign-in-password').val().trim();

    $.post('php/login.php', {
        email: email,
        password: password
    },
    function(response) {
        if (!response.status) {
            // If response.data is null, that means that the email, password
            // or both were incorrect, so we check that response.data should be
            // not-null and, if so, redirect to the course.html page
            if (response.data !== null) {
                // By the moment, only fridas can login, so if the type
                // of the user is MENTOR, display a message indicating that
                // else, redirect to the course page.
                if (response.data.type === "FRIDA")
                    window.open('course.html', '_self');
                else
                    $('#mentor-login-error').modal('open');
            } else {
                $('#login-error-message').removeClass('hide');
            }
        } else {
            // alert('ERROR LRPM!');
        }
    }, 'json');
}

// Registers user in database and shows confirmation modal
function register() {
    let email = $('#sign-up-email').val().trim();
    let password = $('#sign-up-password').val().trim();
    let type, name, lastName, birthdate, phone, institution, genre, area;

    if ($('#radio-frida').prop('checked')) {
        type = $('#radio-frida').val();
        name = $('#frida-name').val().trim();
        lastName = $('#frida-last-name').val().trim();
        birthdate = moment($('#frida-birthday').val(), 'MMM DD, YYYY').format('YYYY-MM-DD');
        phone = $('#frida-cellphone-number').val().trim();
        institution = $('#frida-provenance').val().trim();
        genre = "FEMALE";
        area = "NONE";
    } else if ($('#radio-mentor').prop('checked')) {
        type = $('#radio-mentor').val();
        name = $('#mentor-name').val().trim();
        lastName = $('#mentor-last-name').val().trim();
        birthdate = moment($('#mentor-birthday').val(), 'MMM DD, YYYY').format('YYYY-MM-DD');
        phone = $('#mentor-cellphone-number').val().trim();
        institution = $('#mentor-provenance').val().trim();
        genre = $('#mentor-genre').val();
        area = $('#mentor-area').val();
    } else {
        return false;
    }

    $.post('php/sign_up.php', {
        email: email,
        password: password,
        type: type,
        name: name, 
        last_name: lastName,
        birthdate: birthdate,
        genre: genre,
        institution: institution,
        phone: phone,
        area: area
    },
    function(response) {
        if (!response.status)
            $('#registration-confirmation').modal('open');
        else
            $('#registration-failed').modal('open');
    }, 'json');

    return true;
}

// Shows login form only
function showLoginForm() {
    $('#basic-registration-form').hide();
    $('#frida-registration-form').hide();
    $('#mentor-registration-form').hide();
    $('#login-form').show();
}

// Shows basic registration form only
function showBasicRegistrationForm() {
    $('#login-form').hide();
    $('#frida-registration-form').hide();
    $('#mentor-registration-form').hide();
    $('#basic-registration-form').show();
}

// Shows user registration form only
function showUserRegistrationForm() {
    $('#basic-registration-form').hide();
    if ($('#radio-frida').is(':checked')) {
        $('#frida-registration-form').show();
    } else {
        $('#mentor-registration-form').show();
    }
}