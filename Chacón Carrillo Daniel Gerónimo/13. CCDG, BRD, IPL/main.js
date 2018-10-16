function loadEvent() {
    var data = JSON.parse(getData());
    eventId = getParameterByName('id');
    let i = 0;
    for (; data.events[i].id != i + 1; i++) {}
    loadEventInfo(data.events[i]); // cargar informacion de evento CODIGO HTML
    loadActivities(data.events[i]); // cargar actividades CODIGO HTML
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function loadEventInfo(event) {
    console.log(JSON.stringify(event));
    let image = "<img style='width: 100%;' src='" + event.imgBanner + "' alt='banner-" + event.title + "'>";
    let mainInfo = "<h2 class='mt-4' id='eventTitle'>" + event.title + "</h2>" +
        "<h5 class=mt-4>" + event.cordinator + "</h5>" +
        "<p id=eventDesc>" + event.desc + "</p>" +
        "<h5>Actividades</h5>"+
        "<div class='list-group' id='eventActivities'>"+
        "</div>" +
        "<p><a class='btn btn-primary btn-lg' href='#'>Agregar participante &raquo;</a></p>";
    let eventschedule = "<strong>Horario</strong>" +
        "<br>" + event.schedule.fecha +
        "<br>" + event.schedule.horaInicio +
        "<br>" + event.schedule.horaTermino +
        "<br>";
    let eventAddress = "<strong>Horario</strong>" +
        "<br>" + event.address +
        "<br>";

    let eventAssistants = "<strong>Asistentes</strong>" +
    "<br>" + event.assistants.length +
    "<br>";

    document.getElementById('eventBanner').innerHTML = image;
    document.getElementById('mainInfo').innerHTML = mainInfo;
    document.getElementById('eventSchedule').innerHTML = eventschedule;
    document.getElementById('eventAddress').innerHTML = eventAddress;
    document.getElementById('eventAssistants').innerHTML = eventAssistants;
}

function loadActivities(event) {
    activities = '';
    for (var i = 0; i < event.activities.length; i++) {
        activities += "<a href='#' class='list-group-item list-group-item-action'>" + event.activities[i] + "</a>";
    }

    console.log(activities);

    document.getElementById('eventActivities').innerHTML = activities + "<br>";
}