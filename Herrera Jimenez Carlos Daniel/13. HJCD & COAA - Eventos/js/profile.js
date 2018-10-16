window.onload = function() {
    /* Load the events from the sessionStorage */
    EventsManager.loadEventsFromSessionStorage();

    /* Clear the managers for their use */
    GalleryManager.clear();
    AssistantsManager.clear();
    ActivitiesManager.clear();

    /* Get the id of the event to display and show the info */
    let url = new URL(window.location.href);
    let id = parseInt(url.searchParams.get("id"));
    displayEvent(EventsManager.getEventByID(id));;
}

function displayEvent(event) {
    document.getElementById("name").innerText = event.name;
    document.getElementById("date").value = event.date;
    document.getElementById("time").value = event.time;
    document.getElementById("location").value = event.location;
    document.getElementById("address").value = event.address;
    document.getElementById("host").value = event.host;
    document.getElementById("email").value = event.email;
    document.getElementById("summary").value = event.summary;
    document.getElementById("edit_href").href = `event.html?type=update&id=${event.id}`;
    displayActivities(event.activities);
    displayAssistants(event.assistants);
    displayGallery(event.gallery);
}

function displayActivities(vector) {
    let list = document.getElementById("tab2");

    if (vector.length === 0) {
        list.innerHTML += `
            <h4>No hay actividades registradas.</h4>
        `;
    } else {
        for (let i = 0; i < vector.length; ++i) {
            list.innerHTML += `
                <div class="form-group">
                <label>Nombre de la actividad:</label>
                <input type="text" class="form-control" value="${vector[i].name}" disabled>
                </div>
                <div class="form-row">
                <div class="form-group col-4">
                    <label >Fecha:</label>
                    <input type="date" class="form-control" value="${vector[i].date}" disabled>
                </div>
                <div class="form-group col-4">
                    <label >Hora de inicio:</label>
                    <input type="time" class="form-control" value="${vector[i].timeStart}" disabled>
                </div>
                <div class="form-group col-4">
                    <label >Hora de termino:</label>
                    <input type="time" class="form-control" value=${vector[i].timeEnd} disabled>
                </div>
                </div>
                <div class="form-group">
                <label >Descripción:</label>
                <textarea class="form-control" cols="10" rows="3" disabled>${vector[i].description}</textarea>
                </div>
                <hr class="mt-0">
            `;
        }
    }
}

function displayAssistants(vector) {
    let list = document.getElementById("tab3");

    if (vector.length === 0) {
        list.innerHTML += `
            <h4>No hay asistentes registrados.</h4>
        `;
    } else {
        for (let i = 0; i < vector.length; ++i) {
            list.innerHTML += `
                <div class="form-row">
                    <div class="form-group col-6">
                        <label>Nombre del asistente:</label>
                        <input type="text" class="form-control" value="${vector[i].name}" disabled>
                    </div>
                    <div class="form-group col-6">
                        <label>Correo electrónico:</label>
                        <input type="email" class="form-control" value="${vector[i].email}" disabled>
                    </div>
                </div>
                <hr class="mt-0">
            `;
        }
    }
}

function displayGallery(vector) {
    let list = document.getElementById("gallery");

    if (vector.length === 0) {
        list.innerHTML += `
            <h4>No hay imágenes disponibles.</h4>
        `;
    } else {
        for (let i = 0; i < vector.length; ++i) {
            list.innerHTML += `
                <div class="col-4 mb-3">
                    <img class="img-fluid img-thumbnail" src="${vector[i].url}">
                </div>
            `;
        }
    }
}