const EVENTS_LIST_KEY = "events_list";

window.onload = function() {
    /* Load the events from the sessionStorage */
    EventsManager.loadEventsFromSessionStorage();

    /* Clear the managers for their use */
    GalleryManager.clear();
    AssistantsManager.clear();
    ActivitiesManager.clear();

    /* After loading the events, add them to the DOM */
    let list = document.getElementById(EVENTS_LIST_KEY);
    list.innerHTML = "";

    if (EventsManager.getNumberOfEvents() == 0)
        list.innerHTML += `
            <div class="col-12 mb-3">
                <h3 class="text-center">No hay eventos registrados</h3>
            </div>
        `;
    else
        EventsManager.forEach(function(event) {
            let imageURL = (event.gallery.length == 0) ? "assets/img/no_image.png" : event.gallery[0].url;
    
            list.innerHTML += `
                <div class="col-4 mb-3">
                    <div class="card h-100">
                        <a href="profile.html?id=${event.id}"><img class="card-img-top" src="${imageURL}"></a>
                        <div class="card-body">
                            <h4 class="card-title">
                            <a href="profile.html?id=${event.id}">${event.name}</a>
                            </h4>
                            <h6><b>Fecha</b>: ${event.date} | <b>Hora</b>: ${event.time}</h6>
                            <h6><b>Lugar</b>: ${event.location}</h6>
                            <h6 class="mb-0"><b>Descripción</b>:</h6>
                            <p class="card-text">${event.summary}</p>
                        </div>
                    </div>
                </div>
            `;
        });
}