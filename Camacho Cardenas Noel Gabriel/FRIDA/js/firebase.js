function Msn() {
    var formatofecha = new Date();
    var d = formatofecha.getUTCDate();
    var m = formatofecha.getMonth();
    var y = formatofecha.getFullYear();
    var h = formatofecha.getHours();
    var min = formatofecha.getMinutes();

    Fecha = d + "/" + m + "/" + y + " " + h + ":" + min;

    TablaDeBaseDatos.push({
        Nombre:'User#',
        Mensaje:$("#Mensaje").val(),
        Fecha:Fecha
    }); 

    document.getElementById('Mensaje').value = "";
}

function MsnIntro(e) {

    if (e.keyCode === 13 && !e.shiftKey) {
        var formatofecha = new Date();
        var d = formatofecha.getUTCDate();
        var m = formatofecha.getMonth();
        var y = formatofecha.getFullYear();
        var h = formatofecha.getHours();
        var min = formatofecha.getMinutes();

        Fecha = d + "/" + m + "/" + y + " " + h + ":" + min;

        TablaDeBaseDatos.push({
            Nombre:'User#',
            Mensaje:$("#Mensaje").val(),
            Fecha:Fecha
        }); 

        document.getElementById('Mensaje').value = "";
    }
}