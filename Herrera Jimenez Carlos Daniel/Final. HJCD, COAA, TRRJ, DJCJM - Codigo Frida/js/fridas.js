$(document).ready(function() {
    $.getScript('js/session.js', function() {
        checkCurrentSession(function(response) {
            // There is no current session ongoing on this computer
            // return to the index.html page
            if (response.data === null) {
                window.open('index.html', '_self');
            } else {
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

                // Load all the fridas's information...
                $.post('php/all_fridas.php', function(response) {
                    let fridasDiv = $('#fridas');

                    if (response.data !== null) {
                        for (let index in response.data) {
                            fridasDiv.append(`
                                <a class='avatar valign-wrapper' href='profile.html?id=${response.data[index].id}'>
                                    <img class='circle left' src='${response.data[index].image_path}'>
                                    <div class='margin-left-1'>
                                        <h4 class='black-text no-margin'>${response.data[index].name + ' ' + response.data[index].last_name}</h4>
                                        <p class='grey-text text-darken-1'>Frida</p>
                                    </div>
                                </a>
                            `);
                        }
                    } else {
                        fridasDiv.append(`
                            <div class='center-align'>
                                <h1 class='margin-top-1 margin-bot-1'>¡Ups!</h1>
                                <img src='img/empty-page.png'>
                                <p class='medium-font margin-bot-2'>Parece ser que no hay más Fridas registradas.</p>
                            </div>
                        `);
                    }
                }, 'json');
            }
        });
    });
});