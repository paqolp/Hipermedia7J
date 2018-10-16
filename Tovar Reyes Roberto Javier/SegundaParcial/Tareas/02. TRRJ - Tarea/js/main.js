function CambiarContenido(){

    var elemento = prompt("Ingresa el nombre de un elemento que quieres agregar", "Nombre del elemento");

    if(elemento != null){

        var nuevoElemento = document.createElement(elemento);
        document.getElementById("contenedor").appendChild(nuevoElemento); x

    }

}
