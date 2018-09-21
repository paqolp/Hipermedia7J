var contenedorMemorama;

var tiposDeElemento = [];

var validandoCartas = [];

var carpetaDeImagenes = 'img/';

var formato = '.jpg';

var nombresDeTipos = [carpetaDeImagenes + 'Mamiferos' + formato, carpetaDeImagenes + 'Aves' + formato, carpetaDeImagenes + 'Anfibios' + formato, carpetaDeImagenes + 'Reptiles' + formato];

var imagenCartaVolteadaParaAbajo = carpetaDeImagenes + 'faceDown' + formato;

var cantidadDeCartasPorValidar = 2;

var totalDeCartasAValidar = cantidadDeCartasPorValidar * nombresDeTipos.length;

var cartasValidadas = 0;

var carpetaDeMp3s = 'mp3/';

var sonidoSuceso = carpetaDeMp3s + 'tono.mp3';

var sonidoError = carpetaDeMp3s + 'error.mp3';

var sonidoVictoria = carpetaDeMp3s + 'victoria.mp3';

var sonidoSeleccionar = carpetaDeMp3s + 'seleccionar.mp3';

var audio = new Audio();
var audioSuceso = new Audio();

for (var y = 0; y < nombresDeTipos.length; y++) {

    var elemento = { tipo: nombresDeTipos[y] };

    for (var x = 0; x < cantidadDeCartasPorValidar; x++) {

        tiposDeElemento.push(elemento);

    }

}

window.onload = function () {

    contenedorMemorama = document.getElementById("contenedorMemorama");

    contenedorMemorama.onload();

}

function LlenarMemorama(seccion) {

    RevolverArray(tiposDeElemento);

    tiposDeElemento.forEach(element => {

        var elemento = document.createElement("DIV");
        var imagen = document.createElement("IMG");
        imagen.name = element.tipo;
        imagen.src = imagenCartaVolteadaParaAbajo;

        imagen.onmousedown = function () {

            if (!Validar(imagen)) {

                audio.src = sonidoError;
                audio.play();

                return;

            }

            if (imagen.src.includes(imagenCartaVolteadaParaAbajo)) {

                audio.src = sonidoSeleccionar;
                audio.play();

                imagen.src = element.tipo;

            }

            else {

                audio.src = sonidoSeleccionar;
                audio.play();

                imagen.src = imagenCartaVolteadaParaAbajo;

            }

            if (cartasValidadas == totalDeCartasAValidar) {

                audio.src = sonidoVictoria;
                audio.play();

            }

        }

        imagen.ondragstart = function () { return false; }

        elemento.appendChild(imagen);
        seccion.appendChild(elemento);

    });

}

function Validar(imagen) {

    if (validandoCartas.includes(imagen)) {

        imagen.src = imagenCartaVolteadaParaAbajo;

        validandoCartas.forEach(element => {

            element.src = imagenCartaVolteadaParaAbajo;

        });

        validandoCartas = [];

        return false;

    }

    else {

        var validacion = true;

        validandoCartas.push(imagen);

        validandoCartas.forEach(element => {

            if (validandoCartas[0].name != element.name) {

                validandoCartas.forEach(element => {

                    element.src = imagenCartaVolteadaParaAbajo;

                });

                validandoCartas = [];

                validacion = false;

            }

        });

        if (validacion == true) {

            if (validandoCartas.length == cantidadDeCartasPorValidar) {

                audioSuceso.src = sonidoSuceso;
                audioSuceso.play();

                validandoCartas.forEach(element => {

                    element.onmousedown = null;

                    cartasValidadas++;

                });

                validandoCartas = [];

            }

            return true;

        }

        else {

            return false;

        }

    }

}

function Resetear() {

    contenedorMemorama.innerHTML = null;

    cartasValidadas = 0;

    contenedorMemorama.onload();

    audioSuceso.src = sonidoSuceso;
    audioSuceso.play();

}

function RevolverArray(array) {

    for (var i = array.length - 1; i > 0; i--) {

        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

}


