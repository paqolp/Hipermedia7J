$(document).ready(function () {
    $.getScript('js/session.js', function() {
        checkCurrentSession(function(response) {
            // There is no current session ongoing on this computer
            // return to the index.html page
            if (response.data === null) {
                window.open('index.html', '_self');
            } else {
                // Materialize tooltip initialization
                $('.tooltipped').tooltip({
                    position: 'top',
                    enterDelay: 0,
                    exitDelay: 0,
                    margin: 125
                });

                // Materialize modal initialization
                $('.modal').modal({
                    startingTop: '15%',
                    endingTop: '15%'
                });

                // Set a handler for the logout button
                $('.logout').click(function() {
                    closeSession(function(response) {});
                });

                // Load the basic user info
                $.post('php/user_info.php', function(response) {
                    let name = response.data.name.split(" ")[0] + " " + response.data.last_name.split(" ")[0];
                    $('.user-min-name').text(name);
                    $('.user-min-email').text(response.data.email);
                    $('.user-min-image').attr('src', response.data.image_path);

                    M.updateTextFields();
                }, 'json');

                // -TODO-: Get all the badgets
            }
        });
    });
});