$(document).ready(function () {
    $.getScript('js/session.js', function() {
        checkCurrentSession(function(response) {
            // There is no current session ongoing on this computer
            // return to the index.html page
            if (response.data === null) {
                window.open('index.html', '_self');
            } else {
                // Init the rest of this shitload...

                // Materialize select initialization
                $('select').formSelect();

                // Materialize tooltip initialization
                $('.small-badge').tooltip({
                    position: 'top',
                    enterDelay: 0,
                    exitDelay: 0,
                    margin: 0
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

                // If there is an id parameter in the url
                // identified by the name 'id', then get
                // the value and display the information
                // of that profile, it exists at all
                let url = new URL(window.location.href);
                let id = url.searchParams.get('id');
                let requestData = {}, isOwnProfile = true, userType = 'FRIDA', hasTeam = false;

                // If id is not null, that means that the 
                // profile requested is from another person
                if (id !== null && parseInt(id) !== response.data.id) {
                    requestData = { id: id };
                    isOwnProfile = false;
                }

                // Get the information from the user
                // and configure the page according to
                // the information received
                $.post('php/profile_info.php', requestData, function(response) {
                    userType = response.data.type;

                    $('#user-name').val(response.data.name);
                    $('#user-last-name').val(response.data.last_name);
                    $('#user-birthday').val(moment(response.data.birthdate, "YYYY-MM-DD").format("MMM DD, YYYY"));
                    $('#user-email').val(response.data.email);
                    $('#user-cellphone-number').val(response.data.phone);
                    $('#user-provenance').val(response.data.institution);
                    $('#user-bio').val('');
                    $('#user-bio').val(response.data.biography);
                    $('#user-image').attr('src', response.data.image_path);

                    if (response.data.id_team !== null) {
                        $('#team-link').attr('href', 'team.html?id=' + response.data.id_team);
                        $('#team-name').val(response.data.team_name);
                        hasTeam = true;
                    }

                    if (response.data.badges !== null) {
                        let badgesDiv = $('#badges');
                        badgesDiv.empty();

                        for (let index in response.data.badges)
                            badgesDiv.append(`<img class='small-badge' src='${response.data.badges[index]}'>`);
                    }

                    if (userType === 'MENTOR') {
                        $(`#mentor-area option[value='${response.data.area}']`).prop('selected', true);
                        $('#mentor-area').formSelect();
                    }

                    loadProfile(userType, isOwnProfile, hasTeam);
                    M.updateTextFields();
                }, 'json');
            }
        });
    });
});

/* Loads profile depending on:
    User's type | 'frida' or 'mentor'
    Own or other's profile | true = own, false = other's),
    Wheter the user is in a team | true = is in a team, false = isn't in a team  */
function loadProfile(user, own, team) {

    // If profile isn't user's...
    if (!own) {

        // Hides profile buttons
        $('.hide-on-other-user').hide();
        $('.caret').hide();

        // Removes nav button active style
        $('#nav-profile-button').removeClass('active');

        // Changes html text
        $('#badges p').html('Esta persona no ha conseguido ninguna insignia'); // ESTO DEBE IR ANTES DE INSERTAL CUALQUIER INSIGNIA, EN CASO DE SER FRIDA Y TENER INSIGNIAS

        // Disables inputs
        $('input').prop('disabled', true);
        $('textarea').prop('disabled', true);

    }

    // If user is a Frida...
    if (user == 'FRIDA') {

        // Hides elements Frida profiles shouldn't have
        $('.hide-on-frida').hide();

    }

    // If user is a mentor...
    else {

        // Changes provenance label name
        $('[for=user-provenance]').html('Institución o empresa de procedencia');

        // Hides elements mentor profiles shouldn't have
        $('.hide-on-mentor').hide();

    }

    // If the user doesn't have a team...
    if(!team) {
        
        // Hides team row
        $('.hide-on-team').hide();

    }
}