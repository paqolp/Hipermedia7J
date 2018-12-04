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

                // Load the team information
                $.post('php/team.php', function(response) {
                    console.log(response);
                    let teamNameDiv = $('#team-name');
                    let teamDiv = $('#team');

                    if (response.data !== null) {
                        teamNameDiv.text(response.data.team_name);

                        for (let index in response.data.members) {
                            if (response.data.members[index].type === 'MENTOR') {

                                let honorific = response.data.members[index].genre === 'MALE' ? 'Mentor' : 'Mentora';
                                let area;

                                switch(response.data.members[index].area) {
                                    case 'FM_CT':
                                        area = 'Físico matemático y ciencias de la tierra';
                                        break;

                                    case 'B_Q':
                                        area = 'Biología y química';
                                        break;

                                    case 'M_CS':
                                        area = 'Medicina y ciencias de la salud';
                                        break;

                                    case 'H_CC':
                                        area =  'Humanidades y ciencias de la conducta';
                                        break;

                                    case 'S_EA':
                                        area = 'Sociales y económico administrativas';
                                        break;

                                    case 'B_CA':
                                        area = 'Biotecnología y ciencias agropecuarias';
                                        break;

                                    case 'ING':
                                        area = 'Ingenierías';
                                        break;

                                    default:
                                        area = '???';
                                }

                                let avatar = `
                                    <a class='avatar valign-wrapper' href='profile.html?id=${response.data.members[index].id}'>
                                        <img class='circle left' src='${response.data.members[index].image_path}'>
                                        <div class='margin-left-1'>
                                        <h4 class='black-text no-margin'>${response.data.members[index].name + ' ' + response.data.members[index].last_name}</h4>
                                `;

                                avatar += `<p class='grey-text text-darken-1'>${honorific}: ${area}</p>`;

                                avatar += `</div></a>`;

                                teamDiv.append(avatar);
                            }
                        }

                        for (let index in response.data.members) {
                            if (response.data.members[index].type === 'FRIDA') {
                                let avatar = `
                                    <a class='avatar valign-wrapper' href='profile.html?id=${response.data.members[index].id}'>
                                        <img class='circle left' src='${response.data.members[index].image_path}'>
                                        <div class='margin-left-1'>
                                            <h4 class='black-text no-margin'>${response.data.members[index].name + ' ' + response.data.members[index].last_name}</h4>
                                            <p class='grey-text text-darken-1'>Frida</p>
                                        </div>
                                    </a>
                                `;

                                teamDiv.append(avatar);
                            }
                        }
                    } else {
                        teamDiv.append(`
                            <h4 class='margin-left-1 margin-top-05 no-margin-bot'>Aún no tienes un equipo</h4>
                        `);
                        
                        teamNameDiv.text('Sin equipo');
                    }
                });
            }
        });
    });
});