var estilo1 = document.createElement('style');
estilo1.id = 'estilo1';
estilo1.innerHTML = "body {background-color: olivedrab; color: red;} img{position: relative; float: left; width:10em; height: 10em;}"
var estilo2 = document.createElement('style');
estilo2.innerHTML = "body {background-color: black; color: white;} img{position: relative; float: right; width:10em; height: 10em;}"
estilo2.id = 'estilo2';
var estilo3 = document.createElement('style');
estilo3.id = 'estilo3';

var estilos = [estilo1, estilo2, estilo3];

var index = 0;

function CambiarEstilo() {

    estilos.forEach(element => {

        var sheetToBeRemoved = document.getElementById(element.id);

        if (sheetToBeRemoved != null) {

            var sheetParent = sheetToBeRemoved.parentNode;
            sheetParent.removeChild(sheetToBeRemoved);

        }

    });

    document.body.appendChild(estilos[index]);

    alert("Estilo cambiado! - Id de estilo: " + estilos[index].id);

    index++;

    if (index == estilos.length) {

        index = 0;

    }

}
