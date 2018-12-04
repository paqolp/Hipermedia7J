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

                // Load all units, and the current activities for the current unit
                $.post('php/units.php', function(response) {
                    let unitTabs = $('#unit-tabs');
                    let currentUnitId;

                    if (response.data !== null) {
                        for (let index in response.data.units) {
                            if (response.data.units[index].status === 'ONGOING') {
                                unitTabs.append(`
                                    <li class='tab'><a href='#unit-${response.data.units[index].id}'>${response.data.units[index].title}</a></li>
                                `);

                                currentUnitId = response.data.units[index].id;
                            } else if (response.data.units[index].status === 'BLOCKED') {
                                unitTabs.append(`
                                    <li class='tab disabled' data-tooltip='Termina la unidad anterior para desbloquear esta unidad'><a href='#unit-${response.data.units[index].id}'>${response.data.units[index].title}</a></li>
                                `);
                            } else {
                                unitTabs.append(`
                                    <li class='tab disabled' data-tooltip='Termina la unidad anterior para desbloquear esta unidad'><a href='#unit-${response.data.units[index].id}'>${response.data.units[index].title}</a></li>
                                `);
                            }
                        }

                        if (response.data.activities !== null) {
                            $('#units').append(`
                                <div class='row no-margin-bot' id='unit-${currentUnitId}'></div>
                            `);

                            let unitActivitiesDiv = $(`#unit-${currentUnitId}`);

                            for (let index in response.data.activities) {
                                let activityNo = response.data.activities[index].title.split('.')[0];
                                let submitted = response.data.activities[index].submitted === null ? '-' : moment(response.data.activities[index].submitted, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
                                let deadline = moment(response.data.activities[index].deadline, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
                                let status, grade;

                                switch (response.data.activities[index].status) {
                                    case 'BLOCKED':
                                        status = 'Bloqueada';
                                        break;
                                        
                                    case 'ONGOING':
                                        status = 'En curso';
                                        break;
                                        
                                    case 'FINISHED':
                                        status = 'Terminada';
                                        break;

                                    default:
                                        status = '???';
                                }

                                switch (response.data.activities[index].grade) {
                                    case 'PENDANT':
                                        grade = 'Pendiente';
                                        break;

                                    case 'BAD':
                                        grade = 'Deficiente';
                                        break;
                                        
                                    case 'REGULAR':
                                        grade = 'Regular';
                                        break;
                                        
                                    case 'GREAT':
                                        grade = 'Buena';
                                        break;
                                        
                                    case 'EXCELLENT':
                                        grade = 'Excelente';
                                        break;

                                    default:
                                        grade = '???';
                                }

                                if (response.data.activities[index].status === 'BLOCKED') {
                                    unitActivitiesDiv.append(`
                                        <div class='col s12 m4'>
                                            <div class='card round-all-corners'>
                                                <div class='card-image waves-effect waves-light cursor-not-allowed'>
                                                    <img class='round-top-corners locked-image' src='${response.data.activities[index].image_path}'>
                                                </div>
                                                <div class='card-content cursor-not-allowed'>
                                                    <span class='card-title no-margin-bot'>${activityNo}
                                                        <i class='material-icons right' data-tooltip='Termina las actividades anteriores para desbloquear esta actividad'>lock_outline</i></span>
                                                </div>
                                            </div>
                                        </div>
                                    `);
                                } else {
                                    unitActivitiesDiv.append(`
                                        <div class='col s12 m4'>
                                            <div class='card round-all-corners'>
                                                <div class='card-image waves-effect waves-light'>
                                                    <a href='activity.html?id=${response.data.activities[index].id}'><img class='round-top-corners' src='${response.data.activities[index].image_path}'></a>
                                                </div>
                                                <div class='card-content activator cursor-pointer'>
                                                    <span class='card-title activator no-margin-bot'>${activityNo}<i class='material-icons right'>keyboard_arrow_up</i></span>
                                                </div>
                                                <div class='card-reveal'>
                                                    <span class='card-title margin-bot-1'>${activityNo}<i class='material-icons right'>keyboard_arrow_down</i></span>
                                                    <p>Estado: <strong class='pink-text'>${status}</strong></p>
                                                    <p>Calificación: <strong class='pink-text'>${grade}</strong></p>
                                                    <p class='margin-bot-1'>Insignias conseguidas: <strong class='pink-text'>${response.data.activities[index].no_badges}</strong></p>
                                                    <p>Entregada el: <strong class='pink-text'>${submitted}</strong></p>
                                                    <p class='margin-bot-1'>Límite de entrega: <strong class='pink-text'>${deadline}</strong></p>
                                                    <a class='btn-small pink-small pink white-text width-100' href='activity.html?id=${response.data.activities[index].id}'>Ver</a>
                                                </div>
                                            </div>
                                        </div>
                                    `);
                                }
                            }
                        }
                    } else {
                        unitTabs.append(`<li class='tab'><a href='#no-team'>No tienes equipo</a></li>`);
                        $('#units').append(`
                            <div class='row no-margin-bot padding-2 center-align' id='no-team'>
                                <h1 class='no-margin-top margin-bot-1'>Aún no tienes un equipo</h1>
                                <p class='medium-font'>Debes ser parte de uno para poder comenzar el curso. Para esto,
                                    acércarte a un(a) mentor(a) y pídele que te asigne a uno. Puedes ver los perfiles de
                                    los mentores haciendo clic <a class='pink-text' href='mentors.html'><strong>aquí</strong></a>.
                                    Cuando encuentres a un(a) mentor(a) de tu agrado, contáctalo(a) por correo electrónico.</p>
                            </div>
                        `);
                    }

                    // Materialize tab initialization
                    $('.tabs').tabs();

                    // Materialize tooltip initialization
                    $('.cursor-not-allowed span i').tooltip({
                        position: 'top',
                        enterDelay: 0,
                        exitDelay: 0
                    });

                    // Materialize tooltip initialization
                    $('.tab.disabled').tooltip({
                        position: 'top',
                        enterDelay: 0,
                        exitDelay: 0,
                        margin: -10
                    });
                }, 'json');
            }
        });
    });
});