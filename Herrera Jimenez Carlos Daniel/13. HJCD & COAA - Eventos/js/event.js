const GENERAL_INFO_FORM_KEY = "general_info";

const ACTIVITIES_LIST_KEY = "activities_list";
const ACTIVITIES_FORM_KEY = "activities";

const ASSISTANTS_LIST_KEY = "assistants_list";
const ASSISTANTS_FORM_KEY = "assistants";

const GALLERY_FORM_KEY = "gallery";
const GALLERY_LIST_KEY = "gallery_list";

var request = {
    type: "",
    eventID: -1
};

window.onload = function() {
    /* Load the events from the sessionStorage */
    EventsManager.loadEventsFromSessionStorage();

    /* Clear the managers for their use */
    GalleryManager.clear();
    AssistantsManager.clear();
    ActivitiesManager.clear();

    /* Set the request type */
    let url = new URL(window.location.href);
    request.type = url.searchParams.get("type");
    request.eventID = parseInt(url.searchParams.get("id"));

    /* -TODO-: Recover and display the info if type === "edit", also configure the page */
    if (request.type === "update") {
        document.getElementById("title").innerText = "Editar evento";
        document.getElementById("btn_add_update").innerText = "Actualizar";
        document.getElementById("btn_add_update").addEventListener("click", updateEvent);

        let event = EventsManager.getEventByID(request.eventID);
        displayEvent(event);
        ActivitiesManager.setCollection(event.activities);
        AssistantsManager.setCollection(event.assistants);
        GalleryManager.setCollection(event.gallery);
    } else {
        document.getElementById("btn_add_update").addEventListener("click", addEvent);
    }
}

function addActivity() {
    let id = ActivitiesManager.addActivity(document.forms[ACTIVITIES_FORM_KEY]["act_name"].value,
                                           document.forms[ACTIVITIES_FORM_KEY]["act_date"].value,
                                           document.forms[ACTIVITIES_FORM_KEY]["act_time_start"].value,
                                           document.forms[ACTIVITIES_FORM_KEY]["act_time_end"].value,
                                           document.forms[ACTIVITIES_FORM_KEY]["act_desc"].value);
    
    addActivityToDOM(id, document.forms[ACTIVITIES_FORM_KEY]["act_name"].value);
    document.forms[ACTIVITIES_FORM_KEY].reset();
}

function addActivityToDOM(id, name) {
    document.getElementById(ACTIVITIES_LIST_KEY).innerHTML += `
        <div class="row mb-2" id="act_${id}">
            <div class="col-12">
                <div class="input-group">
                    <input type="text" class="form-control" value="${name}" disabled>
                    <div class="input-group-append">
                    <button class="btn btn-outline-danger btn-danger" onclick="deleteActivity('act_${id}', ${id})">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function deleteActivity(nodeID, id) {
    ActivitiesManager.deleteActivityByID(id);
    document.getElementById(nodeID).innerHTML = "";
}

function addAssistant() {
    let id = AssistantsManager.addAssistant(document.forms[ASSISTANTS_FORM_KEY]["ass_name"].value,
                                            document.forms[ASSISTANTS_FORM_KEY]["ass_email"].value);

    addAssistantToDOM(id, document.forms[ASSISTANTS_FORM_KEY]["ass_name"].value);
    document.forms[ASSISTANTS_FORM_KEY].reset();
}

function addAssistantToDOM(id, name) {
    document.getElementById(ASSISTANTS_LIST_KEY).innerHTML += `
        <div class="row mb-2" id="ass_${id}">
            <div class="col-12">
                <div class="input-group">
                    <input type="text" class="form-control" value="${name}" disabled>
                    <div class="input-group-append">
                    <button class="btn btn-outline-danger btn-danger" onclick="deleteAssistant('ass_${id}', ${id})">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function deleteAssistant(nodeID, id) {
    AssistantsManager.deleteAssistantByID(id);
    document.getElementById(nodeID).innerHTML = "";
}

function addURL() {
    let id = GalleryManager.addImage(document.forms[GALLERY_FORM_KEY]["gall_url"].value);
    addURLToDOM(id, document.forms[GALLERY_FORM_KEY]["gall_url"].value);
    document.forms[GALLERY_FORM_KEY].reset();
}

function addURLToDOM(id, url) {
    document.getElementById(GALLERY_LIST_KEY).innerHTML += `
        <div class="row mb-2" id="gall_${id}">
            <div class="col-12">
                <div class="input-group">
                    <input type="text" class="form-control" value="${url}" disabled>
                    <div class="input-group-append">
                    <button class="btn btn-outline-danger btn-danger" onclick="deleteURL('gall_${id}', ${id})">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function deleteURL(nodeID, id) {
    GalleryManager.deleteURLByID(id);
    document.getElementById(nodeID).innerHTML = "";
}

function addEvent() {
    let form = document.forms[GENERAL_INFO_FORM_KEY];

    let id = EventsManager.addEvent(form["name"].value, form["date"].value, form["time"].value, form["location"].value,
                                    form["address"].value, form["summary"].value, form["host"].value, form["email"].value,
                                    GalleryManager.getCollection(), ActivitiesManager.getCollection(), AssistantsManager.getCollection());

    /* Save the events to the sessionStorage */
    EventsManager.saveEventsToSessionStorage();

    /* Clear the page and display an alert */
    form.reset();
    document.forms[ACTIVITIES_FORM_KEY].reset();
    document.forms[ASSISTANTS_FORM_KEY].reset();
    document.forms[GALLERY_FORM_KEY].reset();
    clearDOMLists();
    displayAlert(id);
}

function displayAlert(id) {
    let alert = document.getElementById("alert");

    if (request.type === "update")
        alert.innerHTML = `
            <div id="alert" class="alert alert-success" role="alert">
                Se ha actualizado tu evento - <a href="profile.html?id=${id}" class="alert-link">Visualízalo aquí</a>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `;
    else
        alert.innerHTML = `
            <div id="alert" class="alert alert-success" role="alert">
                Se ha registrado tu evento - <a href="profile.html?id=${id}" class="alert-link">Visualízalo aquí</a>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `;
}

function clearDOMLists() {
    document.getElementById(ACTIVITIES_LIST_KEY).innerHTML = `
            <div class="row mt-4">
                <div class="col-12">
                <h3 class="text-center">Lista de actividades</h3>
                </div>
            </div>
            <hr class="mt-0">
    `;

    document.getElementById(ASSISTANTS_LIST_KEY).innerHTML = `
            <div class="row mt-4">
                <div class="col-12">
                <h3 class="text-center">Lista de asistentes</h3>
                </div>
            </div>
            <hr class="mt-0">
    `;

    document.getElementById(GALLERY_LIST_KEY).innerHTML = `
        <div class="row mt-4">
            <div class="col-12">
            <h3 class="text-center">Lista de imágenes</h3>
            </div>
        </div>
        <hr class="mt-0">
    `;
}

function displayEvent(event) {
    document.forms[GENERAL_INFO_FORM_KEY]["name"].value = event.name;
    document.forms[GENERAL_INFO_FORM_KEY]["date"].value = event.date;
    document.forms[GENERAL_INFO_FORM_KEY]["time"].value = event.time;
    document.forms[GENERAL_INFO_FORM_KEY]["location"].value = event.location;
    document.forms[GENERAL_INFO_FORM_KEY]["address"].value = event.address;
    document.forms[GENERAL_INFO_FORM_KEY]["host"].value = event.host;
    document.forms[GENERAL_INFO_FORM_KEY]["email"].value = event.email;
    document.forms[GENERAL_INFO_FORM_KEY]["summary"].value = event.summary;

    for (let i = 0; i < event.activities.length; ++i)
        addActivityToDOM(event.activities[i].id, event.activities[i].name);

    for (let i = 0; i < event.assistants.length; ++i)
        addAssistantToDOM(event.assistants[i].id, event.assistants[i].name);

    for (let i = 0; i < event.gallery.length; ++i)
        addURLToDOM(event.gallery[i].id, event.gallery[i].url);
}

function updateEvent() {
    let form = document.forms[GENERAL_INFO_FORM_KEY];
    EventsManager.updateEventByID(request.eventID, form["name"].value, form["date"].value, form["time"].value, form["location"].value,
                                  form["address"].value, form["summary"].value, form["host"].value, form["email"].value,
                                  GalleryManager.getCollection(), ActivitiesManager.getCollection(), AssistantsManager.getCollection());
    displayAlert(request.eventID);

    /* Save the events to the sessionStorage */
    EventsManager.saveEventsToSessionStorage();
}