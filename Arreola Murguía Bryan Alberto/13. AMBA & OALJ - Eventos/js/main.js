$(document).ready(function () {

    //Initialize components according to Materialize docs
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();
    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $('.collapsible').collapsible();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

    var retrievedData; //Variable to store data retrieved from server
    var uri = "https://api.myjson.com/bins/1bmz2g"; //URI where JSON file is stored myjson.com

    //Function to get JSON data from server
    $(function () {
        $.ajax({
            url: uri,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                retrievedData = data;
            },
            error: function (jqXHR, textStatus, errorThrown) {}
        });
    });

    //Returns all assistants to specific event
    async function getAssistants(id) {
        $.getJSON(uri, function (data) {
            let html = "";

            $.each(data.events[id].assistants, function (index, value) {
                if (value == 'undefined' || value == null) {
                    html = '<li class="collection-item">No hay asistentes registrados.</li>';
                } else {
                    html += '<li class="collection-item">' + value.name + '</li>';
                }
            });

            //return html;

            $("#assistants").append(html);
        });
    }

    //Retrieve activities from specific event
    async function getActivities(id) {
        $.getJSON(uri, function (data) {
            let html = "";

            $.each(data.events[id].activities, function (index, value) {
                if (value == 'undefined' || value == null) {
                    html = '<p>No se han registrado actividades para este evento</p>';
                } else {
                    html += '<div class="col s12 m6 l3">' +
                        '<p>' + value.name + ' - ' + value.place + ' - ' + value.time + '</p>' +
                        '</div>';
                }
            });

            //return html;

            $("#activities").append(html);
        });
    }

    //Sending very loose parameters validation
    function validateInputsCreateEvent() {
        let eventObj = {};
        let assistantsObj = {} //Params to add: id, name, address and age 
        let activitiesObj = {} //Params to add: name, place, time

        eventObj.id = retrievedData.events.length + 1;
        eventObj.name = $("#event_name").val();
        eventObj.address = $("#event_address").val();
        eventObj.city = $("#event_city").val();
        eventObj.date = $("#event_date").val();
        eventObj.datetime = $("#event_datetime").val();
        eventObj.price = $("#event_price").val();
        eventObj.description = ($("#event_description").val() == "" ? "Sin descripción" : $("#event_description").val());
        eventObj.publisher = $("#event_publisher").val();
        eventObj.assistants = [assistantsObj];
        eventObj.activities = [activitiesObj];

        return eventObj;
    }

    //Populate card component
    $(function () {
        if ($('body.main').length > 0) {
            $.getJSON(uri, function (data) {
                let html = "";
                $.each(data.events, function (index, value) {
                    html += '<div id="" class="card">' +
                        '<div class="card-image waves-effect waves-block waves-light">' +
                        '<img class="activator" src="' + value.image + '">' +
                        '</div>' +
                        '<div class="card-content">' +
                        '<span class="card-title activator grey-text text-darken-4">' + value.name + '<i class="material-icons right">more_vert</i></span>' +
                        '<p><a id="redirect_event" href="discover_event.html?id=' + (value.id - 1) + '">Ver evento</a></p>' +
                        '</div>' +
                        '<div class="card-reveal">' +
                        '<span class="card-title grey-text text-darken-4">' + value.name + '<i class="material-icons right">close</i></span>' +
                        '<p>' + value.description + '</p>' +
                        '</div>' +
                        '</div>';
                });

                $(".card-container").append(html);
            });
        }
    });

    //Retrieve data to discover_event page
    //Set a timeout ot prevent this function to be executed before retrieving
    //JSON data from server otherwise the output would be 'undefined'
    setTimeout(() => {
        $(function () {


            if ($('body.event-discover').length > 0) { //Validate if description event page is displayed

                //Getting id from event clicked 
                //This lines are a workaround for this specific problem, and is not
                //the best way to get many params in URL.

                //We get the substring of the whole URL with 'substring()' and 'indexOf()+1'
                //gets value after '=' so we can only get the exactly id value send by
                //the last page.
                let id = parent.document.URL.substring(parent.document.URL.indexOf('=') + 1, parent.document.URL.length);

                if (retrievedData['events'] === 'undefined') { //Get event data
                    M.toast({
                        html: "Hubo en error. Por favor recargue la página."
                    });
                } else {
                    let item = retrievedData['events'];

                    let html = '<div class="row" id=' + id + '>' +
                        '<div class="col s12 m12 l7">' +
                        '<img class="materialboxed event-img" src="' + item[id].image + '">' +
                        '</div>' +
                        '<div class="row">' +
                        '<div class="col s12 m12 l5">' +
                        '<div class="col s12 m4 l5">' +
                        '<p id="event_name"><strong>Nombre: <br></strong>' + item[id].name + '</p>' +
                        '</div>' +
                        '<div class="col s12 m4 l5">' +
                        '<p id="event_address"><strong>Dirección: <br></strong>' + item[id].address + '</p>' +
                        '</div>' +
                        '<div class="col s12 m4 l5">' +
                        '<p id="event_date"><strong>Fecha: </strong><br>' + item[id].date + ', ' + item[id].datetime + '</p>' +
                        '</div>' +
                        '<div class="col s12 m4 l5">' +
                        '<p id="event_publisher"><strong>Publicado por: </strong><br>' + item[id].publisher + '</p>' +
                        '</div>' +
                        '<div class="col s12 m4 l5">' +
                        '<p id="event_price"><strong>Precio: </strong> ' + (item[id].price === "0" ? 'Gratis' : "$" + item[id].price) + '</p>' +
                        '</div>' +
                        '</div>' +
                        '<a class="waves-effect waves-light btn-small modal-trigger light-green lighten-1" href="#editInfoModal">Editar información</a>' +
                        '</div>' +
                        '</div>' +
                        '<div class="row">' +
                        '<div class="col s12 m12 l7">' +
                        '<p id="event_description"><strong>Descripción: <br></strong> ' + item[id].description + '</p>' +
                        '</div>' +
                        '</div>' +
                        '<div class="row">' +
                        '<h5>Actividades</h5>' +
                        '<div id="activities">' +
                        '</div>' +
                        '</div>' +
                        '<a class="waves-effect waves-light btn-small modal-trigger light-green lighten-1" href="#addActivityModal">Añadir actividad</a>';


                    getActivities(id);
                    getAssistants(id);
                    $(".container").prepend(html);
                }
            }
        });
    }, 300);

    //Retrieve event info on modal open
    $("#editInfoModal").modal({
        onOpenStart: function () {

            //Getting id from event clicked 
            let id = parent.document.URL.substring(parent.document.URL.indexOf('=') + 1, parent.document.URL.length);
            let item = retrievedData['events'];

            $("#event_modal_name").val(item[id].name);
            $("#event_modal_address").val(item[id].address);
            $("#event_modal_city").val(item[id].city);
            $("#event_modal_date").val(item[id].date);
            $("#event_modal_datetime").val(item[id].datetime);
            $("#event_modal_price").val(item[id].price);
            $("#event_modal_description").val(item[id].description);

            M.updateTextFields(); //Reinitialize all the Materialize labels on the page as input values are dynamically added
        },
        onCloseEnd: function () {}
    });

    // Form submit to edit event info
    $("#editInfoForm").submit(function (event) {
        event.preventDefault();

        if ($("#editInfoForm")[0].checkValidity() === false) {
            event.stopPropagation();
        } else {
            console.log("Submitted properly");

            //Getting id from event clicked 
            let id = parent.document.URL.substring(parent.document.URL.indexOf('=') + 1, parent.document.URL.length);

            let items = retrievedData['events'];

            items[id].name = $("#event_modal_name").val();
            items[id].address = $("#event_modal_address").val();
            items[id].city = $("#event_modal_city").val();
            items[id].date = $("#event_modal_date").val();
            items[id].datetime = $("#event_modal_datetime").val();
            items[id].price = $("#event_modal_price").val();
            items[id].description = $("#event_modal_description").val();

            retrievedData['events'] = items;

            $.ajax({
                url: uri,
                type: "PUT",
                data: JSON.stringify(retrievedData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data, textStatus, jqXHR) {
                    if (textStatus === "200" || textStatus === "success") {
                        M.toast({
                            html: 'Evento modificado'
                        });
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    M.toast({
                        html: 'Hubo un error. Por favor intente nuevamente.'
                    });
                }
            });
        }
    });

    // Form submit to create an event
    $("#create_event_form").submit(function (event) {
        event.preventDefault();

        if ($("#create_event_form")[0].checkValidity() === false) {
            event.stopPropagation();
        } else {
            retrievedData["events"].push(validateInputsCreateEvent());

            $.ajax({
                url: uri,
                type: "PUT",
                data: JSON.stringify(retrievedData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data, textStatus, jqXHR) {
                    if (textStatus === "200" || textStatus === "success") {
                        M.toast({
                            html: 'Evento creado'
                        });
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    M.toast({
                        html: 'Hubo un error. Por favor intente nuevamente.'
                    });
                }
            });
        }
    });

    //Form submit to add an activity
    $("#add_activity_form").submit(function (event) {
        event.preventDefault();

        if ($("#add_activity_form")[0].checkValidity() === false) {
            event.stopPropagation();
        } else {
            //console.log("Submitted properly");

            //Getting id from event clicked 
            let id = parent.document.URL.substring(parent.document.URL.indexOf('=') + 1, parent.document.URL.length);

            let activity = {};
            activity.id = retrievedData.events[id].activities.length + 1;
            activity.name = $("#activity_name").val();
            activity.place = $("#activity_address").val();
            activity.time = $("#activity_time").val();

            retrievedData.events[id].activities.push(activity);

            $.ajax({
                url: uri,
                type: "PUT",
                data: JSON.stringify(retrievedData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data, textStatus, jqXHR) {
                    if (textStatus === "200" || textStatus === "success") {
                        //console.log(data);

                        M.toast({
                            html: 'Actividad añadida'
                        });

                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    //console.log(errorThrown);
                    M.toast({
                        html: 'Hubo un error. Por favor intente nuevamente.'
                    });
                }
            });
        }
    });

});