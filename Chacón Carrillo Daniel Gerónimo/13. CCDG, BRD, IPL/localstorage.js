function createData(data) {
    localStorage.setItem('eventsData', JSON.stringify(data));
    console.log('guardado exitoso');
}

function updateData(updateEv) {
    localStorage.eventsData = updateEv;
}

function getData() {
    return localStorage.getItem('eventsData');
}